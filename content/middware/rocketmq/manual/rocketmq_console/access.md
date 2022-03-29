---
title: "登录 RocketMQ 控制台"
description: 登录 RocketMQ 控制台。
keyword: 云计算,大数据,消息队列,中间件,RocketMQ,RocketMQ Console
weight: 10
draft: false
---

您可以通过 RocketMQ 控制台对 Topic 进行管理，并向 Topic 发送消息。

## 前提条件

- 已创建 RocketMQ 集群，且 RocketMQ 集群状态为**活跃**。
- 获取控制台节点 IP。
- 配置 [VPN](/network/vpc/manual/vpn/)，确保本地可以访问集群网络。

## 操作步骤

1. 在本地浏览器中输入 `http://网页控制台节点IP:端口`，进入 RocketMQ 控制台登录页面。

   > **说明**
   > 
   > **端口**默认为 `8080`。例如：网页控制台节点的 IP 地址为 `192.168.0.63`，则在浏览器输入 `http://192.168.0.63:8080/`。

   <img src="/middware/rocketmq/_images/rocketmq_console_login.png" alt="RocketMQ Console" style="zoom:50%;" />  

2. 输入 RocketMQ 控制台用户名和密码。

   > **说明**
   > 
   > 用户名密码可在[配置参数](/middware/rocketmq/manual/config_para/modify_para)页面进行设置。默认用户名/密码为 `admin/password`。

3. 点击 LOGIN，默认进入 Dashboard 页面。

   <img src="/middware/rocketmq/_images/rocketmq_console_dashboard.png" alt="RocketMQ Console Dashboard" style="zoom:50%;" />  

