---
title: "基本概念类 FAQ"
description: 本小节主要介绍关于 TiDB 概念及原理的常见问题。
keyword:   TiDB, MySQL, 常见问题, FAQ
draft: false
weight: 1
---

## TiDB 是什么？

TiDB 是一个分布式NewSQL数据库。它支持水平弹性扩展、ACID 事务、标准 SQL、MySQL 语法和 MySQL 协议，具有数据强一致的高可用特性，是一个不仅适合 OLTP 场景还适合 OLAP 场景的混合数据库。

## TiDB、TiKV、Placement Driver (PD) 主要作用是什么？

- TiDB 是 Server 计算层，主要负责 SQL 的解析、制定查询计划、生成执行器。
- TiKV 是分布式 Key-Value 存储引擎，用来存储真正的数据，简而言之，TiKV 是 TiDB 的存储引擎。
- PD 是 TiDB 集群的管理组件，负责存储 TiKV 的元数据，同时也负责分配时间戳以及对 TiKV 做负载均衡调度。

更多相关信息请参考 [TiDB 基本概念](/database/tidb/intro/term/)。

## TiDB 是基于 MySQL 开发的吗？

不是，虽然 TiDB 支持 MySQL 语法和协议，但是 TiDB 是由 PingCAP 团队完全自主开发的产品。

## TiDB 和 MySQL 兼容性如何？

TiDB 目前还不支持触发器、存储过程、自定义函数、外键，除此之外，TiDB 支持绝大部分 MySQL 5.7 的语法。

详情参见 [与 MySQL 兼容性对比 | PingCAP Docs](https://docs.pingcap.com/zh/tidb/stable/mysql-compatibility)。

## TiDB 支持分布式事务吗？

支持。无论是一个地方的几个节点，还是跨多个数据中心的多个节点，TiDB 均支持 ACID 分布式事务。

