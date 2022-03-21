---
title: "访问 RocketMQ 控制台"
description: 访问 Kafka Manager，通过 Kafka Manager 控制台对 Cluster 和 Topic 进行管理。
keyword: 云计算,大数据,消息队列,中间件,Kafka,Kafka Manager
weight: 10
draft: false
---

您可以通过 RocketMQ 控制台对 Topic 进行管理。

## 前提条件

配置 [VPN](/network/vpc/manual/vpn/)，确保本地可以访问集群网络。

## 操作步骤

1. 在本地浏览器里输入```http://控制台节点IP:端口```。

   > **说明**
   > 
   > - 端口可以在集群配置参数进行设置，默认为 8080。
   > - 例如：控制台节点的 IP 地址为`172.23.5.18`，则在浏览器输入`http://172.23.5.18:8080/`，

   <img src="../../../_images/clusters.png" alt="Kafka clusters" style="zoom:50%;" />  

2. 如果在集群配置参数中指定需要登录，请使用配置的帐号登录。默认用户密码为`admin/password`。

   ![](../../_images/console_login.png)

   ![](../../_images/console.png)

