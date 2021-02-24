---
title: "什么是RabbitMQ"
date: 2020-01-30T00:40:25+09:00
description: 
draft: false
enableToc: false
keyword: 
---

[RabbitMQ](https://www.rabbitmq.com/) 实现了 AMQP 协议，具有可靠性、灵活的路由、事务、高可用的队列、消息排序、可视化管理工具等功能，服务器端用 Erlang 语言编写，天生具备高可用和高并发的特性。

`RabbitMQ on QingCloud AppCenter` 将 RabbitMQ 通过云应用的形式在 QingCloud AppCenter 部署，具有如下特性:

- 支持横向与纵向在线伸缩
- 系统自动运维，降低企业使用成本
- 提供了监控告警功能，更好地管理集群
- 与 Haproxy+Keepalived 集成，具备高可用负载均衡特性
- 开箱即用，支持 AMQP、MQTT、STOMP、WebSockets 等多种丰富协议
- 磁盘节点支持消息延迟队列插件，[使用方法参考](https://github.com/rabbitmq/rabbitmq-delayed-message-exchange)
- RabbitMQ 节点支持消息追踪插件，[使用方法参考](http://www.rabbitmq.com/firehose.html)