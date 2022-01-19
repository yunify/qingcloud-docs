---
title: "多可用区容灾"
description: 本小节主要介绍 Redis Standalone 的容灾方案。
keywords: 多可用区部署,容灾,键值数据库,Redis,Redis Standalone,数据库
weight: 01
collapsible: false
draft: false
---

## 应用场景

Redis Standalone 实例存储着大量关键数据，当您对数据的可靠性与服务的连续可用性要求较高时，可以选择多**可用区部署**方案来部署 Redis Standalone。多可用区部署提供了同城多活和故障自动切换的能力，可在单节点发生故障时，实现快速恢复服务，提高数据库可用性和可靠性。

- 同城容灾
  
  一个区域由多个可用区组成，每个可用区都是独立的数据中心，它们之间电力和网络设备互相独立，并且网络互通。
  
  选择**多可用区部署**方案，主从节点将分散部署在不同可用区。当其中一个可用区发生故障，另一个可用区的节点不受影响。并且从节点会自动升级为主节点，对外提供服务，从而提供更高的容灾能力。

- 主节点选举
  
  当主节点变为 Fail 状态时，集群便尝试进行 Failover，以选举正常运行的从节点为新的主节点。当存在多个备节点时，Redis 内部将采用投票机制选举出一个从节点升级为新的主节点。详细选举机制，请参考 [Redis 原生设计](https://redis.io/topics/cluster-spec)。

## 约束与限制

- 仅**北京3区**支持多可用区部署。
- 跨可用区部署相较于同可用区部署，网络访问效率略低。因此 Redis 实例跨可用区部署时，主备节点之间同步效率会有所降低。

## 操作指导

- 方式一
  
  部署 Redis Standalone 时，选择**部署方式**为`多可用区部署`。详细操作说明，请参见[创建 Redis Standalone 实例](../../quickstart/create_cluster/)。

  <img src="../../_images/step1.png" alt="基本信息设置" style="zoom:50%;" />

- 方式二
  
  将已有的单可用区部署集群[升级为多可用区部署](../../manual/cluster_lifecycle/multi_zones/)。
