---
title: "什么是 PolonDB"
description: 本小节主要介绍 QingCloud PolonDB 简要介绍。 
keywords: polondb 架构图,产品简介
weight: 10
collapsible: false
draft: false
---



QingCloud PolonDB 基于 PostgreSQL 和 Citus 构建，是一款能够具备无限水平扩展能力，性能随容量扩容而线性提升，能够按需扩展集群，可以支撑 PB 级别的  HTAP 分布式数据库。

<!--基于 Citus 构建，同时支持在线事务处理（OLTP）及在线分析处理（OLAP）场景。完美适配海量数据实时分析、海量事务处理等应用场景，有着众多独特优势。-->

- Citus 是 PostgreSQL 的扩展（not a fork），采用 `shared nothing` 架构，节点之间无共享数据，由协调器节点和 Work 节点构成一个数据库集群。相比单机 PostgreSQL，Citus 可以使用更多的 CPU 核心，更多的内存数量，保存更多的数据。通过向集群添加节点，可以轻松的扩展数据库。

- Citus 支持新版本 PostgreSQL 的特性，并保持与现有工具的兼容。Citus 使用分片技术在多台机器上横向扩展 PostgreSQL。Citus 的查询引擎在这些服务器上采用并行化查询，以便在大型数据集上实现实时的响应。

## 架构

- 协调器和 Worker 节点均通过 PostgreSQL 流复制做了高可用。

- **高可用管理节点**负责高可用的管理和故障转移等功能。

- 协调器将 `tab` 表进行分片，表的实际数据存储在 `tab_x` 中， `tab` 表不存储任何数据。

![架构图](../../_images/image-GaoKeYongJiaGou.png)
