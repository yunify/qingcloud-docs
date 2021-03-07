---
title: "弹性数据"
description: Test description
draft: false
weight: 7
enableToc: false
keyword: PolonDB, QingCloud, 数据库
---

* 节点数量

  2 - 64 个节点区间可供选择

* 内存数据

  最大支持 16T 内存

* CPU 数据

  最大支持 4096 个 CPU

* 存储数据

  最大支持 3.2PB 存储

* 数据库连接数

  - 协调器节点

     max_connections 参数值为最大支持的连接数

  - 高性能节点/高性能只读节点

     max_connections × 节点数量 / 2 = 最大支持连接数（估算值）

     > 连接数的可用性与业务特征有关，例如较为复杂的查询业务，会消耗更多的连接给 PolonDB 内部使用
     >
     > 纵向扩容增加内存可以自动提升连接数



