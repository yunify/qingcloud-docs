---
title: "etcd 集群操作"
draft: false
enableToc: false
weight: 5
---

## 增加节点

当 etcd 需增加节点以应付客户端逐步增多带来的压力，您可以在 etcd 详细页点击**新增节点**按钮。需注意的是，增加节点会影响 etcd 的性能，因为每个节点上需要进行数据同步。增加 etcd 代理节点时可以同时添加，添加成功详情页会显示服务状态为活跃。

## 删除节点

您也可以在 etcd 详细页选中需要删除的节点，然后点**删除**按钮删除节点，以节省资源和费用。 同样，删除节点数只能为偶数以保证集群始终为奇数个节点，可以同时删除代理节点。

## 清除历史数据

若没有开启自动清除，可通过点击**清除历史数据**菜单手动进行清除操作。

![etcd-compact](/middware/etcd/images/etcd-compact.png)

## 备份集群数据

若没有开启自动备份，可通过点击**创建备份**菜单手动备份当前数据。

> **注意**：
>
> 如果集群只有一个节点并且存储了 v2 的数据，此集群在备份过程中服务会中断，备份完成后服务自动恢复（多节点集群不受影响）。

![etcd-backup](/middware/etcd/images/etcd-backup.png)

## 恢复集群

可通过自动或手动创建的备份创建一个新集群。

备份可以在 etcd 集群的**备份**标签页找到：

![etcd-restore](/middware/etcd/images/etcd-restore.png)

如果 etcd 集群已删除，可以通过青云控制台左侧菜单**存储** >**备份**找到并重新创建。

![etcd-restore](/middware/etcd/images/etcd-restore-2.png)

## 修复集群

> **注意**：
>
> 该操作会覆盖现有数据，请谨慎操作！如需协助，可通过工单咨询青云工程师。

如果 etcd 集群由于无法预知的原因导致不能正常工作（节点之前的数据不一致），可尝试**修复集群**，该操作将用指定的某个集群内节点上的数据文件覆盖其他节点上的文件从而恢复数据一致。

![etcd-repair](/middware/etcd/images/etcd-repair.png)



