---
title: "分布式文件系统 HDFS"
description: 本小节主要介绍分布式文件系统 HDFS 内置 Connector。 
keywords: 大数据工作台,内置 Connector,HDFS
weight: 75
collapsible: false
draft: false
---



## 版本说明

当前仅支持 Flink 1.12 版本。

## 使用范围

支持将数据流式写入到 HDFS 中。

## DDL 定义

```sql
CREATE TABLE MyUserTable (
  column_name1 INT,
  column_name2 STRING,
  part_name1 INT,
  part_name2 STRING
) PARTITIONED BY (part_name1, part_name2) WITH (
  'connector' = 'filesystem',          
  'path' = 'hdfs://$namenode:9000/path/to/whatever', 
  'format' = 'csv',                    
  'sink.partition-commit.delay' = '1h',
  'sink.partition-commit.policy.kind'='success-file'
)
```

## HDFS 源表 WITH 参数

| 参数值                                     | 是否必填 | 默认值       | 数据类型   | 描述                                                         |
| :----------------------------------------- | :------- | :----------- | :--------- | :----------------------------------------------------------- |
| connector                                  | 是       | 无           | String     | 固定值为 `filesystem`。                                      |
| path                                       | 是       | 无           | String     | 文件写入的路径，hdfs:// 开头。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b><br/>写入 HDFS 的 user 是 flink，需要提前调整好 path 的权限，可以将 path 赋予 flink 用户权限：<br>hdfs dfs -chown flink:flink path。</span> |
| format                                     | 是       | 无           | String     | 文件类型，取值如下：<li>csv<li>json<li>avro<li>parquet<li>orc<li>debezium-json<li>canal-json<li>raw |
| sink.rolling-policy.file-size              | 否       | 128MB        | MemorySize | 文件最大大小，当达到阈值时，打开新文件写入。                 |
| sink.rolling-policy.rollover-interval      | 否       | 30min        | Duration   | 文件最大持续写入时间，当写入时间超过阈值时，打开新文件写入。 |
| sink.rolling-policy.check-interval         | 否       | 1min         | Duration   | 文件检查频率，按照设置的时间间隔，周期性检查是否需要写入到新文件。 |
| auto-compaction                            | 否       | false        | Boolean    | 是否启动自动 compaction，如果启动，数据会先被写到临时文件，等 checkpoint 结束，临时文件会被 compact。<br>临时文件在 compaction 之前不可见。 |
| compaction.file-size                       | 否       | 无           | MemorySize | compaction 目标文件大小，默认值同 sink.rolling-policy.file-size。 |
| sink.partition-commit.trigger              | 否       | process-time | String     | 分区提交策略，当分区创建超过 sink.partition-commit.delay 之后将这个分区提交。可选值包括：<li>process-time：当前时间 > 分区创建的物理时间 + delay 时，触发分区提交。<li>partition-time：watermark 时间 > 从 partition 值里提取的时间 + delay 时，触发分区提交。需要配合 wartermark 使用。 |
| sink.partition-commit.delay                | 否       | 0s           | Duration   | 分区提交延迟时间。如果是天分区，设置为 `1d`，如果是小时分区，设置为 `1h`。 |
| partition.time-extractor.kind              | 否       | default      | String     | 分区时间抽取方式。这个配置仅当 sink.partition-commit.trigger 配置为 partition-time 时生效。<li>default：可以配置 partition.time-extractor.timestamp-pattern。<li>custom：自定义提取器 class。 |
| partition.time-extractor.class             | 否       | 无           | String     | 分区时间抽取类，当 partition.time-extractor.kind 为 custom 时配置，该类需实现 PartitionTimeExtractor 接口。 |
| partition.time-extractor.timestamp-pattern | 否       | 无           | String     | 分区时间戳的抽取格式。<li>如果时间戳应该从单个分区字段 'dt' 提取，可以配置 '$dt'。<li>如果时间戳应该从多个分区字段中提取，如 'year'、'month'、'day' 和 'hour'，可以配置 '$year-$month-$day $hour:00:00'。<li>如果时间戳应该从两个分区字段 'dt' 和 'hour' 提取，可以配置 '$dt $hour:00:00'。 |
| sink.partition-commit.policy.kind          | 否       | 无           | String     | 分区提交策略，用于通知下游应用该分区已完成写入，可以读取。可选值包括：<li>success-file：在分区对应的目录下生成一个 '_SUCCESS' 的文件。<li>custom：用户实现的自定义分区提交策略。 |
| sink.partition-commit.policy.class         | 否       | 无           | String     | 分区提交策略类，当 sink.partition-commit.policy.kind 为 custom 时配置，该类需实现 PartitionCommitPolicy 接口。 |
| sink.partition-commit.success-file.name    | 否       | _SUCCESS     | String     | 分区提交成功文件名，当 sink.partition-commit.policy.kind 为 success-file 时配置，默认是`_SUCCESS`。 |

## 代码示例

```sql
-- 向 Flink SQL 中注册 Kafka topic 表
CREATE TABLE kafka_table (
  user_id STRING,
  order_amount DOUBLE,
  log_ts TIMESTAMP(3),
  WATERMARK FOR log_ts AS log_ts - INTERVAL '5' SECOND
) WITH (
  'connector' = 'kafka',
  'topic' = 'source',
  'properties.bootstrap.servers' = '<yourKafkaBrokers>',
  'properties.group.id' = '<yourKafkaConsumerGroupId>',
  'value.format' = 'json'
);
 
-- 向 Flink SQL 中注册 HDFS path 表
CREATE TABLE hdfs_table (
  user_id STRING,
  order_amount DOUBLE,
  dt STRING,
  `hour` STRING
) PARTITIONED BY (dt, `hour`) WITH (
  'connector'='filesystem',
  'path'='hdfs://$namenode:9000/path/to/whatever',
  'format'='parquet',
  'sink.partition-commit.delay'='1 h',
  'sink.partition-commit.policy.kind'='success-file'
);
 
-- 流式写入数据到 HDFS
INSERT INTO hdfs_table SELECT user_id, order_amount, DATE_FORMAT(log_ts, 'yyyy-MM-dd'), DATE_FORMAT(log_ts, 'HH') FROM kafka_table;
```