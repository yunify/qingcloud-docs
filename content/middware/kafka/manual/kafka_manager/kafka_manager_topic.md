---
title: "Topic 管理"
description: 通过 Kafka Manager 管理和修改 Topic 配置。
keyword: 云计算,大数据,消息队列,中间件,Kafka,Topic,Kafka Manager,平衡分区leader
weight: 30
draft: false
---

本小节主要介绍通过 Kafka Manager 管理和修改 Topic 配置。

您也可以通过客户端节点使用命令行对 Topic 进行管理，详细操作请参见[Kafka 客户端命令行 > Topic 管理](../../kafka_client/kafka_client_topic/)。

## 创建 Topic

1. 访问 Kafka Manager，进入 Kafka Manager 首页。
2. 点击目标 Cluster 名称，进入 Cluster 详情页面。
3. 选择 **Topic** > **Create**，进入 Create Topic 页面。
4. 配置相关参数，若不单独给 Topic 配置参数，会使用集群级别默认参数。

    <img src="../../../_images/create_topic.png" alt="Create topic" style="zoom:50%;" />

5. 配置完成后，单击 **Create**，完成 Topic 创建操作。

## 修改 Topic

点击 **Topic**，可以在 **List** 里找到 Topic 进行管理，修改 topic 参数：

<img src="../../../_images/manage_topic.png" alt="Manager topic" style="zoom:50%;" />

## 平衡分区 leader

点击 **Preferred Replica Election**，通过 **Run** 执行。

> **说明**
> 
> 分区内必须有数据时才能使用。

<img src="../../../_images/replica_election.png" alt="replica_election" style="zoom:50%;" />

