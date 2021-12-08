---
title: "什么是 MongoDB Cluster"
description: 本小节主要介绍 MongoDB Cluster 产品简介
draft: false
weight: 10
enableToc: false
keyword: MongoDB Cluster,  数据库
---



[MongoDB](https://www.mongodb.com/) 是一个开源的文档型数据库，具有高性能、高可用等优点。

分片（Sharding）是一种将数据分布到对台服务器上的技术。Sharding 常用于海量数据和高吞吐操作的数据库，对数据进行拆分，并将数据水平地分散到不同的服务器上。

MongoDB Cluster 是一款基于 MongoDB 分片技术构建的分布式文档数据库，支持海量数据的横向扩展，支持多可用区部署，提供全量物理备份功能，具有高性能、高可用、可扩展等优点。

## 产品架构

- Mongos
  
  提供对外应用访问，所有操作均通过 Mongos 执行。同时配置了数据迁移和数据自动平衡。为保证高可用，生产环境一般配置2个或以上 Mongos 节点。

- Config Server
  
  存储集群所有节点、分片数据路由信息。为保证高可用，生产环境一搬配置3个 Config Server 节点形成副本集。

- Shard
  
  存储应用数据记录。每个 Shard 都是由3个节点组成的副本集。

![MongoDB Cluster 产品架构](../../_images/mongodb_cluster_arch.png)
