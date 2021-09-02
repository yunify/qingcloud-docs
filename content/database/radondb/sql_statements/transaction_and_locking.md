---
title: "Transactional and Locking"
description: 本小节主要介绍 RadonDB 支持的 Transactional and Locking 语法。 
keywords: radondb SQL 集,
weight: 40
collapsible: false
draft: false
---



在 Transactional and Locking 语法上， RadonDB 与 MySQL 兼容。

## Transaction

- 支持多语句事务。

- 必须开启 RadonDB 参数 `twopc-enable`。

- 支持单条事务 `autocommit`，`twopc-enable` 值为 **ON**。
  
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
