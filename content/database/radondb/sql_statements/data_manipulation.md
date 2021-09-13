---
title: "Data Manipulation"
description: 本小节主要介绍 RadonDB 支持的 Data Manipulation 语句。 
keywords: radondb SQL 集,
weight: 20
collapsible: false
draft: false
---



在 Data Manipulation 语法上， RadonDB 与 MySQL 兼容。

## DELETE

- 支持分布式事务，保证跨分区删除原子性。

- 不支持无 WHERE 条件删除。

- 不支持子句。

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

## INSERT

- 支持分布式事务，保证跨分区写入原子性。

- 支持 insert 多个值，这些值可以在不同分区。

- 必须指定写入列。

- 不支持子句。

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

## REPLACE

- 支持分布式事务，保证跨分区写入原子性。

- 支持 replace 多个值，这些值可以在不同分区。

- 必须指定写入列。

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

## SELECT

- 支持跨分区的 count，sum，avg，max，min 等聚合函数， 支持含有 distinct 的聚合函数，聚合函数只对数值型有效。

- 支持跨分区的 order by，group by，limit 等操作， group by 字段必须在 select_expr 中。

- 支持 `left &#124; right outer` 和 `inner &#124; cross join`。不可下推的 join 场景，select_expr 不能有 `\*`。

- 支持 `sort-merge join` 和 `nested-loop join`，默认使用 `sort-merge join`。

- 支持 `UNION [ALL &#124; DISTINCT]`。

- 不支持 having 子句中包含聚合函数的场景。

- 不支持子查询。

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

## UPDATE

- 支持分布式事务，保证跨分区更新原子性。

- 不支持无 WHERE 条件更新。

- 不支持更新分区键。

- 不支持子句。

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
