---
title: "获取连接信息"
description: 本小节主要介绍如何获取 RocketMQ 连接信息。 
keyword: 云计算,消息队列,中间件,RocketMQ,连接信息
weight: 10
collapsible: false
draft: false
---

本小节主要介绍如何获取 RocketMQ 连接信息。

## 进入集群详情页面

1. 登录管理控制台。
2. 选择**产品与服务** > **消息队列与中间件** > **RocketMQ 服务**，进入 RocketMQ 服务管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。

## 服务端口信息

在**服务端口信息**模块，获取 nameserver、broker、brokervip 的协议和端口。
   
<img src="../../../_images/check_protocol_port.png" alt="连接信息" style="zoom:50%;" />

- nameserver 端口：名称服务器的访问端口，默认为 `9876`。
- broker 端口：Broker remotingServer 服务端口，默认为 `10911`。
- brokervip 端口：Broker fastRemotingServer 服务端口，默认为 `10909`。

> **说明**
> 
> Broker 对外服务的监听端口包括：remotingServer 服务端口和 fastRemotingServer 服务端口。
> - remotingServer 可以处理客户端所有请求，如：生产者发送消息的请求，消费者拉取消息的请求。Broker 在向 NameServer 注册时，只会上报 remotingServer 监听的 listenPort 端口。
> - fastRemotingServer 不可以处理消费者拉取消息的请求，其他与 remotingServer 相同。

## 节点 IP

选择**节点**页签，查看各节点的 IP 地址。

<img src="/middware/rocketmq/_images/check_node.png" alt="节点列表" style="zoom:50%;" />
   
## Broker 列表

选择**Broker 列表**页签，查看集群 Broker 名称、编号和地址。

<img src="/middware/rocketmq/_images/broker_list.png" alt="Broker 列表" style="zoom:50%;" />