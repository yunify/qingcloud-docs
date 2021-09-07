---
title: "RADON"
description: 本小节主要介绍 Radon 语法。 
keywords: radondb SQL 集,
weight: 60
collapsible: false
draft: false
---



Radon 是 QingCloud 自研内核，具备以下 SQL 语法形式和使用规范。

## RADON ATTACH

- 附加一个 MySQL 到 RadonDB 的 backend。

- 在 backend 中类型为 `attach`.

**语法**

```sql
RADON ATTACH($address,$user,$password)
```

**示例**

```sql
mysql> radon attach('127.0.0.1:3306','root','123456');
Query OK, 0 rows affected (0.94 sec)
```

## RADON ATTACHLIST

列出类型为 `attach` 的 backend。

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

## RADON DETACH

将一个类型为 `attach` 的 backend 从 RadonDB 中剥离。

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

## RADON RESHARD

- 将数据从一个 **single** 表转移到另一个 hash 分区表。

- 执行后立即返回，迁移将在后台运行。

- **single** 表必须带有主键。

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

## RADON CLEANUP

用于数据重分布之后，旧数据的清理。

**示例**

```sql
mysql> radon cleanup;
Empty set (0.00 sec)
```

## RADON REBALANCE

这条指令旨在让节点之间的数据重新均衡分布，每次从一个后端节点只迁移一张分区表到另一个后端节点。可重复执行，直至数据分布均衡。

- 当指令执行时，客户端会阻塞；

- 若执行 `ctrl+c` 或者退出客户端，操作将会在后台继续进行。

**示例**

```sql
mysql> radon rebalance;
Query OK, 0 rows affected (39.09 sec)
```
