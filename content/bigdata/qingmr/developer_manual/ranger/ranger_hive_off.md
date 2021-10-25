---
title: "关闭 Ranger 权限控制"
description: 本小节主要介绍如何关闭 Ranger 权限控制。 
keywords: qingmr 关闭 Ranger 权限控制
weight: 40
collapsible: false
draft: false
---


QingMR 开启 Ranger 对 Hive 的权限控制后，支持一键关闭插件，取消权限控制，放开对 Hive 的访问管理。

本小节主要介绍如何关闭 Ranger 对 Hive 的访问权限控制。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 QingMR 集群，且集群状态为**活跃**。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据引擎 QingMR**，进入集群管理页面。
3. 点击目标集群 ID，进入集群详情页面。
4. 在**基本属性**模块，展开下拉菜单。
5. 点击**关闭 Ranger Hive 插件**，弹出确认窗口。

   <img src="../../../_images/disable_ranger_hive.png" alt="关闭 Ranger hive 插件" style="zoom:50%;" />

6. 点击**提交**，返回集群详情页面。
   
   待集群状态切换为`活跃`时，则 Ranger 对 Hive 的权限策略已失效。
   
   再次**开启 Ranger hive 插件**，已配置的 Ranger 权限策略，可继续进行权限控制。
