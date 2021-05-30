---
title: "节点管理"
description: 本小节主要介绍如何管理 QingCloud ChronuDB 集群节点。 
keywords: chronusdb 节点管理
data: 2021-05-14T00:38:25+09:00
weight: 20
collapsible: false
draft: false
---


- ChronusDB on QingCloud 在增加节点时，不支持对数据的重新分布。
- ChronusDB on QingCloud 暂不支持对集群进行删除节点操作。


## 查看节点列表

这里列出节点及其IP，可以使用这里列出的任意IP来对集群进行操作。同时显示了每个节点的服务状态。

![节点列表](../../_images/node_list.png)

## 增删节点

可以根据需要增加集群节点，需要注意的是为了尽快的完成增加节点操作，让计算资源更快的被集群应用，增加节点的过程不会对原有数据迁移。

![新增节点](../../_images/add_nodes.png)
