---
title: "设置自动备份策略"
description: 本小节主要如何开启 Redis Standalone 数据自动备份。 
keyword: 数据自动备份,键值数据库,Redis,Redis Standalone,数据库
weight: 20
collapsible: false
draft: false
---



为确保数据库更新数据的备份，在 AppCenter 集群管理控制台，Redis Standalone 提供自动备份管理，通过设置自动备份时间，启动定时备份。

> **注意**
> 
> 为节省资源并保留充足的备份份额，可定期手动[清理过期备份](../delete_backup)。
> 
> 创建备份过程，将对集群造成一定的运行压力。为避免影响业务正常运行，建议在业务低峰期进行备份。

本小节主要介绍如何设置 Redis Standalone 集群自动备份策略。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 Redis Standalone 集群状态为**活跃**。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis Standalone**，进入集群管理页面。
3. 选择目标集群，鼠标右键展开集群快速操作列表。
4. 点击**修改自动备份策略**，弹出备份策略配置窗口。

   <img src="../../../_images/auto_backup_1.png" alt="备份策略" style="zoom:50%;" />

5. 配置备份信息。

    选择**自动备份**模式为目标时间范围。默认为`关闭`。

6. 确认参数信息无误后，点击**确认**，返回备份列表页面。

   待集群状态切换为**活跃**，即可定时创建备份。

## 相关操作

- [从备份恢复集群](../restore_from_backup)
- [删除备份](../delete_backup)
