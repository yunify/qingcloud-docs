---
title: "版本升级与降级"
description: 本小节主要介绍如何升级 MongoDB 集群。 
keyword: 升级集群,降级版本,滚动升级,原地升级,MongoDB,文档数据库,数据库
weight: 15
collapsible: false
draft: false
---


当 MongoDB 发布新版本后，系统将自动检测到有版本待**升级**。MongoDB 支持在线升级集群到最新版本。

当 MongoDB 升级版本失败，系统将自动检测到升级失败可**降级版本**。MongoDB 支持在线回退集群版本。

> **注意**
> 
> 版本升级和降级过程，业务将被中断，请在业务低峰期进行。
> 
> 版本升级失败可能造成数据丢失。升级前请先备份集群数据。

本小节主要介绍 MongoDB 版本升级路线，以及如何在线升级 MongoDB 集群版本。

## 升级路线

MongoDB 目前支持 3.4.5、3.6.8 和 4.0.3 三个内核版本。支持**并行升级**和**原地升级**两种在线升级方式。

- **并行升级**是指通过**关闭**集群，同时升级集群所有节点。

- **原地升级**是指在**不关闭**集群场景下，同时升级集群所有节点。

<table>
    <tr><th style="width: 320px">升级前版本</th><th style="width:320px">目标版本</th></tr>
    <tr><td colspan="7"><b>原地升级</b></td></tr>
    <tr><td>MongoDB 3.4.5 (WiredTiger)</td><td>MongoDB 3.4.5 - Qingcloud 1.0.1</td></tr>
    <tr><td>MongoDB 3.4.5 (WiredTiger)</td><td>MongoDB 3.6.8 - QingCloud 1.6.1</td></tr>
    <tr><td>MongoDB 3.6.8 - QingCloud 1.6.1</td><td>MongoDB 4.0.3 - QingCloud 1.7.0</td></tr>
    <tr><td colspan="7"><b>并行升级</b></td></tr>
    <tr><td>MongoDB 3.4.5 (WiredTiger)</td><td>MongoDB 3.6.8 - v1.0.0</td></tr>
    <tr><td>MongoDB 3.4.5 - Qingcloud 1.0.1</td><td>MongoDB 3.6.8 - v1.0.0</td></tr>
    <tr><td>MongoDB 3.6.8 - QingCloud 1.6.1</td><td>MongoDB 3.6.8 - v1.0.0</td></tr>
    <tr><td>MongoDB 3.6.8 - QingCloud 1.6.1</td><td>MongoDB 4.0.3 - v1.0.0</td></tr>
    <tr><td>MongoDB 3.6.8 - v1.0.0</td><td>MongoDB 4.0.3 - v1.0.0</td></tr>
    <tr><td>MongoDB 4.0.3 - QingCloud 1.7.0</td><td>MongoDB 4.0.3 - v1.0.0</td></tr>
</table>

## 约束限制

- 不支持跨内核版本升级，仅支持升级到临近内核版本的更高版本。例如，`MongoDB 3.4.5 (WiredTiger)`不能直接升级到 `MongoDB 4.0.3-v1.0.0`，但 `MongoDB 3.6.8 - QingCloud 1.6.1` 可升级到 `MongoDB 4.0.3-v1.0.0`。
- 仅检测到有新版本时，才开放升级操作。
- 仅支持回退到升级前版本。
- 仅检查到升级失败时，才开放降级操作。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已备份集群数据。
- 已创建 MongoDB 集群。

## 版本升级

当集群升级失败，提示`有新版本可升级`。您需选择关闭集群或不关闭集群，选择新版本，升级集群版本。

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **文档数据库 MongoDB**，进入集群管理页面。
3. 点击目标集群 ID，进入集群详情页面。
4. 在**基本属性**模块，点击集群操作下拉菜单。
5. 展开下拉菜单，点击**升级**。
   
   <img src="../../../_images/upgrade.png" alt="升级集群" style="zoom:50%;" />

6. 选择升级到的版本。
7. 确认配置信息无误后，点击**提交**，返回节点列表页面。  
   待集群状态切换为**活跃**，即升级完毕。

## 版本降级

当集群升级失败，提示`升级失败，可执行降级操作`。您需手动执行降级，选择升级前版本，回退集群版本。

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **文档数据库 MongoDB**，进入集群管理页面。
3. 点击目标集群 ID，进入集群详情页面。
4. 在**基本属性**模块，点击集群操作下拉菜单。
5. 展开下拉菜单，点击**降级**。
   
   <img src="../../../_images/upgrade_rollback.png" alt="降级集群" style="zoom:50%;" />

6. 选择降级到的版本。
7. 确认配置信息无误后，点击**提交**，返回节点列表页面。  
   待集群状态切换为**活跃**，即降级完毕。
