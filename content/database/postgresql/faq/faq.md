---
title: "基准测试"
description: Test description
draft: false
enableToc: false
---



测试模型：TPC-C

您可以采用满足 TPC-C 基准测试规范的 PostgreSQL 测试工具 BenchmarkSQL 进行基准测试。 在2核4G规格的数据库下，5个仓库，每个仓库10个销售端，tpmC 测试结果为44184，详情见下图：

![benchmarksqlTestResult](../../_images/benchmarksql1.png)