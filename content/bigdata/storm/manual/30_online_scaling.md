---
title: "在线伸缩"
description: 本小节主要介绍在线伸缩。 
keywords: Storm,在线伸缩
weight: 30
collapsible: false
draft: false
---

## 增加节点

当您需要横向扩展集群规模时，您可以在 Storm 详细页点击“新增节点”按钮增加主节点、从节点或 RPC 节点，每个新增节点在私有网络中的 IP 可以手动指定或选择自动分配。

![](../../_images/add_storm_node.png)

## 删除节点

当您不需要集群中的某些节点时，您可以在 Storm 详细页选中需要删除的节点，然后点“删除”按钮，以在线缩减集群规模。

![](../../_images/delete_storm_node.png)

## 纵向伸缩

由于不同类节点压力并不同，所以青云 Storm 支持对 主节点、从节点 和 RPC 节点分别进行纵向伸缩。通常情况下主节点和 RPC 节点的压力都不会太大，运行 worker 进程的从节点的配置一般更高些。

![](../../_images/resize_storm.png)

