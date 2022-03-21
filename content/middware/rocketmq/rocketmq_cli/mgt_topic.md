---
title: "Topic 管理"
description: 通过 RocketMQ 客户端命令行对 Topic 进行管理。
keyword: 云计算,大数据,消息队列,中间件,Kafka,Topic,client
weight: 20
draft: false
---

本小节主要介绍如何通过 RocketMQ 客户端命令行对 Topic 进行管理。

下面列举几个常见操作，详情可参见[官方使用文档](http://rocketmq.apache.org/docs/cli-admin-tool/)。

> **注意**
> 
> 通过此客户端可以对集群中的实际数据进行增删改，请谨慎操作。

## 创建Topic

```
$ /opt/apache-rocketmq/current/bin/mqadmin updateTopic -c DefaultCluster -b 192.168.2.26:10911 -n 192.168.2.29:9876 -t qingcloud
```

> **说明**
>
> - `-c`参数后面指定集群名称（在集群“配置参数”选项卡里设置，如未设置则默认为DefaultCluster）。
> - `-b`参数后面指定broker地址。
> - `-n`参数后面指定name server地址。

## 删除Topic

```
$ /opt/apache-rocketmq/current/bin/mqadmin deleteTopic -c DefaultCluster -n 192.168.2.29:9876 -t qingcloud
```

> **说明**
>
> - `-c`参数后面指定集群名称（在集群“配置参数”选项卡里设置，如未设置则默认为DefaultCluster）。
> - `-n`参数后面指定name server地址。
