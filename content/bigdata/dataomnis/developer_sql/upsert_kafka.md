---
title: "消息队列 Upsert Kafka"
description: 本小节主要介绍如何。 
keywords: 
weight: 20
collapsible: false
draft: false
---



## 版本说明

当前仅支持 Flink 1.12 版本。

## 使用范围

Upsert Kafka 可以产生 Changelog 流，支持以 UPSERT 方式对 Kafka 进行读写操作。

## DDL 定义

```sql
CREATE TABLE kafka_upsert_source (
  user_region STRING,
  pv BIGINT,
  uv BIGINT,
  PRIMARY KEY (user_region) NOT ENFORCED
) WITH (
  'connector' = 'upsert-kafka',
  'topic' = 'input',
  'properties.bootstrap.servers' = 'localhost:9092',
  'key.format' = 'avro',
  'value.format' = 'avro'
);
```

## Upsert Kafka 源表参数

| 参数值                       | 必填 | 默认值 | 数据类型                   | 描述                                                         |
| :--------------------------- | :--- | :----- | :------------------------- | :----------------------------------------------------------- |
| connector                    | 是   | 无     | String                     | 固定值为 `upsert-kafka`。                                    |
| topic                        | 是   | 无     | String                     | Kafka Topic 名称。                                           |
| properties.bootstrap.servers | 是   | 无     | String                     | Kafka Broker 地址，格式为 `host:port,host:port,host:port`，以英文逗号分割。 |
| key.format                   | 是   | 无     | String                     | Upsert Kafka 消息中 Key 部分反序列化的格式，支持如下格式：csv、json、avro。 |
| value.format                 | 是   | 无     | String                     | Upsert Kafka 消息中 Value 部分返序列化的格式，支持如下格式：csv、json、avro。 |
| value.fields-include         | 否   | ALL    | Enum<li>ALL <li>EXCEPT_KEY | 指定出现在Value中的字段。<li>ALL：默认值，Schema中所有字段，包括主键字段。<li>EXCEPT_KEY：Schema 中所有字段，不包括主键字段。 |
| key.fields-prefix            | 否   | 无     | String                     | 可以为主键的所有字段定义一个前缀，避免 Key 与 Value 字段的名字冲突。 |
| properties.*                 | 否   | 无     | String                     | 可以指定 Kafka 的参数，具体参考[官方文档]( https://kafka.apache.org/documentation/#configuration)。 |

## Upsert Kafka 结果表参数

| 参数值                       | 必填 | 默认值 | 数据类型                   | 描述                                                         |
| :--------------------------- | :--- | :----- | :------------------------- | :----------------------------------------------------------- |
| connector                    | 是   | 无     | String                     | 固定值为 `upsert-kafka`。                                    |
| topic                        | 是   | 无     | String                     | Kafka Topic 名称。                                           |
| properties.bootstrap.servers | 是   | 无     | String                     | Kafka Broker 地址，格式为`host:port,host:port,host:port`，以英文逗号分割。 |
| key.format                   | 是   | 无     | String                     | Upsert Kafka 消息中 Key 部分反序列化的格式，支持如下格式：csv、json、avro。 |
| value.format                 | 是   | 无     | String                     | Upsert Kafka 消息中 Value 部分返序列化的格式，支持如下格式：csv、json、avro。 |
| value.fields-include         | 否   | ALL    | Enum<li>ALL <li>EXCEPT_KEY | 指定出现在 Value 中的字段。<li>ALL: 默认值，Schema中所有字段，包括主键字段。<li>EXCEPT_KEY：Schema 中所有字段，不包括主键字段。 |
| properties.*                 | 否   | 无     | String                     | 可以指定 Kafka 的参数，具体参考[官方文档](https://kafka.apache.org/documentation/#configuration)。 |

## 内置 Connector

SQL 作业中使用 kafka upsert connector 时，您需要在运行参数中选择 `flink-connector-kafka` 内置 Connector。

## 代码示例

```sql
--创建统计PV和UV的源表。
CREATE TABLE pageviews (
  id BIGINT,
  clicktime TIMESTAMP,
  region STRING,
  WATERMARK FOR clicktime AS clicktime - INTERVAL '2' SECOND
) WITH (
  'connector' = 'kafka',
  'topic' = 'input',
  'properties.bootstrap.servers' = 'localhost:9092',
  'format' = 'json'
);
 
--创建Upsert Kafka结果表。
CREATE TABLE pageviews_region (
  region STRING,
  pv BIGINT,
  uv BIGINT,
  PRIMARY KEY (region) NOT ENFORCED
) WITH (
  'connector' = 'upsert-kafka',
  'topic' = 'output',
  'properties.bootstrap.servers' = 'localhost:9092',
  'key.format' = 'avro',
  'value.format' = 'avro'
);
 
--将统计的PV、UV数据写入结果表中。
INSERT INTO pageviews_region
SELECT
  region,
  COUNT(user_id) AS pv,
  COUNT(DISTINCT user_id) AS uv
FROM pageviews
GROUP BY region;
```

