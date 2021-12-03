---
title: "产品咨询"
description: 本小节主要介绍 MongoDB Cluster 分片节点问题。 
keyword: MongoDB Cluster 分片，分片节点，Shard
weight: 10
collapsible: false
draft: false
---

## MongoDB Cluster 是什么？

MongoDB Cluster 是一款基于 MongoDB 分片技术构建的分布式文档数据库，支持 MongoDB Shard 功能。

- Shard 将数据按片键分布存储到多台服务器上，具备水平扩展能力，适用于 PB 级的数据存储业务场景。
- 一个 Shard 由三个节点组成，支持节点高可用，保障数据高可靠。

## MongoDB Cluster 分片认证机制是什么？

MongoDB Cluster 兼容支持 SCRAM-SHA-1 和 MONGODB-CR 两种分片认证机制。

## MongoDB Cluster 分片策略是什么？

支持 Ranged 和 Hashed 两种分片策略。
