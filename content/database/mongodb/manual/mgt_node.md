---
title: "节点管理"
description: 本小节主要介绍如何管理 QingCloud MongoDB 集群节点。 
keywords: mongodb 节点管理, 
data: 2021-05-14T00:38:25+09:00
weight: 40
collapsible: false
draft: false
---



## 节点详情

您可以在这里实时查看节点的状态

![](../../_images/nodes_role.png)

## 新增节点

根据需要增加集群节点，增加的节点数必须为偶数。添加节点的任务执行时间跟集群的数据量有关系，数据量大时，任务执行时间会久一些，添加节点不影响集群的读写。

![](../../_images/add_nodes.png)

## 删除节点

删除节点不会导致主节点的 mongod 重启，但为避免影响到业务，请在业务量低时操作。

> 删除节点限制：
> 
> - 数量必须为偶数，至少保留一个节点。
> - 无法删除主节点。
> - 无法删除 `qc_sid` 为 1 的节点。

`qc_sid` 以 **root** 用户通过 mongo 连接后，执行 `rs.conf().members` 命令，可查看数据库。`qc_sid` 为 1 的节点的选举优先级为 2，即为主节点。
