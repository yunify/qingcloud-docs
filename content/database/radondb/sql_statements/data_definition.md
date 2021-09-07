---
title: "Data Definition"
description: 本小节主要介绍 RadonDB 支持的 Data Definition 语法。 
keywords: radondb SQL 集,
weight: 10
collapsible: false
draft: false
---



在 Data Definition 语法上， RadonDB 与 MySQL 兼容。

## ALTER TABLE

RadonDB 根据路由信息发送 SQL 到相应的后端执行引擎进行更改。

- 支持跨分区非原子操作。

**语法**

```sql
ALTER TABLE tbl_name alter_option

alter_option: {
    table_option
  | ADD COLUMN (col_name column_definition,...)
  | DROP COLUMN col_name
  | MODIFY COLUMN col_name column_definition

}

table_option: {
  ENGINE [=] engine_name
| CONVERT TO CHARACTER SET charset_name
}
```

### 增加列

**示例**

```sql
mysql> CREATE TABLE t1(a int primary key) PARTITION BY HASHa);
Query OK, 0 rows affected (0.16 sec)
    
mysql> ALTER TABLE t1 ADD COLUMN (b int, c varchar(100));
Query OK, 0 rows affected (0.10 sec)
    
mysql> SHOW CREATE TABLE t1\G;
*************************** 1. row ***************************
   Table: t1
Create Table: CREATE TABLE `t1` (
 `a` int(11) NOT NULL,
 `b` int(11) DEFAULT NULL,
 `c` varchar(100) DEFAULT NULL,
PRIMARY KEY (`a`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1
 1 row in set (0.00 sec)
```

### 更改表引擎

**示例**

```sql
mysql> CREATE TABLE t1(id int, age int) PARTITION BY HASH(id);
Query OK, 0 rows affected (1.76 sec)
   
mysql> SHOW CREATE TABLE t1\G
*************************** 1. row ***************************
   Table: t1
Create Table: CREATE TABLE `t1` (
`id` int(11) DEFAULT NULL,
`age` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8
/*!50100 PARTITION BY HASH (id) */
1 row in set (0.046 sec)
   
mysql> ALTER TABLE t1 ENGINE=TokuDB;
Query OK, 0 rows affected (0.15 sec)

mysql> SHOW CREATE TABLE t1\G
*************************** 1. row ***************************
    Table: t1
Create Table: CREATE TABLE `t1` (
`id` int(11) DEFAULT NULL,
`age` int(11) DEFAULT NULL
) ENGINE=TokuDB DEFAULT CHARSET=utf8
/*!50100 PARTITION BY HASH (id) */
1 row in set (0.095 sec)
```

### 更改表字符集

RadonDB 的表字符集默认为 **utf8**。

**示例**

```sql
mysql> create table t1(id int, b int) partition by hash(id);
Query OK, 0 rows affected (0.15 sec)

mysql> SHOW CREATE TABLE t1\G
*************************** 1. row ***************************
   Table: t1
Create Table: CREATE TABLE `t1` (
`id` int(11) DEFAULT NULL,
`b` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8
/*!50100 PARTITION BY HASH (id) */
1 row in set (0.097 sec)

mysql> alter table t1 convert to character set utf8mb4;
Query OK, 0 rows affected (0.07 sec)

mysql> SHOW CREATE TABLE t1\G
*************************** 1. row ***************************
   Table: t1
Create Table: CREATE TABLE `t1` (
`id` int(11) DEFAULT NULL,
`b` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
/*!50100 PARTITION BY HASH (id) */
1 row in set (0.045 sec)
```

### 删除列

> **注意**
> 
> 无法删除分区键所在的列。

**示例**

```sql
mysql>  ALTER TABLE t1 DROP COLUMN c;
Query OK, 0 rows affected (2.92 sec)

mysql> SHOW CREATE TABLE t1\G
*************************** 1. row ***************************
   Table: t1
Create Table: CREATE TABLE `t1` (
`id` int(11) DEFAULT NULL,
`age` int(11) DEFAULT NULL,
`b` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8
/*!50100 PARTITION BY HASH (id) */
1 row in set (0.092 sec)

mysql>  ALTER TABLE t1 DROP COLUMN id;
ERROR 1105 (HY000): unsupported: cannot.drop.the.column.on.shard.key
```

### 更改列定义

> **注意**
> 
> 无法修改分区键所在的列。

**示例**

```sql
mysql> ALTER TABLE t1 MODIFY COLUMN b bigint;
Query OK, 0 rows affected (4.09 sec)

mysql> SHOW CREATE TABLE t1\G
*************************** 1. row ***************************
    Table: t1
Create Table: CREATE TABLE `t1` (
`id` int(11) DEFAULT NULL,
`age` int(11) DEFAULT NULL,
`b` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8
/*!50100 PARTITION BY HASH (id) */
1 row in set (0.049 sec)

mysql>  ALTER TABLE t1 MODIFY COLUMN id bigint;
ERROR 1105 (HY000): unsupported: cannot.modify.the.column.on.shard.key
```

## CREATE DATABASE

RadonDB 会把此语句直接发到所有后端执行并返回。

- 支持跨分区非原子操作。

**语法**

```sql
CREATE DATABASE [IF NOT EXISTS] db_name
    [create_option] ...

create_option: {
    [DEFAULT] CHARACTER SET [=] charset_name
  | [DEFAULT] COLLATE [=] collation_name
}
```

**示例**

```sql
mysql> CREATE DATABASE sbtest1;
Query OK, 4 rows affected (0.01 sec)
```

## CREATE INDEX

- RadonDB 根据路由信息，发到相应的后端执行索引添加。
- 支持跨分区非原子操作。

**语法**

```sql
CREATE [UNIQUE | FULLTEXT | SPATIAL] INDEX index_name
    ON tbl_name (key_part,...)
    [index_option]
    [algorithm_option | lock_option] ...
	
key_part:
    col_name [(length)]

index_option:
    KEY_BLOCK_SIZE [=] value
  | index_type
  | WITH PARSER NGRAM
  | COMMENT 'string'

index_type:
    USING {BTREE | HASH}

algorithm_option:
    ALGORITHM [=] {DEFAULT | INPLACE | COPY}

lock_option:
    LOCK [=] {DEFAULT | NONE | SHARED | EXCLUSIVE}
```

**示例**

```sql
mysql> CREATE INDEX idx_id_age ON t1(id, age);
Query OK, 0 rows affected (0.17 sec)
```

## CREATE TABLE

- 创建分区信息并在各个分区生成分区表。

- 使用 `GLOBAL` 语法创建全局表，全局表在每个存储节点上都有一份完整的数据。可以把数据量小、变更较少的表设置为全局表，通常用来与分区表做关联查询。

- 使用 `SINGLE` 语法创建单表，单表只分布在第一个存储节点上。

- 使用 `DISTRIBUTED BY (backend-name)` 语法创建一个可以指定存储节点的单表。

- 使用 `PARTITION BY HASH(shard-key) PARTITIONS num` 语法创建 hash 分区表, 分区方式为 HASH，分表个数为 num （选填），根据分区键 HASH 值均匀分散在各个分区。

- 使用 `PARTITION BY LIST(shard-key)` 语法创建 list 分区表，分区方式为 `LIST`, `PARTITION ... VALUES IN (...)` 是一个分区。
  
  `LIST` 分区表达式的所有期望值都应包含在 `PARTITION ... VALUES IN（...）` 子句中。INSERT 语句如果包含不匹配分区列值将会报错。
  
- 建表语句不包含 `PARTITION BY HASH(shard-key)|LIST(shard-key)|SINGLE|GLOBAL|DISTRIBUTED BY (backend-name)` 时，将会创建一个 hash 分区表，选择表的主键索引或唯一索引作为分区键（不支持复合索引）。

- 分区键仅支持指定一个列， 该列数据类型没有限制 (BINARY/NULL 类型除外)。

- **table_options** 只支持 **ENGINE**、**COMMENT** 和 **CHARSET**，其他自动被忽略。

- 分区表默认引擎为 **InnoDB**。

- 表字符集默认为 **utf8**。

- 不支持非分区键的 `PRIMARY/UNIQUE` 约束，直接返回错误。

- 仅在语法级别上支持 `AUTO_INCREMENT`，该值不会生效。

- 不支持外键 `FOREIGN KEY`。

- 支持跨分区非原子操作。

**语法**

```sql
CREATE TABLE [IF NOT EXISTS] tbl_name
    (create_definition,...)
    [table_options]
    [partition_options]

create_definition: {
    col_name column_definition
  | {INDEX | KEY} [index_name] [index_type] (key_part,...)
      [index_option] ...
  | {FULLTEXT | SPATIAL} [INDEX | KEY] [index_name] (key_part,...)
      [index_option] ...
  | [CONSTRAINT [symbol]] PRIMARY KEY
      [index_type] (key_part,...)
      [index_option] ...
  | [CONSTRAINT [symbol]] UNIQUE [INDEX | KEY]
      [index_name] [index_type] (key_part,...)
      [index_option] ...
}

column_definition: {
    data_type [NOT NULL | NULL] [DEFAULT {literal | (expr)} ]
      [AUTO_INCREMENT] [UNIQUE [KEY]] [[PRIMARY] KEY]
      [COMMENT 'string']
      [COLLATE collation_name]
      [COLUMN_FORMAT {FIXED | DYNAMIC | DEFAULT}]
      [STORAGE {DISK | MEMORY}]
}

key_part: {col_name [(length)] | (expr)} [ASC | DESC]

index_type:
    USING {BTREE | HASH}

index_option: {
    KEY_BLOCK_SIZE [=] value
  | index_type
  | WITH PARSER parser_name
  | COMMENT 'string'
}

table_options:
    table_option [[,] table_option] ...

table_option: {
    AUTO_INCREMENT [=] value
  | AVG_ROW_LENGTH [=] value
  | [DEFAULT] CHARACTER SET [=] charset_name
  | CHECKSUM [=] {0 | 1}
  | [DEFAULT] COLLATE [=] collation_name
  | COMMENT [=] 'string'
  | COMPRESSION [=] {'ZLIB' | 'LZ4' | 'NONE'}
  | CONNECTION [=] 'connect_string'
  | {DATA | INDEX} DIRECTORY [=] 'absolute path to directory'
  | DELAY_KEY_WRITE [=] {0 | 1}
  | ENCRYPTION [=] {'Y' | 'N'}
  | ENGINE [=] {InnoDB | TokuDB}
  | INSERT_METHOD [=] { NO | FIRST | LAST }
  | KEY_BLOCK_SIZE [=] value
  | MAX_ROWS [=] value
  | MIN_ROWS [=] value
  | PACK_KEYS [=] {0 | 1 | DEFAULT}
  | PASSWORD [=] 'string'
  | ROW_FORMAT [=] {DEFAULT | DYNAMIC | FIXED | COMPRESSED | REDUNDANT | COMPACT}
  | STATS_AUTO_RECALC [=] {DEFAULT | 0 | 1}
  | STATS_PERSISTENT [=] {DEFAULT | 0 | 1}
  | STATS_SAMPLE_PAGES [=] value
  | TABLESPACE tablespace_name [STORAGE {DISK | MEMORY}]
}

partition_options:
      PARTITION BY HASH(shard-key)
    | PARTITION BY LIST(shard-key)(PARTITION backend VALUES IN (value_list),...)
    | SINGLE
    | GLOBAL
    | DISTRIBUTED BY (backend-name)
```

**示例**

```sql
mysql> CREATE TABLE t1(id int, age int) PARTITION BY HASH(id);
Query OK, 0 rows affected (1.80 sec)

mysql> CREATE TABLE t2(id int, age int) GLOBAL;
Query OK, 0 rows affected (1.80 sec)

mysql> CREATE TABLE t3(id int, age int) SINGLE;
Query OK, 0 rows affected (1.80 sec)

mysql> CREATE TABLE t4(id int, age int,primary key(id));
Query OK, 0 rows affected (1.110 sec)

mysql> CREATE TABLE t5(id int, age int) DISTRIBUTED BY (Bgd2aclf2peds630203362);
Query OK, 0 rows affected (1.110 sec)

mysql> CREATE TABLE h2 (c1 INT, c2 INT) PARTITION BY LIST(c1) (
       PARTITION p0 VALUES IN (1, 4, 7),
       PARTITION p1 VALUES IN (2, 5, 8)
       );
Query OK, 0 rows affected (1.110 sec)

mysql> CREATE TABLE t6(id int, age int) PARTITION BY HASH(id) PARTITIONS 16;
Query OK, 0 rows affected (1.80 sec)
```

## DROP DATABASE

- RadonDB 会把此语句直接发到所有后端并返回。
- 支持跨分区非原子操作。

**语法**

```sql
 DROP DATABASE [IF EXISTS] db_name
```

**示例**

```sql
mysql> DROP DATABASE sbtest1;
Query OK, 0 rows affected (0.02 sec)
```

## DROP INDEX

- RadonDB 根据路由信息，发到相应的后端执行索引删除。
- 支持跨分区非原子操作。

**语法**

```sql
  DROP INDEX index_name ON table_name
```

**示例**

```sql
mysql> DROP INDEX idx_id_age ON t1;
Query OK, 0 rows affected (0.09 sec)
```

## DROP TABLE

- 删除分区信息及后端分区表。
- 支持跨分区非原子操作。

**语法**

```sql
DROP TABLE [IF EXISTS] table_name
```

**示例**

```sql
mysql> DROP TABLE t1;
Query OK, 0 rows affected (0.05 sec)
```

## TRUNCATE TABLE

- 支持跨分区非原子操作。

**语法**

```sql
TRUNCATE TABLE table_name
```

**示例**

```sql
mysql> insert into t1(a) values(1);
Query OK, 1 row affected (0.01 sec)

mysql> select * from t1;
+------+
| a    |
+------+
|    1 |
+------+
1 row in set (0.01 sec)

mysql> truncate table t1;
Query OK, 0 rows affected (0.17 sec)

mysql> select * from t1;
Empty set (0.01 sec)
```
