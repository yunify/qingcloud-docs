---
title: "Zabbix 监控服务 "
description: 本小节主要介绍如何管理 Redis Standalone 的 zabbix 监控服务。 
keyword: zabbix 客户端,Zabbix 监控服务,监控服务
weight: 50
collapsible: false
draft: false
---


为了实现多维监控数据库，Redis Standalone 集成 zabbix_agent2 客户端，支持启用 Zabbix 5.4 提供监控服务。

本小节主要介绍如何启动和关闭 Zabbix 监控服务。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 Redis Standalone 集群，且集群状态为**活跃**。
- 已安装 Zabbix 5.4 客户端，且获取 Zabbix 系统用户和密码。

> **注意**
> 
> 安装 Zabbix 的服务器与 Redis 之间的网络通畅。
> 
> 若安装 Zabbix 的服务器与 Redis 网络不通，可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。不建议通过**端口转发**的方式将服务暴露到公网，以免造成 Redis 关键信息暴露等风险。

## 启动 Zabbix 监控服务

启动 Zabbix 监控服务，需先在集群**配置参数**中启用服务，再在 Zabbix 客户端配置数据库相应参数，才能正常使用 Zabbix 监控。

### 开启 Zabbix 服务
   
1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis Standalone**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 在**配置参数**页签，选择**公共参数**，点击**修改属性**。
5. 设置**Enable zabbix**参数值为`true`。

   可设置 Zabbix 服务 **zabbix server** 和 **named-sessions**。

6. 点击**保存**，确认启用服务。
   
   <img src="../../../_images/enable_zabbix_agent.png" alt="启动 Zabbix 客户端服务" style="zoom:50%;" />

### 配置 Zabbix 监控
   
1. 使用浏览器，登录 Zabbix Server 的 Web 界面。
2. 选择 **配置** > **主机**，进入主机管理页面。
3. 点击 **创建主机**，进入主机配置页面。
4. 在**主机**页签，配置 Redis 的 zabbix_agent 为监控主机。

   -**主机名称** 自定义主机名称

   -**群组** 选择 `Zabbix servers` 模版类型

   -**Interfaces** 的 **IP address** 配置为集群 **zabbix server**参数值

   -**Interfaces** 的 **端口** 选配置为集群 Zabbix 服务端口，默认为 `10050`

   <img src="../../../_images/zabbix_create_host.png" alt="创建 Host" style="zoom:50%;" />

5. 在**模版**页签，选择 `Redis by Zabbix agent 2` 模版。

   <img src="../../../_images/zabbix_temp.png" alt="选择模版" style="zoom:50%;" />

6. 在**宏**页签，配置**主机宏**参数。
   
   -**{$REDIS.CONN.URI}** 配置为集群 **named-sessions** 参数值

   <img src="../../../_images/zabbix_session.png" alt="配置主机宏" style="zoom:50%;" />

7. 点击**添加**，创建主机。
   
   待主机采集状态正常后（**状态** 为 `已启用`），即可查看采集的最新数据和监控图。

   更多 Zabbix 的使用方法，请参见 [Zabbix](https://www.zabbix.com/documentation/5.4/zh)。

## 关闭 Zabbix 服务

若无需 Zabbix 监控服务时，可在集群配置参数中确认关闭服务。

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis Standalone**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 在**配置参数**页签，选择**公共参数**，点击**修改属性**。
5. 设置**Enable zabbix**参数值为`false`，确认关闭服务。
6. 点击**保存**，关闭服务。
