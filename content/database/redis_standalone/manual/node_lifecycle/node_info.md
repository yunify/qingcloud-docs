---
title: "节点概述"
description: 本小节主要介绍 Redis Standalone 节点基本信息。 
keyword: 节点信息,键值数据库,Redis,Redis Standalone,数据库
weight: 01
collapsible: false
draft: false
---


Redis Standalone 一个集群可包含多个节点，一个节点即一个数据库计算基本计量单位，对应一台虚拟机和一台存储磁盘。

当一个集群节点数超过 3 个时，集群支持主从切换功能。集群节点存在**主节点**和**从节点**两种节点角色状态。

> **注意**
> 
> 集群创建后，暂不支持重启集群节点。
> 
> 若需实现重启节点，可通过关闭集群，再启动集群实现。注意启停集群期间，对业务的影响。
