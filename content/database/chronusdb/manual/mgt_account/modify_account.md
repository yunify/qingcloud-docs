---
title: "修改账号"
description: 本小节主要介绍如何修改 ChronusDB 数据库账号。 
keywords: chronusdb 修改账号；
weight: 15
collapsible: false
draft: false
---



在 AppCenter 集群管理控制台，支持修改已创建的 ChronusDB 数据库账号允许访问网路列表、账号密码，以及数据库账户名。

此外，您还可以登录 ChronusDB 数据库后，通过 SQL 语法管理用户账号。

本小节主要介绍如何在线修改 ChronusDB 数据库账号。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 ChronusDB 集群，且集群状态为**活跃**。

## 操作步骤

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **时序数据库 ChronusDB**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**基本属性**区域，展开集群基本属性管理栏。
5. 点击**修改用户**，弹出删除账号窗口。
   
   <img src="../../../_images/modify_user.png" alt="修改账号" style="zoom:50%;" />

6. 输入**允许访问网络列表**、**密码**或者**用户名**。
7. 确认配置信息无误后，点击**提交**，返回**用户列表**页面，刷新即查看修改账号。
