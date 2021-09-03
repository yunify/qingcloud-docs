---
title: "Others"
description: 本小节主要介绍 RadonDB 支持的 其他语法。 
keywords: radondb SQL 集,
weight: 70
collapsible: false
draft: false
---



在 AUTO INCREMENT 和 N-Gram Full Text Parser 语法上， RadonDB 与 MySQL 兼容。

## AUTO INCREMENT

* 使用 golang 的 `UnixNano()` 作为唯一标识。
  
* `AUTO_INCREMENT` 字段类型必须是 **BIGINT**。

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

## N-Gram Full Text Parser

支持 `Full-Text Search`，提供支持中文、日文和韩文 (CJK) 的 `n-gram full-text parser`。

RadonDB 的 `Full-Text` 分片表查询时并行执行，而 MySQL 的分区表并不支持 `Full-Text Indexes` 或 `Searches`。

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
    ('数据库管理','在本教程中展示如何管理数据库'),
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
