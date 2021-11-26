---
title: "什么是 RabbitMQ"
description: 
draft: false
weight: 1
enableToc: false
keyword: RabbitMQ， AMQP,  QingCloud RabbitMQ 服务
---

RabbitMQ 是青云基于 AMQP 标准协议研发的高吞吐、低延迟、高可扩展的消息队列服务，并以云应用的形式在 QingCloud AppCenter 中部署，具备可靠性、灵活的路由、事务、高可用的队列、消息排序、可视化管理等功能，服务器端用 Erlang 语言编写，天生具备高可用和高并发的特性。

当前，RabbitMQ 服务最新版本基于开源 RabbitMQ 3.8.19 版本构建。

## 为什么选择 RabbitMQ

- 即开即用：RabbitMQ 提供高可用的集群实例，拥有丰富内存规格，您可以通过控制台直接下单购买并创建，无需单独准备服务器资源。
- 高可用：集成了 HAProxy 负载均衡器，通过 Keepalived 支持高可用负载均衡模式（主备），保证整个集群运行更加稳定高效。
- 高性能：打破原生 RabbitMQ 集群部署的规模限制。青云 QingCloud 强大的网络能力及 AppCenter 对集群应用调度的优化能力，使 RabbitMQ on QingCloud 可以实现较大规模的节点部署，并带来整体使用性能的提高。

更多详情，请见[RabbitMQ 产品优势](../func)。

## 购买方式

[创建 RabbitMQ 集群](../../quickstart/quick_start)

## 产品定价

RabbitMQ 的定价及计费的说明，请参见[计费说明](../../billing/price/)。

