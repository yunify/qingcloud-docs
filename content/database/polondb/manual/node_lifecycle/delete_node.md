---
title: "删除节点"
description: 本小节主要介绍如何删除 PolonDB 节点实例。 
keywords: PolonDB 节点删除；删除节点
weight: 15
collapsible: false
draft: false
---

当业务缩减，可通过删除节点横向缩容集群。

本小节主要介绍如何删除 PolonDB 集群节点。

> **注意**
> 
> -删除节点为危险操作，请谨慎操作。
> 
> -删除节点过程中节点状态将切换为**更新中**，不支持集群其他生命周期操作。

## 约束限制

- 仅支持删除 Worker 节点及相关副本。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 PolonDB 集群，且集群状态为**活跃**。
- 已设置参数 `wal_level` 为 `logical`，`logical_replication_polondb` 为 `true`。

## 操作步骤

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **分布式数据库 PolonDB**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**节点**页签，勾选目标节点。
5. 点击**删除**，弹出节点删除确认窗口。

    <img src="../../../_images/delete_node.png" alt="删除节点" style="zoom:50%;" />

6. 确认配置信息无误后，点击**确认**，返回节点列表页面。

   待集群状态切换为**活跃**，即节点删除完毕。
