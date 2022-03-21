---
title: "数据库 MySQL"
description: 本小节主要介绍数据库 MySQL 内置 Connector。 
keywords: 大数据工作台,内置 Connector,MySQL
weight: 30
collapsible: false
draft: false
---



## 版本说明

当前仅支持 Flink 1.12 版本。

## 使用范围

使用 JDBC 驱动程序从 MySQL 中读取数据或将数据写入其中。    
支持作为数据源、维表、数据目的。

## DDL 定义

```sql
CREATE TABLE mysql_table (
  id BIGINT,
  name STRING,
  age INT,
  status BOOLEAN,
  PRIMARY KEY (id) NOT ENFORCED
) WITH (
   'connector' = 'jdbc',
   'url' = 'jdbc:mysql://localhost:3306/demo',
   'table-name' = 'users',
   'username' = 'root',
   'password' = '123456'
);
```

## 源表 WITH 参数

| 参数                       | 是否必填 | 默认值 | 数据类型 | 描述                                                         |
| :------------------------- | :------- | :----- | :------- | :----------------------------------------------------------- |
| connector                  | 是       | 无     | String   | 连接器，固定值为 `jdbc`。                                     |
| url                        | 是       | 无     | String   | MySQL 数据库 JDBC URL。                                       |
| table-name                 | 是       | 无     | String   | MySQL 表名。                                                 |
| driver                     | 否       | 无     | String   | JDBC 驱动程序的类名，如果未设置，将自动从 url 获取。         |
| username                   | 是       | 无     | String   | MySQL 数据库用户名。                                          |
| password                   | 是       | 无     | String   | MySQL 数据库密码。                                             |
| scan.partition.column      | 否       | 无     | Integer  | 指定对输入数据进行分区扫描的列名。该列必须是数值类型、日期类型或时间戳类型。 |
| scan.partition.num         | 否       | 无     | Integer  | 分区扫描启用后，指定分区数。                                 |
| scan.partition.lower-bound | 否       | 无     | Integer  | 分区扫描启用后，指定第一个分区的最小值。                     |
| scan.partition.upper-bound | 否       | 无     | Integer  | 分区扫描启用后，指定最后一个分区的最大值。                   |
| scan.fetch-size            | 否       | 0      | Integer  | 每次从数据库读取时，批量获取的行数。                         |
| scan.auto-commit           | 否       | true   | Boolean  | [自动提交](https://docs.oracle.com/javase/tutorial/jdbc/basics/transactions.html#commit_transactions)标志，决定每个语句是否在事务中自动提交。 |

> **说明**
> 
> - `scan.partition.lower-bound` 和 `scan.partition.upper-bound` 仅用于决定分区步长，而不是用于过滤表中的行。所以表中的所有行都会被分区并返回。
> - 分区扫描功能可以加速读取数据，每个子任务可以读取自己的分区。使用该功能时，四个 `scan.partition` 开头的参数都必须指定。

## 维表 WITH 参数

| 参数                  | 是否必填 | 默认值 | 数据类型 | 描述                                                         |
| :-------------------- | :------- | :----- | :------- | :----------------------------------------------------------- |
| connector             | 是       | 无     | String   | 连接器，固定值为 `jdbc`。                                    |
| url                   | 是       | 无     | String   | MySQL 数据库 JDBC URL。                                      |
| table-name            | 是       | 无     | String   | MySQL 表名。                                                 |
| driver                | 否       | 无     | String   | JDBC 驱动程序的类名，如果未设置，将自动从 url 获取。         |
| username              | 是       | 无     | String   | MySQL 数据库用户名。                                         |
| password              | 是       | 无     | String   | MySQL 数据库密码。                                           |
| lookup.cache.max-rows | 否       | 无     | Integer  | Lookup 缓存中最多缓存的数据行数。超过此值，最旧的行将过期。默认情况下禁用查找缓存。 |
| lookup.cache.ttl      | 否       | 无     | Duration | Lookup 缓存中每条记录最长的缓存时间。超过此时间，最旧的行将过期。默认情况下禁用 Lookup 缓存。 |
| lookup.max-retries    | 否       | 3      | Integer  | 数据库查询失败时，最多重试的次数。                           |

> **说明**
> 
> - Lookup 缓存提升维表读取性能，目前仅支持同步读取模式。
> - 默认情况下，Lookup 缓存未启用，所有请求需要请求数据库。
> - 通过设置 `lookup.cache.max-rows` 和 `lookup.cache.ttl` 可以启用 Lookup 缓存，这时每个进程（即 TaskManager）都会持有一份缓存。Flink 会先查找缓存，缓存未命中时会向数据库发送请求，并根据返回的值更新缓存。

## 结果表 WITH 参数

| 参数                       | 是否必填 | 默认值 | 数据类型 | 描述                                                         |
| :------------------------- | :------- | :----- | :------- | :----------------------------------------------------------- |
| connector                  | 是       | 无     | String   | 连接器，固定值为 `jdbc`。                                    |
| url                        | 是       | 无     | String   | MySQL 数据库 JDBC URL。                                      |
| table-name                 | 是       | 无     | String   | MySQL 表名。                                                 |
| driver                     | 否       | 无     | String   | JDBC 驱动程序的类名，如果未设置，将自动从 url 获取。         |
| username                   | 是       | 无     | String   | MySQL 数据库用户名。                                         |
| password                   | 是       | 无     | String   | MySQL 数据库密码。                                           |
| sink.buffer-flush.max-rows | 否       | 100    | Integer  | 批量输出时，最多缓存的数据行数。设置为 0 表示禁用输出缓存。  |
| sink.buffer-flush.interval | 否       | 1s     | Duration | 每隔多久异步线程自动批量输出数据。设置为 0 表示禁用自动异步输出。 |
| sink.max-retries           | 否       | 3      | Integer  | 数据库写入失败时，最多重试的次数。                           |

> **说明**
> 
> - 如果在 DDL 上定义了主键，则 sink 以 upsert 模式与外部系统交换 UPDATE/DELETE 消息，否则，它以 append 模式运行，不支持消费 UPDATE/DELETE 消息。
> - 对于 MySQL 表，Upsert 功能的实现采用 `INSERT .. ON DUPLICATE KEY UPDATE ..` 语法。

## 类型映射

| MySQL 字段类型                          | Flink SQL 字段类型                 |
| :-------------------------------------- | :--------------------------------- |
| TINYINT                                 | TINYINT                            |
| SMALLINT<br/>TINYINT UNSIGNED           | SMALLINT                           |
| INT<br/>MEDIUMINT<br/>SMALLINT UNSIGNED | INT                                |
| BIGINT<br/>INT UNSIGNED                 | BIGINT                             |
| BIGINT<br/>UNSIGNED                     | DECIMAL(20, 0)                     |
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
-- 用 Flink SQL 注册 MySQL 表 users
CREATE TABLE MyUserTable (
  id BIGINT,
  name STRING,
  age INT,
  status BOOLEAN,
  PRIMARY KEY (id) NOT ENFORCED
) WITH (
   'connector' = 'jdbc',
   'url' = 'jdbc:mysql://localhost:3306/mydatabase',
   'table-name' = 'users'
);
 
CREATE TABLE MY_DIM (
    key BIGINT,
    desc STRING,
    rt AS PROCTIME(),
    PRIMARY KEY (key) NOT ENFORCED
) WITH (
    'connector' = 'jdbc',
    'url' = 'jdbc:mysql://localhost:3306/mydatabase',
    'table-name' = 'user_extr'
);

-- 从另一张表 T 迁移数据到 MyUserTable 表
INSERT INTO MyUserTable
SELECT id, name, age, status FROM T;
 
-- 查看数据
SELECT id, name, age, status FROM MyUserTable;
 
-- 将 MyUserTable 作为维表与其他流式数据源进行 temporal join
SELECT * FROM MyUserTable LEFT JOIN MY_DIM FOR SYSTEM_TIME AS OF MY_DIM.rt
ON MY_DIM.key = MyUserTable.id;
```

### 示例二

```sql
-- 利用 datagen 随机生成数据源数据
CREATE TEMPORARY TABLE datagen_source(
    name STRING,
    age INT
) WITH (
    'connector' = 'datagen'
)
 
-- 用 Flink SQL 注册 MySQL 表 students
CREATE TEMPORARY TABLE mysql_sink(
    name VARCHAR,
    age INT
) WITH (
    'connector' = 'jdbc'
    'url' = 'jdbc://mysql://localhost:3306/mydb',
    'table-name' = 'students',
    'username' = 'root',
    'password' = '123456'
)
 
INSERT INTO mysql_sink
SELECT * FROM datagen_source;
```

