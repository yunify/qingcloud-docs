---
title: "性能测试"
description: 本小节主要介绍如何进行 PostgreSQL 集群性能测试。 
keyword: PostgreSQL,关系型数据库,数据库
weight: 04
collapsible: false
draft: false
---

本小节主要介绍 PostgreSQL 各版本的性能测试结果。

## 测试工具

benchmarkSQL 5.0

## 测试规格

* CPU: 32C 
* 内存: 64G 
* 存储： 2000G 
* 节点数量：2 节点（一主一备）

## 测试时长

10 分钟

## 测试结果（tpmC）

| 连接数 | PostgreSQL 11 | PostgreSQL 12 | PostgreSQL 13 | PostgreSQL 14 |
| ----- | ------------- | ------------- | ------------- | -------------- |
| 256    | 30938.09      | 184966.8      | 165922.94     | 178979.41    | 
| 512    | 12436.67      | 106959.06     | 119048.36     | 109902.36    | 

## 结论

PostgreSQL 并发数 256、512 连接运行 10分 钟，新版本 PostgreSQL（PG12、PG13、PG14）比 PG11 版本的性能提升 6~10 倍左右。

**建议集群使用 V2.0.0 以上版本**。
