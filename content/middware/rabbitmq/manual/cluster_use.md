---
title: "集群使用"
description: test
weight: 8
draft: false
keyword:  QingCloud, RabbitMQ, rabbitmq,  消息队列服务, 消息中间件
---

## 使用 rabbitmq_management 和 Haproxy web 监控管理工具管理集群

- RabbitMQ 每个节点都安装了rabbitmq_management 插件，登录方式：`http://节点IP:15672`，如果创建了负载均衡器节点，则建议使用 `http://vip:1567` 或者 `http://haproxy节点ip:15672` 进行登录，登录帐号：**guest**，密码：**guest**， 该用户为超级管理员。

  > **注意**
  >
  > 青云内部创建了一个 **monitor** 用户用于监控集群节点，请勿删除与修改该用户。

- Haproxy+Keepalived 节点创建后，监控管理界面默认端口为8100，登录方式：`http://vip:8100` 或 `http://haproxy 节点ip:8100`， 登录帐号：**haproxy**，密码：**haproxy**。您也可以通过**配置参数**修改端口和用户。

- RabbitMQ client 节点登录帐号：**client**，密码：**client**。

## 查看集群信息

在集群创建完毕后，在控制台顶部菜单栏中，选择**产品与服务** > **AppCenter** > **集群管理**，便看到已经创建的集群：

![](../../_images/cluster_list.png)

点击**集群 ID**可以查看该集群的详细信息。

![](../../_images/cluster_info.png)

集群基础监控信息：

![](../../_images/resource_monitor.png)

点击**磁盘节点**的**监控**选项框，查看集群节点监控信息。

![](../../_images/node_monitor.png)

推荐使用RabbitMQ自带的web管理工具监控RabbitMQ集群：

![](../../_images/rabbimq_web_manage.png)

Haproxy节点监控管理：

![](../../_images/haproxy_monitor.png)

## 修改配置参数

点击**配置参数**，可修改 Haproxy 参数及 RabbitMQ 参数。

![](../../_images/config_paras.png)

## 扩容集群

点击集群**基本属性**右侧按钮里的**扩容集群**，在集群性能不足时提高集群的配置。

![](../../_images/resize_cluster.png)
