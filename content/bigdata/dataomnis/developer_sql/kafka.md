---
title: "消息队列 Kafka"
description: 本小节主要介绍如何。 
keywords: 
weight: 10
collapsible: false
draft: false
---

Kafka 数据管道是流计算系统中最常用的数据源（Source）和数据目的（Sink）。用户可以把流数据导入到 Kafka 的某个 Topic 中，通过 Flink 算子进行处理后，输出到相同或不同 Kafka 示例的另一个 Topic。

Kafka 支持同一个 Topic 多分区读写，数据可以从多个分区读入，也可以写入到多个分区，以提供更高的吞吐量，减少数据倾斜和热点。

## 版本说明

当前仅支持 Flink 1.12 版本。

## 使用范围

Kafka 支持作为数据源表（Source）,也可以作为目的表（Sink）。

Kafka 还可以与 Debezium、Canal 等联用，对接 MySQL，PostgreSQL 等传统数据库的变更进行捕获和订阅，然后再经过 Flink 的处理落地。

## DDL 定义

```sql
CREATE TABLE `kafka_source`(
    `id` INT,
    `name` STRING
) WITH (
    -- 定义 Kafka 参数
    'connector' = 'kafka',
    'topic' = 'input',         -- 需要消费的topic，如topic1或者topic1;topic2;topic3来订阅多个topic
    'scan.startup.mode' = 'lastest-offset',  -- 消费模式 latest-offset / earliest-offset / specific-offsets / group-offsets / timestamp
    'properties.bootstrap.servers' = '192.168.100.101:9092',  -- 填写kafka服务地址 xxx.xxx.xxx.xxx:9092,xxx.xxx.xxx.xxx:9092,xxx.xxx.xxx.xxx:9092
    'properties.group.id' = 'testGroup',   -- 消费组 group id
  
     -- 定义数据格式 (JSON 格式)
    'format' = 'json',
    'json.fail-on-missing-field' = 'false',  -- 缺失字段报错
    'json.ignore-parse-errors' = 'true'  -- 忽略解析报错
);
```

## 元信息列

可以定义元信息列，以获取 Kakfa 信息的元信息。

| <span style="display:inline-block;width:120px">Key</span> | <span style="display:inline-block;width:200px">数据类型</span> | <span style="display:inline-block;width:340px">说明</span>   |
| :-------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| topic                                                     | STRING NOT NULL                                              | Kafka 消息所在的 Topic 名称。                                |
| partition                                                 | INT NOT NULL                                                 | Kafka 消息所在的 Partition ID。                              |
| headers                                                   | MAP NOT NULL                                                 | Kafka 消息的消息头。                                         |
| leader-epoch                                              | INT NULL                                                     | Kafka 消息的 Leader epoch。                                  |
| offset                                                    | BIGINT NOT NULL                                              | Kafka 消息的偏移量。                                         |
| timestamp                                                 | TIMESTAMP_LTZ(3) NOT NULL                                    | Kafka 消息的时间戳。                                         |
| timestamp-type                                            | STRING NOT NULL                                              | Kafka 消息的时间戳类型。<li>NoTimestampType：消息中没有定义时间戳。<li>CreateTime：消息产生的时间。<li>LogAppendTime：消息被添加到 Kafka Broker 的时间。 |

## Kafka 源表参数

| 参数值                        | 必填 | 默认值       | 数据类型 | 描述                                                         |
| :---------------------------- | :--- | :----------- | :------- | :----------------------------------------------------------- |
| connector                     | 是   | 无           | String   | 固定值为 `kafka`。                                           |
| topic                         | 是   | 无           | String   | Kafka Topic 名称。                                           |
| topic-pattern                 | 否   | 无           | String   | 匹配读取 Topic 名称的正则表达式。                            |
| properties.bootstrap.servers  | 是   | 无           | String   | Kafka Broker 地址，格式为 `host:port,host:port,host:port`，以英文逗号分割。 |
| properties.group.id           | 是   | 无           | String   | Kafka 消费是的 group id。                                    |
| format                        | 是   | 无           | String   | Kafka 消息的格式，csv、json、avro、debezium-jso、canal-json。 |
| key.format                    | 否   | 无           | String   | 反序列化 Kafak 消息键（key）使用的格式，csv、json、avro、debezium-jso、canal-json。 |
| key.fields                    | 否   | 无           | String   | 消息键解析出来的数据存放的字段。<br/>多个字段名以`;`分隔，例如：`field1;field2`。<br>默认不配置该参数，key 不会被解析，key 数据将被丢弃。 |
| key.fields-prefix             | 否   | 无           | String   | 为所有消息键指定自定义前缀，以避免与消息体格式字段重名，默认前缀为空。 |
| value.format                  | 否   | 无           | String   | 反序列化 Kafka 消息体（value）时使用的格式。                 |
| value.fields-include          | 否   | ALL          | String   | 在解析消息体时，是否要包含消息键字段。<li>ALL：所有定义的字段都存放到消息体（value）的解析出来的数据。<li>EXCEPT_KEY：除去 key.fields 定义字段，剩余定义字段可以用来存放消息体(value)解析出来的数据。 |
| scan.startup.mode             | 否   | group-offset | String   | Kafka consumer 的启动模式。包括：lastest-offset、earliest-offset、specific-offset、group-offset、timestamp。 |
| scan.startup.specific-offsets | 否   | 无           | Sring    | 对应 scan.startup.mode 下 specific-offset 的值，指定各个分区所需的 offset 位置。例如`partition.0,offset:42;partition:1,offset:50`。 |
| scan.startup.timestamp-millis | 否   | 无           | Integer  | 对应 scan.startup.mode下timestamp 的值，指定启动的时间戳。例如`1639979252461`（毫秒）。 |

## Kafka 结果表参数

| 参数                         | 是否必填 | 默认值                 | 数据类型 | 描述                                                         |
| :--------------------------- | :------- | :--------------------- | :------- | :----------------------------------------------------------- |
| connector                    | 是       | 无                     | String   | 固定为 `kafka`。                                             |
| topic                        | 是       | 无                     | String   | 结果写入的 Topic。                                           |
| properties.bootstrap.servers | 是       | 无                     | String   | Kafka Broker 地址。                                          |
| format                       | 是       | 无                     | String   | 序列化 Kafka 消息时使用的格式。<li>csv <li>json <li>avro     |
| sink.partitioner             | 否       | fixed                  | String   | Flink 分区到 Kafka 分区的映射模式。<li>fixed：每个 Flink 分区对应至多一个 Kafka 分区。<li>round-robin：Flink 分区中的数据将被轮流分配到 Kafka 的各个分区。<li>自定义分区：可以通过实现 FlinkKafkaPartitioner 来自定义分区模式。 |
| sink.delivery-guarantee      | 否       | at-least-once          | String   | Kafka 的写入策略。<li>at-least-once <li>exactly-once <li>none |
| sink.transactional-id-prefix | 否       | 无                     | String   | 如果使用 exacctly-once 模式请确保指定唯一的值。              |
| sink.parallelism             | 否       | 同上游输入节点同平行度 | Integer  | 写入 Kafka 的并行度。                                        |

## 内置 Connector

SQL 作业中使用 kafka connector 时，您需要在运行参数中选择 `flink-connector-kafka` 内置 Connector。

## 代码示例

```sql
CREATE TEMPORARY TABLE currency_rates (
  `currency_code` STRING,
  `eur_rate` DECIMAL(6,4),
  `rate_time` TIMESTAMP(3),
  WATERMARK FOR `rate_time` AS rate_time - INTERVAL '15' SECONDS,
  PRIMARY KEY (currency_code) NOT ENFORCED
) WITH (
  'connector' = 'upsert-kafka',
  'topic' = 'currency_rates',
  'properties.bootstrap.servers' = 'localhost:9092',
  'key.format' = 'raw',
  'value.format' = 'json'
);
 
CREATE TEMPORARY TABLE transactions (
  `id` STRING,
  `currency_code` STRING,
  `total` DECIMAL(10,2),
  `transaction_time` TIMESTAMP(3),
  WATERMARK FOR `transaction_time` AS transaction_time - INTERVAL '30' SECONDS
) WITH (
  'connector' = 'kafka',
  'topic' = 'transactions',
  'properties.bootstrap.servers' = 'localhost:9092',
  'key.format' = 'raw',
  'key.fields' = 'id',
  'value.format' = 'json',
  'value.fields-include' = 'ALL'
);
 
SELECT
  t.id,
  t.total * c.eur_rate AS total_eur,
  t.total,
  c.currency_code,
  t.transaction_time
FROM transactions t
JOIN currency_rates FOR SYSTEM_TIME AS OF t.transaction_time AS c
ON t.currency_code = c.currency_code;
```
