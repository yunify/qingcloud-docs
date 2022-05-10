---
title: "数据仓库 ClickHouse"
description: 本小节主要介绍数据仓库 ClickHouse 内置 Connector。 
keywords: 大数据工作台,内置 Connector,ClickHouse
weight: 60
collapsible: false
draft: false
---



## 版本说明

当前仅支持 Flink 1.12 版本。

## 使用范围

ClickHouse 仅支持作为目的表（Sink）。

## DDL 定义

```sql
CREATE TABLE t_user (
    `user_id` BIGINT,
    `user_type` INTEGER,
    `language` STRING,
    `country` STRING,
    `gender` STRING,
    `score` DOUBLE,
    `list` ARRAY<STRING>,
    `map` Map<STRING, BIGINT>,
    PRIMARY KEY (`user_id`) NOT ENFORCED
) WITH (
    'connector' = 'clickhouse',
    'url' = 'clickhouse://{ip}:{port}',
    'database-name' = 'tutorial',
    'table-name' = 'users',
    'sink.batch-size' = '500',
    'sink.flush-interval' = '1000',
    'sink.max-retries' = '3'
);
```

## ClickHouse 参数

| 参数值                  | 是否必填 | 默认值   | 数据类型 | 描述                                                         |
| :---------------------- | :------- | :------- | :------- | :----------------------------------------------------------- |
| connector               | 是       | 无       | String   | 连接器，固定值为 `clickhouse`。                              |
| url                     | 是       | 无       | String   | ClickHouse 服务的URL地址，clickhouse://{ip}:{port}。         |
| username                | 是       | 无       | String   | ClickHouse 服务的用户名。                                    |
| password                | 是       | 无       | String   | ClickHouse 服务的密码。                                      |
| database-name           | 否       | default  | Sting    | ClickHouse 数据库名称。                                      |
| table-name              | 是       | 无       | String   | ClickHouse 服务的表名。                                      |
| sink.batch-size         | 否       | 1000     | Integer  | 刷新频率，数据量超过该大小会刷新写入数据。                   |
| sink.flush-interval     | 否       | 1s       | Duration | 刷新频率，超过这个刷新间隔 异步线程会刷新写入数据。          |
| sink.max-retries        | 否       | 3        | Integer  | 写入失败重试最大次数，超过该次数任务会失败终止。             |
| sink.write-local        | 否       | false    | Boolean  | 针对 distributed 表，会直接写入当前指定 url 的节点表中。         |
| sink.partition-startegy | 否       | balanced | String   | 写入策略：balanced（轮询），hash（根据分区 key 的 hash 值写入），shuffle（随机写入）。 |
| sink.partition-key      | 否       | 无       | String   | hash 策略中的分区 key。                                      |
| sink.ignore-delete      | 否       | true     | Boolean  | 是否将 update 语句视为 insert 语句并忽略删除，默认为 true。        |

## 类型映射

| ClickHouse 类型                                        | Flink SQL 类型      |
| ------------------------------------------------------ | ------------------- |
| STRING                                                 | CHAR                |
| String / IP / UUID                                     | VARCHAR             |
| String / Enum                                          | STRING              |
| UInt8                                                  | BOOLEAN             |
| FixedString                                            | BYTES               |
| Decimal / Int128 / Int256 / UInt64 / UInt128 / UInt256 | DECIMAL             |
| Int8                                                   | TINYINT             |
| Int16 / UInt8                                          | SMALLINT            |
| Int32 / UInt16 / Interval                              | INTEGER             |
| Int64 / UInt32                                         | BIGINT              |
| Float32                                                | FLOAT               |
| Float64                                                | DOUBLE              |
| Date                                                   | DATE                |
| DateTime                                               | TIME                |
| DateTime                                               | TIMESTAMP           |
| DateTime                                               | TIMESTAMP_LTZ       |
| Int32                                                  | INTERVAL_YEAR_MONTH |
| Int64                                                  | INTERVAL_DAY_TIME   |
| Not supported                                          | ROW                 |
| Not supported                                          | MULTISET            |
| Not supported                                          | RAW                 |

## 代码示例

```sql
CREATE TABLE source(
    id INT,
    province STRING
) WITH (
    'connector' = 'faker',
    'fileds.id.expression' = '#{number.numberBetween ''1'',''100''}',
    'fields.province.expression'  = '#{regexify ''(河北省|山西省|辽宁省|吉林省|黑龙江省|江苏省|浙江省|安徽省|福建省|江西省|山东省|河南省|湖北省|湖南省|广东省|海南省|四川省|贵州省|云南省|陕西省|甘肃省|青海省|台湾省){1}''}',
    'rows-per-second'          = '1'
);
 
CREATE TABLE clickhouse_sink(
    id INT,
    province STRING
) WITH (
    'connector' = 'clickhouse',
    'url' = 'clickhouse://localhost:6379',
    'database-name' = 'tutorial',
    'username' = 'default',
    'password' = 'default',
    'table-name' = 'users',
    'sink.batch-size' = '500',
    'sink.flush-interval' = '1000',
    'sink.max-retries' = '3'
);
 
INSERT INTO clickhouse_sink SELECT * FROM source;
```
