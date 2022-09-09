---
title: "Zabbix 监控服务"
description: 本小节主要介绍如何开启或关闭 Zabbix 监控服务。 
keyword: Zabbix 监控,zabbix server,开启 zabbix,MongoDB,文档数据库,数据库
weight: 50
collapsible: false
draft: false
---


为了实现多维监控数据库，MongoDB 支持启用 Zabbix Agent2 服务 (5.4）提供监控服务。

本小节主要介绍如何启动和关闭 Zabbix 监控服务。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 MongoDB 集群，且集群状态为**活跃**。
- 已安装 [Zabbix 客户端](https://www.zabbix.com/cn/download)，且已获取 Zabbix 系统用户和密码。

   > **注意**
   > 
   > 安装 Zabbix 的服务器与 MongoDB 之间的网络通畅。
   > 
   > 若安装 Zabbix 的服务器与 MongoDB 网络不通，可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。不建议通过**端口转发**的方式将服务暴露到公网，以免造成 MongoDB 关键信息暴露等风险。

## 启动 Zabbix 服务

启动 Zabbix 客户端服务，需先在 AppCenter 启用服务客户端，再在 Zabbix 客户端配置数据库相应参数，才能正常启用 Zabbix 监控。

### 开启 Zabbix 服务

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **文档数据库 MongoDB**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 在**配置参数**页签，选择**公共参数**，点击**修改属性**。
5. 设置**Zabbix：是否开启 Agent2**参数值为`是`。  
   并可设置 Zabbix 服务用户帐号登录密码，访问地址和端口。  
6. 点击**保存**，确认启用服务。
   
   <img src="../../../_images/enable_zabbix_agent.png" alt="启动 Zabbix 客户端服务" style="zoom:50%;" />

### 配置 Zabbix 监控
   
1. 使用浏览器，登录 Zabbix Server 的 Web 界面。
2. 添加节点 IP 地址为 Host。  
   1. 选择 **Configuration** > **Hosts** ，进入 Host 管理页面。
   2. 点击 **Create Host**，进入 Host 配置页面。
   3. 配置数据库任意节点为待监控节点。  
      -**Groups** 选择 `MongoDB` 模版类型  
      -**Agent** 的 **IP address** 配置为集群 **Zabbix: 服务端地址**，默认为 `127.0.0.1`  
      -**Agent** 的 **IP address** 选配置为集群 **Zabbix: Agent2 监听端口**，默认为 `10050`

   <img src="../../../_images/zabbix_create_host.png" alt="创建 Host" style="zoom:50%;" />

3. 配置 Host 全局变量。主要修改 Macros 配置中如下参数。  
   1. 选择 **Configuration** > **Hosts** ，进入 Host 管理页面。
   2. 点击目标 Host 名称，进入 Host 配置管理页面。
   3. 在 Macros 配置，添加如下配置项。
   4. 配置数据库任意节点为待监控节点。  
      -**{$MONGODB.CONNSTRING}** 配置为 `tcp://localhost:27018`  
      -**{$MONGODB.PASSWORD}** 配置为集群 **qc_monitor 用户密码**，默认为 `Change1Pwd`  
      -**{$MONGODB.USER}** 配置为集群 Zabbix 服务用户帐号，默认为 `qc_monitor`

   <img src="../../../_images/zabbix_modify_para.png" alt="修改 Host 参数" style="zoom:50%;" />

4. 待 Host 采集状态正常后（**status** 为 `Enabled` ，**Availability** 为绿色），查看采集数据和监控图。  
   更多 Zabbix 的使用用方法，请参见 [Zabbix Agent2](https://www.zabbix.com/documentation/current/manual/concepts/agent2)。

## 关闭 Zabbix 服务

若无需 Zabbix Agent 服务时，可在 AppCenter 确认关闭服务。

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **文档数据库 MongoDB**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 在**配置参数**页签，选择**公共参数**，点击**修改属性**。
5. 设置**Zabbix：是否开启 Agent2**参数值为`否`，确认关闭服务。
6. 点击**保存**，关闭服务。
