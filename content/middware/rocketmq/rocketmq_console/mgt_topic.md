---
title: "Console 使用指南"
description: 通过 Kafka Manager 管理和修改 Topic 配置。
keyword: 云计算,大数据,青云,QingCloud,消息队列,中间件,Kafka,Topic,Kafka Manager,平衡分区leader
weight: 30
draft: false
---

下面列举几个常见操作，详情可参见[官方使用文档](https://github.com/apache/rocketmq-dashboard/blob/master/docs/1_0_0/UserGuide_CN.md)。

> **注意**
> 
> 通过此控制台可以对集群中的实际数据进行增删改，请谨慎操作。

## 创建一个Topic

创建一个 Topic，指定 Topic 所在的 broker。

![](../../_images/create_topic.png)

## 发送消息

在指定的 Topic 后面，点击**发送消息**，填写消息内容进行发送。

![](../../_images/send_message.png)

##  查询消息

查询消息，在“消息”选项卡页面，选择 Topic 和时间范围进行查询，同时可以在查询结果后面查看消息详情。

![](../../_images/search_messages.png)
