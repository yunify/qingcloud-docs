---
title: "表"
description: 本小节主要介绍 QingCloud PolonDB 的分布式表。 
keywords: polondb 分布式表,本地表,分布式表,参考表
weight: 5
collapsible: false
draft: false
---

* 本地表

  在协调器节点由 `create table ` 创建的普通表。

* 分布式表

  在协调器节点经 `create_distributed_table('table', 'column')` 处理过的本地表， `table` 需要转换成分布式的表， `column` 根据该列进行hash运算并进行分片。

  > 分布式表的数据通过分布式列的 hash 进行计算，将数据存储到不同的分片表中。
  >
  > 业务应使用此种表类型。

* 参考表

  在协调器节点经 `create_reference_table` 处理过的本地表。

  > 参考表在所有 Worker 上拥有相同的数据。