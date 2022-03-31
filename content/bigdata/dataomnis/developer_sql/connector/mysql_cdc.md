---
title: "数据库 MySQL CDC"
description: 本小节主要介绍数据库 MySQL CDC 内置 Connector。 
keywords: 大数据工作台,内置 Connector,MySQL CDC
weight: 40
collapsible: false
draft: false
---



## 版本说明

- Flink版本：当前仅支持 Flink 1.12 版本。
- MySQL 版本：
    - Database: 5.7, 8.0.x
    - JDBC Driver: 8.0.16

## 使用范围

MySQL CDC 连接器支持对 MySQL 数据库的全量和增量读取。底层使用了 Debezium 来做 CDC。

会先读取数据库快照，然后继续读取 binlog，即使发生故障，也可以保证 exactly-once。

MySQL CDC 源不能并行读取，因为只有一个任务可以接收 binlog 事件。

## 原理

当 MySQL CDC source 启动时，会获取一个全局读锁，以阻止其他数据库客户端的写入操作。然后读取当前的 binlog 位置以及数据库和表的 schema 信息。之后会释放全局读锁，允许其他数据库客户端对数据库进行写操作。扫描全表，并从 binlog 记录位置处开始读取。Flink 作业会周期性的执行 checkpoint 来记录 binlog 位置，当作业崩溃恢复时，便会从之前记录的 Binlog 点继续处理，从而保证 Exactly Once 语义。

> **注意**
> 
> 全局读锁被持有期间，会阻塞写，可能需要几秒钟，具体取决于表的数量，这段时间会影响在线业务。

## 前提条件

为 MySQL CDC 连接器创建用户，并配置适当的权限。

1. 创建 MySQL 用户。

    ```sql
    mysql> CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
    ```

2. 授予用户所需的权限。

    ```sql
    mysql> GRANT SELECT, RELOAD, SHOW DATABASES, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'user' IDENTIFIED BY 'password';
    ```

3. 确认用户的权限。

    ```sql
    mysql> FLUSH PRIVILEGES;
    ```
    

详细信息请参考：[权限说明](https://debezium.io/documentation/reference/1.5/connectors/mysql.html#mysql-creating-user)。

## DDL 定义

```sql
-- 在 Flink SQL 里注册 MySQL 表 'orders'
CREATE TABLE orders (
  order_id INT,
  order_date TIMESTAMP(0),
  customer_name STRING,
  price DECIMAL(10, 5),
  product_id INT,
  order_status BOOLEAN
) WITH (
  'connector' = 'mysql-cdc',
  'hostname' = 'localhost',
  'port' = '3306',
  'username' = '$username',
  'password' = '$password',
  'database-name' = 'mydb',
  'table-name' = 'orders'
);
```

## MySQL CDC 源表参数

| 参数                                     | 是否必填 | 默认值 | 数据类型 | 描述                                                         |
| :--------------------------------------- | :------- | :----- | :------- | :----------------------------------------------------------- |
| connector                                | 是       | 无     | String   | 连接器，固定值为 `mysql-cdc`。                               |
| hostname                                 | 是       | 无     | String   | MySQL 数据库 IP 地址。                                       |
| username                                 | 是       | 无     | String   | MySQL 数据库用户名。                                         |
| password                                 | 是       | 无     | String   | MySQL 数据库密码。                                           |
| database-name                            | 是       | 无     | String   | MySQL 数据库名称，支持正则匹配多个数据库。                   |
| table-name                               | 是       | 无     | String   | MySQL 表名，支持正则匹配多张表名。                           |
| port                                     | 否       | 3306   | String   | MySQL 数据库端口号。                                         |
| server-id                                | 否       | 无     | String   | 数据库客户端的一个数字ID，该ID必须是MySQL集群中全局唯一的，建议针对同一个数据库的每个作业都设置一个不同的 ID。默认会随机生成一个 5400~6400 的值。该参数也支持 ID 范围的格式，例如 5400-5408。 |
| server-time-zone                         | 否       | UTC    | String   | 会话时区，例如："Asia/Shanghai"。控制 MYSQL 中的 TIMESTAMP 类型如何转换为 STRING。详细请[参考](https://debezium.io/documentation/reference/1.2/connectors/mysql.html#_temporal_values)。 |
| debezium.min.row.count.to.stream.results | 否       | 1000   | Integer  | 首次读取数据时，当表的条数大于该值，则使用分批读取模式。设置为 '0' 跳过检查始终用流式传输读取数据。 |
| debezium.*                               | 否       | 无     | String   | 传递 Debezium 的属性，如：`'debezium.snapshot.mode' = 'never'`。更多信息请查看 [Debezium 的 MySQL 连接器属性](https://debezium.io/documentation/reference/1.2/connectors/mysql.html#mysql-connector-configuration-properties_debezium)。 |

## 类型映射

| MySQL 字段类型                          | Flink SQL 字段类型                 |
| :-------------------------------------- | :--------------------------------- |
| TINYINT                                 | TINYINT                            |
| SMALLINT<br/>TINYINT UNSIGNED           | SMALLINT                           |
| INT<br/>MEDIUMINT<br/>SMALLINT UNSIGNED | INT                                |
| BIGINT<br/>INT UNSIGNED                 | BIGINT                             |
| BIGINT UNSIGNED                         | DECIMAL(20, 0)                     |
| BIGINT                                  | BIGINT                             |
| FLOAT                                   | FLOAT                              |
| DOUBLE<br/>DOUBLE PRECISION             | DOUBLE                             |
| NUMERIC(p, s)<br/>DECIMAL(p, s)         | DECIMAL(p, s)                      |
| BOOLEAN<br/>TINYINT(1)                  | BOOLEAN                            |
| DATE                                    | DATE                               |
| TIME [(p)]                              | TIME [(p)] [WITHOUT TIMEZONE]      |
| DATETIME [(p)]                          | TIMESTAMP [(p)] [WITHOUT TIMEZONE] |
| CHAR(n)<br/>VARCHAR(n)<br/>TEXT         | STRING                             |
| BINARY<br/>VARBINARY<br/>BLOB           | BYTES                              |

## 代码示例

### 示例一

```sql
-- 用 Flink SQL 注册 MySQL 表 students，使用 CDC 机制流式获取 changelog
CREATE TABLE mysql_cdc_source (
    id INT,
    name STRING,
    score INT,
    PRIMARY KEY (id) NOT ENFORCED
) WITH (
    'connector' = 'mysql-cdc',
    'hostname' = 'localhost',
    'port' = '3306',
    'username' = '$username',
    'password' = '$password',
    'database-name' = 'detail',
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
 
-- 将 MySQL 表 students 的 upsert 流实时同步到 ElasticSearch 的 stu index 里
INSERT INTO elasticsearch_sink SELECT id, name, score FROM mysql_cdc_source;
```

### 示例二

```sql
-- MySQL CDC：订单表
CREATE TABLE orders (
    amount DECIMAL,
    currency STRING,
    order_time AS PROCTIME()
) WITH (
    'connector' = 'mysql-cdc',
    'hostname' = 'localhost',
    'port' = '3306',
    'username' = 'root',
    'password' = '123456',
    'database-name' = 'retail',
    'table-name' = 'orders'
)
 
-- MySQL :汇率表
CREATE TABLE currency_rates(
    currency STRING,
    rate DECIMAL,
    update_time TIMESTAMPE(3)
) WITH (
    'connector' = 'jdbc',
    'url' = 'jdbc:mysql://localhost:3306/demo',
    'table-name' = 'cate_dim',
    'username' = 'root',
    'password' = 'password'
)
 
CREATE TABLE print_sink(
    amount DECIMAL
) WITH (
    'connector' = 'print'
)
 
SELECT
  SUM(amount * rate) AS amount
FROM
  orders,
  LATERAL TABLE (rates(order_time))
WHERE
  rates.currency = orders.currency
```

