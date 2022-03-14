---
title: "数据库 MySQL CDC"
description: 本小节主要介绍数据库 MySQL CDC 内置 Connector。 
keywords: 大数据工作台,内置 Connector,MySQL CDC
weight: 40
collapsible: false
draft: false
---



## 版本说明

当前仅支持 Flink 1.12 版本。

## 使用范围

作为源表实时同步 MySQL 数据。

## DDL 定义

```sql
CREATE TABLE mysqlcdc_source (
   id INT,
   name STRING,
   PRIMARY KEY(id) NOT ENFORCED
) WITH (
  'connector' = 'mysql-cdc',
  'hostname' = 'localhost',
  'port' = '3306',
  'username' = 'root',
  'password' = 'root',
  'database-name' = 'base_db',
  'table-name' = 'students'
);
```

## CDC 源表参数

| 参数                                     | 是否必填 | 默认值  | 数据类型 | 描述                                                         |
| :--------------------------------------- | :------- | :------ | :------- | :----------------------------------------------------------- |
| connector                                | 是       | 无      | String   | 固定值为 `mysql-cdc`。                                       |
| hostname                                 | 是       | 无      | String   | MySQL 数据库服务 IP 地址。                                   |
| username                                 | 是       | 无      | String   | MySQL 数据库服务的用户名。                                   |
| password                                 | 是       | 无      | String   | MySQL 数据库服务的密码。                                     |
| database-name                            | 是       | 无      | String   | MySQL 数据库名称，支持正则匹配多个数据库。                   |
| table-name                               | 是       | 无      | String   | MySQL 表名，支持正则匹配多张表名。                           |
| port                                     | 否       | 3306    | String   | MySQL 数据库服务的端口号。                                   |
| server-id                                | 否       | 无      | String   | 数据库客户端的一个数字ID，该ID必须是MySQL集群中全局唯一的，建议针对同一个数据库的每个作业都设置一个不同的ID。默认会随机生成一个5400~6400的值。该参数也支持ID范围的格式，例如5400-5408。在开启增量读取模式时支持多并发读取，此时推荐设定为ID范围，使得每个并发使用不同的ID。 |
| scan.incremental.snapshot.enabled        | 否       | true    | Boolean  | 默认开启增量快照。增量快照是一种读取全量数据快照的新机制。与旧的快照读取相比，增量快照有如下优点。<li>读取全量数据时，Source 可以并行读取。<li>读取全量数据时，Source 支持 chunk 粒度的检查点。<li>读取全量数据时，Source 不需要获取全局锁（FLUSH TABLES WITH read lock）。 |
| scan.incremental.snapshot.chunk.size     | 否       | 8096    | Integer  | 表的 chunk 的行数，当开启增量快照读取时，表会被切分成多个 chunk 读取，在读完 chunk 的数据之前，chunk 的数据会缓存在内存中，因此要把握好 chunk 的大小。 |
| scan.snapshot.fetch.size                 | 否       | 1024    | Integer  | 当读取表全量数据时，每次最多拉去的记录数。                   |
| scan.startup.mode                        | 否       | initial | String   | 启动模式。<li>initial：在第一次启动时，会先扫描全量数据，然后从最新的 Binlog 读取。<li>lastest-offset：在第一次启动时，不会扫描历史全量数据，直接从 Binlog 的末尾开始读取，只读取该 Connector 启动以后最新的变化。 |
| server-time-zone                         | 否       | UTC     | String   | 该参数决定 MySQL 中的 timestamp 类型如何装换成String 类型。  |
| debezium.min.row.count.to.stream.results | 否       | 1000    | Integer  | 当表的条数大于该值，则使用分批读取模式。<li>全量读取：直接将整个表的数据读取到内存中，速度快，但是消耗过大内存可能会造成 OOM。<li>分批读取：分多次读取，每次读取一定数量的行数，知道读取完所有数据，没有 OOM 风险，但是读取速度相对较慢。 |
| connect.timeout                          | 否       | 30s     | Duration | 在尝试连接 MySQL 数据服务器之后，连接器在超时之前应该等待的最大时间。 |


## 内置 Connector

SQL 作业中使用 mysql-cdc connector 时，您需要在运行参数中选择 `flink-connector-mysql-cdc` 内置 Connector。

## 代码示例

```sql
-- MySQL CDC：订单表
CREATE TEMPORARY TABLE orders (
    order_id VARCHAR,
    cate_id VARCHAR,
    trans_amount BIGINT,
    gmt_create VARCHAR,
    dt AS DATE_FORMAT(gmt_create,'yyyy-MM-dd'),
    PRIMARY KEY (order_id) NOT ENFORCED
) WITH (
    'connector' = 'mysql-cdc',
    'hostname' = 'localhost',
    'port' = '3306',
    'username' = 'root',
    'password' = '123456',
    'database-name' = 'retail',
    'table-name' = 'orders'
)
 
-- MySQL CDC:类目表
CREATE TEMPORARY TABLE cate_dim(
    cate_id VARCHAR,
    parent_cate_id VARCHAR,
    PRIMARY KEY(cate_id) NOT ENFORCED
) WITH (
    'connector' = 'mysql-cdc',
    'hostname' = 'localhost',
    'port' = '3306',
    'username' = 'root',
    'password' = '123456',
    'database-name' = 'retail',
    'table-name' = 'category'
)
 
-- Flink 动态表: DWD 订单类目宽表
CREATE TEMPORARY TABLE dwd_orders_cate(
    dt STRING,
    parent_cate_id VARCHAR,
    cate_id VARCHAR,
    order_id VARCHAR,
    trans_amount BIGINT,
    gmt_create STRING,
    PRIMARY KEY (order_id,dt) NOT ENFORCED
)PARTITIONED BY (dt)
 
-- Flink 动态表: DWS 类目指标聚合表
CREATE TABLE dws_cate_day(
    dt STRING,
    parent_cate_id VARCHAR,
    cate_gmv BIGINT,
    PARMARY KEY (parent_cate_id,dt) NOT ENFORCED
)PARTITIONED BY (dt)
 
-- 流作业: 两张MySQL CDC表join写入DWD
INSERT INTO dwd_orders_cate
SELECT
    s.dt,
    d.parent_cate_id,
    s.cate_id,
    s.order_id,
    s.trans_amount,
    s.gmt_create
FROM orders s INNER JOIN cate_dim d
ON s.cate_id = d.cate_id
 
-- 流作业: DWD经过聚合后写入DWS
INSERT INTO dws_cate_day
SELECT
    dt,
    parent_cate_id,
    SUM(trans_amount) AS cate_gmv
FROM dwd_order_cate
GROUP BY parent_cate_id,dt;
```
