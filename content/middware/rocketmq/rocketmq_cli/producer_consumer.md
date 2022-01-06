---
title: "生产消费消息"
description: 在命令行模式下通过 RocketMQ 生产消费消息。
keyword: 云计算,大数据,消息队列,中间件,RocketMQ,client,生产消息,消费消息
weight: 30
draft: false
---

本小节主要介绍如何在命令行模式下通过 RocketMQ 生产消费消息。

## 发送测试消息

```
$ /opt/apache-rocketmq/current/bin/tools.sh org.apache.rocketmq.example.quickstart.Producer
```

> **注意**
>
> - `RocketMQ 4.3.1 - v1.0.0`版本节点的环境变量已经内置了name server的地址列表以方便用户使用。
> - 如果在用户使用过程中，管理员对name server节点进行了调整（增删节点），可以退出重新登录以使环境变量生效，或者通过命令重新加载环境变量：`source /etc/profile.d/rocketmq-path.sh` 。
> - `RocketMQ 4.7.1 - v1.1.0`版本需要设定环境变量，`export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64`； `export NAMESRV_ADDR=namesrv_node_ip:9876` ，同时所有脚本位于 `/opt/rocketmq/current/bin/*` 。

## 接收消息

```
$ /opt/apache-rocketmq/current/bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer
```

> **注意**
>
> - `RocketMQ 4.3.1 - v1.0.0`版本节点的环境变量已经内置了name server的地址列表以方便用户使用。
> - 如果在用户使用过程中，管理员对name server节点进行了调整（增删节点），可以退出重新登录以使环境变量生效，或者通过命令重新加载环境变量：`source /etc/profile.d/rocketmq-path.sh` 。
> - `RocketMQ 4.7.1 - v1.1.0`版本需要设定环境变量，`export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64`；`export NAMESRV_ADDR=namesrv_node_ip:9876` ，同时所有脚本位于 `/opt/rocketmq/current/bin/*` 。

