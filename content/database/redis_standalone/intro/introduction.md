---
title: "什么是 Redis Standalone"
description: 本小节主要介绍 Redis Standalone 产品简介。 
keyword: 产品简介,键值数据库,Redis,Redis Standalone,数据库
weight: 10
collapsible: false
draft: false
---



[Redis](https://redis.io/) 是一个使用 ANSI C 编写的开源、支持网络、基于内存、可选持久性的键值对存储数据库。

键值数据库 Redis Standalone 将 **Redis** 封装成 App，支持在 AppCenter 上一键部署，为您提供即开即用、安全可靠、弹性扩容、便捷易用的在线分布式缓存功能。

- Redis Standalone 部署在云端，提供完善的基础设施规划、网络安全保障和系统维护服务，让您只需要专注于业务创新。
- 您可以通过 AppCenter 控制台轻松创建、管理和维护 Redis 缓存集群。
- Redis Standalone 支持一主多从架构，可充分满足用户高并发、低延迟及弹性变配的业务需求。

## 架构简介

Redis 官方推荐 Redis Sentinel 高可用架构机制，通过监控的方式获取主节点的工作状态是否正常。当主节点发生故障时，Redis Sentinel 自动进行故障转移（Failover），并将其监控的从节点提升为主节点（master），保障 Redis 的高可用。

Redis Standalone 集成 Redis Sentinel 机制，支持秒级主从切换，并提供一个对外的读写 VIP，在保证高可用性的同时，无需手动切换主节点 IP 地址。

- 单节点应用不支持高可用，建议仅在测试环境下使用。 
- 三节点应用支持高可用，最高允许一个节点出现异常。 
- 多节点（大于三节点）的应用支持高可用，节点实时角色中前三个节点最高。允许一个节点出现异常，其他节点对出现异常的情况没有限制，同时支持节点的纵向和横向扩容。

<img src="../../_images/redis_standalone_arch.png" alt="产品架构" style="zoom:50%;" />
