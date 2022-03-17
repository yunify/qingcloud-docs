---
title: "Cluster 配置"
description: 将 Kafka 集群配置添加到 Kafka Manager。
keyword: 云计算,大数据,消息队列,中间件,Kafka,集群配置,Kafka Manager
weight: 20
draft: false
---

需要将 Kafka 集群配置添加到 Kafka Manager 后，才能通过 Kafka Manager 管理 Kafka 集群。

## 自动添加集群配置到 Kafka Manager

Kafka 集群创建完后，客户端节点预装的 Kafka Manager 会自动加载 Kafka 集群的相关配置，创建默认的 Cluster。

## 手动添加集群配置到 Kafka Manager

1. 访问 Kafka Manager，进入 Kafka Manager 首页。

   <img src="../../../_images/clusters.png" alt="Kafka clusters" style="zoom:40%;" />  

2. 选择 **Cluster** > **Add Cluster**。
3. 自定义一个名字，填写所连接的Kafka集群地址，提供的 Kafka 服务对应的命名空间路径为：zkhost1:port,zkhost2:port…/kafka/集群ID。

   **示例：**     
   Kafka 集群 ID 为 cl-j0yf8y1m, ZooKeeper 地址：192.168.0.1:2181, 192.168.0.2:2181, 192.168.0.3:2181, 则填写 192.168.0.1:2181,192.168.0.2:2181,192.168.0.3:2181/kafka/cl-j0yf8y1m

4. 选择Kafka对应的版本，例如 Kafka 版本为 2.2.0，可以选择 2.2.0，勾选 jmx 配置。
5. 更改基本配置，点击 **save** 后可以使用 Kafka-manager 来管理和监控 Kafka 集群了。

   <img src="../../../_images/add_cluster.png" alt="Add clusters" style="zoom:50%;" />

