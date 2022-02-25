---
title: "基本概念"
description: 本小节主要介绍 MongoDB Cluster 基本概念。 
keyword: MongoDB Cluster 基本概念 
weight: 100
collapsible: false
draft: false
---





## Mongos

MongoDB 数据库的访问请求入口，通过 Mongos 协调所有的请求。Mongos 是一个请求分发中心，负责把数据请求转发到 Shard 服务器。

MongoDB  Cluster 通过配置多个 Mongos 节点作为请求的入口，确保 MongoDB 请求的无障碍。

## Shard

分片（Shard）是指将数据库拆分，使其分散在不同服务器的过程。将数据分散到不同的服务器，可将服务器之间数据和运行能力进行协调，提升服务器数据存储和负载运行能力。

MongoDB  Cluster 的一个 Shard 是由三节点副本集组成，确保分片的高可用性。可根据业务对数据库应用性能及存储要求，配置多个 Shard 来扩展读写性能及存储空间，实现一个分布式数据库系统。

## ConfigServer

配置服务器（Config Server）是存储所有数据库元信息（路由、分片）配置的节点。

- Config Server 同步和加载配置信息给 Mongos。若 Config Server 中信息变更，将通知到所有的 Mongos 更新状态，确保 Mongos 准确路由。

- Config Server 存储了 Shard 路由的元数据，对服务器的可用性和数据可靠性要求极高。

MongoDB  Cluster 选用三节点副本集的方式，全方位保障 Config Sever 的服务可靠性和可用性。
