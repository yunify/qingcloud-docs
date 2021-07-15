---
title: "HBase Shell 基本操作"
description: 本小节主要介绍HBase Shell 基本操作使用指南。 
keywords: HBase shell,
weight: 15
collapsible: false
draft: false
---



本小节主要介绍通过 HBase Shell 命令来完成 HBase 表的创建、数据插入、数据查找、删除操作。

```shell
  cd /opt/hbase

  bin/hbase shell

  hbase(main):001:0> create 'test', 'cf'
  0 row(s) in 1.2130 seconds

  => Hbase::Table - test
  hbase(main):002:0> list 'test'
  TABLE
  test
  1 row(s) in 0.0180 seconds

  => ["test"]

  hbase(main):003:0> put 'test', 'row1', 'cf:a', 'value1'
  0 row(s) in 0.0850 seconds

  hbase(main):004:0> put 'test', 'row2', 'cf:b', 'value2'
  0 row(s) in 0.0110 seconds

  hbase(main):005:0> put 'test', 'row3', 'cf:c', 'value3'
  0 row(s) in 0.0100 seconds

  hbase(main):006:0> scan 'test'
  ROW                                      COLUMN+CELL
   row1                                    column=cf:a, timestamp=1469163844008, value=value1
   row2                                    column=cf:b, timestamp=1469163862005, value=value2
   row3                                    column=cf:c, timestamp=1469163899601, value=value3
  3 row(s) in 0.0230 seconds

  hbase(main):007:0> get 'test', 'row1'
  COLUMN                                   CELL
   cf:a                                    timestamp=1469094709015, value=value1
  1 row(s) in 0.0350 seconds

  hbase(main):008:0> disable 'test'
  0 row(s) in 1.1820 seconds

  hbase(main):009:0> drop 'test'
  0 row(s) in 0.1370 seconds
```
