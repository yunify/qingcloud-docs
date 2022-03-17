---
title: "登录 Kafka 客户端"
description: 登录 Kafka 客户端。
keyword: 云计算,大数据,消息队列,中间件,Kafka,client,客户端
weight: 10
draft: false
---

本小节主要介绍如何登录 Kafka 客户端。

## 前提条件

已创建 Kafka 集群，且 Kafka 集群状态为**活跃**。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **消息队列与中间件** > **Kafka 服务**，进入 Kafka 集群列表页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 选择**节点**页签，获取客户端节点 IP 或点击节点名称右侧的 Web 终端，并登录客户端节点。

    > **说明**
    > 
    >  - Kafka 2.3.1 - v2.0.1（包含）之前版本：客户端节点用户名为`ubuntu`，初始密码为`kafka`。
    >  - Kafka 2.3.1 - v2.0.1 之后版本：客户端节点用户名为`client`，初始密码为`client`。
   
   <img src="../../../_images/login_client.png" alt="登录 Client 节点" style="zoom:50%;" />