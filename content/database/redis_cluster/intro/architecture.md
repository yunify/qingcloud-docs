---
title: "产品架构"
description: Redis Cluster 的架构
draft: false
weight: 5
enableToc: false
keyword: Redis Cluster, QingCloud, Redis 集群架构
---

Redis Cluster on QingCloud 基于[开源 Redis 集群](https://redis.io/topics/cluster-spec)，采用无中心架构，对服务器进行分片，每个分片都是主从结构，包含一个主节点（Master）和 N 个从节点（Slave），支持主从复制和主节点自动故障转移，保证了集群的可靠性，适用于海量数据、高并发、高可用场景。

Redis Cluster 的服务架构如下图所示。

<img src="../../_images/redis_cluster_archi.png" alt="产品架构" style="zoom:50%;" />

**Redis Cluster 工作原理**：

- 直连模式

  客户端（Client）直接与后端数据分片连接，无中间代理服务器，可降低网络开销和服务响应时间。客户端不需要连接集群所有分片，连接集群中任何一个可用分片即可。

- 分片存储

  Redis Cluster 通过分片的方式来保存数据库中的键值对（key）。整个数据库集群使用 16384 个槽（slot）来管理一段整数集合 (hash值) ，key 属于哪个 slot ，由 *Crc16(key) mod 16384* 的值决定。每个分片负责其中一部分 slot，根据 slot 与分片的映射关系，确定 key 应该被哪个分片的 Master 所管理。

- 无中心架构

  集群中的每个分片都是平等关系，都可以接收请求，分片之间互相监听，数据共享，可动态调整数据分布，因此具备一旦有分片退出或者加入，会按照 slot 为单位做数据的迁移，修改 slot 与分片的对应关系。例如，加入节点时需要将现有集群中的一部分 slot 和数据迁移给新节点。

- 主从结构

  每个分片包含一个 Master 节点和 N 个 Slave 节点，Master 负责读写请求和集群信息的维护，Slave 对 Master 上的数据和状态信息进行复制。当某个 Master 故障不可用时，Redis Cluster 内部将使用投票机制自动将对应的某个 Slave 切换为 Master，以保证集群的可用性。

  

