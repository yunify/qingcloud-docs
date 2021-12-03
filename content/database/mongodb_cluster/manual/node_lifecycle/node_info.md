---
title: "节点概述"
description: 本小节主要介绍 MongoDB Cluster 节点基本信息。 
keyword: MongoDB Cluster 节点信息；
weight: 01
collapsible: false
draft: false
---


MongoDB Cluster 一个集群可包含多个节点，一个节点即一个数据库计算基本计量单位，对应一台虚拟机和一台存储磁盘。

MongoDB Cluster 节点目前集成 Sharding、Config Server、Mongos 节点服务。

![MongoDB Cluster 产品架构](../../../_images/mongodb_cluster_arch.png)

|<span style="display:inline-block;width:120px">节点类型</span> |<span style="display:inline-block;width:480px">节点说明</span>|
|:----|:----|:----|
| Sharding |  存储应用数据记录。<li>每个 Shard 都是由 3 个节点组成的副本集。 |  
| Config Server |  存储集群所有节点、分片数据路由信息。<li>为保证高可用，生产环境一搬配置3个 Config Server 节点形成副本集。| 
|  Mongos |  提供对外应用访问，所有操作均通过 Mongos 执行，同时配置了数据迁移和数据自动平衡。<li>为保证高可用，生产环境一般配置2个或以上 Mongos 节点。 
