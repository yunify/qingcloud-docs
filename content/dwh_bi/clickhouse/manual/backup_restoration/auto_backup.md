---
title: "开启自动备份"
description: 本小节主要如何开启 ClickHouse 数据自动备份。 
keywords: ClickHouse 数据自动备份；
weight: 20
collapsible: false
draft: false
---



为确保集群数据的全量备份，在 AppCenter 集群管理控制台，ClickHouse 提供数据自动备份管理，通过设置自动备份时间，启动定时数据备份。

本小节主要介绍如何开启 ClickHouse 集群数据自动备份。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 ClickHouse 集群，且集群状态为**活跃**。
- 已创建集群备份。

## 操作步骤

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据仓库与 BI** > **ClickHouse**，进入集群管理页面。
3. 选择目标集群，鼠标右键展开集群快速操作列表。
4. 点击**修改自动备份策略**，弹出自动备份配置窗口。

   <img src="../../../_images/backup_auto.png" alt="自动备份" style="zoom:50%;" />
   
5. 配置自动备份时间。

   默认为**关闭**。

6. 确认参数信息无误后，点击**修改**，返回集群详情页面。

更多集群备份管理说明，请参见[备份](../../../../../storage/backup/)。
