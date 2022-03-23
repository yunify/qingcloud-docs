---
title: "步骤二：创建 Topic"
description: 通过 RocketMQ 控制台创建 Topic。
keyword: 云计算,大数据,消息队列,中间件,RocketMQ,创建topic,快速入门
weight: 20
draft: false
---

本小节主要介绍如何通过 RocketMQ 控制台创建 Topic。

您也可以通过客户端命令行创建 Topic，具体操作请参见 [RocketMQ 客户端命令行方式创建 Topic](/middware/rocketmq/rocketmq_client/mgt_topic)。

## 前提条件

- 已创建 RocketMQ 集群。
- 若通过本地浏览器访问 RocketMQ 控制台，则需要配置 [VPN](/network/vpc/manual/vpn/)，确保本地可以访问集群网络。

## 访问 RocketMQ 控制台

1. 在本地浏览器中输入 `http://控制台节点IP:端口`，进入 RocketMQ 控制台登录页面。

   > **说明**
   > 
   > **端口**默认为 `8080`。例如：控制台节点的 IP 地址为 `192.168.0.63`，则在浏览器输入 `http://192.168.0.63:8080/`。

   <img src="/middware/rocketmq/_images/rocketmq_console_login.png" alt="RocketMQ Console" style="zoom:50%;" />  

2. 输入 RocketMQ 控制台用户名和密码。

   > **说明**
   > 
   > 用户名密码可在[配置参数](/middware/rocketmq/manual/config_para/modify_para)页面进行设置。默认用户名/密码为 `admin/password`。

3. 点击 LOGIN，默认进入 Dashboard 页面。

   <img src="/middware/rocketmq/_images/rocketmq_console_dashboard.png" alt="RocketMQ Console Dashboard" style="zoom:50%;" />  


## 创建 Topic

1. [登录 RocketMQ 控制台](../access)。
2. 选择 **Topic**，进入 Topic 页面。
3. 点击 **ADD/UPDATE**，进入 Topic Change 页面。

   指定 Topic 所在的集群、broker、Topic 名称。

   <img src="/middware/rocketmq/_images/add_topic.png" alt="create topic" style="zoom:50%;" />  

4. 点击 COMMIT，开始创建 Topic。创建完成后，即可在 Topic 页面该 Topic。

   <img src="/middware/rocketmq/_images/rocketmq_console_topiclist.png" alt="create topic" style="zoom:50%;" />  
