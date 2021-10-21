---
title: "开启 QingStor 集成"
description: 本小节主要介绍如何开启 QingStor 集成。 
keywords: qingmr ，QingStor 集成,
weight: 20
collapsible: false
draft: false
---



如需与 QingStor 对象存储集成，需先配置关于 QingStor 对象存储的集群参数。

本小节主要介绍如何开启集群 QingStor 对象存储服务。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 QingMR 集群，且集群状态为**活跃**。
- 已创建可用 QingStor 对象存储服务。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据引擎 QingMR**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 选择**配置参数**页签，点击**修改属性**。
   
   -设置 **QingStor** 参数为 `true`。
   
   -选择 **QingStor_zone** 指定区域，目前 QingStor 对象存储的开放了 pek3b、pek3c、pek3d、sh1a、gd2a、gd2b 区。

   -配置 **access_key** 和 **secret_key**。
   
   <img src="../../../_images/qingstor_setting.png" alt="配置 QingStor" style="zoom:50%;" />

5. 点击**保存**，则配置完成。
