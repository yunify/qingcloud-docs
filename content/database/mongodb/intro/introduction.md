---
title: "什么是 MongoDB"
description: 本小节主要介绍什么是 MongoDB 。 
keyword: 数据库,文档数据库,MongoDB,mongodb 产品简介, 
weight: 10
collapsible: false
draft: false
---

[MongoDB](https://www.mongodb.com/) 是一个开源的文档型数据库，具有高性能、高可用等优点。MongoDB 是面向文档的 NoSQL（非关系型）数据库，数据结构由字段和值组成。

文档数据库 MongoDB 基于原生 MongoDB ReplicaSet 构建的云服务，具备多节点高可用架构，提供安全、高可用、高可靠、弹性伸缩和易用的数据库服务，同时提供一键部署、弹性扩容、容灾、备份、恢复、性能优化、监控和告警等服务。

文档数据库 MongoDB 是一个基于分布式文件存储的开源 NoSQL 数据库系统，支持文档和键值存储模型，拥有灵活的数据模型、可靠的性能，以及自动的吞吐容量扩展功能，可被广泛应用于移动、互联网、物联网、游戏、广告技术及其他众多应用场景。

## 架构简介

MongoDB 副本集由一组 mongod 进程组成，包含一个 Primary 节点和多个 Secondary 节点。MongoDB Driver（客户端）将所有数据都写入 Primary 节点，Secondary 节点 从 Primary 节点同步数据，且所有 Secondary 节点存储相同的数据集，可实现数据的高可用。

- 主节点（Primary）
  
   Primary 节点接收所有的写请求，并同步到所有 Secondary 节点。一个 Replica Set 仅存在一个 Primary 节点。  
   读请求也是默认发到 Primary 节点处理。但是可通过修改客户端连接配置，读取 Secondary 节点。

- 副本节点（Secondary）

   Secondary 节点与 Primary 节点数据完全同步。当 Primary 节点 Hang 后，所有 Secondary 节点将同时参与选举，并最终选举出一个新的 Primary 节点。

文档数据库 MongoDB 选择 `PSS` 架构模式，即 `Primary + Secondary + Secondary` 架构模式，通过 Primary 和 Secondary 搭建 Replica Set。为了在选主投票的时能正常选举出大多数，Replica Set 节点数必须为奇数。

<img src="../../_images/mongodb_arch.png" alt="MongoDB 架构" style="zoom:50%;" />
