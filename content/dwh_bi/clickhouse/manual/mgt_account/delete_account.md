---
title: "删除账号"
description: 本小节主要介绍如何删除 ClickHouse 数据库账号。 
keywords: ClickHouse 删除账号；
weight: 15
collapsible: false
draft: false
---



在 AppCenter 集群管理控制台，支持删除已创建的 ClickHouse 数据库账号。

此外，您还可以登录 ClickHouse 数据库后，通过 SQL 语法管理用户账号。

> **注意**
> 
> -数据库账号删除后不可找回，请谨慎操作。
> 
> -请勿以任何方式删除 `root` 运维账号，以免数据库系统异常。

本小节主要介绍如何在线删除 ClickHouse 集群账号。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 ClickHouse 集群，且集群状态为**活跃**。

## 操作步骤

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据仓库与 BI** > **ClickHouse**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**基本属性**模块，点击编辑下拉列表，展开属性编辑栏目。
5. 点击**删除用户**，弹出删除账号窗口。
   
   <img src="../../../_images/del_user.png" alt="删除账号" style="zoom:50%;" />

6. 输入待删除数据库名和授权主机。
7. 确认配置信息无误后，点击**提交**，返回账号列表页面，刷新即成功删除账号。
