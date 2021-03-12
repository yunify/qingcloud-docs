---
title: "什么是 ChronusDB"
description: Test description
weight: 3
---



ChronusDB 是一款基于 ClickHouse 定制的时序数据库产品。ChronusDB 具有以下特点。

- 高效的查找和写入能力

ChronusDB 会尽可能的使用全部计算资源并行去处理外部请求以提高查找和写入能力。

- 少量的存储成本

ChronusDB 针对不同类型的数据采用不同的压缩算法，从而达到极致的压缩，并借此减少存储成本。

- 强大的函数支持和聚合分析能力

（1）兼容 ClickHouse 提供的算数函数，比较函数，类型转换函数等上百种函数。

（2）兼容 ClickHouse  Min，Max，Sum，Avg 等常用的基本聚合分析能力。

（3）兼容 ClickHouse 提供的更加复杂的groupArray等聚合函数。

- 实时的监控信息

CHronusDB 提供了集群节点的 CPU、内存、I/O 等丰富的监控指标。

- 实时的集群告警

ChronusDB 提供分钟级别的集群异常资源告警并支持设置告警指标和告警线。

- 较低的学习成本

ChronusDB SQL 表达式基本符合标准 SQL，完全兼容 ClickHouse 协议并且支持通过 HTTP 协议进行访问。