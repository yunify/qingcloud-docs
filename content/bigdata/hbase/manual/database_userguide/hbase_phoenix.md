---
title: "Phoenix 使用指南"
description: 本小节主要介绍 Phoenix 使用指南。 
keywords: HBase Phoenix 使用指南,
weight: 40
collapsible: false
draft: false
---




通过 Phoenix 查询引擎实现 sql 查询和 ACID 事务。

HBase 集群默认不支持 Phoenix 查询引擎。

- 若需支持 Phoenix 查询引擎，修改配置参数`qingcloud.phoenix.on.hbase.enable` 为 true。
  
- 若需支持 Phoenix 事务支持，修改配置参数`phoenix.transactions.enabled` 为 true。

## 测试 sql

测试时需手动填写 Zookeeper 连接，该地址可通过 HBase 详情页左侧基本属性列表中获得，去掉端口。

```shell
  cd /opt/phoenix


  bin/psql.py 192.168.0.4,192.168.0.3,192.168.0.2:/hbase/cl-r2t3jzjo examples/WEB_STAT.sql examples/WEB_STAT.csv examples/WEB_STAT_QUERIES.sql
  no rows upserted
  Time: 0.031 sec(s)
  
  csv columns from database.
  CSV Upsert complete. 39 rows upserted
  Time: 0.2 sec(s)
  
  DOMAIN                                                          AVERAGE_CPU_USAGE                         AVERAGE_DB_USAGE
  ---------------------------------------- ---------------------------------------- ----------------------------------------
  Salesforce.com                                                            260.727                                  257.636
  Google.com                                                                212.875                                   213.75
  Apple.com                                                                 114.111                                  119.556
  Time: 0.054 sec(s)
  
  DAY                                              TOTAL_CPU_USAGE                            MIN_CPU_USAGE                            MAX_CPU_USAGE
  ----------------------- ---------------------------------------- ---------------------------------------- ----------------------------------------
  2013-01-01 00:00:00.000                                       35                                       35                                       35
  2013-01-02 00:00:00.000                                      150                                       25                                      125
  2013-01-03 00:00:00.000                                       88                                       88                                       88
  2013-01-04 00:00:00.000                                       26                                        3                                       23
  2013-01-05 00:00:00.000                                      550                                       75                                      475
  2013-01-06 00:00:00.000                                       12                                       12                                       12
  2013-01-08 00:00:00.000                                      345                                      345                                      345
  2013-01-09 00:00:00.000                                      390                                       35                                      355
  2013-01-10 00:00:00.000                                      345                                      345                                      345
  2013-01-11 00:00:00.000                                      335                                      335                                      335
  2013-01-12 00:00:00.000                                        5                                        5                                        5
  2013-01-13 00:00:00.000                                      355                                      355                                      355
  2013-01-14 00:00:00.000                                        5                                        5                                        5
  2013-01-15 00:00:00.000                                      720                                       65                                      655
  2013-01-16 00:00:00.000                                      785                                      785                                      785
  2013-01-17 00:00:00.000                                     1590                                      355                                     1235
  Time: 0.03 sec(s)
  
  HO                    TOTAL_ACTIVE_VISITORS
  -- ----------------------------------------
  EU                                      150
  NA                                        1
  Time: 0.017 sec(s)
```

## 测试 ACID 事务

ACID 事务测试需要开启两个终端按时间交互式执行，在 commit 之前另一终端是无法 select 得到新修改的数据。

1. 开启终端一。
   
   测试时需手动填写 Zookeeper 连接，该地址可通过 HBase 详情页左侧基本属性列表中获得，去掉端口。

```shell
  cd /opt/phoenix

  bin/sqlline.py 192.168.0.4,192.168.0.3,192.168.0.2:/hbase/cl-r2t3jzjo

  0: jdbc:phoenix:> CREATE TABLE my_table (k BIGINT PRIMARY KEY, v VARCHAR) TRANSACTIONAL=true;
  No rows affected (1.506 seconds)
  0: jdbc:phoenix:> UPSERT INTO my_table VALUES (1,'A');
  1 row affected (0.099 seconds)
  0: jdbc:phoenix:> UPSERT INTO my_table VALUES (2,'B');
  1 row affected (0.016 seconds)
  0: jdbc:phoenix:> SELECT * FROM my_table;
  +----+----+
  | K  | V  |
  +----+----+
  | 1  | A  |
  | 2  | B  |
  +----+----+
  2 rows selected (0.092 seconds)
  0: jdbc:phoenix:> !commit
  Operation requires that autocommit be turned off.
  0: jdbc:phoenix:> !autocommit off
  Autocommit status: false
  0: jdbc:phoenix:> !commit
  Commit complete (0 seconds)
  0: jdbc:phoenix:> UPSERT INTO my_table VALUES (2,'C');
  1 row affected (0 seconds)
  0: jdbc:phoenix:> SELECT * FROM my_table;
  +----+----+
  | K  | V  |
  +----+----+
  | 1  | A  |
  | 2  | C  |
  +----+----+
  2 rows selected (0.034 seconds)
```

2. 开启终端二。

   测试时需手动填写 Zookeeper 连接，该地址可通过 HBase 详情页左侧基本属性列表中获得，去掉端口。


```shell
  cd /opt/phoenix

 
  bin/sqlline.py 192.168.0.4,192.168.0.3,192.168.0.2:/hbase/cl-r2t3jzjo

  0: jdbc:phoenix:> SELECT * FROM my_table;
  +----+----+
  | K  | V  |
  +----+----+
  | 1  | A  |
  | 2  | B  |
  +----+----+
  2 rows selected (1.15 seconds)
```

3. 终端一内继续执行。

```shell
  0: jdbc:phoenix:> !commit
  Commit complete (0.006 seconds)
  0: jdbc:phoenix:> SELECT * FROM my_table;
  +----+----+
  | K  | V  |
  +----+----+
  | 1  | A  |
  | 2  | C  |
  +----+----+
  2 rows selected (0.035 seconds)
  0: jdbc:phoenix:> !quit
```

4. 终端二内继续执行。

```shell
  0: jdbc:phoenix:> SELECT * FROM my_table;
  +----+----+
  | K  | V  |
  +----+----+
  | 1  | A  |
  | 2  | C  |
  +----+----+
  2 rows selected (0.038 seconds)
  0: jdbc:phoenix:> drop table my_table;
  No rows affected (2.668 seconds)
  0: jdbc:phoenix:> !quit
```
