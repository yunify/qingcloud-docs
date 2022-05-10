---
title: "消息队列 Upsert Kafka"
description: 本小节主要介绍消息队列 Upsert Kafka 内置 Connector。 
keywords: 大数据工作台,内置 Connector,Upsert Kafka
weight: 20
collapsible: false
draft: false
---

作为 Source，Upsert Kafka 连接器产生 changelog 流，其中每条数据记录代表一个 UPDATE 或 DELETE 事件。

Kafka Topic 中存在相应的 key，则以 UPDATE 操作将 key 的值更新为数据记录中的 value。    
Kafka Topic 中不存在相应的 key，则以 INSERT 操作将 key 的值写入 Kafka Topic。    
Key 对应的 value 为 null，会被视作 DELETE 操作。    
作为 Sink，Upsert Kafka 连接器可以消费 changelog 流。它会将 INSERT/UPDATE_AFTER 数据作为正常的 Kafka 消息写入，并将 DELETE 数据以 value 为空的 Kafka 消息写入（表示对应 key 的消息被删除）。Flink 将根据主键列的值对数据进行分区，从而保证主键上的消息有序，因此同一主键上的更新/删除消息将落在同一分区中。

## 版本说明

当前仅支持 Flink 1.12 版本。

## 使用范围

Upsert Kafka 连接器支持以 UPSERT 方式对 Kafka Topic 进行读写操作。

## DDL 定义

> **说明**
> 
> PRIMARY KEY 必须定义。

```sql
CREATE TABLE KafkaTable (
  `ts` TIMESTAMP(3) METADATA FROM 'timestamp',
  `user_id` BIGINT,
  `item_id` BIGINT,
  `behavior` STRING,
  PRIMARY KEY (`user_id`) NOT ENFORCED
) WITH (
  'connector' = 'upsert-kafka',
  ...
 
  'key.format' = 'json',
  'key.json.ignore-parse-errors' = 'true',
 
  'value.format' = 'json',
  'value.json.fail-on-missing-field' = 'false',
  'value.fields-include' = 'EXCEPT_KEY'
)
```

## 可用的元数据字段

请参见 [Kafka 元数据字段](../kafka#元数据字段)。

## Upsert Kafka 源表参数

| 参数值                       | 是否必填 | 默认值 | 数据类型 | 描述                                                         |
| :--------------------------- | :------- | :----- | :------- | :----------------------------------------------------------- |
| connector                    | 是       | 无     | String   | 固定值为 `upsert-kafka`。                                    |
| topic                        | 是       | 无     | String   | 读取的 Topic 名称。                                          |
| properties.bootstrap.servers | 是       | 无     | String   | 以逗号分隔的 Kafka brokers 地址列表，格式为 `host:port,host:port,host:port`。 |
| properties.*                 | 否       | 无     | String   | 后缀名称必须是 [Kafka 配置文档](https://kafka.apache.org/documentation/#configuration) 中定义的配置项。Flink 会将 properties. 前缀移除，并将剩余的键和值传递给 Kafka 客户端。<br/>例如可以通过 `'properties.allow.auto.create.topics' = 'false'` 来禁用自动创建 Topic。<br/>但是有一些配置不支持，例如 `key.deserializer` 和 `value.deserializer`，因为 Flink 会覆盖它们。 |
| key.format                   | 是       | 无     | String   | 在反序列化来自 Kafka 的消息 value 部分时使用的格式。<br/>取值如下：<li>csv<li>json<li>avro<li>avro-confluent<li>raw<br/>有关更多详细信息，请参考官方文档[格式](https://ci.apache.org/projects/flink/flink-docs-release-1.12/dev/table/connectors/formats/)。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b><br/>与常规 Kafka connector 相比，无需指定 key.fields 参数，通过 PRIMARY KEY 来定义。</span> |
| key.fields-prefix            | 否       | 无     | String   | 为所有消息键指定自定义前缀，以避免与消息体格式字段重名，默认前缀为空。<br/>如果定义了自定义前缀，表 schema 和配置项 key.fields 请使用带前缀的名称。<br/>当构建消息 key 数据类型时，前缀会被移除，将使用无前缀的名称。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b><br/>该配置项要求必须将 value.fields-include 配置为 EXCEPT_KEY。</span> |
| value.format                 | 是       | 无     | String   | 在反序列化来自 Kafka 的消息 value 部分时使用的格式。<br/>取值如下：<li>csv<li>json<li>avro<li>avro-confluent<li>raw<br/>有关更多详细信息，请参考官方文档[格式](https://ci.apache.org/projects/flink/flink-docs-release-1.12/dev/table/connectors/formats/)。 |
| value.fields-include         | 否       | ALL    | String   | 控制哪些字段应该出现在消息 value 解析出来的数据中。可取值：<li>ALL：消息 value 解析出来的数据将包含 schema 中所有的字段，包括定义为 key.fields 的字段。<li>EXCEPT_KEY：除去 key.fields 定义字段，剩余 schema 定义字段可以用来存放消息 value 解析出来的数据。 |

## Upsert Kafka 结果表参数

| 参数值                       | 是否必填 | 默认值 | 数据类型                   | 描述                                                         |
| :--------------------------- | :------- | :----- | :------------------------- | :----------------------------------------------------------- |
| connector                    | 是       | 无     | String                     | 固定值为 `upsert-kafka`。                                    |
| topic                        | 是       | 无     | String                     | 结果写入的 Topic 名称。                                      |
| properties.bootstrap.servers | 是       | 无     | String                     | 以逗号分隔的 Kafka brokers 地址列表，格式为 `host:port,host:port,host:port`。 |
| key.format                   | 是       | 无     | String                     | 序列化 Kafka 消息 value 部分时使用的格式。<br/>取值如下：<li>csv<li>json<li>avro<li>raw<br/>有关更多详细信息，请参考官方文档[格式](https://ci.apache.org/projects/flink/flink-docs-release-1.12/dev/table/connectors/formats/)。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b><br/>与常规 Kafka connector 相比，无需指定 key.fields 参数，通过 PRIMARY KEY 来定义。</span> |
| key.fields-prefix            | 否       | 无     | String                     | 为所有消息键指定自定义前缀，以避免与消息体格式字段重名，默认前缀为空。<br/>如果定义了自定义前缀，表 schema 和配置项 key.fields 请使用带前缀的名称。<br/>当构建消息 key 数据类型时，前缀会被移除，将使用无前缀的名称。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b><br/>该配置项要求必须将 value.fields-include 配置为 EXCEPT_KEY。</span> |
| value.format                 | 是       | 无     | String                     | 序列化 Kafka 消息 value 部分时使用的格式。<br/>取值如下：<li>csv<li>json<li>avro<li>raw<br/>有关更多详细信息，请参考官方文档[格式](https://ci.apache.org/projects/flink/flink-docs-release-1.12/dev/table/connectors/formats/)。 |
| value.fields-include         | 否       | ALL    | Enum<li>ALL <li>EXCEPT_KEY | 控制哪些字段应该出现在消息 value 解析出来的数据中。可取值：<li>ALL：消息 value 解析出来的数据将包含 schema 中所有的字段，包括定义为 key.fields 的字段。<li>EXCEPT_KEY：除去 key.fields 定义字段，剩余 schema 定义字段可以用来存放消息 value 解析出来的数据。 |
| sink.parallelism             | 否       | 无     | Integer                    | Kafka sink 算子的并行度，默认情况下，框架使用上游算子相同的平行度 |

## 代码示例

计算不同区域用户 pv 和 uv 情况。

```sql
CREATE TABLE pageviews_per_region (
  user_region STRING,
  pv BIGINT,
  uv BIGINT,
  PRIMARY KEY (user_region) NOT ENFORCED
) WITH (
  'connector' = 'upsert-kafka',
  'topic' = 'pageviews_per_region',
  'properties.bootstrap.servers' = '<yourKafkaBrokers>',
  'key.format' = 'avro',
  'value.format' = 'avro'
);
 
CREATE TABLE pageviews (
  user_id BIGINT,
  page_id BIGINT,
  viewtime TIMESTAMP,
  user_region STRING,
  WATERMARK FOR viewtime AS viewtime - INTERVAL '2' SECOND
) WITH (
  'connector' = 'kafka',
  'topic' = 'pageviews',
  'properties.bootstrap.servers' = '<yourKafkaBrokers>',
  'format' = 'json'
);
 
-- 计算 pv、uv 并插入到 upsert-kafka sink
INSERT INTO pageviews_per_region
SELECT
  user_region,
  COUNT(*),
  COUNT(DISTINCT user_id)
FROM pageviews
GROUP BY user_region;
```

