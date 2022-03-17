---
title: "注意事项"
description: 本小节主要介绍 Kafka 服务的注意事项。
keyword: 云计算,大数据,消息队列,中间件,Kafka
weight: 20
draft: false
---

- 提供 Kafka 在 ZooKeeper 上注册路径格式如下：zk1:2181,zk2:2181,zk3:2181/kafka/cluster_id , cluster_id 是创建 Kafka 集群时候生成的集群 ID
- 请尽量合理选择和预留存储资源，合理配置数据存储周期和大小，尽量避免因为磁盘写满而造成的线上故障
- 开发时客户端尽量选择与服务端对应的版本

