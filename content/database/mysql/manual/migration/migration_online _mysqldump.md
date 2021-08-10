---
title: "在线迁移: mysqldump 方式"
description: 本小节主要介绍如何通过 mysqldump 方式在线迁移。 
keywords: mysqldump 方式在线迁移
weight: 10
collapsible: false
draft: false
---

在线迁移服务可以将远端 MySQL 数据库的数据平滑迁移到 MySQL Plus 集群。

支持 `xtrabackup` 方式和 `mysqldump` 两种迁移方式。数据量大时，建议选择迁移速率更快的 `xtrabackup` 方式。

- `mysqldump` 方式是将远端 MySQL 数据库的数据全量复制到 MySQL Plus 集群。可在线迁移远端或不同区域不同 VPC 网络的数据库。
- `xtrabackup` 方式是将远端 MySQL 数据库的数据全量复制到 MySQL Plus 集群。仅支持在线迁移在同一 VPC 下的集群，并且需要 MySQL 内核版本保持一致。

> **注意**
> 
> 在线迁移过程不影响远端数据库正常业务。迁移完成后，业务切换请在业务低峰期执行。

本小节主要介绍如何通过 `mysqldump` 方式在线迁移数据。

## 约束限制

- 目前支持在线迁移的 MySQL 版本为 5.6 、5.7 、8.0。若远端 MySQL 内核低于5.6版本，请参考[离线迁移](../data_transfer)。
- 不支持从高版本迁移至低版本。
- 在线迁移过程中，禁止向远端集群和本集群执行任何操作，包括 DDL 语句、控制台管理等。
- 在线迁移过程中，仅在**主实例**节点运行。若存在**只读实例**节点，将迁移失败；**Proxy 实例**节点，不影响在线迁移。
- 不支持迁移远端 MySQL 数据库账号。
- 当远端 MySQL 数据库与 MySQL Plus 集群不在同一 VPC 时，需使用[边界路由器](../../../../../network/border_router/)或 [VPN](../../../../../network/vpc/manual/vpn/) 等方式打通网络。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。
- MySQL Plus 集群状态为**活跃**。
- 已设置远端集群参数 `connect_timeout=30`，且已设置远端集群和本集群参数 `max_allowed_packets=1G`、`slave_pending_jobs_size_max=1G`、`interactive_timeout=3600`、`wait_timeout=3600`、`net_read_timeout=1800`、`net_write_timeout=1800`。
- 已获取远端 MySQL 数据库具有 **super** 和**复制**权限的账号，且已开启 GTID 模式。

## 操作步骤

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 MySQL Plus**，进入集群管理页面。
3. 启动在线迁移。
   1. 点击目标集群 ID，进入集群详情页面。
   2. 在**基本属性**模块，点击集群操作下拉菜单。
   3. 展开下拉菜单，点击**在线迁移**。
      
      <img src="../../../_images/migration_online1.png" alt="在线迁移" style="zoom:50%;" />

   4. 配置远端 MySQL 数据库参数，参数说明请参见[在线迁移参数](#在线迁移参数)。

      需将迁移方式`xtrabackup` 配置为 `NO`。

   5. 确认信息无误后，点击**提交**，返回集群详情页面，开启迁移。

4. 在线迁移完成后，MySQL Plus 集群将获取远端 MySQL 数据库全量数据，且与远端数据库建立主从关系，实时同步迁移远端数据库增量数据。

   > **说明**
   > 
   > 在线迁移期间，可通过 **高可用写 IP** 查看同步状态。

5. 选择业务低峰期，切换业务。

    1. 暂停远端数据库业务。
    2. 校验当前集群与远端数据库数据是否一致。
    3. 在当前集群详情页**基本属性**模块，展开下拉菜单，点击**结束迁移**。

       结束迁移后，将自动启动当前集群。

      <img src="../../../_images/end_migration.png" alt="结束迁移" style="zoom:50%;" />

    4. 将业务连接地址修改为当前集群的**高可用写 IP**，则业务迁移完毕。

   > **注意**
   >
   > -若远端 MySQL 数据库与 MySQL Plus 集群同版本同私有网络，可通过[交换预留 IP](../../mgt_connect/exchange_reservedip) 快速切换业务。
   >
   > -切换业务时，必须停止远端数据库写操作，保障数据一致性。
   >
   > -数据迁移完成后，需手动将远端 MySQL 数据库账号信息添加到当前集群。

### 在线迁移参数

|  <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:480px">说明</span>  |
|:--- |:--- |
| 角色  | 选择当前集群节点角色类型，默认为`主实例`。 |
| 远端 MySQL 账号密码 |  输入远端 MySQL 数据库账号密码。 |
| 远端 MySQL 地址 |  输入远端 MySQL 数据库 IP 地址。 |
| 通过 Xtrabackup 迁移  | 选择迁移方式，选择 `Xtrabackup` 方式为 `NO`。|
| 远端 MySQL 账号 |  输入远端 MySQL 数据库具备超级权限或复制权限的账号。 |
| 远端 MySQL 端口号  |输入远端 MySQL 端口号。|
