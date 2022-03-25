---
title: "rabbitmq_management 使用示例"
description: 本小节主要介绍如何使用 rabbitmq_management。
keyword: 云计算,大数据,消息队列,中间件,RabbitMQ,rabbitmq,消息队列服务,消息中间件,rabbitmq_management,操作指南,投递消息,消费消息
weight: 12
draft: false
---

##  创建一个队列

![](../../_images/create_queue.png)

> **说明**
> 
> 创建一个队列，指定队列所在的节点，设置队列是否持久化，如果未设置持久化，集群重启会导致队列消失。

##  投递消息

![](../../_images/publish_message.png)

> **说明**
> 
> 投递消息，设置消息是否持久化，设置为2时候代表持久化，默认不持久化，如果未设置持久化，集群重启消息消失。

##  消费消息

![](../../_images/get_message.png)

> **说明**
> 
> 获取消息，并设置队列消息是否可以重复获取，是否需要base64编码。
