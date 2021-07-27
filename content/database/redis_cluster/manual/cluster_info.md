---
title: "集群信息"
description: 本小节主要介绍 Redis Cluster 集群信息。 
keywords: redis cluster 集群信息
data: 2021-05-14T00:38:25+09:00
weight: 10
collapsible: false
draft: false
---

## 基本属性

这里显示了集群的基本信息。当 Redis cluster 服务创建完成之后，我们可以查看 Redis cluster 中各节点的运行状态。

![基本属性](../../_images/overview.png)

## 配置参数

在此可以修改环境参数。参数修改完成保存后，集群将重启以应用新的参数配置，所以请在服务压力相对较小的时候修改参数。

![配置参数](../../_images/config.png)

## 监控告警

可以对集群节点配置告警策略，及时掌握集群的资源和服务状况。

![监控告警](../../_images/alert.png)

## 节点角色

可以在此实时查看集群的节点状态和主从关系。

![](../../_images/role.png)
