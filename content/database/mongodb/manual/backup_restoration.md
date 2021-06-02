---
title: "备份恢复"
description: 本小节主要介绍如何备份恢复 QingCloud MongoDB 数据试。 
keywords: mongodb 备份恢复, 
data: 2021-05-14T00:38:25+09:00
weight: 50
collapsible: false
draft: false
---


## 自动备份

若开启了**自动备份**功能，那么 MongoDB 集群会在你指定的时间段进行每日的自动备份；可以从备份创建出全新的 MongoDB 集群。

## 创建备份

若已关闭**自动备份**，可以在集群列表右键 MongoDB 集群后点击**创建备份**选项， 或者在集群详情页的**备份**标签下点击**创建备份**按钮。

> 如果备份后进行过增删节点，那么再次备份时需要创建新的备份链。

![](../../_images/create_snapshot.png)

## 从备份创建集群

如果需要从备份创建出一个独立于原有 MongoDB 集群的新 MongoDB 集群，可以在集群详细页**备份**页签下，右键相应的备份点，再选择**从备份创建集群**。

![](../../_images/create_cluster_from_snapshot.png)
