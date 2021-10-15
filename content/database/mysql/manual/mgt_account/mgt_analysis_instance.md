---
title: "分析实例账号"
description: 本小节主要介绍如何管理 MySQL Plus 分析实例账号。 
keywords: mysql plus 分析实例账号
weight: 30
collapsible: false
draft: false
---


MySQL Plus 通过接入支持 MaterializeMySQL 引擎的 ClickHouse 数据库，可提升 MySQL 查询性能和数据同步的时效性。

为使用新增的分析实例节点，需单独创建分析实例账号，通过分析实例账号和密码访问 ClickHouse 数据库。

本小节主要介绍如何创建和删除 MySQL Plus 分析实例账号。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 MySQL Plus 集群，且集群状态为**活跃**。

## 创建分析实例账号

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 MySQL Plus**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 在**基本属性**模块，展开下拉菜单，点击**添加分析实例账号**。
5. 配置 ClickHouse 账号名和密码，并需配置允许访问的内网服务器。
   
   <img src="../../../_images/set_user_analysis_instance.png" alt="配置分析实例账号" style="zoom:50%;" />

6. 确认配置信息无误后，点击**提交**，返回账号列表页面，即可查看已添加账号。

   ![查看账号信息](../../../_images/check_user.png)

## 删除分析实例账号

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 MySQL Plus**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 在**基本属性**模块，展开下拉菜单，点击**删除分析实例账号**。
5. 配置 ClickHouse 账号名。
   
   <img src="../../../_images/delete_user_analysis_instance.png" alt="删除分析实例账号" style="zoom:50%;" />

6. 确认配置信息无误后，点击**提交**，返回账号列表页面，即可查看账号已删除。
