---
title: "产品简介"
date: 2020-12-10T00:39:25+09:00
description: Test description
draft: false
enableToc: false
keyword: Clickhouse, QingCloud
---

「ClickHouse on QingCloud」 是一款深度定制的ClickHouse集群应用。它具有以下特点。

- 自动的集群管理

「ClickHouse on QingCloud」 通过Paxos协议管理整个集群的状态，这意味着您不需要进行繁重的集群管理操作，可以像操作单节点 ClickHouse 一样操作 「ClickHouse on QingCloud」。

- 支持数据在集群中重新分布

在支持集群的自动管理的基础上，我们还提供集群级的数据操作：`SYSTEM RESHARDING`、 `SYSTEM RESHARDING DATABASE database_name`、 `SYSTEM RESHARDING TABLE [database_name].table_name`。可以针对性的支持在不同维度上的集群数据重分布操作。这将极大的优化由于数据分布不合适等情况下的查询性能衰减等问题。

- 极致的性能、更低的成本

不论在单节点、多节点集群环境中 「ClickHouse on QingCloud」 都完美的保持了ClickHouse集群本身的性能，同时我们还对一些关键参数进行了进一步的调整，以争取在您不需要调节任何参数的情况下为您提供极致的性能体验。同时 「ClickHouse on QingCloud」 支持容量型、性能型、超高性能型多种磁盘类型，您可以根据自己的实际情况进行选择。