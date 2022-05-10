---
title: "访问 Dashboard"
description: 本小节主要介绍 Dashboard 集成插件列表。
keyword: Dashboard 插件列表,OpenSearch,搜索引擎
weight: 05
collapsible: false
draft: false
---

Dashboard 是 OpenSearch 的可视化工具，提供面向用户的 OpenSearch 插件管理服务，包括安全性、警报、索引状态管理、SQL 管理等插件。更多 Dashboard 使用和功能介绍，请参见 [Dashboards](https://opensearch.org/docs/latest/dashboards/index/)。

本小节主要介绍如何访问 Dashboards。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 OpenSearch 集群，且集群状态为`活跃`。
- 已获取 Dashboards 登录帐号和密码。
- 若需通过外网访问 Dashboards，请先通过设置[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。

## 获取访问信息
   
1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **OpenSearch 服务**，进入 OpenSearch 集群管理页面。
3. 点击目标集群 ID，进入集群详情页面。
4. 在**服务端口信息**模块，获取 Dashboard 节点端口，默认为 5601。
5. 在**节点**页签，获取 Dashboard 节点 IP。

## 访问 Dashboards
   
1. 在浏览器输入 `http://<dashboard_IP>:<dashboard_port>`，进入 OpenSearch 登录页面。
2. 输入帐户名和密码。
   
   首次登录需使用超级管理员（admin）帐号和密码。该帐号在创建集群时设置，且不支持修改。

   <img src="../../../_images/dashboard.png" alt="Dashboard" style="zoom:50%;" />

3. 进入 OpenSearch Dashboards 管理页面，展开左侧菜单导航栏，即可进行可视化数据管理和多租户管理工作。
   
   <img src="../../../_images/dashboard_os.png" alt="Dashboard" style="zoom:50%;" />
