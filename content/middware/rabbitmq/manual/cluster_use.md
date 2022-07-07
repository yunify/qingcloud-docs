---
title: "集群使用"
description: 本小节主要介绍 RabbitMQ 集群的使用，包括查看集群信息、扩容集群等。
keyword: 云计算,大数据,消息队列,中间件,RabbitMQ,rabbitmq,消息队列服务,消息中间件,操作指南,集群使用
weight: 8
draft: false

---

## 使用 rabbitmq_management 和 Haproxy web 监控管理工具管理集群

- RabbitMQ 每个节点都安装了rabbitmq_management 插件，登录方式：`http://节点IP:15672`，如果创建了负载均衡器节点，则建议使用 `http://vip:15672` 或者 `http://haproxy节点ip:15672` 进行登录，登录帐号：**guest**，密码：**guest**， 该用户为超级管理员。

  > **注意**
  >
  > 云平台创建了一个 **monitor** 用户用于监控集群节点，请勿删除与修改该用户。

- Haproxy+Keepalived 节点创建后，监控管理界面默认端口为8100，登录方式：`http://vip:8100` 或 `http://haproxy 节点ip:8100`， 登录帐号：**haproxy**，密码：**haproxy**。您也可以通过**配置参数**修改端口和用户。

- RabbitMQ client 节点登录帐号：**client**，密码：**client**。

## 修改配置参数

点击**配置参数**，可修改 Haproxy 参数及 RabbitMQ 参数。

![](../../_images/config_paras.png)
