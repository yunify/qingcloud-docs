---
title: "基准测试"
description: 本小节主要介绍 Redis Cluster 同城多活动测试。 
keywords: redis cluster 测试,同城多活动
data: 2021-05-14T00:38:25+09:00
weight: 90
collapsible: false
draft: false
---

## 背景

[青云QingCloud 升级区域（Region）架构 轻松实现同城多活](https://log.qingcloud.com/archives/3981)

## 测试结果

Redis 节点的同城多活测试可参考 [Redis Standalone 同城多活测试](../../../redis_standalone/manual/benchmark_test/)，针对于 redis cluster 的集群需要考虑到分片的影响，多区部署的网络和集群内部的 MOVED 重定向会影响到集群的平均 QPS，为了消除重定向对 QPS 的影响，建议选择可以缓存 slot 分布的客户端。