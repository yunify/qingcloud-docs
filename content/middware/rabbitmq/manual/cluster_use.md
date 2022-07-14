---
title: "集群使用"
description: 本小节主要介绍 RabbitMQ 集群的使用，包括查看集群信息、扩容集群等。
keyword: 云计算,大数据,消息队列,中间件,RabbitMQ,rabbitmq,消息队列服务,消息中间件,操作指南,集群使用
weight: 8
draft: false

---

集群创建成功后，您可以使用 rabbitmq_management 和 Haproxy web 监控管理工具管理集群。

## rabbitmq_management

RabbitMQ 每个节点都安装了 rabbitmq_management 插件。

- 登录方式：`http://节点IP:15672`。
  
   如果创建了负载均衡器节点，则建议使用 `http://vip:15672` 或者 `http://haproxy节点ip:15672` 进行登录。

- 登录帐号：用户名为 **guest**，默认密码为 **guest**，该用户为超级管理员。

   > **注意**
   >
   > 云平台创建了一个 **monitor** 用户用于监控集群节点，请勿删除与修改该用户。

## Haproxy web 监控管理工具

Haproxy+Keepalived 节点创建后，监控管理界面默认端口为 8100。

- 登录方式：`http://vip:8100` 或 `http://haproxy 节点ip:8100`。
- 登录帐号：用户名为 **haproxy**，默认密码为 **haproxy**。

> **说明**
>
> 您也可以通过**配置参数**修改端口和用户。

## RabbitMQ client

RabbitMQ client 节点登录帐号：
- RabbitMQ 3.8.19 - v1.6.0（包含）之后版本：用户名为 **client**，默认密码为 **client**。
- RabbitMQ 3.8.19 - v1.6.0 之前版本：用户名为 **root**，默认密码为 **rabbitmq**。
