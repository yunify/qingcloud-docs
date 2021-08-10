---
title: "启动日志服务"
description: 本小节主要介绍如何启动 MySQL Plus 日志服务。 
keywords: mysql plus 启动日志服务；
weight: 10
collapsible: false
draft: false
---



MySQL Plus 日志服务默认关闭。若需下载数据库日志，您需先在 AppCenter 集群中对相应节点启动日志服务端，再在 HTTP 服务端预览或下载日志。

本小节主要介绍如何启动 MySQL Plus 日志服务。

## 约束限制

- 仅`只读示例`和`主实例`节点支持开启日志服务端。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 MySQL Plus 集群，且集群状态为**活跃**。

## 操作步骤

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 MySQL Plus**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**基本属性**模块，点击集群操作下拉菜单。
5. 展开下拉菜单，点击**启动日志服务端**，进入集群日志服务配置窗口。

   <img src="../../../_images/enable_log_server.png" alt="启动日志服务" style="zoom:50%;" />

7. 配置日志服务信息，详细参数说明请参见[日志服务参数](#日志服务端参数)。

8. 确认配置信息无误后，点击**提交**，返回集群页面。

   待集群状态切换为**活跃**，即日志服务启动完毕。

### 日志服务参数

|  <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:480px">说明</span>  |
|:--- |:--- |
| 角色  | 选择日志服务节点，可选择`只读示例`和`主实例`。 |
| MySQL 日志 |  选择日志类型。<li>支持选择`mysql-error`、`mysql-slow`、`mysql-audit`、`mysql-bin`和`mysql-cert`。 |
| HTTP 用户密码 |  输入 HTTP 用户密码。<li>密码规则：长度为8～32位字符数；必须同时包含大写字母（A～Z)、小写字母（a～z）、数字（0～9）和特殊字符（@#$%^&*_+-=）。 |
| HTTP 用户名  |输入 HTTP 用户名称。<li>不支持`root`、`ubuntu`、`http`、`mysql`。<li>密码规则：长度为2～26位字符数；可包含大写字母（A～Z)、小写字母（a～z）、数字（0～9）和特殊字符（_）。|
