---
title: "Phoenix 映射 HBase 中已有的表"
description: 本小节主要介绍如何用 Phoenix 映射 HBase 中已有的表。 
keywords: HBase Phoenix 映射,
weight: 45
collapsible: false
draft: false
---


  

本小节以 test1 表为例，介绍如何使用 Phoenix 映射HBase 中已有的表。

## 创建表并写入数据

```shell
  cd /opt/hbase

  bin/hbase shell
  
  hbase(main):005:0> create 'test1', 'cf'
  00:22:38.303 [main] INFO  org.apache.hadoop.hbase.client.HBaseAdmin - Operation: CREATE, Table Name: default:test1, procId: 65 completed
  Created table test1
  Took 0.8370 seconds
  => Hbase::Table - test1
  hbase(main):006:0> put 'test1', 'row1', 'cf:a', 'value1'
  Took 0.0227 seconds
  hbase(main):007:0> put 'test1', 'row2', 'cf:b', 'value2'
  Took 0.0061 seconds
  hbase(main):008:0> scan 'test1'
  ROW                                  COLUMN+CELL
   row1                                column=cf:a, timestamp=1576686165380, value=value1
   row2                                column=cf:b, timestamp=1576686175402, value=value2
  2 row(s)
  Took 0.0218 seconds
```

## 在 Phoenix 中映射表

测试时需手动填写 Zookeeper 连接，该地址可通过 HBase 详情页左侧基本属性列表中获得，去掉端口。

- 双引号是必须的，因为 phoenix 中表名和列名全部是大写。
- CREATE 操作会耗些时间。如果表建错了不要轻易 DROP，建议尝试 ALTER，否则 HBase 中的表会被删除。

```shell
  cd /opt/phoenix

  bin/sqlline.py 192.168.0.4,192.168.0.3,192.168.0.2:/hbase/cl-r2t3jzjo

  0: jdbc:phoenix:> CREATE TABLE "test1" ( "ROW" varchar primary key, "cf"."a" varchar, "cf"."b" varchar, "cf"."c" varchar) column_encoded_bytes=0;
  2 rows affected (6.303 seconds)
  0: jdbc:phoenix:> select * from "test1";
  +-------+---------+---------+----+
  |  ROW  |    a    |    b    | c  |
  +-------+---------+---------+----+
  | row1  | value1  |         |    |
  | row2  |         | value2  |    |
  +-------+---------+---------+----+
  2 rows selected (0.055 seconds)
```
