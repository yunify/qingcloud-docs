---
title: "什么是 Redis Cluster"
description: Test description
draft: false
weight: 3
enableToc: false
keyword: Redis Cluster, QingCloud, 数据库
---



Redis 是一个使用ANSI C编写的开源、支持网络、基于内存、可选持久性的键值对存储数据库。

Redis Cluster on QingCloud AppCenter 基于原生的 Redis 提供了 Redis Cluster 的 App，能够在 AppCenter 进行一键部署，有如下特性：

- 支持一主多从以及多主多从，每个主所在分片 (shard) 平均分摊 16384 个 slots， 增加或删除主节点系统会自动平衡 slots 
- 集群支持 HA，即当某个主节点异常，它的从节点会自动切换成主节点
- 支持集群的横向及纵向伸缩
- 一键部署
- 基于最新的 Redis 4.0.6 稳定版构建
- Redis 5.0.3 - QingCloud 1.2.1 添加了同城多活，实现业务容灾
- Redis 5.0.5 - QingCloud 1.3.0 添加了内存限制，防止删除节点时出现 OOM
- Redis 5.0.5 - QingCloud 2.0.0 添加了 Caddy 服务，支持通过浏览器自助查看和下载 Redis 文件