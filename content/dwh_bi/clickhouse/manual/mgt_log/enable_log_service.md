---
title: "开启日志服务"
description: 本小节主要介绍如何开启 ClickHouse 日志服务。 
keywords: ClickHouse 开启日志服务；
weight: 10
collapsible: false
draft: false
---



ClickHouse 日志服务默认关闭。若需下载数据库日志，您需先在 AppCenter 启动日志服务，即可在 HTTP 服务端预览或下载日志。

本小节主要介绍如何开启 ClickHouse 日志服务。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 ClickHouse 集群，且集群状态为**活跃**。

## 操作步骤

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据仓库与 BI** > **ClickHouse**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**基本属性**模块，点击集群操作下拉菜单。
5. 展开下拉菜单，点击**启动日志服务**，进入集群日志服务配置窗口。

   <img src="../../../_images/enable_log_server.png" alt="启动日志服务" style="zoom:50%;" />

6. 配置日志服务信息，详细参数说明请参见[日志服务参数](#日志服务端参数)。

7. 确认配置信息无误后，点击**提交**，返回集群页面。

   待集群状态切换为**活跃**，即日志服务启动完毕。

### 日志服务参数

|  <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:480px">说明</span>  |
|:--- |:--- |
| http_password |  输入 HTTP 用户密码。<li>密码不能以数字开头。 |
| http_user  |输入 HTTP 用户名称。<li>名称不能以数字开头。|
