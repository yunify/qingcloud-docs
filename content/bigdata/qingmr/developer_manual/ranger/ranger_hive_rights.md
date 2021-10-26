---
title: "配置 Hive 权限策略"
description: 本小节主要介绍如何配置 Hive 权限。 
keywords: qingmr 配置 Hive 权限
weight: 30
collapsible: false
draft: false
---



Ranger 中对 Hive 的表或列级别的权限控制，即针对 HiveServer2 的权限控制。

本小节主要介绍如何配置 Hive 权限策略。

## 前提条件

- 已创建 QingMR 集群，且集群状态为**活跃**。
- 已在 Ranger 集成 Hive，详情参考[集成 Hive](../ranger_hive)。

## 操作步骤

1. 登录 Ranger 控制台，输入帐户名与密码。
2. 点击已添加的 hive 服务，进入组件管理页面。
3. 点击 **Add New Policy**，打开权限配置页面。
   
   配置权限策略参数，详细参数说明参见[权限策略参数](#权限策略参数).
   
   <img src="../../../_images/ranger_hive_policy.png" alt="权限策略参数" style="zoom:50%;" />

4. 点击 **Add**，确认创建权限策略。

   添加、删除或修改 Policy 后，需要等待几十秒，策略授权才生效。

### 权限策略参数

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   Policy Name    |  自定义策略名词。  |
|   database   |  添加 Hive 中数据库，例如 test。  |
|   table    |  添加数据库中表，例如 test。  |
|   Hive Column   |  添加列名。<br> `*` 表示表示所有列。  |
|   Select Group   |  指定添加此策略的用户组。  |
|   Select User   |  指定添加此策略的用户。  |
|   Permissions   |  选择授予的权限。  |
