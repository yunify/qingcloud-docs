---
title: "查看日志及数据文件"
description: 在线查看 Kafka 日志、文件
keyword: 云计算,大数据,消息队列,中间件,Kafka,查看日志
weight: 70
draft: false
---

为了更好的查看节点运行情况，提供了方便快捷的日志文件获取服务。

## 前提条件

配置 [VPN](/network/vpc/manual/vpn/)，确保本地可以访问集群网络。即可在本地浏览器里查看日志或下载相应节点的日志文件。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **消息队列与中间件** > **Kafka 服务**，进入 Kafka 集群管理页面。
3. 点击集群 ID，进入集群详情页面，可以看到集群每个节点的信息，如节点角色、节点 IP。
4. 查看 Kafka Manager 日志。
 
   在本地浏览器输入`http://节点 IP`，进入日志查看页面。

   > **说明**  
   > 
   > Kafka 1.0.0 - v1.1.6 及后续新版本：Kafka Manager 安装在客户端节点上，此处**节点 IP** 为**客户端节点 IP 地址**。

   <img src="../../_images/file_viewer_1.png" alt="Kafka Manager 节点日志列表" style="zoom:50%;" /> 

   进入 logs 文件夹，点击对应路径，即可查看 Kafka Manager 的日志文件。 

   <img src="../../_images/kafka_manager_log.png" alt="Kafka Manager 日志" style="zoom:50%;" />

5. 查看 Kafka 节点日志。

   在本地浏览器输入`http://节点 IP`，可查看全部 Kafka 节点的日志文件。
  
   > **说明**  
   > 
   > 此处**节点 IP** 为其中一个 Kafka 节点 IP 地址。
   
   <img src="../../_images/file_viewer_2.png" alt="Kafka 节点文件列表" style="zoom:50%;" />  

   进入 logs 文件夹，点击对应路径，即可查看 Kafka 节点的日志文件。

   <img src="../../_images/kafka_log.png" alt="Kafka 日志" style="zoom:50%;" />  