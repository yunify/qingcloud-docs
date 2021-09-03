---
title: "Database Administration"
description: 本小节主要介绍 RadonDB 支持的 Database Administration 语法。 
keywords: radondb SQL 集,
weight: 30
collapsible: false
draft: false
---



在 Database Administration 语法上， RadonDB 与 MySQL 兼容。

## CHECKSUM

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

## KILL

KILL 某个连接，包含终止连接正在执行的语句。

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

## SET

- 为了兼容 JDBC/mydumper 。

- SET 是一个空操作，除了 `autocommit 和 radon_streaming_fetch` 其他操作并不生效，请勿直接使用。

## SHOW

`SHOW` 具有许多形式，可提供有关 database，table，columns 或有关服务器状态的信息。

## SHOW CHARSET

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

### SHOW COLLATION

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

### SHOW ENGINES

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

### SHOW DATABASES

包含系统 DB，比如 mysql，information_schema。
   
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

### SHOW TABLES

如果未指定 `db_name`，则返回当前 DB 下的表。
   
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

### SHOW TABLE STATUS

若未指定 `db_name`，则返回当前 DB 下的表。
    
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

### SHOW COLUMNS

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

### SHOW CREATE TABLE

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

### SHOW PROCESSLIST

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

### SHOW VARIABLES

- 为了兼容 JDBC/mydumper 。

- `SHOW VARIABLES` 命令会发往后端分区 MySQL (随机分区)获取并返回。

**语法**

```sql
SHOW VARIABLES
 [LIKE 'pattern' | WHERE expr]
```

## USE DATABASE

切换当前分区 的 Database。

**语法**

```sql
USE db_name
```

**示例**

```sql
mysql> use test;
Database changed
```
