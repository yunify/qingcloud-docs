---
title: "升级集群"
description: 本小节介绍如何升级 Redis 集群。 
keywords: redis cluster，集群，升级
weight: 15
draft: false
---

Redis Cluster 兼容 Redis 4.0、5.0 、6.* 版本，您可以在控制台上一键升级 Redis Cluster 实例的版本，从而体验更丰富的功能。

##  升级说明

- 支持低版本实例向高版本升级，不支持降级兼容版本。
- 支持跨版本升级，例如，Redis 4.0.* 升级至 Redis 6.*。
- 升级时可能涉及配置变更，升级成功后，将按照新的配置资源进行计费。
- 升级操作前，请先[关闭集群](/database/redis_cluster/manual/mgeinstance/startstop/#关闭集群)。

## 前提条件

集群处于关闭状态。

## 操作步骤

### 升级到 Redis 6.* 版本

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis**，进入 Redis Cluster 管理页面。

3. 在集群列表，右键单击目标集群，选择**升级**。

   <img src="../../_images/upgradeto_redis6.png" alt="升级集群" style="zoom:50%;" />

4. 在**升级到版本**的下拉框中，选择 Redis 6.* 版本。

5. 选择**资源配置**和**内存**。

6. 点击**升级**，开始进行升级。节点状态变为**启动中**。

   待升级完毕后，所有节点状态变为**活跃**。

### 升级到 Redis 6.* 以下版本

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis**，进入 Redis Cluster 管理页面。

3. 在集群列表，右键单击目标集群，选择**升级**。

   <img src="../../_images/upgradeto_redis5.0.png" alt="升级集群" style="zoom:50%;" />

4. 在**升级到版本**的下拉框中，选择版本，下方对应显示版本新增功能特性。

5. 点击**升级**，开始进行升级。节点状态变为**启动中**。

   待升级完毕后，所有节点状态变为**活跃**。

