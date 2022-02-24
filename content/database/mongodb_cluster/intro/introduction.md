---
title: "什么是 MongoDB Cluster"
description: 本小节主要介绍 MongoDB Cluster 产品简介
draft: false
weight: 10
enableToc: false
keyword: MongoDB Cluster,  数据库
---



[MongoDB](https://www.mongodb.com/) 是一个基于分布式文件存储的开源 NoSQL（非关系型）数据库系统，支持文档和键值存储模型，拥有灵活的数据模型、可靠的性能，以及自动的吞吐容量扩展功能。MongoDB 支持副本集、分片集群两种部署架构，能够满足不同的业务场景需要，在广泛应用于互联网（游戏、资讯、社交、电商、直播）、新零售、在线教育、金融、物联网、政企等行业及其他众多应用场景。

MongoDB Cluster 是一款基于 MongoDB 分片技术构建的分布式文档数据库，支持海量数据的横向扩展，支持多可用区部署，提供全量物理备份功能，具有高性能、高可用、可扩展等优点。

分片（Sharding）是一种将数据分布到对台服务器上的技术。Sharding 常用于海量数据和高吞吐操作的数据库，对数据进行拆分，并将数据水平地分散到不同的服务器上。

## 产品架构

MongoDB 实现分片集群时，MongoDB 引入 Config Server 来存储集群的元数据，引入 mongos 作为应用访问的入口，mongos 从 Config Server 读取路由信息，并将请求路由到后端对应的 Shard 上。

- 访问入口（Mongos）  
  提供对外应用访问，所有操作均通过 Mongos 执行。同时配置了数据迁移和数据自动平衡。为保证高可用，生产环境一般配置2个或以上 Mongos 节点。

- 查询路由（Query Routers）  
  Mongos 启动后，会从 Config Server 加载元数据，开始提供服务，将用户的请求正确路由到对应的 Shard。

- 配置服务器（Config Server）  
  存储集群所有节点、分片数据路由信息。为保证高可用，生产环境一般配置3个 Config Server 节点形成副本集。

- 数据分片（Shard）  
  存储应用数据记录。每个 Shard 都是由3个节点组成的副本集。

![MongoDB Cluster 产品架构](../../_images/mongodb_cluster_arch.png)
