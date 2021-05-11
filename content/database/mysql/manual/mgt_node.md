---
title: "增删节点"
description: test
weight: 2
draft: false
---


QingCloud MySQL Plus 云数据库支持增删集群节点。
- 仅可以修改**只读实例**和 **Proxy 实例**节点数量。
- 添加**只读实例**节点的任务执行时间跟集群主实例的数据量有关系，数据量大时，任务执行时间会久一些，添加节点不影响集群的读写。
- 不能修改主实例节点数量。
- 基础版集群不支持增删节点服务。

![](../../_images/add_nodes.png)
