---
title: "节点概述"
description: 本小节主要介绍 RocketMQ 节点基本信息。 
keyword: 云计算,大数据,消息队列,中间件,RocketMQ,节点信息,
weight: 01
collapsible: false
draft: false
---

一个 RocketMQ 集群可包含多个节点，RocketMQ 节点目前支持`名称服务器`、`Broker`、`网页控制台`、`客户端`四种类型。

| <span style="display:inline-block;width:120px">节点类型</span> | <span style="display:inline-block;width:540px">说明</span> | 
| :----------------------------------------------------------- | :--------------------------------------------------------- | 
| 名称服务器 | 名称服务器是一个几乎无状态节点，可集群部署，节点之间无任何信息同步。主要包括两个功能：Broker 管理，接受 Broker 集群的注册信息并且保存下来作为路由信息的基本数据。    |
| Broker   | Broker 分为 Master 与 Slave，一个 Master 可以对应多个 Slave，但是一个 Slave 只能对应一个 Master。主要负责消息的存储、投递和查询以及服务高可用保证。                                                           | 
| 网页控制台 | 用于部署 RocketMQ 控制台，仅支持单节点部署。通过控制台可对集群进行可视化管理。  | 
| 客户端    | 用于部署 RocketMQ 客户端，可集群部署。  |
