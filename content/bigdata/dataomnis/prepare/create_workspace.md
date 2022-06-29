---
title: "创建工作空间"
description: 本小节主要介绍如何创建工作空间。 
keywords: 大数据工作台,工作空间
weight: 30
collapsible: false
draft: false
---

工作空间是管理任务的基本单元，您可在工作空间开发和调度任务。本小节为您介绍如何创建工作空间。

## 约束与限制

单个用户在同一区域下最多可创建 10 个工作空间。

## 前提条件

- 已获取管理控制台登录账号和密码，且账号已实名认证。
- 已获取大数据工作台操作权限。
- 已开通大数据工作台。

## 创建工作空间

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据工作台**，进入大数据工作台概览页面。
3. 在左侧导航选择**工作空间**，进入工作空间页面。
4. 选择相应的区域，点击**创建工作空间**，进入创建工作空间页面。
4. 配置基本信息，包括工作空间名称和描述信息。
   
   <img src="/bigdata/dataomnis/_images/create_workspace.png" alt="创建工作空间" style="zoom:50%;" />

5. 配置网络信息，包括 VPC 网络和私有网络。

   <img src="/bigdata/dataomnis/_images/create_net.png" alt="创建网络" style="zoom:50%;" />

   | <span style="display:inline-block;width:140px">参数</span>  | <span style="display:inline-block;width:520px">参数说明</span>  |
   | :------------- | ------------------------------------------------------------ |
   | VPC 网络    |  选择 VPC 网络。<br>- 默认适配同区域已有的 VPC 网络。可在下拉框选择已有 VPC 网络。<br>- 若无可选 VPC 网络，可点击**新建 VPC 网络**，创建依赖网络资源。  |
   | 私有网络    |  选择私有网络。<br>- 默认适配同区域已有的私有网络。可在下拉框选择已有私有网络。<br>- 若无可选私有网络，可点击**新建私有网络**，创建依赖网络资源。   | 

6. 点击**创建**，开始创建工作空间。    
   工作空间创建完成后，即可在工作空间页面查看相应内容。

## 后续步骤

- 工作空间创建完成后，您就可以从工作空间进入[数据源管理](/bigdata/dataomnis/manual/source_data/summary/)、[数据开发](/bigdata/dataomnis/manual/mgt_job/summary/)和[运维中心](/bigdata/dataomnis/manual/operation_center/summary/)模块，执行相应操作。
- 您也可以先学习[快速入门](../../quickstart/summary)，快速完成一个完整的数据开发操作。

