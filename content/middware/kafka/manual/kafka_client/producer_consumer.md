---
title: "生产消费消息"
description: 在命令行模式下通过 Kafka 生产消费消息。
keyword: 云计算,大数据,消息队列,中间件,Kafka,client,生产消息,消费消息
weight: 30
draft: false
---

本小节主要介绍如何在命令行模式下通过 Kafka 生产消费消息。

## 发送消息

在客户端节点执行以下命令，向 Topic 发送消息。

```shell
cd /opt/kafka/current/bin
./kafka-console-producer.sh --broker-list {连接地址} --topic {Topic 名称}
```

- 连接地址：所连接的 Kafka 集群的地址，格式为 host_ip1:port,host_ip2:port,host_ip3:port。    
  	*host_ip* 为 Kafka 节点的 IP 地址，*port* 为客户端节点的访问端口 9092。   
  	若 Kafka 节点地址为：192.168.0.1, 192.168.0.2, 192.168.0.3, 则连接地址为：192.168.0.1:9092,192.168.0.2:9092,192.168.0.3:9092   

- Topic 名称：创建的 Topic 名称。

输入需要发送的消息内容，按 **Enter** 发送消息，每一行的内容都将作为一条消息发送到 Kafka。   

**示例**   

```shell
$ cd /opt/kafka/current/bin
./kafka-console-producer.sh --broker-list 192.168.0.1:9092,192.168.0.2:9092,192.168.0.3:9092 --topic test
>hi
>hello world
>how are you
```

## 消费消息

在客户端执行以下命令，消费 Topic 消息。   

```shell
cd /opt/kafka/current/bin
./kafka-console-consumer.sh --bootstrap-server {连接地址} --topic {Topic 名称} --from-beginning
```

- 连接地址：与发送消息的连接地址相同。
- Topic 名称：与发送消息的 Topic 名称相同。
- from-beginning 表示从最新的开始消费。

**示例**       
```shell
$ cd /opt/kafka/current/bin
./kafka-console-consumer.sh --bootstrap-server 192.168.0.1:9092,192.168.0.2:9092,192.168.0.3:9092 --topic test --from-beginning
hi
hello world
how are you
```

## 查看 Topic 消息分布情况

查看 test 消息分布情况

```shell
$ cd /opt/kafka/current/bin
./kafka-topics.sh --describe --zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35 --topic test
Topic:test	  PartitionCount:3	  ReplicationFactor:1	  Configs:
Topic: test	Partition: 0	Leader: -1	Replicas: 1	Isr: 1
Topic: test	Partition: 1	Leader: -1	Replicas: 2	Isr: 2
Topic: test	Partition: 2	Leader: 3	Replicas: 3	Isr: 3
```

## 查看消费者消费情况

检查 topic 消费者消费情况

```shell
$ cd /opt/kafka/current/bin
./kafka-consumer-groups.sh --bootstrap-server 192.168.0.3:9092,192.168.0.4:9092,192.168.0.9:9092 --describe --group my-group
Note: This will not show information about old Zookeeper-based consumers.

TOPIC                          PARTITION  CURRENT-OFFSET  LOG-END-OFFSET  LAG        CONSUMER-ID                                       HOST                           CLIENT-ID
test                          0          10              10              0          consumer-1-0000f0c2-eee7-432b-833b-c882334c8f71   /192.168.100.26                consumer-1
test                          1          7               7               0          consumer-1-0000f0c2-eee7-432b-833b-c882334c8f71   /192.168.100.26                consumer-1
```

>**提示**
> 
> kafka 0.9.0.0 以前的版本使用 kafka-consumer-offset-checker.sh 查看消费者消费情况。
>
>```shell
>$ cd /opt/kafka/current/bin
>./kafka-consumer-offset-checker.sh  --zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35 --topic test --group my-group
>```
