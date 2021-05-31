---
title: "备份恢复"
description: 本小节主要介绍如何管理 RadonDB 数据备份恢复。 
keywords: radondb 备份恢复,
data: 2021-05-14T00:38:25+09:00
weight: 45
collapsible: false
draft: false
---



可以对集群进行手动备份，也可以在集群列表页面右键选择备份时间进行自动备份。

![手动备份](../../_images/backup.png)
![自动备份](../../_images/auto_backup.png)

如果需要从备份创建出一个独立于原有数据库服务的新数据库服务， 可以在详情页的**备份**页签右键选择相应的备份点，再选择**从备份创建集群**。

![恢复集群](../../_images/restore.png)

**注解**：恢复集群时会保留原集群的数据库账号密码。
