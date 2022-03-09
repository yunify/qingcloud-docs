---
title: "数据库 HBase"
description: 本小节主要介绍如何。 
keywords: 
weight: 50
collapsible: false
draft: false
---



## 版本说明

当前仅支持 Flink 1.12 版本。

## 使用范围

HBase 作为结果表写入数据。

## DDL 定义

```sql
CREATE TABLE hTable (
 rowkey INT,
 family1 ROW<q1 INT>,
 family2 ROW<q2 STRING, q3 BIGINT>,
 family3 ROW<q4 DOUBLE, q5 BOOLEAN, q6 STRING>,
 PRIMARY KEY (rowkey) NOT ENFORCED
) WITH (
 'connector' = 'hbase-2.2',
 'table-name' = 'mytable',
 'zookeeper.quorum' = 'localhost:2181'
);
```

## HBase 结果表参数

| 参数值                     | 必填 | 默认值 | 数据类型   | 描述                                                         |
| :------------------------- | :--- | :----- | :--------- | :----------------------------------------------------------- |
| connector                  | 是   | 无     | String     | 固定值为 `hbase-2.2`。                                       |
| table-name                 | 是   | 无     | String     | HBase 表名。                                                 |
| zookeeper.quorum           | 是   | 无     | String     | HBase 的 zookeeper地址。                                     |
| zookeeper.znode.parent     | 否   | /hbase | String     | HBase 在 zookeeper 中的根目录。                              |
| null-string-literal        | 否   | 空     | String     | HBase 字段类型为字符串时，如果 Flink 字段数据为 null，则将该字段赋值为 null-string-literal，并写入 HBase。 |
| sink.buffer-flush.max-size | 否   | 2mb    | MemorySize | 写入 HBase 前，内存中缓存的数据量（字节）大小。调大该值有利于提高 HBase 写入性能，但会增加写入延迟和内存使用。 |
| sink.buffer-flush.max-rows | 否   | 1000   | Integer    | 写入 HBase 前，内存中缓存的数据条数。调大该值有利于提高HBase写入性能，但会增加写入延迟和内存使用。 |
| sink.buffer-flush.interval | 否   | 1s     | Duration   | 将缓存数据周期性写入到 HBase 的间隔，可以控制写入 HBase 的延迟。 |
| sink.parallelism           | 否   | 无     | Integer    | 写入 HBase 的 operator 的并行度。                            |


## 内置 Connector

SQL 作业中使用 hbase connector 时，您需要在运行参数中选择 `flink-connector-hbase` 内置 Connector。

## 类型映射

| HBase 字段类型                                               | Flink 字段类型            |
| :----------------------------------------------------------- | :------------------------ |
| byte[] toBytes(String s) <br>String toString(byte[] b)       | CHAR<br>VARCHAR<br>STRING |
| byte[] toBytes(boolean b)                                    | BOOLEAN                   |
| byte[]                                                       | BINARY<br/>VARBINARY      |
| byte[] toBytes(BigDecimal v)                                 | DECIMAL                   |
| new byte[] { val }                                           | TINYINT                   |
| byte[] toBytes(short val)                                    | SMALLINT                  |
| byte[] toBytes(int val)                                      | INT                       |
| byte[] toBytes(long val)                                     | BIGINT                    |
| byte[] toBytes(float val)                                    | FLOAT                     |
| byte[] toBytes(double val)                                   | DOUBLE                    |
| 将日期转换成自 1970.01.01 以来的天数，用 int 表示，并通过 byte[] toBytes(int val) 转换成字节数组。 | DATE                      |
| 将时间转换成自 00:00:00 以来的毫秒数，用 int 表示，并通过 byte[] toBytes(int val) 转换成字节数组。 | TIME                      |
| 将时间戳转换成自 1970-01-01 00:00:00 以来的毫秒数，用 long 表示，并通过 byte[] toBytes(long val) 转换成字节数组。 | TIMESTAMP                 |

## 代码示例

```sql
CREATE TEMPORARY TABLE datagen_source (
  rowkey INT,
  f1q1 INT,
  f2q1 STRING,
  f2q2 BIGINT,
  f3q1 DOUBLE,
  f3q2 BOOLEAN,
  f3q3 STRING
) with (
  'connector'='datagen'
);
 
CREATE TEMPORARY TABLE hbase_sink (
  rowkey INT,
  family1 ROW<q1 INT>,
  family2 ROW<q1 STRING, q2 BIGINT>,
  family3 ROW<q1 DOUBLE, q2 BOOLEAN, q3 STRING>,
  PRIMARY KEY (rowkey) NOT ENFORCE
) with (
  'connector'='cloudhbase',
  'table-name'='demo',
  'zookeeper.quorum'='localhost:2181'
);
  
INSERT INTO hbase_sink
SELECT rowkey, ROW(f1q1), ROW(f2q1, f2q2), ROW(f3q1, f3q2, f3q3) FROM datagen_source;
```
