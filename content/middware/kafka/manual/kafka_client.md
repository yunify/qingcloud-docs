---
title: "Kafka客户端命令行简介"
description: test
weight: 12
draft: false
---

>**提示**：使用Kafka 1.0.0-QingCloud1.1.6及后续版本，建议使用青云为您创建客户端节点，用户名：`ubuntu`，密码：`kafka`。

## 创建Topic

创建一个topic为test，该topic分区为 3，副本为 1

```shell
$ kafka-topics.sh  --create --zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35 --replication-factor 1 --partitions 3 --topic test
Created topic "test".
```

## 查看Topic

查看集群所有topic

```shell
$ kafka-topics.sh --list --zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35
__consumer_offsets
test
```

## 向Topic发送消息

 向test发送消息

```shell
$ kafka-console-producer.sh --broker-list 192.168.0.3:9092,192.168.0.4:9092,192.168.0.9:9092 --topic test
>hi
>hello world
>how are you
```

## 消费Topic消息

消费 test 消息（若没有使用 --from-beginning ， 则从最新的开始消费）

```shell
$ kafka-console-consumer.sh --bootstrap-server 192.168.0.3:9092,192.168.0.4:9092,192.168.0.9:9092 --topic test --from-beginning
hi
hello world
how are you
```

## 查看Topic消息分布情况

查看test消息分布情况

```shell
$ kafka-topics.sh --describe --zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35 --topic test
Topic:test	  PartitionCount:3	  ReplicationFactor:1	  Configs:
Topic: test	Partition: 0	Leader: -1	Replicas: 1	Isr: 1
Topic: test	Partition: 1	Leader: -1	Replicas: 2	Isr: 2
Topic: test	Partition: 2	Leader: 3	Replicas: 3	Isr: 3
```

## 修改Topic

修改分区

```shell
$ kafka-topics.sh -zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35 --alter --topic test  partitions 2
    
```

删除topic

```shell
$ kafka-topics.sh -zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35 --delete --topic test
Topic test is marked for deletion.
Note: This will have no impact if delete.topic.enable is not set to true.
```

## 平衡Topic

平衡topic分区leader

```shell
$ kafka-preferred-replica-election.sh -zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35
Created preferred replica election path with {"version":1,"partitions":[{"topic":"__consumer_offsets","partition":34},{"topic":"__consumer_offsets","partition":36},{"topic":"__consumer_offsets","partition":27},...
```

## 查看消费者消费情况

检查topic消费者消费情况

```shell
$ kafka-consumer-groups.sh --bootstrap-server 192.168.0.3:9092,192.168.0.4:9092,192.168.0.9:9092 --describe --group my-group
Note: This will not show information about old Zookeeper-based consumers.

TOPIC                          PARTITION  CURRENT-OFFSET  LOG-END-OFFSET  LAG        CONSUMER-ID                                       HOST                           CLIENT-ID
test                          0          10              10              0          consumer-1-0000f0c2-eee7-432b-833b-c882334c8f71   /192.168.100.26                consumer-1
test                          1          7               7               0          consumer-1-0000f0c2-eee7-432b-833b-c882334c8f71   /192.168.100.26                consumer-1
```

>**提示**：kafka 0.9.0.0以前的版本用kafka-consumer-offset-checker.sh查看
>
>```shell
>$ kafka-consumer-offset-checker.sh  --zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35 --topic test --group my-group
>```

## 更改Topic配置参数

更改topic配置参数（也可以在创建的时候指定，例如创建时候最后跟上--config a=b --config x=y）

```shell
$ kafka-configs.sh --zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35 --entity-type topics --entity-name test  --alter --add-config max.message.bytes=128000
Completed Updating config for entity: topic 'test'.
```

## 跨集群迁移方案MirrorMaker使用

Kakfa MirrorMaker是Kafka官方提供的跨数据中心的流数据同步方案。其实现原理，其实就是通过从Source Cluster消费消息然后将消息生产到Target Cluster，即普通的消息生产和消费。用户只要通过简单的consumer配置和producer配置，然后启动Mirror，就可以实现准实时的数据同步。 具体可以参照官方详细文档[Kafka-MirrorMaker](https://kafka.apache.org/documentation/) 。

**步骤说明**： 

1. 在Kafka-client节点上创建消费配置文件和生产者配置文件，配置消费者和生产者参数。
2. 执行kafka-mirror-maker.sh脚本文件（指定需要迁移的topic）。
3. whitelist为迁移的topic白名单，可以使用通配符号，当不指定的时候，所有topic迁移到新的集群。
4. blacklist为迁移的topic黑名单参数，当使用新的consumer时，该参数不支持。
5. whitelist和blacklist只能够使用一个。

**示例如下**（迁移test和test1 topic到目标集群）：

```
1.消费者配置 --- consumer.properties

group.id=mirror-maker
auto.commit.enable=true
auto.commit.interval.ms=2000
# 兼容老的0.8版本集群可以使用 zookeeper.connect
# 0.9版本以上集群可以使用新的consumer，配置 bootstrap.server
zookeeper.connect=192.168.0.11:2181,192.168.0.7:2181,192.168.0.9:2181/kafka/cl-hb1zzzht
auto.offset.reset=smallest

2.生产者配置 --- producer.properties

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
 
3.运行kafka-mirror-maker.sh执行数据迁移

$ kafka-mirror-maker.sh --consumer.config consumer.properties --producer.config producer.propertie
```

