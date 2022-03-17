---
title: "Topic 管理"
description: 通过 Kafka 客户端命令行对 Topic 进行管理。
keyword: 云计算,大数据,消息队列,中间件,Kafka,Topic,client
weight: 20
draft: false
---

本小节主要介绍如何通过 Kafka 客户端命令行对 Topic 进行管理。

您也可以通过 Kafka Manager 管理和修改 Topic 配置，详细操作请参见[Kafka Manager > Topic 管理](../../kafka_manager/kafka_manager_topic)。

## 创建 Topic

创建一个 Topic 为 test，该 Topic 分区为 3，副本为 3。

```shell
$ cd /opt/kafka/current/bin
./kafka-topics.sh  --create --zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35 --replication-factor 3 --partitions 3 --topic test
Created topic "test".
```

## 查看 Topic

查看集群所有 Topic

```shell
$ cd /opt/kafka/current/bin
./kafka-topics.sh --list --zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35
__consumer_offsets
test
```

## 平衡分区 leader

平衡 topic 分区 leader

```shell
$ cd /opt/kafka/current/bin
./kafka-preferred-replica-election.sh -zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35
Created preferred replica election path with {"version":1,"partitions":[{"topic":"__consumer_offsets","partition":34},{"topic":"__consumer_offsets","partition":36},{"topic":"__consumer_offsets","partition":27},...
```

## 更改 Topic 配置参数

更改 Topic 配置参数（也可以在创建的时候指定，例如创建时候最后跟上--config a=b --config x=y）

```shell
$ cd /opt/kafka/current/bin
./kafka-configs.sh --zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35 --entity-type topics --entity-name test  --alter --add-config max.message.bytes=128000
Completed Updating config for entity: topic 'test'.
```


## 修改 Topic 分区

```shell
$ cd /opt/kafka/current/bin
./kafka-topics.sh -zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35 --alter --topic test  partitions 2  
```

## 删除 Topic

```shell
$ cd /opt/kafka/current/bin
./kafka-topics.sh -zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35 --delete --topic test
Topic test is marked for deletion.
Note: This will have no impact if delete.topic.enable is not set to true.
```

