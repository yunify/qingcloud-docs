---
title: "重建节点"
description: 本小节主要介绍如重建启节点。 
keywords: mysql plus 重建节点
weight: 25
collapsible: false
draft: false
---


MySQL Plus 支持重建只读实例节点，更新只读节点中同步的数据。

本小节主要介绍如何重建 MySQL Plus 数据库节点。

## 约束限制

- `基础版`集群不支持重建节点。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。

## 操作步骤

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 MySQL Plus**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 获取节点 ID。
   
   点击**节点**页签，获取相应只读实例节点 ID。

   <img src="../../../_images/get_id_node2.png" alt="获取节点 ID" style="zoom:50%;" />

5. 重建节点。
   
   1. 在**基本属性**模块，点击集群操作下拉菜单。
   2. 展开下拉菜单，点击**重建节点**。
   3. 选择节点角色，并输入节点 ID。
   4. 确认配置信息无误后，点击**提交**，返回节点列表页面。

   待节点状态切换为**活跃**，即节点重建完毕。

   <img src="../../../_images/rebuild_node.png" alt="重建节点" style="zoom:50%;" />
