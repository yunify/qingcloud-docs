---
title: "基本概念"
description: Test description
draft: false
weight: 12
enableToc: false
keyword:   TiDB, PD, TiKV, TiFlash
---

本文为您介绍分布式数据库 TiDB 的相关术语。

### TiDB 实例

一个包含了多个 TiDB, TiKV 及 PD 等节点的分布式数据库服务，其中 TiDB 和 TiKV 的节点规格（CPU、内存及存储配置）和数量会决定该实例的服务性能。

### TiDB 节点

TiDB 节点本身并不存储数据，只负责接收客户端的 SQL 请求，处理 SQL 相关的逻辑，并通过 PD 找到存储计算所需数据的 TiKV 地址，将实际的数据读取请求转发给底层的存储节点 TiKV（或 TiFlash），最终返回结果。

### PD 节点

Placement Driver ， 整个 TiDB 集群的元信息管理模块，负责存储每个 TiKV 节点实时的数据分布情况和集群的整体拓扑结构，同时还会对 TiKV 集群进行调度和负载均衡，并分配全局唯一且递增的事务 ID，是整个集群的“大脑”。

### TiKV 节点

负责存储数据，从外部看 TiKV 是一个分布式的提供事务的 Key-Value 存储引擎。存储数据的基本单位是 Region，每个 Region 负责存储一个 Key Range（从 StartKey 到 EndKey 的左闭右开区间）的数据，每个 TiKV 节点会负责多个 Region。TiKV 至少为 3 个节点。

### TiFlash 节点

TiFlash 是一类特殊的存储节点。和普通 TiKV 节点不一样的是，在 TiFlash 内部，数据是以列式的形式进行存储，主要的功能是为分析型的场景加速。如果无数据分析需求，可不用创建 TiFlash 节点。

### Region/Peer/Raft Group

- Region 是 TiKV 存储数据的基本单位，每个 Region 负责维护集群的一段连续数据（默认配置下平均约 96 MiB）。

- 每份数据会在不同的 Store 存储多个副本（默认配置是 3 副本），每个副本称为 Peer。同一个 Region 的多个 Peer 通过 raft 协议进行数据同步，所以 Peer 也用来指代 raft 实例中的成员。

- 每个 Region 都对应一个独立运行的 raft 实例，我们也把这样的一个 raft 实例叫做一个 Raft Group。

### Leader/Follower/Learner

它们分别对应 Peer 的三种角色：

-  Leader 负责响应客户端的读写请求；
- Follower 被动地从 Leader 同步数据，当 Leader 失效时会进行选举产生新的 Leader；
- Learner 是一种特殊的角色，它只参与同步 raft log 而不参与投票，在目前的实现中只短暂存在于添加副本的中间步骤。

