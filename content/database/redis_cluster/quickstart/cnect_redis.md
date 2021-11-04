---
title: "连接 Redis Cluster 实例"
description: 本小节主要介绍连接 Redis 实例。 
keywords: redis cluster 实例，redis 部署
weight: 5
collapsible: false
draft: false
---

Redis Cluster 支持多种连接方式，本文将为您介绍如何使用 redis-cli 连接 Redis 实例。

## 获取连接地址

[Redis Cluster 实例创建](/database/redis_cluster/quickstart/createredis/)完成后，您可以在 Redis Cluster 的节点管理页面，查看到 Redis 节点的 IP 地址，此 IP 地址即为连接地址，连接任意一个主节点均可。

<img src="../../_images/connect_ip.png" alt="连接地址" style="zoom:67%;" />

## 连接操作

| 连接方式                                                     | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [通过 redis-cli 连接 Redis 实例](../../manual/connect/redis_cli/) | redis-cli 是原生 Redis 自带的命令行工具，您可以通过与 Redis Cluster 实例在同一个 VPC 网络下的云服务器安装 redis-cli 连接到 Redis Cluster 实例，进行数据管理。 |





