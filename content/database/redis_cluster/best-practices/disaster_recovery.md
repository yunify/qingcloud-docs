---
title: "多可用区容灾"
description: 介绍 Redis Cluster 的容灾方案。
weight: 1
collapsible: false
draft: false
keywords: QingCloud, Redis Cluster 数据库，多可用区部署，容灾
---

## 应用场景

Redis Cluster 实例存储着大量关键数据，当您对数据的可靠性与服务的连续可用性要求较高时，可以选择多**可用区部署**方案来部署 Redis Cluster。多可用区部署提供了同城多活和故障切换的能力，这样在单节点发生故障时，可以快速恢复正常服务，提高可用性和可靠性。

## 多可用区部署方案

- 同城容灾：一个区域由多个可用区组成，每个可用区都是独立的数据中心，它们之间电力和网络设备互相独立，并且网络互通。选择**多可用区部署**方案，主从节点将分散部署在不同可用区。当其中一个可用区发生故障，另一个可用区的节点不受影响。并且从节点会自动升级为主节点，对外提供服务，从而提供更高的容灾能力。

- 故障判断：Redis Cluster 采用 Redis 原生的集群管理机制，依靠集群内节点之间的 Gossip 协议来进行节点状态的判断，节点故障判断的时效性取决于 cluster-node-timeout（在[配置参数](../../manual/cfginstance/paramconfig/)中可设置）。节点故障的判断请参考 [Redis Cluster 原生设计](https://redis.io/topics/cluster-spec)。
- 主节点选举：当从节点发现自己的主节点变为 FAIL 状态时，便尝试进行 Failover，以期成为新的主节点。当存在多个备节点时，Redis 内部将采用投票机制选举出一个从节点升级为新的主节点。详细选举机制，请参考 [Redis Cluster 原生设计](https://redis.io/topics/cluster-spec)。

## 约束与限制

- 目前仅 **Redis 5.0 以上版本**的**北京3区**支持多可用区部署。
-  由于实例跨可用区部署时网络访问效率略低于部署在同一可用区内，因此 Redis 实例跨可用区部署时，主备节点之间同步效率会有所降低。

## 操作指导

- 方式一：部署 Redis Cluster 时，**部署方式**选择**多可用区部署**。具体操作请参见[创建 Redis Cluster 实例](../../quickstart/create_redis/)。

  <img src="../../_images/step1.png" alt="基本信息设置" style="zoom:50%;" />

- 方式二：将已有的单可用区部署集群**升级为多可用区部署**。具体操作请参见[升级多可用区部署](../../manual/cfginstance/multi_zones/)。



