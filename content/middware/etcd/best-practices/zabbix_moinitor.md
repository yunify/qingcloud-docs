---
title: "使用 Zabbix 监控 Etcd"
description: 
keyword: 中间件,Etcd, Zabiix 监控
weight: 20
draft: false
---

本文介绍如何使用 Zabbix 监控 Etcd 集群。

## 背景信息

Eecd 默认提供 HTTP 的监控数据接口 `http://IP:2379/metrics`，供用户获取想要的 Etcd 监控数据。Zabbix 使用 Etcd by HTTP 模板，通过 HTTP 代理从 /metrics 端点收集指标，无需任何外部脚本，即可实现对 etcd 的数据监控。

## 适用范围

Etcd 版本为 3.0 以上，即 QingCloud Etcd App 版本不低于 `etcd 3.2.25 - 2.0.0`。

## 前提条件

- 已创建 Etcd 集群，且集群状态为`活跃`。

- 已[下载和安装 Zabbix](https://www.zabbix.com/documentation/6.0/zh/manual/installation)，Zabbix 与 Etcd 能正常通信。

  > **说明**
  >
  > 建议 Zabbix 与 Etcd 部署在同一 VPC 下。若安装 Zabbix 的服务器与 Etcd 网络不通，可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/vpn_intro/) 等方式打通网络。不建议通过**端口转发**的方式将服务暴露到公网，以免造成 信息暴露等风险。

## 操作步骤

### 步骤一：下载并导入监控模板

1. 根据您使用的 Zabbix Server 版本，[下载 Etcd by HTTP 模板](https://git.zabbix.com/projects/ZBX/repos/zabbix/browse/templates/app/etcd_http)。

   <img src="/middware/etcd/_images/download_zabbix_tmp.png"  />

2. 登录 Zabbix Server 的 Web 界面。

3. 在左侧导航栏，选择 **Configuration** > **Hosts**，进入主机管理页面。

4. 点击 **Import**，在弹出的对话框中，选择下载好的模板文件并配置导入规则。

   <img src="/middware/etcd/_images/import_zabbix_tmp.png"  />

5. 点击 **Import** 完成导入。

6. 在左侧导航栏，选择 **Configuration** > **Templates**，可以查看到您刚导入的模板。

   <img src="/middware/etcd/_images/etcd_by_http_tmp.png"  />

### 步骤二：配置监控主机

1. 登录 Appcenter 管理控制台，在 Etcd 集群节点页面，查看并记录 Etcd 节点的 IP 信息。

   如本例中 etcd 节点分别为 

   <img src="/middware/etcd/_images/node_ip.png"  />

2. 在 Zabbix Server Web 配置界面，选择 **Configuration** > **Hosts**，进入主机管理页面。

3. 点击 **Create host**，进入主机配置页面。

4. 在 **Host** 页签，配置需要被监控的主机实例。

   <img src="/middware/etcd/_images/zabbix_create_host.png"  /><br/>

   

   配置如下参数：

   - **Host name**：自定义主机名称。
   - **Templates**：选择监控模板。此处选择[步骤一]()中下载的 Etcd by HTTP 模板。
   - **Host groups**：选择主机所属组。此处可选 `Linux Server`。
   - **Interface**：点击 **Add** > **Agent**，添加需要监控的主机。通过重复点击 **Add**  > **Agent** 添加多个主机。
     - **IP address** 配置为集群与 Zabbix Server 互通的 IP 地址。
     - **Port** 配置为集群 Zabbix Agent/Zabbix Agent 2 的服务端口。Zabbix Agent 服务默认端口为 `10050`，Zabbix Agent2 服务端口默认为 `10051`，可以根据实际环境修改，此处以 Zabbix Agent 端口号为`10050`为例。

5. 可选：在 **Macros** 页签，配置**主机宏**参数。

   <img src="/middware/etcd/_images/zabbix_macros.png"  />

   - **Inherited and host macros** 页签中的参数为默认宏函数，您可自行设定和修改。
   - **Host macros** 页签下为主机宏，可自定义设置，也可使用 **Inherited and host macros** 页签中的宏函数。如果两者存在相同的宏，则主机宏将替代 **Inherited and host macros** 页签中的宏函数。

6. 点击 **Add**，完成 Host 添加。

   待主机的 **Status** 为 `Enabled` 表示监控配置成功，即可查看采集的最新数据和监控图。

   <img src="/middware/etcd/_images/zabbix_create_host_done.png"  />

### 步骤三：验证监控数据显示

1. 在 Zabbix Server 的 Web 界面，选择 **Monitoring** > **Hosts**，进入主机管理页面。

2. 点击主机名称所在行的 **Graphs**，可查看 Zabbix Server 对 Etcd 集群的监控数据图表。

   <img src="/middware/etcd/_images/zabbix_monitor.png"  />

3. 在页面右上方，可自定义时间或筛选时间段进行查看。

   <img src="/middware/etcd/_images/zabbix_monitor_filter.png"  />

   若看到已有数据收集并正常显示，表示监控成功。

