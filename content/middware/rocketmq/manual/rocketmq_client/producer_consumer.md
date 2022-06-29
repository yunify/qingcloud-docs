---
title: "生产消费消息"
description: 在命令行模式下通过 RocketMQ 生产消费消息。
keyword: 云计算,大数据,消息队列,中间件,RocketMQ,client,生产消息,消费消息
weight: 30
draft: false
---

本小节主要介绍如何在命令行模式下通过 RocketMQ 生产消费消息。

## RocketMQ 4.7.1 - v1.1.0

RocketMQ 4.7.1 - v1.1.0 版本需要设置环境变量：   
`export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64`； `export NAMESRV_ADDR=namesrv_node_ip:9876`。

**发送消息**

```
$ /opt/rocketmq/current/bin/tools.sh org.apache.rocketmq.example.quickstart.Producer
```

**接收消息**

```
$ /opt/rocketmq/current/bin/tools.sh org.apache.rocketmq.example.quickstart.Consumerß
```

## RocketMQ 4.3.1 - v1.0.0

RocketMQ 4.3.1 - v1.0.0 版本节点的环境变量已经内置了 Name Server 的地址列表。

如果在使用过程中，管理员对 Name Server 节点进行了调整（增删节点）：
- 可以退出重新登录以使环境变量生效。
- 或者通过命令重新加载环境变量：`source /etc/profile.d/rocketmq-path.sh` 。

**发送消息**

```
$ /opt/apache-rocketmq/current/bin/tools.sh org.apache.rocketmq.example.quickstart.Producer
```

**接收消息**

```
$ /opt/apache-rocketmq/current/bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer
```
