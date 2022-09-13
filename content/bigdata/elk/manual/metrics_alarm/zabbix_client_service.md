---
title: "Zabbix 监控服务 "
description: 本小节主要介绍如何管理 ELK 的 zabbix 监控服务。 
keyword: zabbix 客户端,Zabbix 监控服务,监控服务
weight: 50
collapsible: false
draft: false

---

为了实现多维监控数据库，ELK 集成 zabbix_agent2 客户端，支持启用 Zabbix 5.4 提供监控服务。

<img src="../../../_images/zabbix_arh.png" alt="zabbix" style="zoom:50%;" />

* Zabbix Server：负责接收 Agent 发送的报告信息的核心组件，所有配置，统计数据及操作数据均由其组织进行；
* Agent：部署在被监控主机上，负责收集本地数据并发往 Server 端。

本小节主要介绍如何配置 Zabbix 监控服务。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 ELK 集群，且集群状态为**活跃**。
- 已安装 Zabbix 5.4 客户端，且获取 Zabbix 系统用户和密码。

> **注意**
>
> * 安装 Zabbix 的服务器与 ELK 之间的网络通畅。
> * 若安装 Zabbix 的服务器与 ELK 网络不通，可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。不建议通过**端口转发**的方式将服务暴露到公网，以免造成 ELK 关键信息暴露等风险。

## 操作步骤

ELK 集群默认支持 Zabbix 监控服务，需登录 Zabbix Server 的 Web 界面进行监控配置才能正常使用 Zabbix 监控。

### 记录集群 Zabbix 监控节点地址

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **ELK 服务**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 记录集群热节点 IP 地址。

### 配置 Zabbix 监控

1. 使用浏览器，登录 Zabbix Server 的 Web 界面。

2. 选择 **Configuration** > **Hosts**，进入**Hosts**页面。

3. 点击右上角的 **Create host**，进入主机配置页面。

4. 在 **Hosts** 页签，配置 ELK 的 zabbix_agent 为监控主机。

   * **主机名称** 自定义主机名称
   * **群组** 选择 `Zabbix servers` 模版类型
   * **Interfaces** 参数值后点击 **Add**，并选择 **Agent**
     * **Interfaces** 的 **IP address** 默认为 `127.0.0.1`，可配置为集群 **zabbix server** 参数值
     * **Interfaces** 的 **端口** 选配置为集群 Zabbix 服务端口，默认为 `10050`

   <img src="../../../_images/zabbix_create_host.png" alt="创建 Host" style="zoom:50%;" />

5. 在 **Templates **页签，选择 `Elasticsearch Cluster by HTTP` 模版。

   <img src="../../../_images/zabbix_temp.png" alt="选择模版" style="zoom:50%;" />

6. 在 **Macros** 页签，配置**主机宏**参数。

   -**{$ELASTICSEARCH.IP}** 配置为集群热节点的 IP 地址

   <img src="../../../_images/zabbix_session.png" alt="配置主机宏" style="zoom:50%;" />

7. 点击 **Add**，创建主机。

   待主机的 **Status**为 `Enabled` 且 **Availability** 一栏的 `ZBX` 显示为绿色后表示监控配置成功，即可查看采集的最新数据和监控图。

   <img src="../../../_images/zabbix_status.png" alt="配置成功状态" style="zoom:50%;" />

   更多 Zabbix 的使用方法，请参见 [Zabbix](https://www.zabbix.com/documentation/5.4/zh)。

   若无需 Zabbix 监控服务时，可在 **Configuration** > **Hosts** 页面，勾选主机名称，点击 **Disable** 关闭服务，或点击 **Delete** 删除服务。
