---
title: "交换预留 IP"
description: 本小节主要介绍如何交换 MySQL Plus 集群预留 IP。 
keyword: 交换预留 IP,MySQL Plus
weight: 45
collapsible: false
draft: false
---


数据在线迁移（[mysqldump 方式](../migration_online_mysqldump)或 [xtrabackup 方式](../migration_online_xtrabackup)）完成后，通过交换集群预留 IP，可将当前集群与目标源集群的 VIP 无障碍切换，避免人工停业务、检查数据一致性、执行结束迁移、更换业务所连 VIP 等繁琐操作，实现业务快速切换。

> **注意**
>
> 为确保数据一致性，交换预留 IP 过程，将设置目标集群只读。  
> 交换过程中会引起业务短时间中断，交换成功后业务自动恢复。

本小节主要介绍在线迁移完成后，如何交换集群预留 IP。

## 约束限制

- 目标集群必须与当前集群的产品版本需相同。
- 目标集群必须与当前集群需处于同一私有网络。

## 前提条件

- 已获取管理工作台登录账号和密码，且已获取集群操作权限。
- 已创建至少两个 MySQL Plus 集群，且集群状态为`活跃`。
- 已成功执行在线迁移（[mysqldump 方式](../migration_online_mysqldump)或 [xtrabackup 方式](../migration_online_xtrabackup)）。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 MySQL Plus**，进入集群管理页面。
3. 点击待切换集群 ID，进入集群详情页面。
4. 在**基本属性**模块，点击集群操作下拉菜单。
5. 展开下拉菜单，点击**交换预留 IP**，进入集群交换预留 IP 窗口。

   <img src="../../../_images/exchange_ip.png" alt="交换预留 IP" style="zoom:50%;" />

6. 在**目标集群**下拉框中，选择目标集群。
7. 确认信息无误后，点击**提交**，返回集群列表页面。  
   待集群状态切换为**活跃**，且**连接信息**模块中集群 IP 已刷新，即两个集群间预留 IP 切换成功。
  