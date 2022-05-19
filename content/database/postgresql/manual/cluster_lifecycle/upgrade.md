---
title: "升级版本"
description: 本小节主要介绍如何升级 PostgreSQL 集群。 
keyword: 升级集群,PostgreSQL,关系型数据库,数据库
weight: 15
collapsible: false
draft: false

---

当 PostgreSQL 发布新版本后，系统将自动检测到有版本待滚动升级。PostgreSQL 支持在线升级集群到最新版本。

> **注意**
>
> 版本升级过程，业务将被中断，请在业务低峰期进行。

本小节主要介绍如何在线升级 PostgreSQL 集群版本。

## 约束限制

- 仅支持集群同系列的版本升级。例如`PG11-高可用版-1.0.5`可升级到`PG11-高可用版-1.0.9`。
- 仅支持升级到更高版本。
- 仅检测到有新版本时，才开放升级操作。
- 仅支持升级状态为**关闭**的集群。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 PostgreSQL 集群，且集群状态为**关闭**。
- **节点状态**活跃，**节点服务状态**正常。

## 操作步骤

> 升级集群前，建议备份当前集群，再在当前集群上进行升级，以避免操作过程中出现异常。备份详情请参见[创建备份](/database/postgresql/manual/backup_restoration/enable_backup/)。

1. 登录管理控制台。

2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 PostgreSQL**，进入集群管理页面。

3. 点击目标集群 ID，进入集群详情页面。

4. 在集群页面**基本属性**模块，点击集群操作下拉菜单。

5. 展开下拉菜单，点击**关闭**，关闭集群，等待任务执行完成。

   <img src="../../../_images/upgrade_10.png" alt="关闭集群" style="zoom:50%;" />

6. 展开下拉菜单，点击**升级**。

   <img src="../../../_images/upgrade_11.png" alt="升级集群" style="zoom:50%;" />

7. 确认升级版本并点击**升级**。

   <img src="../../../_images/upgrade_12.png" alt="确认版本" style="zoom:50%;" />

8. 等待升级完成系统自动启动集群后，确认版本已升级到最新版本。

   <img src="../../../_images/upgrade_13.png" alt="确认版本" style="zoom:50%;" />

> PostgreSQL升级到`PG11-高可用版-1.0.9`及以上版本时，提示“更新 timescaleDB 插件版本到1.7.3”，可根据实际需要决定是否升级。升级 timescaleDB 插件，详细操作请参见[升级 timescaleDB插件](/database/postgresql/manual/plugin_mgt/plugin_upgrade/)。