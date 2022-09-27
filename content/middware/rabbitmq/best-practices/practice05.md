---
title: "切换集群"
description: 切换集群最佳实践。
keyword: 云计算,大数据,消息队列,中间件,RabbitMQ
weight: 30
draft: false
---

本文指导用户将业务从旧集群切换到新集群。

## 操作场景

若旧集群版本不能直接升级到新版本集群时，可以通过切换集群的方式，将业务从旧集群切换到新集群。

## 方案说明

创建新集群，然后在业务中开启新的 Consumer（请勿关闭旧 Consumer）指向新集群，然后再把所有已存在的 Producer 指向新集群。

这样用户的所有新消息都会生产到新集群里，新开启的 Consumer 会消费这些新消息；旧 Consumer 仍在继续消费旧集群的消息。从而保证切换 RabbitMQ 集群时，整个业务不中断。

## 操作步骤

1. 创建新集群。详细操作请参见[创建 RabbitMQ 集群](/middware/rabbitmq/quickstart/quick_start)。

    集群创建完成后，记录下集群的 vip。

    <img src="/middware/rabbitmq/_images/bp_create_cluster.png" alt="创建集群" style="zoom:50%;" />

2. 在新集群创建元数据。包括用户、queue 等。

    > **注意**
    > 
    > 新集群中的用户、queue等信息需要与旧集群保持一致。

3. 在业务中开启新的 Consumer，并指向新集群的 vip。

    如果用户现在的 Consumer 服务有 n 个，那么就开启新的 n 个 Consumer 指向新集群的 vip。新 Consumer 只会消费新集群的消息（此时新集群还没有任何消息），完全和旧集群无关。   

    > **注意**
    > 
    > 此时**请勿关闭旧 Consumer**，让他们继续消费旧集群的消息。

4. 在业务中将所有 Producer 指向新集群的 vip。
    
    > **注意**
    > 
    > 这里说的是已经存在的所有 Producer，并不需要开启新的 Producer。

5. 等待 7 天，此时旧集群的消息已经消费完成，可以关闭和删除这些旧 Consumer 服务了。

   
