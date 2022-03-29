---
title: "跨集群迁移方案 MirrorMaker 使用"
description: Kafka MirrorMaker 是 Kafka 官方提供的跨数据中心的流数据同步方案。其实现原理，其实就是通过从 Source Cluster 消费消息然后将消息生产到 Target Cluster，即普通的消息生产和消费。用户只要通过简单的 consumer 配置和 producer 配置，然后启动 Mirror，就可以实现准实时的数据同步。
keyword: 云计算,大数据,消息队列,中间件,Kafka,MirrorMaker,跨集群迁移
weight: 10
draft: false
---

Kafka MirrorMaker 是 Kafka 官方提供的跨数据中心的流数据同步方案。其实现原理是通过从 Source Cluster 消费消息然后将消息生产到 Target Cluster。

您只需要通过简单的 consumer 配置和 producer 配置，然后启动 MirrorMaker，即可实现准实时的数据同步。更多详细信息可以参见官方文档 [Kafka-MirrorMaker](https://kafka.apache.org/documentation/)。

本实践主要介绍如何迁移集群 A 的 Topic 到集群 B。

## 前提条件

- 请确保集群 A 与集群 B 网络互通。本实践中集群 A 与集群 B 在同一个 VPC 中。
- 请确保集群 B 参数 **auto.create.topics.enable** 配置为 `true`。

   <img src="/middware/kafka/_images/auto_create_topics_enable_true.png" alt="设置参数" style="zoom:50%;" />

## 操作步骤

登录集群 A 的客户端节点，执行以下操作。

1. 创建消费配置文件 consumer.config，并配置消费者参数。

    ```
    // A 集群的 broker 列表
    bootstrap.servers=ip:port,ip:port,ip:port
    // Group ID，您可以自定义
    group.id=xxx
    // 同步策略
    partition.assignment.strategy=org.apache.kafka.clients.consumer.RoundRobinAssignor
    // earliest 同步所有历史消息；latest 仅同步最新消息，从每个 Topic 的最新开始同步；可以不填，默认为 latest
    auto.offset.reset=latest
    ```
    
    **示例**：

    ```
    bootstrap.servers=192.168.0.45:9092,192.168.0.46:9092,192.168.0.47:9092
    group.id=mirror-maker
    partition.assignment.strategy=org.apache.kafka.clients.consumer.RoundRobinAssignor
    auto.offset.reset=latest
    ```

2. 创建生产者配置文件 producer.config，并配置生产者参数。

    ```
    // B 集群的 broker 列表
    bootstrap.servers=ip:port,ip:port,ip:port
    ```

3. 执行以下命令，运行 kafka-mirror-maker.sh 脚本文件进行数据迁移。

    ```
    /opt/kafka/current/bin/kafka-mirror-maker.sh --consumer.config consumer.config --producer.config producer.config --whitelist ".*"        
    ```

    > **说明**
    > 
    > whitelist 为迁移的 Topic 白名单，"" 里是 Java 正则表达式，如果只同步部分指定 Topic，则填写 "topic1,topic2,topic3"。

## 查看迁移结果

登录集群 B 的 Kafka Manager，可以看到集群 B 已有集群 A 的 Topic。

## 常见问题

### 为什么执行同步命令，没有效果？

**可能原因**：consumer.config 文件中未配置 **auto.offset.reset** 参数，或 **auto.offset.reset** 参数配置为 `latest`。此时只同步最新消息，原来的历史消息都不同步。    
**解决方法**：
- 如果您不需要同步历史消息，可以忽略。
- 如果您需要同步历史消息，请在 consumer.config 文件中配置 **auto.offset.reset** 参数为 `earliest`。

### 为什么迁移速度很慢？

**可能原因**：Kafka 集群配置不够高，Kafka 客户端节点配置不够高。    
**解决方法**：您可以单独创建一个配置更高的虚拟机，然后自行安装 Kafka 客户端，然后再执行同步命令。


