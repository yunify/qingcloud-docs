---
title: "什么是 Redis Cluster"
description: 介绍什么是 Redis Cluster
draft: false
weight: 1
enableToc: false
keyword: Redis Cluster, QingCloud,青云, 缓存数据库
---

Redis Cluster 是由青云 QingCloud 提供的兼容开源 Redis 协议标准的缓存数据库服务，为您提供即开即用、安全可靠、弹性扩容、便捷易用的在线分布式缓存能力。

## 为什么选择 Redis Cluster

- Redis Cluster 部署在 QingCloud 云端，提供完善的基础设施规划、网络安全保障和系统维护服务，让您只需要专注于业务创新。

- 您可以通过青云的 AppCenter 控制台轻松创建、管理和维护 Redis 缓存集群。
- Redis Cluster 支持一主多从、多主多从架构，可充分满足用户高并发、低延迟及弹性变配的业务需求。

更多详情，请见 [Redis Cluster 产品优势 ](../advantage/) 及 [Redis Cluster 应用场景](../aply_scenarios//)。

## 购买方式

 [创建 Redis Cluster 实例](../../quickstart/create_redis/)

## 资源配置类型

Redis 6.* 版本提供了`多线程生产环境`、`单线程生产环境`、`多线程测试环境`、`单线程测试环境`四种类型的资源配置，满足您不同场景下的业务需求。

| 实例类型       | 简介                                                         |
| -------------- | ------------------------------------------------------------ |
| 多线程生产环境 | 独享 CPU 模式，性能稳定，使用多线程操作读写 I/O，QPS 参考: 380000。 |
| 单线程生产环境 | 独享 CPU 模式，性能稳定，使用单线程操作读写 I/O，QPS 参考: 180000。 |
| 多线程测试环境 | CPU 共享，性价比高，使用多线程操作读写 I/O，适合测试研发使用，QPS 参考: 180000。 |
| 单线程测试环境 | CPU 共享，性价比高，使用单线程操作读写 I/O，适合测试研发使用，QPS 参考: 60000。 |

具体资源配置详情请参见[资源配置](../instance_type/)。

## 产品定价

Redis Cluster 的定价，请参考[详细价格信息](https://www.qingcloud.com/pricing#/RedisCluster)。

更多关于价格及计费的说明，请参见[计费说明](../../billing/price/)。

