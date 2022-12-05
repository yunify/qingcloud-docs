---
title: "Zabbix 客户端服务 "
description: 小节主要介绍如何设置 zabbix 监控告警。 
keyword: 数据库,MySQL PLus,关系型数据库,MySQL,监控指标,zabbix,多位监控
weight: 50
collapsible: false
draft: false
---


为了实现多维监控数据库，MySQL Plus 支持启用 Zabbix Agent 服务 ( Zabbix 3.4）提供监控服务。

本小节主要介绍如何启动和关闭 Zabbix 客户端服务。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 MySQL Plus 集群，且集群状态为**活跃**。
- 已搭建 zabbix agent 环境，且已获取 Zabbix Server 的 IP 地址。

   > **注意**
   > 
   > 建议 Zabbix 与 MySQL PLus 部署在同一 VPC 下。若安装 Zabbix 的服务器与 MySQL PLus 网络不通，可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/vpn_intro/) 等方式打通网络。不建议通过**端口转发**的方式将服务暴露到公网，以免造成信息暴露等风险。

## 约束限制

仅`高可用版`支持 Zabbix 监控。

## 启动 Zabbix 客户端服务

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 MySQL Plus**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 在**基本属性**模块，展开下拉菜单，点击**启动 zabbix 客户端**。
5. 配置 Zabbix Server 端口和 IP 参数，确认启用服务。

   <img src="../../../_images/enable_zabbix_agent.png" alt="启动 Zabbix 客户端服务" style="zoom:50%;" />

   > **注意**
   > 
   > 启动 Zabbix 客户端服务后，在 Zabbix Server 配置数据库相应参数和监控模版（详细操作请参见[配置 Zabbix 监控](../zabbix_server)），才能正常使用 Zabbix 监控。

## 关闭 Zabbix 客户端服务

若无需 Zabbix Agent 服务时，可在 AppCenter 确认关闭服务。

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 MySQL Plus**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 在**基本属性**模块，展开下拉菜单，点击**关闭 zabbix 客户端**。
5. 点击**提交**，关闭服务。

 <img src="../../../_images/disable_zabbix_agent.png" alt="关闭 Zabbix 客户端服务" style="zoom:50%;" />
