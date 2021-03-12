---
title: "什么是 Redis standalone"
description: Test description
draft: false
weight: 3
enableToc: false
keyword: Redis standalone, QingCloud, 数据库
---



[Redis](https://redis.io/) 是一个使用ANSI C编写的开源、支持网络、基于内存、可选持久性的键值对存储数据库。

**Redis standalone on QingCloud** 将 **Redis** 封装成 App，采用 **Redis** 最近的稳定版本 3.2.9 构建，支持在 AppCenter 上一键部署，在原生 **Redis** 的基础上增加了其易用性、高可用的特性。**Redis standalone on QingCloud** 的特性如下：

- 高可用性。

  集成 **[Redis Sentinel](https://redis.io/topics/sentinel)** 机制，支持秒级主从切换，并提供一个对外的读写 vip，在保证高可用性的同时，无需手动切换主节点 IP 地址。

  **各节点数支持的高可用数：**

  - 单节点应用不支持高可用，仅限在测试环境下使用


  - 三节点应用支持高可用，最高允许一个节点出现异常


  - 多节点（大于三节点）的应用支持高可用，「节点实时角色」中前三个节点最高允许一个节点出现异常，其他节点对出现异常的情况没有限制

- 支持节点的纵向和横向扩容。

  线上版本支持单节点和三节点部署方式，只有三节点部署形式包含主从自动切换的功能。当用户从单节点增加节点到三节点时，无需暂停当前 **Redis** 服务。用户也可以从三节点缩小到单节点，禁止删除主节点（部分已下线版本会由于删除主节点导致服务的短暂不可用）。

  **各个版本支持的节点伸缩数：**
  
  - Redis 5.0.3 - QingCloud 1.2.2 版本支持单节点、双节点和三节点的节点伸缩[已下线]
  - Redis 5.0.8 - QingCloud 3.0.0 版本支持单节点、三节点以及最高支持九节点的节点伸缩，可以满足您大量读的需求
  
  
  - 其他版本支持单节点和三节点的节点伸缩。
  
- 一键部署。 

  无需额外配置，可以立即部署一个 **Redis** 服务
  
- 同城多活

   `Redis 5.0.6 - QingCloud 2.1.1` 和 `Redis 5.0.7 - QingCloud 2.2.0` 版本支持同城多活，在 `北京3区` 部署 app 的用户可以选择同城多活，来实现业务容灾。