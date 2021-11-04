---
title: "删除用户"
description: 本小节介绍如何删除 ACL 用户。 
keywords: redis cluster，访问控制，用户管理 ACL
weight: 12
draft: false
---

在 Redis Cluster 管理控制台，支持删除已创建的 Redis 用户。

> **注意**
>
> 用户删除后不可找回，请谨慎操作。

## 前提条件

Redis Cluster 实例需要为 Redis 6.* 或以上版本。

## 操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。
2. 在控制台顶部的导航菜单中，选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis**，进入 Redis Cluster 管理页面。
3. 点击集群 ID，进入详情页面。
4. 在**用户管理ACL**页签的用户列表中，找到需要删除的用户。
5. 点击**操作**列的**删除用户**，弹出删除用户确认框。
6. 确认信息无误后，点击**提交**。
   提交后，集群状态为**更新中**，待状态变为**活跃**即删除成功。

