---
title: "管理禁用命令"
description: 本小节主要介绍如何启用 Redis 禁用的命令。
keyword: BGREWRITEAOF,BGSAVE,CONFIG,SAVE,DEBUG,KEYS,REPLICAOF,SHUTDOWN,SLAVEOF,禁用命令,被禁用的命令
weight: 10
collapsible: false
draft: false
---

为防止执行高危操作过程，Redis 数据的安全，Redis Standalone 默认禁用了如下命令。

- BGREWRITEAOF
- BGSAVE
- CONFIG
- DEBUG
- KEYS
- REPLICAOF
- SAVE
- SHUTDOWN
- SLAVEOF

但在特定操作场景，为方便数据库管理员管理，Redis Standalone 支持在线开启被禁用的命令。

本小节主要介绍如何开启被禁用的默认命令。

> **注意**
>
> 弃用被禁用的命令可能导致 Redis 服务不可用，建议您谨慎操作。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 Redis Standalone 集群，且集群状态为`活跃`。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis Standalone**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 点击**配置参数**页签，进入集群配置参数管理页面。
5. 点击**修改属性**，公共参数**值**进入可编辑状态。
6. 找到 **启用 Redis 命令** 参数，勾选相应参数值。
   
   -**DISABLE_ALL**：默认勾选，表示禁用 `CONFIG`、`BGREWRITEAOF` 、`BGSAVE`、`DEBU`、`SAVE`、`SHUTDOWN`、`SLAVEOF`、`KEYS`、`REPLICAOF` 命令。

   -**CONFIG**：默认去勾选；勾选表示启用 `CONFIG` 命令。

   -**SAVE**：默认去勾选；勾选表示启用 `SAVE` 命令。

   -**KEYS**：默认去勾选；勾选表示启用 `KEYS` 命令。

   ![被禁用命令](../../../_images/cmd_para.png)

7. 确认参数信息无误后，点击**保存**。

   待集群状态切换为`活跃`，即配置完成。
