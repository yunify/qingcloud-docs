---
title: "性能测试"
description: 本小节主要介绍如何执行 RadonDB 性能测试。 
keywords: radondb 性能测试,
weight: 10
collapsible: false
draft: false
---

## 硬件环境

**RadonDB**

1 组 SQL 节点 (16C64G 超高性能云服务器)

4 组存储节点 (16C64G 超高性能云服务器)

sync_binlog=1

innodb_flush_log_at_trx_commit=1

**RDB**

RDB (16C64G 超高性能云服务器)

sync_binlog=1

innodb_flush_log_at_trx_commit=1

## 测试模型

sysbench: 16 表, 512 线程，随机写，5000 万条数据。

## 测试结果

| Item                       | Transaction Per Second (TPS) | Response Time(ms) |
| :------------------------- | ---------------------------: | :---------------: |
| RadonDB (4 组存储节点)     |                        26589 |        20         |
| 单机 MySQL (QingCloud RDB) |                         9346 |        73         |

结果显示 RadonDB 的延迟是单机 MySQL 的 1/3，但性能几乎是单机的 3 倍，这要得益于 RadonDB 对大表进行切分后，用户的写操作在这些小表上可并发式执行。

## 压测 RadonDB

RadonDB 支持 [sysbench](https://github.com/akopytov/sysbench) 和 [benchyou](http://github.com/XeLabs/benchyou) 性能压测软件。
