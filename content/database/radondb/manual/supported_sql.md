---
title: "RadonDB 支持的 SQL 集"
description: 本小节主要介绍 RadonDB 支持的 SQL操作。 
keywords: radondb SQL 集,
data: 2021-05-14T00:38:25+09:00
weight: 70
collapsible: false
draft: false
---



在 SQL 语法上， RadonDB 与 MySQL 完全兼容。

在满足大部分需求场景下， RadonDB 的 SQL 实现只是 MySQL 一个子集，从而更好的使用和规范。

## Data Definition Statements

### ALTER TABLE

- RadonDB 根据路由信息发送 sql 到相应的后端执行引擎进行更改。
- *跨分区非原子操作*。

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
   
1. 增加列

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

2. 更改表引擎

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

3. 更改表字符集

   RadonDB 的表字符集默认为 utf8。

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

4. 删除列

   *无法删除分区键所在的列*。

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

5. 更改列定义

   *无法修改分区键所在的列*。

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

### CREATE DATABASE

`语法:`

```sql
CREATE DATABASE [IF NOT EXISTS] db_name
    [create_option] ...

create_option: {
    [DEFAULT] CHARACTER SET [=] charset_name
  | [DEFAULT] COLLATE [=] collation_name
}
```

`说明:`

* RadonDB 会把此语句直接发到所有后端执行并返回。
* *跨分区非原子操作*。

`示例:`

```sql
mysql> CREATE DATABASE sbtest1;
Query OK, 4 rows affected (0.01 sec)
```

### CREATE INDEX

* RadonDB 根据路由信息，发到相应的后端执行索引添加。
* *跨分区非原子操作*。

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

### CREATE TABLE

* 创建分区信息并在各个分区生成分区表。
* 使用 `GLOBAL` 语法创建全局表，全局表在每个存储节点上都有一份完整的数据。可以把数据量小、变更较少的表设置为全局表，通常用来与分区表做关联查询。
* 使用 `SINGLE` 语法创建单表，单表只分布在第一个存储节点上。
* 使用 `DISTRIBUTED BY (backend-name)` 语法创建一个可以指定存储节点的单表。
* 使用 `PARTITION BY HASH(shard-key) PARTITIONS num` 语法创建 hash 分区表, 分区方式为 HASH，分表个数为 num （选填），根据分区键 HASH 值均匀分散在各个分区。
* 使用 `PARTITION BY LIST(shard-key)` 语法创建 list 分区表，分区方式为 LIST, `PARTITION ... VALUES IN (...)` 是一个分区。
* LIST 分区表达式的所有期望值都应包含在 `PARTITION ... VALUES IN（...）` 子句中。INSERT 语句如果包含不匹配分区列值将会报错。
* 建表语句不包含 `PARTITION BY HASH(shard-key)|LIST(shard-key)|SINGLE|GLOBAL|DISTRIBUTED BY (backend-name)` 时，将会创建一个 hash 分区表，选择表的主键索引或唯一索引作为分区键（不支持复合索引）。
* 分区键仅支持指定一个列， 该列数据类型没有限制 (BINARY/NULL 类型除外)。
* table_options 只支持 ENGINE、COMMENT 和 CHARSET，其他自动被忽略。
* 分区表默认引擎为 InnoDB。
* 表字符集默认为 utf8。
* 不支持非分区键的 PRIMARY/UNIQUE 约束，直接返回错误。
* 仅在语法级别上支持 AUTO_INCREMENT，该值不会生效。
* 不支持外键 FOREIGN KEY。
* *跨分区非原子操作*。

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

### DROP DATABASE

* RadonDB 会把此语句直接发到所有后端并返回。
* *跨分区非原子操作*。

**语法**

```sql
 DROP DATABASE [IF EXISTS] db_name
```

**示例**

```sql
mysql> DROP DATABASE sbtest1;
Query OK, 0 rows affected (0.02 sec)
```

### DROP INDEX

* RadonDB 根据路由信息，发到相应的后端执行索引删除。
* *跨分区非原子操作*。

**语法**

```sql
  DROP INDEX index_name ON table_name
```

**示例**

```sql
mysql> DROP INDEX idx_id_age ON t1;
Query OK, 0 rows affected (0.09 sec)
```

### DROP TABLE

* 删除分区信息及后端分区表。
* *跨分区非原子操作*。

**语法**

```sql
DROP TABLE [IF EXISTS] table_name
```

**示例**

```sql
mysql> DROP TABLE t1;
Query OK, 0 rows affected (0.05 sec)
```

### TRUNCATE TABLE

*跨分区非原子操作*。

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

## Data Manipulation Statements

### DELETE

* 支持分布式事务，保证跨分区删除原子性。
*  *不支持无 WHERE 条件删除。*
*  *不支持子句。*

**语法**

```sql
DELETE FROM tbl_name
    [WHERE where_condition]
```

**示例**

```sql
mysql> DELETE FROM t1 WHERE id=1;
Query OK, 2 rows affected (0.01 sec)
```

### INSERT

* 支持分布式事务，保证跨分区写入原子性。
* 支持 insert 多个值，这些值可以在不同分区。
* 必须指定写入列。
*  *不支持子句*。

**语法**

```sql
INSERT INTO tbl_name
    (col_name,...)
    {VALUES | VALUE}
```

**示例**

```sql
mysql> INSERT INTO t1(id, age) VALUES(1, 24), (2, 28), (3, 29);
Query OK, 3 rows affected (0.01 sec)
```

### REPLACE

* 支持分布式事务，保证跨分区写入原子性。
* 支持 replace 多个值，这些值可以在不同分区。
* 必须指定写入列。

**语法**

```sql
REPLACE INTO tbl_name
    [(col_name,...)]
    {VALUES | VALUE} ({expr | DEFAULT},...),(...),...
```

**示例**

```sql
mysql> REPLACE INTO t1 (id, age) VALUES(3,34),(5, 55);
Query OK, 2 rows affected (0.01 sec)
```

### SELECT

* 支持跨分区的 count, sum, avg, max, min 等聚合函数， 支持含有 distinct 的聚合函数，聚合函数只对数值型有效。
* 支持跨分区的 order by, group by, limit 等操作， *group by 字段必须在 select_expr 中*。
* 支持 left &#124; right outer 和 inner &#124; cross join。*不可下推的 join 场景，select_expr 不能有 \**
* 支持 sort-merge join 和 nested-loop join。默认使用 sort-merge join。
* 支持UNION [ALL &#124; DISTINCT]。
* *不支持 having 子句中包含聚合函数的场景*
* *不支持子查询*

**语法**

```sql
SELECT
    [DISTINCT]
    select_expr [, select_expr ...]
    [FROM table_references
    [WHERE where_condition]
    [GROUP BY {col_name}
    [HAVING where_condition]
    [ORDER BY {col_name}
      [ASC | DESC], ...]
    [LIMIT {[offset,] row_count | row_count OFFSET offset}]
```

**JOIN 语法**

```sql
table_references:
    table_reference [, escaped_table_reference] ...
table_reference:
    table_factor
  | join_table
table_factor:
    [schema_name.]tbl_name [[AS] alias]
  | ( table_references )
join_table:
    table_reference [INNER | CROSS] JOIN table_factor [join_condition]
  | table_reference {LEFT|RIGHT} [OUTER] JOIN table_reference join_condition
join_condition:
    ON conditional_expr
```

**UNION 语法**

```sql
SELECT ...
UNION [ALL | DISTINCT] SELECT ...
[UNION [ALL | DISTINCT] SELECT ...]
```

**示例**

```sql
mysql> SELECT id, age, sum(id), avg(age) FROM t1 GROUP BY id ORDER BY id DESC LIMIT 10;
+------+------+---------+----------+
| id   | age  | sum(id) | avg(age) |
+------+------+---------+----------+
|    1 |   25 |       2 |       26 |
|    3 |   32 |       3 |       32 |
+------+------+---------+----------+
2 rows in set (0.01 sec)

mysql> select 1 + 1;
+-------+
| 1 + 1 |
+-------+
|     2 |
+-------+
1 row in set (0.00 sec)

mysql> select date_format(now(),'%y-%m-%d') FROM DUAL;
+-------------------------------+
| date_format(now(),'%y-%m-%d') |
+-------------------------------+
| 18-06-18                      |
+-------------------------------+
1 row in set (0.00 sec)

mysql> select t1.id, t1.age,t2.id from t1 join t2 on t1.age=t2.age where t2.id > 10 order by t1.id;
+------+------+------+
| id   | age  | id   |
+------+------+------+
|    1 |   22 |   23 |
|    1 |   22 |   13 |
|    3 |   22 |   23 |
|    3 |   22 |   13 |
+------+------+------+
4 rows in set (1.056 sec)
```

### UPDATE

* 支持分布式事务，保证跨分区更新原子性。
* *不支持无 WHERE 条件更新*。
* *不支持更新分区键*。
*  *不支持子句*。

**语法**

```sql
UPDATE table_reference
    SET col_name1={expr1|DEFAULT} [, col_name2={expr2|DEFAULT}] ...
    [WHERE where_condition]
```

**示例**

```sql
mysql> UPDATE t1 set age=age+1 WHERE id=1;
Query OK, 1 row affected (0.00 sec)
```

## Database Administration Statements

### CHECKSUM

校验表的数据一致性。

**语法**

```sql
CHECKSUM TABLE  [database_name.]table_name
```

**示例**

```sql
mysql> checksum table test.t1;
+----------+------------+
| Table    | Checksum   |
+----------+------------+
| test.t1  | 2464930879 |
+----------+------------+
1 row in set (0.00 sec)
```

### KILL

KILL 某个链接，包含终止链接正在执行的语句。

**语法**

```sql
KILL processlist_id
```

**示例**

```sql
mysql> show processlist;
+------+------+-----------------+------+---------+------+-------+------+-----------+---------------+
| Id   | User | Host            | db   | Command | Time | State | Info | Rows_sent | Rows_examined |
+------+------+-----------------+------+---------+------+-------+------+-----------+---------------+
|   11 | mock | 127.0.0.1:43028 | test | Sleep   |  291 |       |      |         0 |             0 |
+------+------+-----------------+------+---------+------+-------+------+-----------+---------------+
1 row in set (0.00 sec)

mysql> kill 11;
ERROR 2013 (HY000): Lost connection to MySQL server during query
```

### SET

* 为了兼容 JDBC/mydumper 。
* SET 是一个空操作，*除了 autocommit 和 radon_streaming_fetch，其他操作并不会生效*，请勿直接使用。

### SHOW

SHOW 具有许多形式，可提供有关 database, table, columns 或有关服务器状态的信息。

1. SHOW CHARSET

   该语句列出所有可用的字符集。

   **语法**

   ```sql
   SHOW CHARSET
   ```

   **示例**

   ```
   mysql> show charset;
   +----------+---------------------------------+---------------------+--------+
   | Charset  | Description                     | Default collation   | Maxlen |
   +----------+---------------------------------+---------------------+--------+
   | big5     | Big5 Traditional Chinese        | big5_chinese_ci     |      2 |
   | dec8     | DEC West European               | dec8_swedish_ci     |      1 |
   | cp850    | DOS West European               | cp850_general_ci    |      1 |
   | hp8      | HP West European                | hp8_english_ci      |      1 |
   | koi8r    | KOI8-R Relcom Russian           | koi8r_general_ci    |      1 |
   | latin1   | cp1252 West European            | latin1_swedish_ci   |      1 |
   | latin2   | ISO 8859-2 Central European     | latin2_general_ci   |      1 |
   | swe7     | 7bit Swedish                    | swe7_swedish_ci     |      1 |
   ... ...
   41 rows in set (0.02 sec)
   ```

2. SHOW COLLATION

   该语句列出所有支持的校验字符集。

   **语法**

   ```sql
   SHOW COLLATION
   ```

   **示例**

   ```
   mysql> SHOW COLLATION;
   +--------------------------+----------+-----+---------+----------+---------+
   | Collation                | Charset  | Id  | Default | Compiled | Sortlen |
   +--------------------------+----------+-----+---------+----------+---------+
   | big5_chinese_ci          | big5     |   1 | Yes     | Yes      |       1 |
   | big5_bin                 | big5     |  84 |         | Yes      |       1 |
   | dec8_swedish_ci          | dec8     |   3 | Yes     | Yes      |       1 |
   | dec8_bin                 | dec8     |  69 |         | Yes      |       1 |
   | cp850_general_ci         | cp850    |   4 | Yes     | Yes      |       1 |
   | cp850_bin                | cp850    |  80 |         | Yes      |       1 |
   | hp8_english_ci           | hp8      |   6 | Yes     | Yes      |       1 |
   | hp8_bin                  | hp8      |  72 |         | Yes      |       1 |
   | koi8r_general_ci         | koi8r    |   7 | Yes     | Yes      |       1 |
   ... ...
   222 rows in set (0.05 sec)
   ```

3. SHOW ENGINES

   后端分区 MySQL 支持的引擎列表。

   **语法**

   ```sql
   SHOW ENGINES
   ```

   **示例**

   ```sql
   mysql> SHOW ENGINES;
   +--------------------+---------+----------------------------------------------------------------------------+--------------+------+------------+
   | Engine             | Support | Comment                                                                    | Transactions | XA   | Savepoints |
   +--------------------+---------+----------------------------------------------------------------------------+--------------+------+------------+
   | MyISAM             | YES     | MyISAM storage engine                                                      | NO           | NO   | NO         |
   | MRG_MYISAM         | YES     | Collection of identical MyISAM tables                                      | NO           | NO   | NO         |
   | InnoDB             | DEFAULT | Percona-XtraDB, Supports transactions, row-level locking, and foreign keys | YES          | YES  | YES        |
   | BLACKHOLE          | YES     | /dev/null storage engine (anything you write to it disappears)             | NO           | NO   | NO         |
   | CSV                | YES     | CSV storage engine                                                         | NO           | NO   | NO         |
   | PERFORMANCE_SCHEMA | YES     | Performance Schema                                                         | NO           | NO   | NO         |
   | ARCHIVE            | YES     | Archive storage engine                                                     | NO           | NO   | NO         |
   | TokuDB             | YES     | Percona TokuDB Storage Engine with Fractal Tree(tm) Technology             | YES          | YES  | YES        |
   | FEDERATED          | NO      | Federated MySQL storage engine                                             | NULL         | NULL | NULL       |
   | MEMORY             | YES     | Hash based, stored in memory, useful for temporary tables                  | NO           | NO   | NO         |
   +--------------------+---------+----------------------------------------------------------------------------+--------------+------+------------+
   10 rows in set (0.00 sec)
   ```

4. SHOW DATABASES

   包含系统 DB，比如 mysql， information_schema。
   
   **语法**

   ```sql
   SHOW DATABASES
   ```

   **示例**

   ```sql
   mysql> SHOW DATABASES;
   +--------------------+
   | Database           |
   +--------------------+
   | information_schema |
   | mysql              |
   | performance_schema |
   | sbtest1            |
   | sys                |
   +--------------------+
   5 rows in set (0.00 sec)
   ```

5. SHOW TABLES

   如果未指定 db_name, 则返回当前 DB 下的表。
   
   **语法**

   ```sql
   SHOW [FULL] TABLES
   [FROM db_name]
   [LIKE 'pattern' | WHERE expr]
   ```

   **示例**
   ```sql
   mysql> SHOW TABLES;
   +----------------+
   | Tables_in_test |
   +----------------+
   | t1             |
   | t2             |
   +----------------+
   2 rows in set (0.00 sec)
   ```

6. SHOW TABLE STATUS

    如果未指定 db_name, 则返回当前 DB 下的表。
    
    **语法**

   ```sql
   SHOW TABLE STATUS
   [FROM db_name]
   ```

   **示例**

   ```sql
   mysql> show table status;
   +--------+--------+---------+------------+------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+---------------------+------------+-----------------+----------+----------------+---------+
   | Name   | Engine | Version | Row_format | Rows | Avg_row_length | Data_length | Max_data_length | Index_length | Data_free | Auto_increment | Create_time         | Update_time         | Check_time | Collation       | Checksum | Create_options | Comment |
   +--------+--------+---------+------------+------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+---------------------+------------+-----------------+----------+----------------+---------+
   | b      | InnoDB |      10 | Dynamic    |    6 |          16384 |       16384 |               0 |            0 |         0 |           NULL | 2018-12-24 08:26:24 | 2019-01-22 08:31:47 | NULL       | utf8_general_ci |     NULL |                |         |
   | g      | InnoDB |      10 | Dynamic    |    1 |          16384 |       16384 |               0 |            0 |         0 |           NULL | 2018-12-24 08:26:24 | 2019-02-28 03:20:46 | NULL       | utf8_general_ci |     NULL |                          |         |
   +--------+--------+---------+------------+------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+---------------------+------------+-----------------+----------+----------------+---------+
   2 rows in set (0.08 sec)
   ```

7. SHOW COLUMNS

   获取表的列定义。
   **语法**

   ```sql
   SHOW [FULL] {COLUMNS | FIELDS} 
   FROM [db_name.]table_name
   [LIKE 'pattern' | WHERE expr]
   ```

   **示例**

   ```sql
   mysql> CREATE TABLE T1(A INT, B VARCHAR(10)) PARTITION BY HASH(A);
   Query OK, 0 rows affected (0.52 sec)

   mysql> SHOW COLUMNS FROM T1;
   +-------+-------------+------+-----+---------+-------+
   | Field | Type        | Null | Key | Default | Extra |
   +-------+-------------+------+-----+---------+-------+
   | A     | int(11)     | YES  |     | NULL    |       |
   | B     | varchar(10) | YES  |     | NULL    |       |
   +-------+-------------+------+-----+---------+-------+
   2 rows in set (0.01 sec)
   ```

8. SHOW CREATE TABLE

   **语法**

   ```sql
   SHOW CREATE TABLE table_name
   ```

   **示例**

   ```sql
   mysql> SHOW CREATE TABLE t1\G;
   *************************** 1. row ***************************
       Table: t1
   Create Table: CREATE TABLE `t1` (
     `id` int(11) DEFAULT NULL,
     `b` int(11) DEFAULT NULL
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8
   1 row in set (0.00 sec)
   ```

8. SHOW PROCESSLIST

   显示的为 client 到 RadonDB 的连接情况，并非后端分区 MySQL。
   **语法**

   ```sql
   SHOW PROCESSLIST
   ```

   **示例**

   ```sql
   mysql> SHOW PROCESSLIST;
   +------+------+-------------------+------+---------+------+-------+------+-----------+---------------+
   | Id   | User | Host              | db   | Command | Time | State | Info | Rows_sent | Rows_examined |
   +------+------+-------------------+------+---------+------+-------+------+-----------+---------------+
   |    1 | mock | 192.168.0.3:35346 | test | Sleep   |  379 |       |      |         0 |             0 |
   +------+------+-------------------+------+---------+------+-------+------+-----------+---------------+
   1 row in set (0.00 sec)
   ```

10. SHOW VARIABLES
   
   * 为了兼容 JDBC/mydumper 。
   * SHOW VARIABLES 命令会发往后端分区 MySQL (随机分区)获取并返回。

   **语法**

   ```sql
   SHOW VARIABLES
    [LIKE 'pattern' | WHERE expr]
   ```

### USE DATABASE

切换当前 session 的 database。

**语法**

```sql
USE db_name
```

**示例**

```sql
mysql> use test;
Database changed
```

## Transactional and Locking Statements

### Transaction

 * 支持多语句事务。
 * 必须开启 RadonDB 参数 `twopc-enable`。
 * 支持单条事务 autocommit (twopc-enable ON)。
  
**语法**

```sql
BEGIN
COMMIT
ROLLBACK
```

**示例**

```sql
mysql> create table txntbl(a int);
Query OK, 0 rows affected (0.01 sec)

mysql> begin;
Query OK, 0 rows affected (0.00 sec)

mysql> insert into txntbl(a) values(1),(2);
Query OK, 4 rows affected (0.00 sec)

mysql> select * from txntbl;
+------+
| a    |
+------+
|    1 |
|    2 |
+------+
2 rows in set (0.01 sec)

mysql> rollback;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from txntbl;
Empty set (0.00 sec)

mysql> begin;
Query OK, 0 rows affected (0.00 sec)

mysql> insert into txntbl(a) values(1),(2);
Query OK, 4 rows affected (0.00 sec)

mysql> commit;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from txntbl;
+------+
| a    |
+------+
|    1 |
|    2 |
+------+
2 rows in set (0.00 sec)
```

## Radon

### RADON ATTACH

* 附加一个 MySQL 到 RadonDB 的 backend。
* 在 backend 中类型为 `attach`.

**语法**

```sql
RADON ATTACH($address,$user,$password)
```

**示例**

```sql
mysql> radon attach('127.0.0.1:3306','root','123456');
Query OK, 0 rows affected (0.94 sec)
```

### RADON ATTACHLIST

列出类型为 attach 的 backend.

**示例**

```sql
mysql> radon attachlist;
+----------------+----------------+------+
| Name           | Address        | User |
+----------------+----------------+------+
| 127.0.0.1:3306 | 127.0.0.1:3306 | root |
+----------------+----------------+------+
1 row in set (0.00 sec)
```

### RADON DETACH

将一个类型为 attach 的 backend 从 RadonDB 中剥离。

**语法**

```sql
RADON DETACH($address)
```

**示例**

```sql
mysql> radon detach('127.0.0.1:3306');
Query OK, 0 rows affected (0.22 sec)

mysql> radon attachlist;
Empty set (0.00 sec)
```

### RADON RESHARD

* 将数据从一个 single 表转移到另一个 hash 分区表。
* 执行后立即返回，迁移将在后台运行。
* single 表必须带有主键。

**语法**

```sql
RADON RESHARD tbl_name TO new_tbl_name
```

**示例**

```sql
mysql> show tables;
Empty set (0.10 sec)

mysql> create table t1(a int primary key, b varchar(255)) single;
Query OK, 0 rows affected (0.13 sec)

mysql> insert into t1(a,b) values(1,'a'),(2,'b');
Query OK, 2 rows affected (0.10 sec)

mysql> radon reshard t1 to new_tb;
Query OK, 0 rows affected (0.00 sec)

mysql> show tables;
+---------------+
| Tables_in_zzq |
+---------------+
| t1            |
| new_tb        |
+---------------+
2 rows in set (0.10 sec)

mysql> show create table new_tb;
+--------+----------------------------------------------------------------+
| Table  | Create Table                                                   |
+--------+----------------------------------------------------------------+
| new_tb | CREATE TABLE `new_tb` (
  `a` int(11) NOT NULL,
  `b` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`a`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
/*!50100 PARTITION BY HASH(a) */ |
+--------+----------------------------------------------------------------+
1 row in set (0.05 sec)

mysql> select * from new_tb;
+---+------+
| a | b    |
+---+------+
| 1 | a    |
| 2 | b    |
+---+------+
2 rows in set (1.09 sec)
```

### RADON CLEANUP

用于数据重分布之后，旧数据的清理。

**示例**

```sql
mysql> radon cleanup;
Empty set (0.00 sec)
```

### RADON REBALANCE

* 这条指令旨在让节点之间的数据重新均衡分布，每次从一个后端节点只迁移一张分区表到另一个后端节点。可重复执行，直至数据分布均衡。
* *指令执行时，客户端会阻塞；若执行 ctrl+c 或者退出客户端，操作将会在后台继续进行。*

**示例**

```sql
mysql> radon rebalance;
Query OK, 0 rows affected (39.09 sec)
```

## Hint

### 流式读取

* 查询结果集比较大时，可通过流式读取方式获取数据。
* 方式一：执行 `set @@SESSION.radon_streaming_fetch='ON'` 开启流式读取，查询语句执行完成后执行 `set @@SESSION.radon_streaming_fetch='OFF'` 关闭流式读取。
* 方式二：通过在查询语句中加 hint `/*+ streaming */` 的方式流式读取。
* *不支持复杂查询*

**示例**

```sql
mysql> select /*+ streaming */ * from t1;
Empty set (0.00 sec)
```

### 读写分离

* 配置参数 `load-balance` 为 1 时，默认查询会从存储节点的高可用读 ip 获取数据，有可能存在因从节点延时而无法获取实时数据。
* 因此支持通过加 hint `/*+ loadbalance=0 */` 方式强制从存储节点高可用写 ip 查询数据；若为 `/*+ loadbalance=1 */` 则强制从高可用读 ip 查询。

**示例**

```sql
mysql> select /*+ loadbalance=0 */ * from t1;
Empty set (0.00 sec)

mysql> select /*+ loadbalance=1 */ * from t1;
Empty set (0.00 sec)
```

## Others

### AUTO INCREMENT

* 使用 golang 的 UnixNano() 作为唯一标识。
* AUTO_INCREMENT 字段类型必须是 BIGINT。

**示例**

```sql
mysql> CREATE TABLE animals (
    ->      id BIGINT NOT NULL AUTO_INCREMENT,
    ->      name CHAR(30) NOT NULL,
    ->      PRIMARY KEY (id)
    -> ) PARTITION BY HASH(id);
Query OK, 0 rows affected (0.14 sec)

mysql> INSERT INTO animals (name) VALUES
    ->     ('dog'),('cat'),('penguin'),
    ->     ('lax'),('whale'),('ostrich');
Query OK, 6 rows affected (0.01 sec)

mysql> SELECT * FROM animals;
+---------------------+---------+
| id                  | name    |
+---------------------+---------+
| 1553090617754346084 | lax     |
| 1553090617754346082 | cat     |
| 1553090617754346085 | whale   |
| 1553090617754346081 | dog     |
| 1553090617754346083 | penguin |
| 1553090617754346086 | ostrich |
+---------------------+---------+
6 rows in set (0.02 sec)
```

### N-Gram Full Text Parser

* 支持 Full-Text Search，提供支持中文，日文和韩文 (CJK) 的 n-gram full-text parser。
* RadonDB 的 Full-Text 分片表查询时并行执行(而 MySQL 的分区表并不支持 Full-Text Indexes 或 Searches)。

**示例**

```sql
mysql>CREATE TABLE `articles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL,
  `body` text,
  PRIMARY KEY (`id`),
  FULLTEXT INDEX `ngram_idx` (`title`,`body`) WITH PARSER ngram
) ENGINE=InnoDB PARTITION BY HASH(id);
1 row in set (0.01 sec)

mysql>INSERT INTO articles (title,body) VALUES
    ('数据库管理','在本教程中我将向你展示如何管理数据库'),
    ('数据库应用开发','学习开发数据库应用程序');
1 row in set (0.02 sec)

mysql>SELECT title from articles  WHERE MATCH (title, body) AGAINST ('数据库' IN BOOLEAN MODE);
+-----------------------+
| title                 |
+-----------------------+
| 数据库应用开发        |
| 数据库管理            |
+-----------------------+
2 rows in set (0.04 sec)
```
