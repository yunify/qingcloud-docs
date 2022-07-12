---
title: "修复集群"
description: 本小节主要介绍如何清理 Etcd 集群历史数据。 
keyword: 云计算,Etcd,清理历史数据
weight: 88
collapsible: false
draft: false
---

## 注意事项

执行**修复集群**操作会覆盖现有数据，请谨慎操作。如需协助，可提交工单联系技术支持。

## 操作步骤

如果 etcd 集群由于无法预知的原因导致不能正常工作（节点之前的数据不一致），可尝试**修复集群**，该操作将用指定的某个集群内节点上的数据文件覆盖其他节点上的文件从而恢复数据一致。

![etcd-repair](/middware/etcd/_images/etcd-repair.png)