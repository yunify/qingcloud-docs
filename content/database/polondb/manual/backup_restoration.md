---
title: "备份恢复"
description: 本小节主要介绍如何备份恢复 QingCloud PolonDB 数据。 
keywords: polondb 备份恢复
data: 2021-05-14T00:38:25+09:00
weight: 50
collapsible: false
draft: false
---




## 自动备份集群

- 在集群创建的时候指定自动备份策略。

- 在集群创建后，点击**修改自动备份策略**，选择合适的时间。

![image-backupRestore](../../_images/image-backupRestore.png)

## 手动备份集群

点击**创建备份**，弹出备份窗口。

- 当集群节点变化，或是增量备份链达到 30 个后，会自动进行全量备份（创建新备份链），增量备份可以节省很多磁盘。

- PolonDB 在备份的时候，可能会对业务的写入产生短暂的阻塞影响，建议在业务低峰期进行。

![image-manualBackup](../../_images/image-manualBackup.png)

## 恢复集群

选择所需恢复的备份，点击**从备份创建集群**。

![image-manualRestore](../../_images/image-manualRestore.png)
