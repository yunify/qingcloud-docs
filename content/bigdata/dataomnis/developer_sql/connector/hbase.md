---
title: "数据库 HBase"
description: 本小节主要介绍数据库 HBase 内置 Connector。 
keywords: 大数据工作台,内置 Connector,HBase
weight: 50
collapsible: false
draft: false
---



## 版本说明

当前仅支持 Flink 1.12 版本。

## 使用范围

支持读取和写入 HBase 集群。

## DDL 定义

> **注意**
>
> - HBase 表所有列簇需要声明为 ROW 类型，内部定义列名和类型，可定义多组。
> - 非 ROW 类型的字段会被识别为 rowkey，rowkey 可以定义为任意名字。

```sql
-- 在 Flink SQL 里注册 HBase 表 'mytable'
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
 'zookeeper.znode.parent' = '/hbase/cl-8wry3tmz'
);
```

## HBase 源表 WITH 参数

| 参数值                 | 是否必填 | 默认值 | 数据类型 | 描述                                                         |
| ---------------------- | -------- | ------ | -------- | ------------------------------------------------------------ |
| connector              | 是       | 无     | String   | 连接器，目前支持 `hbase-2.2`。                               |
| table-name             | 是       | 无     | String   | HBase 表名。                                                 |
| zookeeper.quorum       | 是       | 无     | String   | HBase 的 zookeeper 地址。                                    |
| zookeeper.znode.parent | 是       | /hbase | String   | HBase 在 zookeeper 中的根目录，请根据实际情况进行配置。例如：`/hbase/{集群id}`。                              |
| null-string-literal    | 否       | null   | String   | HBase 字段类型为 String 时，遇到空值则将该字段赋值为当前参数值。 |

## HBase 维表 WITH 参数

| 参数值                 | 是否必填 | 默认值 | 数据类型 | 描述                                                         |
| ---------------------- | -------- | ------ | -------- | ------------------------------------------------------------ |
| connector              | 是       | 无     | String   | 连接器，目前支持 `hbase-2.2`。                               |
| table-name             | 是       | 无     | String   | HBase 表名。                                                 |
| zookeeper.quorum       | 是       | 无     | String   | HBase 的 zookeeper 地址。                                    |
| zookeeper.znode.parent | 是       | /hbase | String   | HBase 在 zookeeper 中的根目录，请根据实际情况进行配置。例如：`/hbase/{集群id}`。                              |
| null-string-literal    | 否       | null   | String   | HBase 字段类型为 String 时，遇到空值则将该字段赋值为当前参数值。 |

## HBase 结果表 WITH 参数

| 参数值                     | 是否必填 | 默认值 | 数据类型   | 描述                                                         |
| :------------------------- | :------- | :----- | :--------- | :----------------------------------------------------------- |
| connector                  | 是       | 无     | String     | 连接器，目前支持 `hbase-2.2`。                               |
| table-name                 | 是       | 无     | String     | HBase 表名。                                                 |
| zookeeper.quorum           | 是       | 无     | String     | HBase 的 zookeeper 地址。                                    |
| zookeeper.znode.parent     | 是       | /hbase | String     | HBase 在 zookeeper 中的根目录，请根据实际情况进行配置。例如：`/hbase/{集群id}`。                             |
| null-string-literal        | 否       | null   | String     | HBase 字段类型为 String 时，遇到空值则将该字段赋值为当前参数值。 |
| sink.buffer-flush.max-size | 否       | 2mb    | MemorySize | 每次写入请求在内存中缓存的数据量。调大该值有利于提高 HBase 写入性能，但会增加写入延迟。设置为 `0` 禁用。 |
| sink.buffer-flush.max-rows | 否       | 1000   | Integer    | 每次写入请求在内存中缓存的数据行数。调大该值有利于提高 HBase 写入性能，但会增加写入延迟。设置为 `0` 禁用。 |
| sink.buffer-flush.interval | 否       | 1s     | Duration   | 周期性 flush 缓存数据到 HBase 的时间间隔。可以提高 HBase 写入性能，但会增加写入延迟。设置为 `0`' 禁用。 |
| sink.parallelism           | 否       | 无     | Integer    | HBase sink 算子的并行度，默认情况下，框架使用上游算 子相同的平行度。 |

## 类型映射

HBase 将所有数据存储为字节数组。

| Flink 字段类型          | HBase 字段类型                                               |
| :---------------------- | ------------------------------------------------------------ |
| CHAR / VARCHAR / STRING | byte[] toBytes(String s) <br>String toString(byte[] b)       |
| BOOLEAN                 | byte[] toBytes(boolean b)<br>boolean toBoolean(byte[] b)     |
| BINARY / VARBINARY      | byte[] 按原样返回。                                          |
| DECIMAL                 | byte[] toBytes(BigDecimal v)<br>BigDecimal toBigDecimal(byte[] b) |
| TINYINT                 | new byte[] { val }<br>bytes[0] // returns first and only byte from bytes |
| SMALLINT                | byte[] toBytes(short val)<br/>short toShort(byte[] bytes)    |
| INT                     | byte[] toBytes(int val)<br/>int toInt(byte[] bytes)          |
| BIGINT                  | byte[] toBytes(long val)<br/>long toLong(byte[] bytes)       |
| FLOAT                   | byte[] toBytes(float val)<br/>float toFloat(byte[] bytes)    |
| DOUBLE                  | byte[] toBytes(double val)<br/>double toDouble(byte[] bytes) |
| DATE                    | 将日期转换成自 1970.01.01 以来的天数，用 int 表示。          |
| TIME                    | 将时间转换成自 00:00:00 以来的毫秒数，用 int 表示。          |
| TIMESTAMP               | 将时间戳转换成自 1970-01-01 00:00:00 以来的毫秒数，用 long 表示。 |
| ARRAY                   | 不支持                                                       |
| MAP / ULTISET           | 不支持                                                       |
| ROW                     | 不支持                                                       |


## 代码示例

```sql
-- 使用 datagen 连接器生成随机数据
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

-- 在 Flink SQL 里注册 HBase 表 'demo'
CREATE TEMPORARY TABLE hbase_sink (
  rowkey INT,
  family1 ROW<q1 INT>,
  family2 ROW<q1 STRING, q2 BIGINT>,
  family3 ROW<q1 DOUBLE, q2 BOOLEAN, q3 STRING>,
  PRIMARY KEY (rowkey) NOT ENFORCE
) with (
  'connector'='hbase-2.2',
  'table-name'='demo',
  'zookeeper.quorum'='localhost:2181'
  'zookeeper.znode.parent' = '/hbase/cl-8wry3tmz'
);

-- 从 datagen_source 中读取数据并写入 hbase_sink 中
INSERT INTO hbase_sink
SELECT rowkey, ROW(f1q1), ROW(f2q1, f2q2), ROW(f3q1, f3q2, f3q3) FROM datagen_source;
```
