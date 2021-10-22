---
title: "产品优势"
description: 
draft: false
weight: 2
enableToc: false
keyword: QingCloud，RabbitMQ，消息队列服务，HAProxy + Keepalived
---

## 金融级数据强一致性

支持事务、消息确认、请求重试等特性，以及消息队列高可用等灵活的策略机制，完全可以满足金融级企业对消息中间件高可靠、高可用、数据强一致性的要求。

## 灵活的路由方式

支持 direct、topic、headers和fanout等路由方式。当用户有更加复杂的路由需求时，可以通过组合上述交换机的方式来实现。为了实现最大化的灵活性，RabbitMQ on QingCloud 还支持用户自己设置交换机类型。

## 支持多种传输协议

支持与 MQTT、STOMP、WebSockets 等多种通信传输协议对接，可广泛应用到各类行业应用场景中。例如：MQTT 作为目前广泛应用于物联网领域的通信协议，已经实现了与 RabbitMQ on QingCloud 的无缝对接，承载来自物联网终端产生的海量消息数据。

## 集成高可用负载均衡

集成了 HAProxy 负载均衡器，通过 Keepalived 支持高可用负载均衡模式（主备），保证整个集群运行更加稳定高效。在使用配置过程中，在 HAProxy + Keepalived 节点设置中选择负载均衡使用模式，后续便可以通过配置参数管理界面调整负载均衡策略。

## 支持大规模集群部署

为了防止因节点间网络不稳定而导致集群出现分裂现象，RabbitMQ 集群部署时会限制规模。而青云 QingCloud 强大的网络能力及 AppCenter 对集群应用调度的优化能力，使 RabbitMQ on QingCloud 可以实现较大规模的节点部署，并带来整体使用性能的提高。

## 完善的监控告警能力

部分使用场景中，消息量可能会出现爆发性突增，给消息队列集群的运维带来了极大的挑战。RabbitMQ on QingCloud提供完善的监控告警功能，可以显示集群运行中的 CPU、内存、硬盘等资源消耗的详细监控信息。同时，用户也可以看到诸如整体服务状态、服务层级等健康信息。

## 横向与纵向在线伸缩

支持横向与纵向在线伸缩。RabbitMQ on QingCloud 支持通过新增集群节点进行横向扩容，以及通过修改节点配置进行节点纵向伸缩。

## 插件支持

磁盘节点支持消息延迟队列插件，[使用方法参考](https://github.com/rabbitmq/rabbitmq-delayed-message-exchange)；RabbitMQ 节点支持消息追踪插件，[使用方法参考](http://www.rabbitmq.com/firehose.html)。