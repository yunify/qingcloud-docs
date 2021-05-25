---
title: "节点管理"
description: 本小节主要介绍如何管理 RadonDB 集群节点。 
keywords: radondb 节点管理,
data: 2021-05-14T00:38:25+09:00
weight: 25
collapsible: false
draft: false
---


## 查看节点列表

选择 IP，并使用列出的 IP 来下载同步的日志。同时显示了每个节点的服务状态。

![节点列表](../../_images/node_list.png)

**注解**：这里的 IP 仅供查询和下载同步的日志使用，不能做写入使用。

## 增删节点

可以根据需要增加 SQL 节点的副本、存储节点、监控节点。增加存储节点则会增加 1 主和 2 副本的云服务器。

![添加节点](../../_images/add_nodes.png)
