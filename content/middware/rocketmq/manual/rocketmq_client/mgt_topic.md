---
title: "Topic 管理"
description: 通过 RocketMQ 客户端命令行对 Topic 进行管理。
keyword: 云计算,大数据,消息队列,中间件,RocketMQ,Topic,client
weight: 20
draft: false
---

本小节主要介绍如何通过 RocketMQ 客户端命令行对 Topic 进行管理。

下面列举几个常见操作，详情可参见[官方使用文档](http://rocketmq.apache.org/docs/cli-admin-tool/)。

> **注意**
> 
> 通过客户端可以对集群中的实际数据进行增删改，请谨慎操作。

## RocketMQ 4.7.1 - v1.1.0

**创建 Topic**

```
$ /opt/rocketmq/current/bin/mqadmin updateTopic -c DefaultCluster -b 192.168.2.26:10911 -n 192.168.2.29:9876 -t qingcloud
```
**删除 Topic**

```
$ /opt/rocketmq/current/bin/mqadmin deleteTopic -c DefaultCluster -n 192.168.2.29:9876 -t qingcloud
```

## RocketMQ 4.3.1 - v1.0.0

**创建 Topic**

```
$ /opt/apache-rocketmq/current/bin/mqadmin updateTopic -c DefaultCluster -b 192.168.2.26:10911 -n 192.168.2.29:9876 -t qingcloud
```

**删除 Topic**

```
$ /opt/apache-rocketmq/current/bin/mqadmin deleteTopic -c DefaultCluster -n 192.168.2.29:9876 -t qingcloud
```

## 参数说明

- `-c` 参数后面指定集群名称。（集群名称可在[配置参数](/middware/rocketmq/manual/config_para/modify_para)页面进行设置。默认为 `DefaultCluster`。）
- `-b` 参数后面指定 Broker 地址。若集群有多个 Broker 节点，任意指定一个节点即可。（注意：不能是副本节点。）
- `-n` 参数后面指定名称服务器地址。若集群有多个名称服务器节点，使用英文分号（;）进行分隔。
