---
title: "集群信息"
description: 本小节主要介绍 Redis Standalone 集群信息。 
keywords: redis standalone 集群信息
data: 2021-05-14T00:38:25+09:00
weight: 10
collapsible: false
draft: false
---

## 基本属性

这里显示了集群的基本信息。

![基本属性](../../_images/cluster_info.png)


## 服务端口信息

**Redis Standalone on QingCloud** 提供一个读写IP，此IP始终指向主节点。当发生主从切换时，此IP将指向新的主节点，无需手动更改主节点IP。

## 节点实时角色

您可以从 `节点实时角色` 一栏，实时地获取集群中节点的主从状态

![节点角色](../../_images/node_stat.png)


您也可以从服务监控项 `节点角色` 中，查看 redis 角色的状态变化，方便更好的定位问题

![节点角色](../../_images/node_stat2.png)

## 监控告警

您可以在此为节点配置告警信息，随时监控服务。

![alert](../../_images/alert.png)

## 文件下载

`Redis 5.0.5 - QingCloud 2.0.0` 及其之后的版本在「配置参数」栏添加了 WebConsole 的服务，您可以通过该服务下载日志、RDB 数据文件和 AOF 文件，该服务默认没有密码，建议在使用时配置密码

![](../../_images/copy_file_1.png)

您可以通过浏览器访问 http://[IP地址]:80 来访问下载页面

![](../../_images/copy_file_2.png)
