---
title: "回收站"
description: 本小节主要介绍如何恢复以删除的 PolonDB 集群。 
keywords: PolonDB 恢复集群
weight: 100
collapsible: false
draft: false
---



删除后的集群将被暂时回收到<b>回收站 (Recycle Bin)</b>。若需找回已删除的集群，可将回收站内集群恢复。

本小节主要介绍如何删除集群。

## 约束限制

- 集群删除后，仅可在<b>回收站 (Recycle Bin)</b>中保留2个小时，这期间可以进行恢复操作。超过2小时，删除的集群资源将被彻底销毁，不可恢复。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码。

## 操作步骤

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **运维与管理** > **回收站**，进入回收站列表页面。

   <img src="../../../_images/recycle_list.png" alt="回收站" style="zoom:50%;" />

3. 勾选目标集群，点击操作栏**恢复**，弹出资源恢复确认窗口。

   <img src="../../../_images/recycle_cluster.png" alt="恢复集群" style="zoom:50%;" />

4. 确认信息无误后，点击**提交**，返回收站列表页面。
