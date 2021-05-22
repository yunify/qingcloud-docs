---
title: "查看数据库日志"
description: 本小节主要介绍如何查看 QingCloud PolonDB 数据库日志。 
keywords: polondb 日志
data: 2021-05-14T00:38:25+09:00
weight: 40
collapsible: false
draft: false
---



## 查看数据库日志

PolonDB 提供最近 7 天的数据库日志。

连接所要查看节点的 `postgres` 库，通过查询表的方式。

```sql
postgres=> \d
                 List of relations
 Schema |      Name      |
--------+----------------+
 public | postgresql_fri
 public | postgresql_mon
 public | postgresql_sat
 public | postgresql_sun
 public | postgresql_thu
 public | postgresql_tue 
 public | postgresql_wed 

```