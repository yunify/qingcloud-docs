---
title: "访问 Kafka Manager"
description: 访问 Kafka Manager，通过 Kafka Manager 控制台对 Cluster 和 Topic 进行管理。
keyword: 云计算,大数据,消息队列,中间件,Kafka,Kafka Manager
weight: 10
draft: false
---

您可以通过 Kafka Manager 控制台对 Cluster 和 Topic 进行管理。

> **说明**
> 
> - Kafka 1.0.0 - v1.1.6 及后续新版本提供的 Kafka Manager 安装在客户端节点上。
> - Kafka Manager 显示的版本并非实际 Kafka 版本，请以创建 Kafka 实际版本为主。这并不会影响到您使用 Kafka 和 Kafka Manager。

## 前提条件

配置 [VPN](/network/vpc/manual/vpn/)，确保本地可以访问集群网络。

## 访问 Kafka Manager

1. 在本地浏览器里输入```http://客户端节点IP:端口```。

   > **说明**
   > 
   > - 客户端节点 IP，如果使用的版本是 Kafka 0.10.2.1 - v1.1.6，可使用集群内任意节点的 IP。
   > - 端口通过集群配置参数 `kafka-manager.port`进行设置，默认为 `9000`。

   <img src="../../../_images/clusters.png" alt="Kafka clusters" style="zoom:50%;" />  

2. 如果在集群配置参数中指定需要登录，请使用配置的帐号登录。默认为不需要登录。

   > **说明**
   > 
   > 是否需要登录验证，通过集群配置参数 `kafka-manager.basicAuthentication.enabled` 进行设置。
   > - 默认为 `false`，不需要登录验证。
   > - 设置为 `true`，需要登录验证。
