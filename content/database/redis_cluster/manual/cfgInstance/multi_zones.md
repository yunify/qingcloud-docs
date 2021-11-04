---
title: "升级多可用区部署"
description: 本小节介绍如何
weight: 5
collapsible: false
draft: false
keywords: QingCloud，Redis Cluster，数据库，多可用区
---

若您需要提高容灾能力时，您可以将单可用区部署的集群升级为多可用区部署。

## 前提条件

当前集群为单可用区部署。

## 注意事项

▪︎ 目前仅 Redis 5.0 以上版本的北京3区支持多可用区部署。

▪︎ 由于集群跨可用区部署时网络访问效率略低于部署在同一可用区内，因此 Redis 集群跨可用区部署时，主备节点之间同步效率会略有降低。

## 操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis**，进入 Redis Cluster 管理页面。

3. 点击目标集群 **ID** 号，进入集群详情页面。

4. 在页面左侧的**基本属性**区域，点击右上角<img src="../../../_images/menu_icon.png" alt="icon" style="zoom:60%;" />图标，选择**升级为多可用区部署**，弹出确认对话框。

5. 确认无误后，点击**确认**。集群状态变为**迁移中**。

   待集群状态变为**活跃**后，升级多可用区部署完成。可以在**节点**页面看到不同节点分散部署在不同的可用区。

   <img src="../../../_images/multi_zones_success.png" alt="多可用区部署节点" />

