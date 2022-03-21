---
title: "步骤三：生产消费消息"
description: 在命令行模式下连接 Kafka，并通过 Kafka 生产消费消息。
keyword: 云计算,大数据,消息队列,中间件,Kafka,生产消息,消费消息,快速入门
weight: 30
draft: false
---

本小节主要介绍如何在命令行模式下连接 Kafka，并通过 Kafka 生产消费消息。

您也可以在业务代码中连接 Kafka，具体操作请参见 [SDK 文档](../../sdk/java/sdk_java/)。

## 前提条件

- 已创建 Kafka 集群，并获取 Kafka 节点 IP 地址。
- 已创建 Topic，并获取 Topic 名称。

## 登录 Kafka 客户端

1. 登录管理控制台。
2. 选择**产品与服务** > **消息队列与中间件** > **Kafka 服务**，进入 Kafka 集群列表页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 选择**节点**页签，获取客户端节点 IP 或点击节点名称右侧的 Web 终端，并登录客户端节点。

    > **说明**
    > 
    >  - Kafka 2.3.1 - v2.0.1（包含）之前版本：客户端节点用户名为`ubuntu`，初始密码为`kafka`。
    >  - Kafka 2.3.1 - v2.0.1 之后版本：客户端节点用户名为`client`，初始密码为`client`。
   
   <img src="../../_images/login_client.png" alt="登录 Client 节点" style="zoom:50%;" />

## 发送消息

在客户端节点执行以下命令，向 Topic 发送消息。

```shell
cd /opt/kafka/current/bin
./kafka-console-producer.sh --broker-list {连接地址} --topic {Topic 名称}
```

- 连接地址：所连接的 Kafka 集群的地址，格式为 host_ip1:port,host_ip2:port,host_ip3:port。    
  	*host_ip* 为 Kafka 节点的 IP 地址，*port* 为客户端节点的访问端口 9092。   
  	若 Kafka 节点地址为：192.168.0.1, 192.168.0.2, 192.168.0.3, 则连接地址为：192.168.0.1:9092,192.168.0.2:9092,192.168.0.3:9092   

- Topic 名称：在[步骤二：创建 Topic](../create_resource) 创建的 Topic 名称。

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
- from-beginning 表示按顺序开始消费，若没有使用 –from-beginning，则从最新的开始消费。

**示例**       
```shell
$ cd /opt/kafka/current/bin
./kafka-console-consumer.sh --bootstrap-server 192.168.0.1:9092,192.168.0.2:9092,192.168.0.3:9092 --topic test --from-beginning
hi
hello world
how are you
```

