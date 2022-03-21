---
title: "数据库 PostgreSQL CDC"
description: 本小节主要介绍数据库 PostgreSQL CDC 内置 Connector。 
keywords: 大数据工作台,内置 Connector,PostgreSQL CDC
weight: 46
collapsible: false
draft: false
---



## 版本说明

- Flink版本：当前仅支持 Flink 1.12 版本。
- PostgreSQL 版本：
  - Database: 9.6, 10, 11, 12
  - JDBC Driver: 42.2.12

## 使用范围

PostgreSQL CDC 连接器支持对 PostgreSQL 数据库的全量和增量读取。

会先读取数据库快照，然后继续读取 binlog，即使发生故障，也可以保证 exactly-once。

PostgreSQL CDC 源不能并行读取，因为只有一个任务可以接收 binlog 事件。

## DDL 定义

```sql
-- 在 Flink SQL 里注册 PostgreSQL 表 'shipments'
CREATE TABLE shipments (
  shipment_id INT,
  order_id INT,
  origin STRING,
  destination STRING,
  is_arrived BOOLEAN
) WITH (
  'connector' = 'postgres-cdc',
  'hostname' = 'localhost',
  'port' = '5432',
  'username' = 'postgres',
  'password' = 'postgres',
  'database-name' = 'postgres',
  'schema-name' = 'public',
  'table-name' = 'shipments'
);  
```

## PostgreSQL CDC 源表 WITH 参数

| 参数值               | 是否必填 | 默认值      | 数据类型 | 描述                                                         |
| :------------------- | :------- | :---------- | :------- | :----------------------------------------------------------- |
| connector            | 是       | 无          | String   | 连接器，固定值为 `jdbc`。                                    |
| hostname             | 是       | 无          | String   | PostgreSQL 数据库 IP 地址。                                  |
| username             | 是       | 无          | String   | PostgreSQL 数据库用户名。                                    |
| password             | 是       | 无          | String   | PostgreSQL 数据库密码。                                      |
| database-name        | 是       | 无          | String   | PostgreSQL 数据库名称。                                      |
| schema-name          | 是       | 无          | String   | PostgreSQL 数据库 schema 名称。                              |
| table-name           | 是       | 无          | String   | PostgreSQL 表名。                                            |
| port                 | 否       | 5432        | Integer  | PostgreSQL 数据库端口号。                                    |
| decoding.plugin.name | 否       | decoderbufs | String   | PostgresSQL 逻辑解码插件名，可选值：decoderbufs、wal2json、wal2json_rds、wal2json_streaming、wal2json_rds_streaming 和 pgoutput。 |
| slot.name            | 否       | flink       | String   | PostgreSQL Replication Slot 名称，必须符合 [PostgreSQL Replication Slot 命名规则](https://www.postgresql.org/docs/current/static/warm-standby.html#STREAMING-REPLICATION-SLOTS-MANIPULATION)。 |
| debezium.*           | 否       | 无          | String   | 传递 Debezium 的属性，如：`'debezium.snapshot.mode' = 'never'`。更多信息请查看 [Debezium 的 PostgreSQL 连接器属性](https://debezium.io/documentation/reference/1.2/connectors/postgresql.html#postgresql-connector-properties)。 |

>  **说明**
>
>  slot.name 建议针对不同的表设置不同的值，以避免类似的错误：PSQLException: ERROR: replication slot "flink" is active for PID 974。

## 类型映射

| PostgreSQL CDC 字段类型                                      | Flink SQL 字段类型                 |
| :----------------------------------------------------------- | :--------------------------------- |
| SMALLINT<br/>INT2<br/>SMALLSERIAL<br/>SERIAL2                | SMALLINT                           |
| INTEGER<br/>SERIAL                                           | INT                                |
| BIGINT<br/>BIGSERIAL                                         | BIGINT                             |
| BIGINT                                                       | BIGINT                             |
| REAL<br/>FLOAT4                                              | FLOAT                              |
| FLOAT8<br/>DOUBLE PRECISION                                  | DOUBLE                             |
| NUMERIC(p, s)<br/>DECIMAL(p, s)                              | DECIMAL(p, s)                      |
| BOOLEAN                                                      | BOOLEAN                            |
| DATE                                                         | DATE                               |
| TIME [(p)] [WITHOUT TIMEZONE]                                | TIME [(p)] [WITHOUT TIMEZONE]      |
| TIMESTAMP [(p)] [WITHOUT TIMEZONE]                           | TIMESTAMP [(p)] [WITHOUT TIMEZONE] |
| <br/>CHAR(n)<br/>CHARACTER(n)<br/>VARCHAR(n)<br/>CHARACTER VARYING(n)<br/>TEXT | STRING                             |
| BYTEA                                                        | BYTES                              |
| ARRAY                                                        | ARRAY                              |

## 代码示例

```sql
-- 用 Flink SQL 注册 PostgreSQL 表 students，使用 CDC 机制流式获取 changelog
CREATE TABLE postgresql_cdc_source (
    id INT,
    name STRING,
    score INT,
    PRIMARY KEY (id) NOT ENFORCED
) WITH (
    'connector' = 'postgres-cdc',
    'hostname' = 'localhost',
    'port' = '5432',
    'username' = '$username',
    'password' = '$password',
    'database-name' = 'postgres',
    'schema-name' = 'public',
    'table-name' = 'students'
)
 
-- 用 Flink SQL 注册 ElasticSearch index stu
CREATE TABLE elasticsearch_sink (
    id INT,
    name STRING,
    score INT,
    PRIMARY KEY (id) NOT ENFORCED              --定义主键则根据主键 upsert，否则是 append 模式
) WITH (
    'connector' = 'elasticsearch-7',           --输出到 ElasticSearch7
    'hosts' = 'http://192.168.100.19:9200',    --ElasticSearch 连接地址
    'index' = 'stu',                           --ElasticSearch 的 Index 名
    'sink.flush-on-checkpoint' = 'true',       --checkpoint 时批量写入
    'sink.bulk-flush.max-actions' = '50',      --每批次最多的操作数
    'sink.bulk-flush.max-size' = '10mb',       --每批次累计最大大小
    'sink.bulk-flush.interval' = '1000ms',     --批量写入的间隔
    'connection.max-retry-timeout' = '1000ms', --每次请求的最大超时时间
    'format' = 'json'                          --输出数据格式，目前只支持 'json'
);
 
-- 将 PostgreSQL 表 students 的 upsert 流实时同步到 ElasticSearch 的 stu index 里
INSERT INTO elasticsearch_sink SELECT id, name, score FROM postgresql_cdc_source;
```
