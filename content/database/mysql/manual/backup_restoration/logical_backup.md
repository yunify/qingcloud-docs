---
title: "设置备份存储策略"
description: 本小节主要如何设置 MySQL Plus 备份存储策略。 
keywords: MySQL Plus 启用对象存储服务；设置备份存储策略
weight: 25
collapsible: false
draft: false
---



MySQL Plus 逻辑备份最终存储在对象存储桶中，故在创建逻辑备份前，需设置备份存储策略，即需在集群配置参数中启用对象存储服务。

本小节主要介绍如何设置 MySQL Plus 备份存储策略。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 MySQL Plus 集群状态为**活跃**。
- 已创建可用对象存储桶和 API 密钥。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 MySQL Plus**，进入集群管理页面。
3. 选择目标集群，鼠标右键展开集群快速操作列表。
4. 点击**设置备份策略**，跳转到配置参数页面。

   <img src="../../../_images/logical_backup_1.png" alt="备份策略" style="zoom:50%;" />

5. 设置`启用对象存储服务`为 true。
6. 配置 `Bucket_name` 和 `Access_key_id` 参数值。

    <img src="../../../_images/logical_backup_2.png" alt="备份策略" style="zoom:100%;" />

7. 点击**保存**，返回配置参数列表。

   待集群状态切换为**活跃**，即备份策略配置完成。

## 相关操作

- [创建手动备份](../manual_backup)
- [设置自动备份策略](../auto_backup)
