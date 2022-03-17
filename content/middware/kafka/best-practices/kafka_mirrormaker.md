---
title: "跨集群迁移方案 MirrorMaker 使用"
description: Kafka MirrorMaker 是 Kafka 官方提供的跨数据中心的流数据同步方案。其实现原理，其实就是通过从 Source Cluster 消费消息然后将消息生产到 Target Cluster，即普通的消息生产和消费。用户只要通过简单的 consumer 配置和 producer 配置，然后启动 Mirror，就可以实现准实时的数据同步。
keyword: 云计算,大数据,消息队列,中间件,Kafka,MirrorMaker,跨集群迁移
weight: 10
draft: false
---

Kafka MirrorMaker 是 Kafka 官方提供的跨数据中心的流数据同步方案。其实现原理，其实就是通过从 Source Cluster 消费消息然后将消息生产到 Target Cluster，即普通的消息生产和消费。用户只要通过简单的 consumer 配置和 producer 配置，然后启动 Mirror，就可以实现准实时的数据同步。具体可以参照官方详细文档 [Kafka-MirrorMaker](https://kafka.apache.org/documentation/)。

## 操作步骤

1. 在 Kafka Client 节点上创建消费配置文件和生产者配置文件，配置消费者和生产者参数。
2. 执行 kafka-mirror-maker.sh 脚本文件（指定需要迁移的 Topic）。

    > **说明**
    >
    > - whitelist 为迁移的 topic 白名单，可以使用通配符号，当不指定的时候，所有 topic 迁移到新的集群。
    > - blacklist 为迁移的 topic 黑名单参数，当使用新的 consumer 时，不支持该参数。
    > - whitelist 和 blacklist 只能使用一个。

## 方案示例

以迁移 test 和 test1 topic 到目标集群为例。

1. 消费者配置 --- consumer.properties

    ```
    group.id=mirror-maker
    auto.commit.enable=true
    auto.commit.interval.ms=2000
    # 兼容老的0.8版本集群可以使用 zookeeper.connect
    # 0.9版本以上集群可以使用新的consumer，配置 bootstrap.server
    zookeeper.connect=192.168.0.11:2181,192.168.0.7:2181,192.168.0.9:2181/kafka/cl-hb1zzzht
    auto.offset.reset=smallest
    ```

2. 生产者配置 --- producer.properties

    ```
    # 目标集群
    bootstrap.servers=10.45.10.33:9092,10.45.10.34:9092,10.45.10.35:9092
    acks=all
    retries=3
    # 批次大点，增加点吞吐量性能
    batch.size=16384
    buffer.memory=33554432
    linger.ms=1
    key.serializer=org.apache.kafka.common.serialization.StringSerializer
    value.serializer=org.apache.kafka.common.serialization.StringSerializer
    ```

3. 运行 kafka-mirror-maker.sh 执行数据迁移。

    ```
    $ kafka-mirror-maker.sh --consumer.config consumer.properties --producer.config producer.propertie
    ```

