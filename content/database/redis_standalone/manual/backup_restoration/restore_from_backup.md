---
title: "从备份恢复集群"
description: 本小节主要如何从备份恢复 Redis Standalone 集群。 
keyword: 从备份恢复集群,键值数据库,Redis,Redis Standalone,数据库
weight: 50
collapsible: false
draft: false
---



在 AppCenter 集群管理控制台，Redis Standalone 支持从备份创建新集群，并恢复集群数据。

本小节主要介绍如何从备份恢复 Redis Standalone 集群。

## 约束限制

- 仅支持在备份区域恢复集群，不支持跨区域恢复集群。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 Redis Standalone 集群状态为**活跃**。
- 已创建集群备份。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis Standalone**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**备份**页签，选择目标备份链，展开备份链示意图。
5. 选择目标备份节点，展开备份节点操作列表。
   
   <img src="../../../_images/restore_backup_1.png" alt="恢复集群" style="zoom:50%;" />

6. 点击**从备份创建集群**，跳转到创建集群页面。

   <img src="../../../_images/restore_backup_2.png" alt="恢复集群" style="zoom:50%;" />

7. 配置集群信息。
   
   当备份跨区域备份后，根据备份集群信息，可选择设置**基本设置**、**网络设置**、**服务环境参数设置**、**用户协议**。

8. 确认参数信息无误后，点击**提交**，返回集群管理列表页面。

   当集群状态为**活跃**时，集群即可正常访问。
