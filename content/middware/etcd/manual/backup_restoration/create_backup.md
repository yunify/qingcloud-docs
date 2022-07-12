---
title: "备份与恢复"
description: 本小节主要如何创建 Etcd 数据备份。 
keyword: Etcd 数据备份
weight: 10
collapsible: false
draft: false
---

## 备份集群数据

若没有开启自动备份，可通过点击**创建备份**菜单手动备份当前数据。

> **注意**
>
> 如果集群只有一个节点并且存储了 v2 的数据，此集群在备份过程中服务会中断，备份完成后服务自动恢复（多节点集群不受影响）。

![etcd-backup](/middware/etcd/_images/etcd-backup.png)

## 恢复集群

可通过自动或手动创建的备份创建一个新集群。

备份可以在 etcd 集群的**备份**标签页找到：

![etcd-restore](/middware/etcd/_images/etcd-restore.png)

如果 etcd 集群已删除，可以通过**产品与服务** > **存储服务** > **备份**找到备份文件。

![etcd-restore](/middware/etcd/_images/etcd-restore-2.png)
