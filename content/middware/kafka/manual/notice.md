---
title: "注意事项"
description: test
weight: 16
draft: false
---

- 青云提供Kafka在ZooKeeper上注册路径格式如下：zk1:2181,zk2:2181,zk3:2181/kafka/cluster_id , cluster_id是创建Kafka集群时候生成的集群ID
- 请尽量合理选择和预留存储资源，合理配置数据存储周期和大小，尽量避免因为磁盘写满而造成的线上故障
- 开发的时候客户端尽量选择与服务端对应的版本
- 可以使用Kafka-manager管理和修改Topic配置、监控集群，也可以使用客户端节点或者自己安装客户端，使用命令行形式管理和使用集群
- offsets.topic.replication.factor参数必须小于或者等于Kafka broker节点数，不能大于Kafka broker节点数，否则就会消费不了消息，直至集群中Kafka broker节点数大于或者等于此参数
- 请结合QingCloud官网上提供的`运维与管理 -> 监控告警 自动伸缩`功能为机器添加更强大的保障

至此，`Kafka on QingCloud AppCenter`的介绍到这里就告一个段落了。

在使用过程中如果遇到问题可以通过`提交工单`来获取帮助，我们将竭诚为您服务。

