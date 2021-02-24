---
title: "集群使用"
description: test
weight: 8
draft: false
---

### 集群信息

在集群创建完毕后，可以在控制台 `Appcenter -> 集群列表` 标签下看到目前已经创建的集群信息：

 **集群列表**

![](../../_images/cluster_list.png)

 点击**集群 ID** 可以查看该集群的详细信息：

![](../../_images/cluster_allinfo.png)

 集群基础资源监控信息：

![](../../_images/cluster_monitor.png)

### 配置参数

  点击 **配置参数**，可以修改 **Kafka 参数**，**Kafka-manager 参数**。

![](../../_images/config_parameter.png)

### 扩容集群

  点击集群**基本属性**右侧按钮里的**扩容集群**，在集群性能不足时提高集群的配置。

> **提示**：硬盘扩容不会导致服务重启，扩容 cpu ，内存等核心资源则会导致服务重启

![](../../_images/expand_cluster.png)

### 跨网访问

青云提供灵活的网络配置，一般建议 kafka 集群和客户端（生产者、消费者）都在同一个 VPC 下工作，来达到最高的性能。如果 Kafka 在实际使用中会出现 producer ，consumer 与 broker 都不在一个网段之中需要跨 VPC，可以考虑以下方法：

1. 通过 [边界路由器](https://docs.qingcloud.com/product/network/border)、[IP Sec 隧道](https://docs.qingcloud.com/product/network/ipsec)、[GRE 隧道](https://docs.qingcloud.com/product/network/gre) 等方式把网络打通，这种方式适合于大规模复杂网络的情况。

2. 配置 [VPN](https://docs.qingcloud.com/product/network/vpn) ，这种方法通常用于本地开发测试。

3. 通过集群参数 `advertised.host.name` 和 `advertised.port` 对外暴露出来，这种方式只适合于单节点 kafka 集群。需要在 broker 所在的路由器上配置 [端口转发](https://docs.qingcloud.com/product/network/appcenter_network_config/config_portmapping) ，并且需要修改 broker 的 `advertised.host.name` 与 `advertised.port` 为路由器转发的源地址和源端口。这是因为 Kafka 各节点 (broker, producer, consumer) 之间是靠 advertised host 与 advertised port 通讯的。假设路由器的 IP 地址是 207.226.141.61 ，端口 9080 转发到 Kafka broker 192.168.0.10 端口 9092 ，点击**配置参数**，点击**参数**右侧的**修改属性**按钮，修改 advertised.host.name 为 207.226.141.61 ，修改 advertised.port 为 9080 。

   ![](../../_images/modify_parameter.png)


### kafka-manager 创建 Topic

点击 **Topic**，点击 **Create**，若不单独给 Topic 配置参数，会使用集群级别默认参数：

![](../../_images/create_topic.png)

### kafka-manager 管理 Topic

点击 **Topic**，可以在 **List** 里找到 Topic 进行管理，修改 topic 参数：

![](../../_images/manage_topic.png)

### kafka-manager 平衡分区 leader

点击 **Preferred Replica Election**，通过 **Run** 执行。

> **提示**：分区内必须有数据时才能使用。

![](../../_images/replica_election.png)

### 日志及文件查看

为了更好的获取节点使用情况，青云提供了方便快捷的文件日志获取服务。配置 [VPN](https://docs.qingcloud.com/product/network/vpn) 或 [端口转发](https://docs.qingcloud.com/product/network/appcenter_network_config/config_portmapping) 后，确保本地可以访问集群网络。即可在本地浏览器里查看或下载相应节点的日志和文件。

在控制台 `Appcenter -> 集群列表` 标签下可以看到集群每个节点的信息，如节点角色，节点 IP 。对于 kafka-manager 节点，在浏览器输入`http://节点IP`可查看 Kafka Manager 的日志文件。

![](../../_images/file_viewer_1.png)

对于 kafka 节点，只需要获取其中一个节点 IP ，在本地浏览器输入 `http://节点IP` ，可查看全部 Kafka 节点的 Heap Dump 文件（ dump 目录）、数据文件（ kafka-logs 目录）和日志文件（ logs 目录）。

![](../../_images/file_viewer_2.png)

点击对应标题即可获取详细信息：

![](../../_images/kafka_log.png)

## kafka 客户端命令行示例简介

>使用 Kafka 1.0.0-QingCloud1.1.6 及后续版本，建议使用青云为您创建客户端节点，用户名：`ubuntu`，密码：`kafka`。

### 创建 Topic

创建一个 topic 为 test，该 topic 分区为 3，副本为 1

```shell
$ kafka-topics.sh  --create --zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35 --replication-factor 1 --partitions 3 --topic test
Created topic "test".
```

### 查看 Topic

查看集群所有 topic

```shell
$ kafka-topics.sh --list --zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35
__consumer_offsets
test
```

### 向 Topic 发送消息

 向 test 发送消息

```shell
$ kafka-console-producer.sh --broker-list 192.168.0.3:9092,192.168.0.4:9092,192.168.0.9:9092 --topic test
>hi
>hello world
>how are you
```

### 消费 Topic 消息

消费 test 消息（若没有使用 --from-beginning ， 则从最新的开始消费）

```shell
$ kafka-console-consumer.sh --bootstrap-server 192.168.0.3:9092,192.168.0.4:9092,192.168.0.9:9092 --topic test --from-beginning
hi
hello world
how are you
```

### 查看 Topic 消息分布情况

查看 test 消息分布情况

```shell
$ kafka-topics.sh --describe --zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35 --topic test
Topic:test	  PartitionCount:3	  ReplicationFactor:1	  Configs:
Topic: test	Partition: 0	Leader: -1	Replicas: 1	Isr: 1
Topic: test	Partition: 1	Leader: -1	Replicas: 2	Isr: 2
Topic: test	Partition: 2	Leader: 3	Replicas: 3	Isr: 3
```

### 修改 Topic

修改分区

```shell
$ kafka-topics.sh -zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35 --alter --topic test  partitions 2
    
```

删除 topic

```shell
$ kafka-topics.sh -zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35 --delete --topic test
Topic test is marked for deletion.
Note: This will have no impact if delete.topic.enable is not set to true.
```

### 平衡 topic

平衡 topic 分区 leader

```shell
$ kafka-preferred-replica-election.sh -zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35
Created preferred replica election path with {"version":1,"partitions":[{"topic":"__consumer_offsets","partition":34},{"topic":"__consumer_offsets","partition":36},{"topic":"__consumer_offsets","partition":27},...
```

### 查看消费者消费情况

检查 topic 消费者消费情况

```shell
$ kafka-consumer-groups.sh --bootstrap-server 192.168.0.3:9092,192.168.0.4:9092,192.168.0.9:9092 --describe --group my-group
Note: This will not show information about old Zookeeper-based consumers.

TOPIC                          PARTITION  CURRENT-OFFSET  LOG-END-OFFSET  LAG        CONSUMER-ID                                       HOST                           CLIENT-ID
test                          0          10              10              0          consumer-1-0000f0c2-eee7-432b-833b-c882334c8f71   /192.168.100.26                consumer-1
test                          1          7               7               0          consumer-1-0000f0c2-eee7-432b-833b-c882334c8f71   /192.168.100.26                consumer-1
```

>kafka 0.9.0.0 以前的版本用 kafka-consumer-offset-checker.sh 查看
>
>```shell
>$ kafka-consumer-offset-checker.sh  --zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35 --topic test --group my-group
>```

### 更改 topic 配置参数

更改 topic 配置参数(也可以在创建的时候指定，例如创建时候最后跟上 --config a=b --config x=y)

```shell
$ kafka-configs.sh --zookeeper 192.168.0.6:2181,192.168.0.8:2181,192.168.0.7:2181/kafka/cl-zom1un35 --entity-type topics --entity-name test  --alter --add-config max.message.bytes=128000
Completed Updating config for entity: topic 'test'.
```

### 跨集群迁移方案 MirrorMaker 使用

Kakfa MirrorMaker 是 Kafka 官方提供的跨数据中心的流数据同步方案。其实现原理，其实就是通过从 Source Cluster 消费消息然后将消息生产到 Target Cluster ，即普通的消息生产和消费。用户只要通过简单的 consumer 配置和 producer 配置，然后启动 Mirror ，就可以实现准实时的数据同步。 具体可以参照官方详细文档 [Kafka-MirrorMaker](https://kafka.apache.org/documentation/) 。

**步骤说明**： 

1. 在 Kafka-client 节点上创建消费配置文件和生产者配置文件，配置消费者和生产者参数。
2. 执行 kafka-mirror-maker.sh 脚本文件（指定需要迁移的 topic）。
3. whitelist 为迁移的 topic 白名单，可以使用通配符号，当不指定的时候，所有 topic 迁移到新的集群。
4. blacklist 为迁移的 topic 黑名单参数，当使用新的 consumer 时，该参数不支持。
5. whitelist 和 blacklist 只能够使用一个。

**示例如下**（迁移 test 和 test1 topic 到目标集群）：

```
1. 消费者配置 --- consumer.properties

group.id=mirror-maker
auto.commit.enable=true
auto.commit.interval.ms=2000
# 兼容老的0.8版本集群可以使用 zookeeper.connect
# 0.9版本以上集群可以使用新的consumer，配置 bootstrap.server
zookeeper.connect=192.168.0.11:2181,192.168.0.7:2181,192.168.0.9:2181/kafka/cl-hb1zzzht
auto.offset.reset=smallest

2. 生产者配置 --- producer.properties

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
 
3.运行 kafka-mirror-maker.sh 执行数据迁移

$ kafka-mirror-maker.sh --consumer.config consumer.properties --producer.config producer.propertie
```

## 注意事项

- 青云提供 Kafka 在 ZooKeeper 上注册路径格式如下：zk1:2181,zk2:2181,zk3:2181/kafka/cluster_id , cluster_id 是创建 kafka 集群时候生成的集群 ID
- 请尽量合理选择和预留存储资源，合理配置数据存储周期和大小，尽量避免因为磁盘写满而造成的线上故障
- 开发的时候客户端尽量选择与服务端对应的版本
- 可以使用 kafka-manager 管理和修改 topic 配置、监控集群，也可以使用客户端节点或者自己安装客户端，使用命令行形式管理和使用集群
- offsets.topic.replication.factor 参数必须小于或者等于 Kafka broker 节点数，不能大于 Kafka broker 节点数，否则就会消费不了消息，直至集群中 Kafka broker 节点数大于或者等于此参数
- 请结合QingCloud官网上提供的 `运维与管理 -> 监控告警 自动伸缩` 功能为机器添加更强大的保障

至此，`Kafka on QingCloud AppCenter` 的介绍到这里就告一个段落了。

在使用过程中如果遇到问题可以通过 `提交工单` 来获取帮助，我们将竭诚为您服务。

Have a nice day on QingCloud AppCenter !

