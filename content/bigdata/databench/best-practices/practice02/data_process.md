---
title: "数据开发"
description: 本小节主要介绍。 
keywords: 
weight: 30
collapsible: false
draft: false
---

## 创建 SQL 作业

1. 在目标工作空间选择**数据开发** > **实时计算**，进入实时计算页面。
2. 点击**创建作业**，进入创建作业页面。
   
   <img src="/bigdata/databench/_images/choose_model_sql.png" alt="选择模式" style="zoom:50%;" />

3. 选择 SQL 模式。
4. 点击**下一步**，填写作业名称，并选择作业依赖的计算集群。
   
   <img src="/bigdata/databench/_images/job_basic.png" alt="填写信息" style="zoom:50%;" />

5. 配置完成后，点击**确定**，开始创建作业。

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

## 调度作业

1. 选择已创建好的作业，点击右侧的**调度设置**，进入调度配置页面。    
   在该页面可以查看作业的基础属性，包括业务名称、业务 ID、业务描述。基础属性在调度配置页面均不可修改。
2. 设置调度策略。详细操作请参见[配置作业调度](../../../manual/data_development/job/scheduling_job)。
3. 设置完成后，点击**确定**，完成调度设置操作。


## 发布作业

点击**发布**，发布作业。


