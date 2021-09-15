---
title: "产品架构"
description: 
draft: false
weight: 4
enableToc: false
keyword:  QingCloud, RabbitMQ, 消息队列服务, 消息中间件
---

RabbitMQ 服务的部署架构如下图所示。

![节点状态](../../_images/architecture.svg)

**组件说明：**

- Producer：消息生产者，创建消息并向队列发送消息。
- Haproxy：提供高可用性、负载均衡，以及基于 TCP 和 HTTP 的应用程序代理，转发消息生产者的请求。
- Broker：消息队列服务器实体，实现 AMQP 消息队列和路由功能。
- Exchange：消息交换机，接收生产者发送的消息，根据 Binding 规则将消息路由给服务器中的队列。
- Queue：消息队列，用于存储还未被消费者消费的消息。生产者将消息送到队列，消费者从队列中获取和消费消息。多个消费者可以同时订阅同一个队列，队列里的消息分配给不同的消费者。
- Binding：绑定规则，把 Exchange 和 Queue 按照路由规则绑定起来。
- etcd：分布式键值数据库，用于存放集群部分信息（主要是和集群节点对等发现相关的信息）。
- Consumer：消息消费者，消费者订阅 RabbitMQ 的队列，获取消息。

</br>

**启动注册工作原理：**

Broker 启动时连接 etcd 将自身节点的信息以 key-value 的形式保存到 etcd 中，接着 Broker 尝试注册到集群中时，会先向 etcd 中尝试获取锁（所有节点共有同一个锁），获取成功之后当前节点成功加入到集群中，否则节点的 key 将会被 etcd 删除。

</br>

**消息工作原理：**

1. 消息生产者（Producer）调用 SDK，向负载均衡器（Haproxy）发送请求。
2. 负载均衡器（Haproxy）将请求发送到 RabbitMQ 的 Broker。
3. RabbitMQ 服务器的交换机（Exchange）根据消息属性将消息路由到队列（Queue）中进行存储。
4. 消息消费者（Consumer）通过监听订阅队列处理消息。消息包含消息体和标签两部分，消息体是业务逻辑的数据结构，标签是表述消息体的信息。当消费者消费一条消息时，只是消费消息的消息体，标签会在路由过程中丢失，不会被消费者消费。

