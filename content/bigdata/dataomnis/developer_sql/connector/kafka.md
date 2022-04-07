---
title: "消息队列 Kafka"
description: 本小节主要介绍消息队列 Kafka 内置 Connector。 
keywords: 大数据工作台,内置 Connector,Kafka
weight: 10
collapsible: false
draft: false
---

Kafka 数据管道是流计算系统中最常用的数据源（Source）和数据目的（Sink）。您可以把流数据导入到 Kafka 的某个 Topic 中，通过 Flink 算子进行处理后，输出到相同或不同 Kafka 的另一个 Topic 中。

Kafka 支持同一个 Topic 多分区读写，数据可以从多个分区读入，也可以写入到多个分区，以提供更高的吞吐量，减少数据倾斜和热点。

## 版本说明

当前仅支持 Flink 1.12 版本。

## 使用范围

Kafka 支持作为数据源表（Source），也可以作为目的表（Sink）。

## DDL 定义

在实际使用中请根据实际情况配置字段名和 WITH 参数。

```sql
CREATE TABLE KafkaTable (
  `event_time` TIMESTAMP(3) METADATA FROM 'timestamp',
  `partition` BIGINT METADATA VIRTUAL,
  `offset` BIGINT METADATA VIRTUAL,
  `user_id` BIGINT,
  `item_id` BIGINT,
  `behavior` STRING
) WITH (
  'connector' = 'kafka',
  'topic' = 'user_behavior',
  'properties.bootstrap.servers' = '<yourKafkaBrokers>',
  'properties.group.id' = 'testGroup',
  'scan.startup.mode' = 'earliest-offset',
  'format' = 'csv'
);
```

## 元数据字段

以下元数据可以作为表定义中的元数据字段进行访问。    
**读/写**列定义元数据字段是否`可读（R）`或`可写（W）`或`可读写（R/W）`。   
只读列（R）必须声明为 VIRTUAL。

| Key | 数据类型 | 说明   | 读/写 |
| :-------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ----- |
| topic                                                     | STRING NOT NULL                                              | Kafka 消息所在的 Topic 名称。                                | R     |
| partition                                                 | INT NOT NULL                                                 | Kafka 消息所在的分区 ID。                                    | R     |
| headers                                                   | MAP<STRING, BYTES> NOT NULL                                  | Kafka 消息的消息头（header）。                               | R/W   |
| leader-epoch                                              | INT NULL                                                     | Kafka 消息的 Leader epoch。                                  | R     |
| offset                                                    | BIGINT NOT NULL                                              | 分区中 Kafka 消息的偏移量。                                  | R     |
| timestamp                                                 | TIMESTAMP(3) WITH LOCAL TIME ZONE NOT NULL                   | Kafka 消息的时间戳。                                         | R/W   |
| timestamp-type                                            | STRING NOT NULL                                              | Kafka 消息的时间戳类型。<li>NoTimestampType：消息中没有定义时间戳。<li>CreateTime：消息产生的时间。<li>LogAppendTime：消息被添加到 Kafka Broker 的时间。 | R     |

## Kafka 源表 WITH 参数

| 参数值                                  | 是否必填 | 默认值       | 数据类型 | 描述                                                         |
| :-------------------------------------- | :------- | :----------- | :------- | :----------------------------------------------------------- |
| connector                               | 是       | 无           | String   | 固定值为 `kafka`。                                           |
| topic                                   | 否       | 无           | String   | Kafka Topic 名称。<br>多个 Topic 以 `;` 分隔，例如 `topic-1;topic-2`。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b><br>topic 和 topic-pattern 两个选项只能指定其中一个。</span> |
| topic-pattern                           | 否       | 无           | String   | 匹配读取 Topic 名称的正则表达式。<br>所有匹配该正则表达式的 Topic 在作业运行时均会被订阅。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b><br/>topic 和 topic-pattern 两个选项只能指定其中一个。</span> |
| properties.bootstrap.servers            | 是       | 无           | String   | Kafka Broker 地址列表，以 `,` 分隔，格式为 `host:port,host:port,host:port`。 |
| properties.group.id                     | 是       | 无           | String   | Kafka 消费组 ID。                                            |
| properties.*                            | 否       | 无           | String   | 后缀名称必须是 [Kafka 配置文档](https://kafka.apache.org/documentation/#configuration) 中定义的配置项。Flink 会将 properties. 前缀移除，并将剩余的键和值传递给 Kafka 客户端。<br>例如可以通过 `'properties.allow.auto.create.topics' = 'false'` 来禁用自动创建 Topic。<br>但是有一些配置不支持，例如 `key.deserializer` 和 `value.deserializer`，因为 Flink 会覆盖它们。 |
| format                                  | 是       | 无           | String   | 在反序列化来自 Kafka 的消息 value 部分时使用的格式。<br>取值如下：<li>csv<li>json<li>avro<li>avro-confluent<li>debezium-json<li>canal-json<li>Maxwell-json<li>raw<br>有关更多详细信息，请参考官方文档[格式](https://ci.apache.org/projects/flink/flink-docs-release-1.12/dev/table/connectors/formats/)。 |
| value.format                            | 是       | 无           | String   | 与 format 同样含义，只能配置其中一个。                       |
| key.format                              | 否       | 无           | String   | 在反序列化来自 Kafka 的消息 value 部分时使用的格式。<br/>取值如下：<li>csv<li>json<li>avro<li>avro-confluent<li>debezium-json<li>canal-json<li>Maxwell-json<li>raw<br/>有关更多详细信息，请参考官方文档[格式](https://ci.apache.org/projects/flink/flink-docs-release-1.12/dev/table/connectors/formats/)。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b><br/>如果指定了 key.format 参数，则也必须指定 key.fields 参数。</span> |
| key.fields                              | 否       | 无           | String   | 消息键解析出来的数据存放的字段。<br/>多个字段名以`;`分隔，例如：`field1;field2`。<br>默认不配置该参数，key 数据将被丢弃。 |
| key.fields-prefix                       | 否       | 无           | String   | 为所有消息键指定自定义前缀，以避免与消息体格式字段重名，默认前缀为空。<br>如果定义了自定义前缀，表 schema 和配置项 key.fields 请使用带前缀的名称。<br/>当构建消息 key 数据类型时，前缀会被移除，将使用无前缀的名称。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b><br/>该配置项要求必须将 value.fields-include 配置为 EXCEPT_KEY。</span> |
| value.fields-include                    | 否       | ALL          | String   | 控制哪些字段应该出现在消息 value 解析出来的数据中。可取值：<li>ALL：消息 value 解析出来的数据将包含 schema 中所有的字段，包括定义为 key.fields 的字段。<li>EXCEPT_KEY：除去 key.fields 定义字段，剩余 schema 定义字段可以用来存放消息 value 解析出来的数据。 |
| scan.startup.mode                       | 否       | group-offset | String   | Kafka consumer 的启动模式。包括：lastest-offset、earliest-offset、specific-offset、group-offset、timestamp。详细信息请参考：[启动模式](https://nightlies.apache.org/flink/flink-docs-release-1.12/dev/table/connectors/kafka.html#start-reading-position)。 |
| scan.startup.specific-offsets           | 否       | 无           | Sring    | scan.startup.mode 选择 specific-offsets 时填写，指定各个分区 offset 的位置。<br>例如：`partition:0,offset:42;partition:1,offset:300`。 |
| scan.startup.timestamp-millis           | 否       | 无           | Long     | scan.startup.mode 选择 timestamp 时填写，指定启动的时间戳，单位为毫秒。<br>例如：`1639979252461`。 |
| scan.topic-partition-discovery.interval | 否       | 无           | Duration | Kafka consumer 定期发现动态创建的 Kafka topic 和分区的时间间隔。<br/>例如：`100s`。 |

## Kafka 结果表 WITH 参数

| 参数                         | 是否必填 | 默认值        | 数据类型 | 描述                                                         |
| :--------------------------- | :------- | :------------ | :------- | :----------------------------------------------------------- |
| connector                    | 是       | 无            | String   | 固定值为 `kafka`。                                           |
| topic                        | 是       | 无            | String   | 结果写入的 Topic 名称。                                      |
| properties.bootstrap.servers | 是       | 无            | String   | Kafka Broker 地址列表，以（,）分隔，格式为 `host:port,host:port,host:port`。 |
| sink.partitioner             | 否       | Default       | String   | Flink 分区到 Kafka 分区的映射模式。有效值为：<li>default：使用 kafka 默认 partitioner 对记录进行分区。<li>fixed：每个 Flink 分区对应至多一个 Kafka 分区。<li>round-robin：Flink 分区中的数据将被轮流分配到 Kafka 的各个分区。它仅在未指定 key 时有效。<li>自定义分区：通过实现 FlinkKafkaPartitioner 来自定义分区，例如`org.mycompany.MyPartitioner`。<br>更多详细信息，请参考[接收器分区](https://nightlies.apache.org/flink/flink-docs-release-1.12/dev/table/connectors/kafka.html#sink-partitioning)。 |
| sink.parallelism             | 否       | 无            | Integer  | Kafka sink 算子的并行度，默认情况下，框架使用上游算子相同的平行度。 |
| properties.group.id          | 否       | 无            | String   | Kafka 消费组 ID。                                            |
| sink.semantic                | 否       | at-least-once | String   | Kafka的写入策略。<li>at-least-once：保证不会丢失任何记录（可能重复）。<li>exactly-once：恰好一次。<li>none：Flink 不做任何保证。生成的记录可能会丢失或重复。 |
| value.format                 | 是       | 无            | String   | 与 format 同样含义，只能配置其中一个。                       |
| key.fields-prefix            | 否       | 无            | String   | 为所有消息 key 指定自定义前缀，以避免与消息 value 字段重名，默认前缀为空。<br>如果定义了自定义前缀，表 schema 和配置项 key.fields 请使用带前缀的名称。<br>当构建消息 key 数据类型时，前缀会被移除，将使用无前缀的名称。<br/><span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b><br/>该配置项要求必须将 value.fields-include 配置为 EXCEPT_KEY。</span> |
| format                       | 是       | 无            | String   | 序列化 Kafka 消息 value 时使用的格式。<li>csv<li>json<li>avro<li>raw<br>有关更多详细信息，请参考官方文档[格式](https://ci.apache.org/projects/flink/flink-docs-release-1.12/dev/table/connectors/formats/)。 |
| key.format                   | 否       | 无            | String   | 序列化 Kafka 消息 value 部分时使用的格式。取值如下：<li>csv<li>json<li>avro<li>raw<br/>有关更多详细信息，请参考官方文档[格式](https://ci.apache.org/projects/flink/flink-docs-release-1.12/dev/table/connectors/formats/)。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b><br/>如果指定了 key.format 参数，则也必须指定 key.fields 参数。</span> |
| value.fields-include         | 否       | ALL           | String   | 控制哪些字段应该出现在消息 value 解析出来的数据中。可取值：<li>`ALL`：消息 value 解析出来的数据将包含 schema 中所有的字段，包括定义为 key.fields 的字段。<li>`EXCEPT_KEY`：除去 key.fields 定义字段，剩余 schema 定义字段可以用来存放消息 value 解析出来的数据。 |
| key.fields                   | 否       | 无            | String   | 消息 key 的数据字段。<br>多个字段名以 `;` 分隔，如：field1;field2。<br/>默认不配置该参数，key 数据将被丢弃。 |

## CSV 格式

详情请参见：[CSV 格式](https://nightlies.apache.org/flink/flink-docs-release-1.12/dev/table/connectors/formats/csv.html)

### CSV 格式 DDL 定义

```sql
CREATE TABLE user_behavior (
  user_id BIGINT,
  item_id BIGINT,
  category_id BIGINT,
  behavior STRING,
  ts TIMESTAMP(3)
) WITH (
 'connector' = 'kafka',
 'topic' = 'user_behavior',
 'properties.bootstrap.servers' = '<yourKafkaBrokers>',
 'properties.group.id' = 'testGroup',
 'format' = 'csv',
 'csv.ignore-parse-errors' = 'true',
 'csv.allow-comments' = 'true'
)
```

### CSV 格式 WITH 参数

| 参数                        | 是否必填 | 默认值 | 数据类型 | 描述                                                         |
| :-------------------------- | :------- | :----- | :------- | :----------------------------------------------------------- |
| format                      | 是       | 无     | String   | 格式，固定值为`csv`。                                        |
| csv.field-delimiter         | 否       | ,      | String   | 指定 CSV 字段分隔符，默认是半角逗号。字段分隔符，必须是单个字符。您可以使用反斜杠指定特殊字符，例如表示制表符。您还可以使用 unicode，例如'csv.field-delimiter' = U&'\0001'表示 0x01 字符。 |
| csv.disable-quote-character | 否       | false  | Boolean  | 禁止字段包围引号。如果为 true，则 'csv.quote-character' 选项不可用。 |
| csv.quote-character         | 否       | "      | String   | 字段包围引号。默认是双引号。                                 |
| csv.allow-comments          | 否       | false  | Boolean  | 忽略 # 开头的注释行（请务必将 csv.ignore-parse-errors 设为 true）。 |
| csv.ignore-parse-errors     | 否       | false  | Boolean  | 忽略处理错误。对于无法解析的字段，会输出为 null。            |
| csv.array-element-delimiter | 否       | ;      | String   | 数组元素的分隔符。                                           |
| csv.escape-character        | 否       | 无     | String   | 指定转义符，默认禁用转义。                                   |
| csv.null-literal            | 否       | 无     | String   | 将指定的字符串看作 null 值。                                 |

## JSON 格式

详情请参见：[JSON 格式](https://nightlies.apache.org/flink/flink-docs-release-1.12/dev/table/connectors/formats/json.html)

### JSON 格式 DDL 定义

```sql
CREATE TABLE user_behavior (
  user_id BIGINT,
  item_id BIGINT,
  category_id BIGINT,
  behavior STRING,
  ts TIMESTAMP(3)
) WITH (
 'connector' = 'kafka',
 'topic' = 'user_behavior',
 'properties.bootstrap.servers' = '<yourKafkaBrokers>',
 'properties.group.id' = 'testGroup',
 'format' = 'json',
 'json.fail-on-missing-field' = 'false',
 'json.ignore-parse-errors' = 'true'
)
```

### JSON 格式 WITH 参数

| 参数                           | 是否必填 | 默认值 | 数据类型 | 描述                                                         |
| :----------------------------- | :------- | :----- | :------- | :----------------------------------------------------------- |
| format                         | 是       | 无     | String   | 格式，固定值为`json`。                                       |
| json.fail-on-missing-field     | 否       | false  | Boolean  | <li>如果为 true，则遇到缺失字段时，会让作业失败。<li>如果为 false，则只会把缺失字段设置为 null 并继续处理。 |
| json.ignore-parse-errors       | 否       | false  | Boolean  | <li>如果为 true，则遇到解析异常时，会把这个字段或行设置为 null 并继续处理。<li>如果为 false，则会让作业失败。 |
| json.timestamp-format.standard | 否       | SQL    | String   | 指定 JSON 时间戳 `TIMESTAMP `和 `TIMESTAMP WITH LOCAL TIME ZONE `类型字段的格式，可选值为 SQL、ISO-8601。<li>默认是 SQL，格式是`yyyy-MM-dd HH:mm:ss.s{可选精度}`。<li>也可以选择 ISO-8601，格式是 `yyyy-MM-ddTHH:mm:ss.s{可选精度}`。 |
| json.map-null-key.mode         | 否       | FAIL   | String   | 序列化 Map 遇到 null key 时的处理模式：<li>FAIL：抛出异常。<li>DROP：丢弃 null key 记录。<li>LITERAL：用 `json.map-null-key.literal` 中定义的字符串替换。 |
| json.map-null-key.literal      | 否       | null   | String   | `json.map-null-key.mode`  定义为 `LITERAL` 时，指定字符串以替换空键。 |

## Avro 格式

详情请参见：[Avro 格式](https://nightlies.apache.org/flink/flink-docs-release-1.12/dev/table/connectors/formats/avro.html)

### Avro 格式 DDL 定义

```sql
CREATE TABLE user_behavior (
  user_id BIGINT,
  item_id BIGINT,
  category_id BIGINT,
  behavior STRING,
  ts TIMESTAMP(3)
) WITH (
 'connector' = 'kafka',
 'topic' = 'user_behavior',
 'properties.bootstrap.servers' = '<yourKafkaBrokers>',
 'properties.group.id' = 'testGroup',
 'format' = 'avro'
)
```

### Avro 格式 WITH 参数

| 参数   | 是否必填 | 默认值 | 数据类型 | 描述                    |
| :----- | :------- | :----- | :------- | :---------------------- |
| format | 是       | 无     | String   | 格式，固定值为 `avro`。 |

## Confluent Avro 格式

Avro Schema Registry (`avro-confluent`) 格式支持读取由 `io.confluent.kafka.serializers.KafkaAvroSerializer` 序列化后的消息

输出的消息响应的也可以被 `io.confluent.kafka.serializers.KafkaAvroDeserializer` 读取。详情请参见：[Confluent Avro 格式](https://nightlies.apache.org/flink/flink-docs-release-1.12/dev/table/connectors/formats/avro-confluent.html)

## Debezium 格式

[Debezium](https://debezium.io/) 是一个 CDC（Changelog Data Capture）工具，可以将 MySQL、PostgreSQL、Oracle、Microsoft SQL Server 和许多其他数据库的实时 changelog 流式传输到 Kafka。Debezium 为 changelog 提供统一的 schema 格式，并支持使用 JSON 和 [Apache Avro](https://avro.apache.org/) 序列化消息。详情请参见：[Debezium 格式](https://nightlies.apache.org/flink/flink-docs-release-1.12/dev/table/connectors/formats/debezium.html)。

## Canal 格式

[Canal](https://github.com/alibaba/canal/wiki) 是一个 CDC（Changelog Data Capture）工具，可以将 MySQL 中的实时 changelog 流式传输到其他系统。Canal 为 changelog 提供了统一的 schema 格式，并支持使用 JSON 和 [protobuf](https://developers.google.com/protocol-buffers) 序列化消息（protobuf 是 Canal 的默认格式）。详情请参见：[Canal 格式](https://nightlies.apache.org/flink/flink-docs-release-1.12/dev/table/connectors/formats/canal.html)。

## Maxwell 格式

[Maxwell](https://maxwells-daemon.io/) 是一个 CDC（Changelog Data Capture）工具，可以将 MySQL 的实时 changelog 流式传输到 Kafka 和其他流式 connector。Maxwell 为 changelog 提供统一的 schema 格式，并支持使用 JSON 序列化消息。详情请参见：[Maxwell 格式](https://nightlies.apache.org/flink/flink-docs-release-1.12/dev/table/connectors/formats/maxwell.html)

## Raw 格式

Raw 格式允许将原始（基于字节的）值作为单列进行读写。详情请参见：[Raw 格式](https://nightlies.apache.org/flink/flink-docs-release-1.12/dev/table/connectors/formats/raw.html)

### Raw 格式 DDL 定义

```sql
CREATE TABLE nginx_log (
  log STRING
) WITH (
  'connector' = 'kafka',
  'topic' = 'nginx_log',
  'properties.bootstrap.servers' = '<yourKafkaBrokers>',
  'properties.group.id' = 'testGroup',
  'format' = 'raw'
)
```

### Raw 格式 WITH 参数

| 参数           | 是否必填 | 默认值     | 数据类型 | 描述                                                |
| :------------- | :------- | :--------- | :------- | :-------------------------------------------------- |
| format         | 是       | 无         | String   | 格式，固定值为 `raw`。                              |
| raw.charset    | 否       | UTF-8      | String   | 编码字符集                                          |
| raw.endianness | 否       | big-endian | String   | 编码字节序。有效值为 `big-endian` 和 `little-endian`。 |

## 代码示例

### 示例一

从 Kafka 中读取数据后插入 Kafka。    
从名称为 source 的 Topic 中读取 Kafka 数据，再写入名称为 sink 的 Topic，数据使用 json 格式。

```sql
CREATE TEMPORARY TABLE Kafka_source (
  id INT,
  name STRING,
  age INT
) WITH (
  'connector' = 'kafka',
  'topic' = 'source',
  'properties.bootstrap.servers' = '<yourKafkaBrokers>',
  'properties.group.id' = '<yourKafkaConsumerGroupId>',
  'value.format' = 'json'
);
 
CREATE TEMPORARY TABLE Kafka_sink (
  id INT,
  name STRING,
  age INT
) WITH (
  'connector' = 'kafka',
  'topic' = 'sink',
  'properties.bootstrap.servers' = '<yourKafkaBrokers>',
  'properties.group.id' = '<yourKafkaConsumerGroupId>',
  'value.format' = 'json'
);
 
INSERT INTO Kafka_sink SELECT id, name, age FROM Kafka_source;
```

### 示例二

key 和 value 包含相同名称的字段。

```sql
CREATE TABLE KafkaTable (
  `k_version` INT,
  `k_user_id` BIGINT,
  `k_item_id` BIGINT,
  `version` INT,
  `behavior` STRING
) WITH (
  'connector' = 'kafka',
  ...
 
  'key.format' = 'json',
  'key.fields-prefix' = 'k_',
  'key.fields' = 'k_version;k_user_id;k_item_id',
  'value.format' = 'json',
  'value.fields-include' = 'EXCEPT_KEY'
)
```

### 示例三

常规 kafka 与 upsert-kafka 做 join 查询，对实时交易数据与实时汇率数据做联合查询，获取实时交易额。

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
  'properties.bootstrap.servers' = '<yourKafkaBrokers>',
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
