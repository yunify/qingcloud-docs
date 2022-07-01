---
title: "查看集群信息"
description: 本小节主要介绍如何查看 RabbitMQ 集群信息。 
keyword: 云计算,大数据,消息队列,中间件,RabbitMQ,rocketMQ,集群信息
weight: 10
collapsible: false
draft: false
---

RabbitMQ 集群创建成功后，可在管理控制台查看集群信息，包括集群基本属性、连接信息、租赁信息、节点信息、配置参数信息、告警配置、节点状态、服务地址、灾备关系、用户账号等。

本小节主要介绍如何查看集群信息。

## 前提条件

已获取管理控制台登录账号和密码，且已获取集群查看权限。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **消息队列与中间件** > **RabbitMQ 服务**，进入 RabbitMQ 服务管理页面。   
   可查看当前区域集群列表，以及集群基本信息。

   ![](../../../_images/cluster_list.png)

3. 点击目标集群 ID，进入集群详情页面。

   可查看该集群的详细信息。

   ![](../../../_images/cluster_info.png)

   集群基础监控信息：

   ![](../../../_images/resource_monitor.png)

   点击**磁盘节点**的**监控**选项框，查看集群节点监控信息。

   ![](../../../_images/node_monitor.png)

   推荐使用 RabbitMQ 自带的 web 管理工具监控 RabbitMQ集群：

   ![](../../../_images/rabbimq_web_manage.png)

   Haproxy节点监控管理：

   ![](../../../_images/haproxy_monitor.png)