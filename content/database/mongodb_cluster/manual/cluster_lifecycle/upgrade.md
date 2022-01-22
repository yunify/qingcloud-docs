---
title: "版本升级"
description: 本小节主要介绍如何升级 MongoDB Cluster 集群。 
keyword: MongoDB Cluster 升级集群；
weight: 15
collapsible: false
draft: true
---


当 MongoDB Cluster 发布新版本后，系统将自动检测到有版本待滚动升级。MongoDB Cluster 支持在线升级集群到最新版本。

> **注意**
> 
> 版本升级过程，业务将被中断，请在业务低峰期进行。

本小节主要介绍如何在线升级 MongoDB Cluster 集群版本。

## 约束限制

- 仅支持升级到更高版本。
- 仅检测到有新版本时，才开放升级操作。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 MongoDB Cluster 集群，且集群状态为**活跃**。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **文档数据库 MongoDB Cluster**，进入集群管理页面。
3. 点击目标集群 ID，进入集群详情页面。
4. 在**基本属性**模块，点击集群操作下拉菜单。
5. 展开下拉菜单，点击**升级**。
   
   <img src="../../../_images/upgrade.png" alt="升级集群" style="zoom:50%;" />

6. 选择升级到的版本。
7. 确认配置信息无误后，点击**提交**，返回节点列表页面。

   待集群状态切换为**活跃**，即升级完毕。
