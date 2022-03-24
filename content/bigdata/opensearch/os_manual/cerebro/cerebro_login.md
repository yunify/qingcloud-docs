---
title: "访问 Cerebro"
description: 本小节主要介绍 Cerebro 集成插件列表。
keyword: Cerebro 插件列表, OpenSearch,
weight: 10
collapsible: false
draft: false
---

Cerebro 是基于 Web 的 OpenSearch 第三方管理工具，提供集群、索引、快照等的可视化管理功能。OpenSearch 服务集成 Cerebro v0.9.4 版本组件，并支持在 Dashboard 节点管理 Cerebro 启用状态。

更多 Cerebro 使用和功能介绍，请参见 [Cerebro](https://github.com/lmenezes/cerebro)。

本小节主要介绍如何访问 Cerebro。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 OpenSearch 集群，且集群状态为`活跃`。
- 已获取 Dashboard 登录帐号和密码。
- 若需通过外网访问 Cerebro，请先通过设置[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。

## 启用 Cerebro

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **OpenSearch 服务**，进入 OpenSearch 集群管理页面。
3. 点击目标集群 ID，进入集群详情页面。
4. 点击**配置参数**页签，进入集群配置参数管理页面。
5. 选择 **Dashboard 节点**参数类型，切换到相应节点参数页面。
6. 点击**修改属性**，公共参数**值**进入可编辑状态。  
   设置 **enable_cerebro** 参数值为 `true`。
7. 确认参数信息无误后，点击**保存**，返回参数列表页面。

## 获取访问信息

1. 进入 OpenSearch 集群管理页面。
2. 在**服务端口信息**模块，获取 Cerebro 节点端口，默认为 9000。
3. 在**节点**页签，获取 Dashboard 节点 IP。

## 登录 Cerebro

1. 在浏览器输入 `http://<dashboard_IP>:<cerebro_port>`，先后进入 Cerebro 确认页面和登录页面。  
2. 在确认页面，确认集群名称。  

   <img src="../../../_images/cerebro_confirm.png" alt="cerebro 确认信息" style="zoom:50%;" />

3. 点击 **Connect**，进入登录页面，输入帐户名和密码认证信息。  
   登录需使用管理员（admin）帐号和密码。该帐号在创建集群时设置，且不支持修改。

   <img src="../../../_images/cerebro_login.png" alt="cerebro 认证" style="zoom:50%;" />

4. 点击 **Authenticate** 进入 Cerebro 管理页面，展开左侧菜单导航栏，即可进行可视化数据管理。
   
   <img src="../../../_images/cerebro_os.png" alt="cerebro 页面" style="zoom:50%;" />
