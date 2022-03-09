---
title: "数据库 PostgreSQL"
description: 本小节主要介绍如何。 
keywords: 
weight: 45
collapsible: false
draft: false
---



## 版本说明

当前仅支持 Flink 1.12 版本。

## 使用范围

支持批量写数据至PostgreSQL。

## DDL 定义

```sql
CREATE TABLE pg_table (
  id BIGINT,
  name STRING,
  age INT,
  status BOOLEAN,
  PRIMARY KEY (id) NOT ENFORCED
) WITH (
   'connector' = 'jdbc',
   'url' = 'jdbc:postgresql://localhost:5433/demo',
   'table-name' = 'users',
   'username' = 'root',
   'password' = '123456'
);
```

## PostgreSQL 结果表参数

| 参数值                       | 必填 | 默认值 | 数据类型 | 描述                                                         |
| :--------------------------- | :--- | :----- | :------- | :----------------------------------------------------------- |
| connector                    | 是   | 无     | String   | 固定值为 `jdbc`。                                            |
| url                          | 是   | 无     | String   | PostgreSQL 服务的 URL 地址。                                 |
| username                     | 是   | 无     | String   | PostgreSQL 服务用户名。                                      |
| password                     | 是   | 无     | String   | PostgreSQL 服务用户名对应的密码。                            |
| driver                       | 否   | 无     | String   | jdbc driver。                                                |
| connection.max-retry-timeout | 否   | 60s    | Duration | PostgreSQL 的最大重试连接超时时间。                          |
| table-name                   | 是   | 无     | String   | PostgreSQL 服务对应写入表名。                                |
| sink.max-retries             | 否   | 3      | Integer  | 写入数据失败后，最大的重试次数。                             |
| sink.buffer-flush.max-rows   | 否   | 100    | Integer  | 内存中缓存的数据条数。                                       |
| sink.buffer-flush.interval   | 否   | 1s     | Duration | 清空缓存的时间间隔。<br>表示如果缓存中的数据在等待指定时间后，依然没有达到输出条件，系统会自动输出缓存中的所有数据。 |
| sink.parallelism             | 否   | 无     | Integer  | 写入的并行度。                                               |

## 内置 Connector

SQL 作业中使用 postgresql 数据源时，您需要在运行参数中选择 `flink-connector-postgresql` 内置 Connector。

## 类型映射

| PostgreSQL 字段类型                      | Flink 字段类型                     |
| :--------------------------------------- | :--------------------------------- |
| TINYINT                                  | TINYINT                            |
| SMALLINT<br> TINYINT UNSIGNED            | SMALLINT                           |
| INT <br/>MEDIUMINT<br/>SMALLINT UNSIGNED | INT                                |
| BIGINT <br/>INT UNSIGNED                 | BIGINT                             |
| BIGINT UNSIGNED                          | DECIMAL(20, 0)                     |
| BIGINT                                   | BIGINT                             |
| FLOAT                                    | FLOAT                              |
| DOUBLE<br/>DOUBLE PRECISION              | DOUBLE                             |
| NUMERIC(p, s) <br>DECIMAL(p, s)          | DECIMAL(p, s)                      |
| BOOLEAN <br/>TINYINT(1)                  | BOOLEAN                            |
| DATE                                     | DATE                               |
| TIME [(p)]                               | TIME [(p)] [WITHOUT TIMEZONE]      |
| DATETIME [(p)]                           | TIMESTAMP [(p)] [WITHOUT TIMEZONE] |
| CHAR(n)<br/>VARCHAR(n)<br/>TEXT          | STRING                             |
| BINARY<br/> VARBINARY<br/>BLOB           | BYTES                              |

## 代码示例

```sql
CREATE TEMPORARY TABLE datagen_source(
    name STRING,
    age INT
) WITH (
    'connector' = 'datagen'
)
 
CREATE TEMPORARY TABLE mysql_sink(
    name VARCHAR,
    age INT
) WITH (
    'connector' = 'jdbc'
    'url' = 'jdbc://postgresql://localhost:5433/mydb',
    'table-name' = 'students',
    'username' = 'root',
    'password' = '123456'
)
 
INSERT INTO mysql_sink
SELECT * FROM datagen_source;
```
