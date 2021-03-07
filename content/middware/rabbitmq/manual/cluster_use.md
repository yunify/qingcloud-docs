---
title: "集群使用"
description: test
weight: 8
draft: false
---

## 使用RabbitMQ和Haproxy web监控管理工具可以很方便管理集群

- RabbitMQ每个节点都安装了rabbitmq_management插件，登录方式：http://节点ip:15672， 登录帐号：guest/guest， 该角色为超级管理员，另外青云内部会创建一个monitor用户用于监控，请勿删除与修改monitor用户（如果创建了Haproxy节点，建议使用 http://vip:15672 或者使用 http://haproxy节点ip:15672 登录管理集群）。
- 默认Haproxy+Keepalived节点创建后，监控管理界面默认端口为8100，登录方式：http://vip:8100 或者使用 http://haproxy 节点ip:8100， 登录帐号为：haproxy/haproxy， 可以通过配置参数修改端口和用户。
- RabbitMQclient 节点登录帐号为: root/rabbitmq。

## 集群信息

在集群创建完毕后，可以在控制台`Appcenter -> 集群管理`标签下看到目前已经创建的集群信息：

**集群列表**：

![](../../_images/cluster_list.png)

点击**集群 ID**可以查看该集群的详细信息：

![](../../_images/cluster_info.png)

集群基础资源监控信息：

![](../../_images/resource_monitor.png)

点击**磁盘节点**的**监控**选项框，查看集群节点监控信息：

![](../../_images/node_monitor.png)

推荐使用RabbitMQ自带的web管理工具监控RabbitMQ集群：

![](../../_images/rabbimq_web_manage.png)

Haproxy节点监控管理：

![](../../_images/haproxy_monitor.png)

## 配置参数

点击**配置参数**，修改`Haproxy参数`， `RabbitMQ参数`。

![](../../_images/config_paras.png)

## 扩容集群

点击集群**基本属性**右侧按钮里的**扩容集群**，在集群性能不足时提高集群的配置。

![](../../_images/resize_cluster.png)