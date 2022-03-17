---
title: "步骤二：创建 Topic"
description: 通过 Kafka Manager 创建 Topic。
keyword: 云计算,大数据,消息队列,中间件,Kafka,创建topic,快速入门
weight: 20
draft: false
---

本小节主要介绍如何通过 Kafka Manager 创建 Topic。

您也可以通过客户端命令行创建 Topic，具体操作请参见 [Kafka 客户端命令行方式创建 Topic](../../manual/kafka_client/kafka_client_topic/#创建-topic)。

## 前提条件

- 已创建 Kafka 集群。
- 若通过本地浏览器访问 Kafka Manager，则需要配置 [VPN](/network/vpc/manual/vpn/)，确保本地可以访问集群网络。

## 访问 Kafka Manager

1. 在浏览器里输入```http://客户端节点IP:端口```。

   > **说明**
   > 
   > - 客户端节点 IP，如果使用的版本是Kafka 0.10.2.1 - v1.1.6，可使用集群内任意节点的 IP。
   > - 端口可以在集群配置参数进行设置，默认为 `9000`。

   <img src="../../_images/clusters.png" alt="Kafka clusters" style="zoom:40%;" />  

2. 如果在集群配置参数中指定需要登录，请使用配置的帐号登录。默认为不需要登录。


## 创建 Topic

1. 在 Kafka Manager 点击目标 Cluster 名称，进入 Cluster 详情页面。
2. 选择 **Topic** > **Create**，进入 Create Topic 页面。
3. 配置相关参数，若不单独给 Topic 配置参数，会使用集群级别默认参数。

    <img src="../../_images/create_topic.png" alt="Create topic" style="zoom:50%;" />

4. 配置完成后，点击 **Create**，完成 Topic 创建操作。

