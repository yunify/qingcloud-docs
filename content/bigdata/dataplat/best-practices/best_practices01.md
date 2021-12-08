---
title: "实时计算 uv、pv、转化率（SQL 作业）"
description: 本小节主要介绍。 
keywords: 
weight: 15
collapsible: false
draft: false
---

本小节为您介绍如何对接网站的点击流数据，并对点击流数据进行实时分析，计算出 uv、pv、转化率等指标。

## 准备 Kafka 环境

## 准备 ClickHouse 环境

1. 申请 ClickHouse 实例。
2. 在 ClickHouse 实例中，创建表。

  ```sql
  create table output_uv
  (
      `userids`     String,
      `uv`          UInt64,
      `create_time` DateTime
  ) engine = SummingMergeTree(uv)
        primary key (userids)
        order by (userids);
  
  create table output_pv
  (
      `pagevisits` String,
      `product_id` String,
      `pv`         UInt64,
      `stt`        DateTime,
      `edt`        DateTime
  ) engine = Memory;
  
  CREATE TABLE `output_conversion_rate`
  (
      `conversion_rate` String,
      `rate`            String,
      `create_time`     DateTime
  ) engine = ReplacingMergeTree(create_time)
        partition by toYYYYMMDD(create_time)
        primary key (conversion_rate)
        order by (conversion_rate,create_time);
  ```

## 创建工作空间

## 配置网络

## 创建计算集群

## 创建 SQL 作业



## 创建 Flink 任务到集群

执行flinksql计算写入uv，pv，转化率、转化率等指标

```sql
DROP TABLE IF EXISTS input_web_record;
CREATE TABLE `input_web_record` (
    `record_type`    INT,
    `user_id`        INT,
    `client_ip`      VARCHAR,
    `product_id`     INT,
    `create_time`    TIMESTAMP,
    `times`          AS create_time,
    WATERMARK FOR times AS times - INTERVAL '1' MINUTE
 ) WITH (
     'connector' = 'kafka',        -- 可选 'kafka','kafka-0.11'. 注意选择对应的内置  Connector
     'topic' = 'uvpv-demo112',
     'scan.startup.mode' = ' earliest-offset',
     'properties.bootstrap.servers' = '192.168.100.16:9092,192.168.100.17:9092,192.168.100.18:9092',
     'properties.group.id' = 'record',  -- 必选参数, 一定要指定 Group ID
     'format' = 'json',
     'json.ignore-parse-errors' = 'true',       -- 忽略 JSON 结构解析异常
     'json.fail-on-missing-field' = 'false'     -- 如果设置为 true, 则遇到缺失字段会报错 设置为 false 则缺失字段设置为 null
 );
   
 -- UV sink
DROP TABLE IF EXISTS output_uv;
CREATE TABLE `output_uv` (
 `userids`          STRING,
 `uv`               BIGINT,
 `create_time`      TIMESTAMP(3)
) WITH (
   'connector' = 'clickhouse',
    'url' = 'jdbc:clickhouse://139.198.106.31:65193/pk', -- 可配置集群地址，写入时随机选择连接写入，不会一直使用一个连接写入
    'table-name' = 'output_uv',
    'username' = 'default',
    'password' = 'JR29uF39LqX3LrG',
    'format' = 'json'
);
  
-- PV sink
DROP TABLE IF EXISTS output_pv;
CREATE TABLE `output_pv` (
 `pagevisits`       STRING,
 `product_id`       STRING,
 `pv`               BIGINT,
 `stt`              TIMESTAMP(3),
 `edt`              TIMESTAMP(3)
) WITH (
   'connector' = 'clickhouse',
    'url' = 'jdbc:clickhouse://139.198.106.31:65193/pk', -- 可配置集群地址，写入时随机选择连接写入，不会一直使用一个连接写入
    'table-name' = 'output_pv',
    'username' = 'default',
    'password' = 'JR29uF39LqX3LrG',
    'format' = 'json'
);
  
-- 转化率 sink
DROP TABLE IF EXISTS output_conversion_rate;
CREATE TABLE `output_conversion_rate` (
 `conversion_rate`  STRING,
 `rate`             STRING,
 `create_time`      TIMESTAMP(3)
) WITH (
   'connector' = 'clickhouse',
    'url' = 'jdbc:clickhouse://139.198.106.31:65193/pk', -- 可配置集群地址，写入时随机选择连接写入，不会一直使用一个连接写入
    'table-name' = 'output_conversion_rate',
    'username' = 'default',
    'password' = 'JR29uF39LqX3LrG',
    'format' = 'json'
);
  
-- 加工得到 UV 指标，统计所有时间内的 UV
INSERT INTO output_uv
SELECT
  'userids'                AS `userids`,
  COUNT(distinct user_id)  AS uv,
  TO_TIMESTAMP(FROM_UNIXTIME(UNIX_TIMESTAMP(),'yyyy-MM-dd HH:mm:ss')) AS create_time
FROM input_web_record
GROUP BY user_id;
  
-- 加工并得到 PV 指标，统计每 10 分钟内的 PV
INSERT INTO output_pv
SELECT
  'pagevisits'               AS `pagevisits`,
  CAST(product_id AS string) AS product_id,
  COUNT(product_id) AS pv,
  TUMBLE_START(times, INTERVAL '10' MINUTE) as `stt`,
  TUMBLE_END(times, INTERVAL '10' MINUTE) as `edt`
FROM input_web_record WHERE record_type = 0
GROUP BY
  TUMBLE(times, INTERVAL '10' MINUTE),
  product_id,
  user_id;
  
-- 加工并得到转化率指标，统计每 10 分钟内的转化率
INSERT INTO output_conversion_rate
SELECT
  'conversion_rate' AS `conversion_rate`,
  CAST( (((SELECT COUNT(1) FROM input_web_record WHERE record_type=0)*1.0)/SUM(a.product_id)) as string),
  TO_TIMESTAMP(FROM_UNIXTIME(UNIX_TIMESTAMP(),'yyyy-MM-dd HH:mm:ss')) AS create_time
FROM (SELECT * FROM input_web_record where record_type = 1) AS a
GROUP BY
  TUMBLE(times, INTERVAL '10' MINUTE),
  product_id;
```

## 向 Kafka 发送消息

向 Kafka 发送消息。

```
./bin/kafka-console-producer.sh --broker-list 10.1.0.10:9092 --topic uvpv-demo
{"record_type":0, "user_id": 2, "client_ip": "100.0.0.2", "product_id": 101, "create_time": "2021-09-08 16:20:00"}
{"record_type":0, "user_id": 3, "client_ip": "100.0.0.3", "product_id": 103, "create_time": "2021-09-08 16:21:00"}
{"record_type":1, "user_id": 2, "client_ip": "100.0.0.1", "product_id": 101, "create_time": "2021-09-08 16:22:10"}
{"record_type":0, "user_id": 2, "client_ip": "100.0.0.2", "product_id": 102, "create_time": "2021-09-08 16:23:20"}
{"record_type":0, "user_id": 3, "client_ip": "100.0.0.3", "product_id": 101, "create_time": "2021-09-08 16:24:50"}
{"record_type":1, "user_id": 1, "client_ip": "100.0.0.1", "product_id": 101, "create_time": "2021-09-08 16:25:00"}
{"record_type":0, "user_id": 1, "client_ip": "100.0.0.2", "product_id": 104, "create_time": "2021-09-08 16:27:00"}
{"record_type":0, "user_id": 3, "client_ip": "100.0.0.3", "product_id": 102, "create_time": "2021-09-08 16:29:00"}
{"record_type":1, "user_id": 2, "client_ip": "100.0.0.1", "product_id": 103, "create_time": "2021-09-08 16:30:00"}
{"record_type":0, "user_id": 2, "client_ip": "100.0.0.2", "product_id": 101, "create_time": "2021-09-08 16:31:00"}
{"record_type":0, "user_id": 3, "client_ip": "100.0.0.3", "product_id": 102, "create_time": "2021-09-08 16:32:00"}
{"record_type":1, "user_id": 2, "client_ip": "100.0.0.1", "product_id": 101, "create_time": "2021-09-08 17:33:00"}
```

## 验证结果

通过[ClickHouse连接工具](http://ui.tabix.io/#!/login)登录 ClickHouse，执行以下操作，查询结果数据。

**清空表数据**

```sql
truncate table output_conversion_rate;
truncate table output_pv;
truncate table output_uv;
 ```

**查询合并的数据**

```sql
-- 当前累计的uv
select userids,uv from output_uv final ;
-- 最新时刻的转化率
select conversion_rate,rate from output_conversion_rate final ;
-- 每10分钟统计的pv
select sum(pv) as pv,stt,edt from output_pv group by stt,edt;
 ```

**或者也可以手动合并，正常查询**

```sql
OPTIMIZE TABLE output_uv FINAL;
OPTIMIZE TABLE output_conversion_rate FINAL;
select * from output_uv;
select * from output_conversion_rate;
select sum(pv) as pv,stt,edt from output_pv group by stt,edt;
```

