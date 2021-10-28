---
title: "删除用户"
keywords: redis cluster，访问控制，用户管理 ACL
weight: 12
draft: false
---

在 Redis Cluster 管理控制台，支持删除已创建的 Redis 用户。

> **注意**
>
> - 用户删除后不可找回，请谨慎操作。
> - 请勿以任何方式删除 root、qc_check 、 qc_repl等运维账号，以免数据库系统异常。

## 前提条件

Redis Cluster 实例需要为 Redis 6.* 或以上版本。

## 操作步骤

1. 登录  [QingCloud 管理控制台](https://console.qingcloud.com/login)。
2. 在控制台顶部的导航菜单中，选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis**，进入 Redis Cluster 管理页面。
3. 点击集群 ID，进入详情页面。
4. 在**用户管理ACL**页签的用户列表中，找到需要修改的用户。
5. 点击XX图标，然后选择**删除**，弹出确认框。
6. 点击**确认**。
7. 点击**应用修改**，使修改生效。

