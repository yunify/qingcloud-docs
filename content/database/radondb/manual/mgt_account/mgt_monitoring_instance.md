---
title: "监控账号"
description: 本小节主要介绍如何管理 RadonDB 监控账号。 
keywords: RadonDB 监控账号
weight: 30
collapsible: false
draft: false
---


RadonDB 监控节点采集数据库服务和资源监控指标，支持第三方 Grafana 监控平台实时监控数据库状态。

为实现在 Grafana 监控平台查看数据库动态，需单独创建监控账号，通过监控账号和密码访问 Grafana 监控平台。

本小节主要介绍如何创建和删除 RadonDB 监控账号。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 RadonDB 集群，且集群状态为**活跃**。

## 创建监控账号

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 RadonDB**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 在**基本属性**模块，展开下拉菜单，点击**添加监控账号**。
5. 配置监控账号信息。
   
   -**密码**：输入 Grafana 账号登录密码。

   -**邮箱**：输入 Grafana 平台关联邮箱。

   -**权限**：账号在 Grafana 平台监控面板的权限。

   -**账号**：Grafana 账号名称，不支持 `admin`。
   
   <img src="../../../_images/set_user_monitoring_instance.png" alt="配置监控账号" style="zoom:50%;" />

6. 确认配置信息无误后，点击**提交**。
7. 选择**监控节点信息**页面，即可查看已添加账号。

   ![查看监控账号信息](../../../_images/monitoring_addr.png)

## 删除监控账号

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **分布式数据库 RadonDB**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 在**基本属性**模块，展开下拉菜单，点击**删除监控账号**。
5. 配置账号名。
   
   <img src="../../../_images/delete_user_monitoring_instance.png" alt="删除监控账号" style="zoom:50%;" />

6. 确认配置信息无误后，点击**提交**。
7. 选择**监控节点信息**页面，即可查看账号已删除。
