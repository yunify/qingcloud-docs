---
title: "集群信息"
description: 本小节主要介绍 RadonDB 基本集群信息。 
keywords: radondb 集群信息,
data: 2021-05-14T00:38:25+09:00
weight: 10
collapsible: false
draft: false
---

## 基本属性

这里显示了集群的基本信息。

![基本属性](../../_images/basic_info.png)


## 服务端口信息

集群提供两个高可用的读写 IP，分别对应于数据的读和写。

- 高可用读 IP：可将请求在 SQL 节点及其副本之间进行负载分担，提高读取性能，消除单点故障。

- 高可用写 IP：始终指向 SQL 主节点。

![高可用读写 IP 信息](../../_images/vip_info.png)


**注解**: 必须使用高可用的读写 IP 来访问集群。由于连接到读 IP 的请求会在所有 SQL 节点及其副本（包括当前的 SQL 主节点）之间负载，所以，当某个连接请求被分配到当前主节点时，也是可写的，反之，若分配到非主节点，则必然是只读的。

## 存储节点信息

展示各个存储节点的节点 ID、后端、节点写 VIP、节点读 VIP 和角色。

![账号](../../_images/display_nodelist.png)


## 服务功能

点开基本属性旁边的下拉按钮，可以看到提供的服务功能。

![服务功能](../../_images/service_list.png)
