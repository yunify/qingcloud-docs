---
title: "基准测试"
description: 本小节主要介绍如何进行 PostgreSQL 集群基准测试。 
keywords: PostgreSQL 基准测试；
weight: 05
collapsible: false
---



测试模型：TPC-C

采用满足 TPC-C 基准测试规范的 PostgreSQL 测试工具 BenchmarkSQL 进行基准测试。 

在2核4G规格的数据库下，5个仓库，每个仓库10个销售端，tpmC 测试结果为19888，详情见下图：

![benchmarksqlTestResult](../../_images/benchmarksql1.png)
