---
title: "Zabbix 客户端服务 "
description: test
weight: 50
draft: false
---


为了实现多维监控数据库，MySQL Plus 支持启用 Zabbix Agent 服务 ( Zabbix 3.4）提供监控服务。

本小节主要介绍如何启动和关闭 Zabbix 客户端服务。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 MySQL Plus 集群，且集群状态为**活跃**。
- 已安装 Zabbix 客户端，并下载 [Percona Zabbix Templates](https://releases-qs.pek3a.qingstor.com/zabbix/zbx_export_templates.xml?response-content-disposition=attachment)。

## 启动 Zabbix 客户端服务

启动 Zabbix 客户端服务，需先在 AppCenter 启用服务客户端，再在 Zabbix 客户端配置数据库相应参数和监控模版，才能正常启用 Zabbix 监控。

> **注意**
> 
> Zabbix 服务器需与数据库在同一 VPC 下，或者通过 **VPN 服务**来访问。不建议通过端口转发的方式将服务暴露到公网，以免造成数据库关键信息暴露等风险。

1. 开启 zabbix 客户端。
   
   1. 登录 QingCloud 管理控制台。
   2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 MySQL Plus**，进入集群管理页面。
   3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
   4. 在**基本属性**模块，展开下拉菜单，点击**启动 zabbix 客户端**。
   5. 配置 Zabbix Server 端口和 IP 参数，确认启用服务。

   <img src="../../../_images/enable_zabbix_agent.png" alt="启动 Zabbix 客户端服务" style="zoom:50%;" />

2. Zabbix Web 界面操作。
   
   1. 使用浏览器，登录 Zabbix Server 的 Web 界面。
   2. 添加数据库 IP 地址。
   3. 将**监控模板**导入 Zabbix Server 。
   4. 服务启动成功后，即可查看监控信息和动态界面。

## 关闭 Zabbix 客户端服务

若无需 Zabbix Agent 服务时，可在 AppCenter 确认关闭服务。

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 MySQL Plus**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 在**基本属性**模块，展开下拉菜单，点击**关闭 zabbix 客户端**。
5. 点击**提交**，关闭服务。

 <img src="../../../_images/disable_zabbix_agent.png" alt="关闭 Zabbix 客户端服务" style="zoom:50%;" />
