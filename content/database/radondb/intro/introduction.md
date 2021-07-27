---
title: "什么是 RadonDB"
description: 本小节主要介绍 RadonDB 产品简介。 
keywords: radondb 产品简介,
weight: 10
collapsible: false
draft: false
---

RadonDB 是一款基于 MySQL 研发的新一代分布式关系型数据库，将 MySQL 数据库与主流分布式算法相结合，不仅支持分布式事务，全面兼容 MySQL。还能够实现容量与性能无限水平扩展，具备金融级数据强一致性，满足企业级核心数据库对大容量、高并发、高可靠及高可用的苛刻要求。

RadonDB 旨在向用户提供提供具备金融级高可靠、强一致、超大容量（PB级)的数据库服务，高度兼容MySQL语法，可自动实现水平分表，智能化扩容。

## 什么是Xenon

Xenon [ˈziːnɒn] 是一款自研 MySQL 集群高可用工具。基于 Raft 协议进行无中心化选主，实现主从秒级切换；基于 Semi-Sync 机制，保障数据不丢失，实现数据强一致性。并结合 MySQL（5.7 及以上版本）并行复制特性，实现 Binlog 并行回放，大大降低从库延迟。

结合架构图可知，Xenon 是基于 Raft + Semi-Sync + GTID 实现高可用，保证大多数节点接收到数据。借助于配置项 `leader-start-command` 和  `leader-stop-command` 调用脚本完成故障切换，也可以结合 Consul，ZooKeeper 自由扩展。Xtrabackup 备份调度集成。

![架构图](../../_images/xenon.png)
