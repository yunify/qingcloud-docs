---
title: "配置 Zabbix Server 监控 Kafka 集群"
description: 本小节主要介绍如何配置 Zabbix 监控服务。 
keyword: Zabbix 监控,zabbix server,Kafka
weight: 35
collapsible: false
draft: false

---

为了实现多维监控 Kafka 集群，Kafka 支持启用 Zabbix 提供监控服务。

<img src="../../_images/zabbix_arh_kafka.png" alt="zabbix" style="zoom:50%;" />

* Zabbix Server：负责接收 Kafka 集群发送的报告信息的核心组件，所有配置、统计数据及操作数据均由其组织进行。
* Host：配置 Host，并设置模板（Templates）和宏（Macros），使 Zabbix Server 与 Kafka 集群节点建立连接。

本小节主要介绍如何配置 Zabbix Server 监控 Kafka 集群。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 Kafka 集群，且集群状态为`活跃`。

  > **注意**
  >
  > 安装 Zabbix 的服务器与 Kafka 之间的网络通畅。
  >
  > 若安装 Zabbix 的服务器与 Kafka 网络不通，可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。不建议通过**端口转发**的方式将服务暴露到公网，以免造成 Kafka 关键信息暴露等风险。

## 操作步骤

Kafka 集群默认支持 Zabbix 监控服务，需登录 Zabbix Server 的 Web 界面进行监控配置才能正常使用 Zabbix 监控。

### 记录集群 Zabbix 监控节点地址

1. 登录管理控制台。
2. 选择**产品与服务** > **消息队列与中间件** > **Kafka 服务**，进入 Kafka 服务管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 在**服务端口信息**模块，查看待监控集群的 Kafka 节点 IP 地址。

   <img src="../../_images/zabbix_kafka_ip.png" alt="查看 Kafka 节点 IP" style="zoom:50%;" />

### 配置 Zabbix Server

1. 使用浏览器，登录 Zabbix Server 的 Web 界面。
2. 在左侧导航栏选择 **Configuration** > **Hosts**，进入主机管理页面。
3. 在页面右上角，点击 **Create host**，进入主机配置页面。
4. 在 **Hosts** 页签，配置 Kafka 节点 IP 为监控主机。

   * **Host name** 自定义主机名称，例如 `kafka-doc-broker1`。
   * **Templates** 选择模版，您可以选择系统自带且适用于 Kafka 集群的模板，此处以模板 `Apache Kafka by JMX` 为例；您也可以在 **Configuration** > **Templates** 界面自定义模板，详细操作请参见 [Zabbix](https://www.zabbix.com/documentation/6.0/zh/manual/config/templates/template)。
   * **Host groups** 选择主机组，此处以 `Applications` 为例。
   * **Interfaces** 参数值后点击 **Add**，并选择 `JMX`。
     * **Interfaces** 的 **IP address** 配置为 Kafka 集群与 **zabbix server** 互通的 IP 地址（即 Kafka 节点的 IP）。

         >**注意**
         >
         > 一次只能配置一个 IP 地址，若需要监控 Kafka 集群中所有 Kafka 节点，则需要添加多个 Host。

     * **Interfaces** 的 **Port** 配置为集群 Zabbix 的服务端口，Zabbix 服务默认端口为 `9999`。

   <img src="../../_images/zabbix_kafka_create_host01.png" alt="创建 Host" style="zoom:50%;" />

5. (可选)在 **Macros** 页签，配置**主机宏**参数。

   * **{$KAFKA.PASSWORD}** 配置为集群监控服务账户的用户名，模版中用户名默认为 `zabbix`。
   * **{$KAFKA.USER}** 配置为集群监控服务账户的密码，模版中密码默认为 `zabbix`。

     >**注意**
     >
     >* 为避免敏感信息或重要信息被监控或泄露，请勿使用集群 root 账户或 admin 账户，建议使用专门用于集群监控服务的账户或者自定义权限的账户。
     >* **Inherited and host macros** 页签中的参数为默认宏函数，您可自行设定和修改。
     >* **Host macros** 页签下为主机宏，可自定义设置，也可使用 **Inherited and host macros** 页签中的宏函数，如果两者存在相同的宏，则主机宏将替代 **Inherited and host macros** 页签中的宏函数。

   <img src="../../_images/zabbix_rabbitmq_create_host02.png" alt="配置主机宏" style="zoom:50%;" />

6. 点击 **Add**，创建主机。

   待主机的 **Status** 为 `Enabled` 表示监控配置成功，即可查看采集的最新数据和监控图。

   <img src="../../_images/zabbix_status.png" alt="配置成功状态" style="zoom:50%;" />

   > **说明**
   >
   > * 更多 Zabbix 的使用方法，请参见 [Zabbix](https://www.zabbix.com/documentation/6.0/zh)。
   > * 若无需 Zabbix 监控服务时，可在 **Configuration** > **Hosts** 页面，勾选主机名称，点击 **Disable** 关闭服务，或点击 **Delete** 删除服务。

### 查看监控

1. 在 Zabbix Server 的 Web 界面，选择 **Configuration** > **Hosts**，进入主机管理页面。
2. 点击主机名称所在行的 **Items**、**Triggers**、**Graphs**、**Discovery**，可查看 Zabbix Server 对 Kafka 集群支持的监控项、触发器、数据图表等详细监控信息。

   <img src="../../_images/zabbix_items.png" alt="查看" style="zoom:50%;" />

   <img src="../../_images/zabbix_items_detail.png" alt="查看监控项" style="zoom:50%;" />

3. 在 Zabbix Server 的 Web 界面，选择 **Monitoring** > **Hosts**，进入主机监控页面。
4. 点击主机名称，选择 **Graphs**。

   可查看监控图表。

   <img src="../../_images/zabbix_graphs.png" alt="查看" style="zoom:50%;" />

5. 点击右上角时间可筛选对应时间段的监控状况。

   <img src="../../_images/zabbix_graphs01.png" alt="查看图表" style="zoom:50%;" />

>**说明**
>
>更多关于 Zabbix 的监控项查询，请参见 [Zabbix](https://www.zabbix.com/documentation/6.0/zh)。
