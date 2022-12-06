---
title: "配置 Zabbix 监控"
description: 
keyword: MySQL PLus, Zabiix 监控
weight: 51
draft: false
---

本文介绍如何在 Zabbix Server 上配置 MySQL PLus 集群监控。

## 适用范围

支持 Zabbix Server 3.4～6.2 版本。

## 前提条件

- 已创建 MySQL PLus 集群，且集群状态为`活跃`。
- MySQL PLus 集群已启动 Zabbix 客户端服务。
- 已获取 Zabbix Server 用户名和密码。

  > **说明**
  >
  > 建议 Zabbix 与 MySQL PLus 部署在同一 VPC 下。若安装 Zabbix 的服务器与 MySQL PLus 网络不通，可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/vpn_intro/) 等方式打通网络。不建议通过**端口转发**的方式将服务暴露到公网，以免造成信息暴露等风险。

## 步骤一：下载并导入监控模板

1. 下载 [Percona Zabbix Templates](https://releases-qs.pek3a.qingstor.com/zabbix/zbx_export_templates.xml?response-content-disposition=attachment) 模板。

2. 登录 Zabbix Server 的 Web 界面。

3. 在左侧导航栏，选择 **Configuration** > **Templates**，进入模版管理页面。

4. 点击 **Import**，在弹出的对话框中，选择下载好的模板文件并配置导入规则。

   <img src="../../../_images/zabbix_import_template01.png" style="zoom:50%;" />

5. 点击 **Import** 完成导入。

6. 回到模板管理页面，可以查看到您刚导入的模板。

   <img src="../../../_images/zabbix_import_template.png" style="zoom:50%;" />

## 步骤二：配置监控主机

1. 登录 Appcenter 管理控制台，在 MySQL PLus 集群节点页面，查看并记录 MySQL PLus 节点的 IP 信息。

   如本例中 MySQL PLus 节点如下： 

   > **说明**
   >
   > 若节点列表中没有 IP 列，可以点击列表上方的<img src="../../../_images/zabbix_eye_icon.png" style="zoom:20%;" />图标进行设置。

   <img src="../../../_images/zabbix_node_ip.png"/>

2. 在 Zabbix Server Web 配置界面，选择 **Configuration** > **Hosts**，进入主机管理页面。

3. 点击 **Create host**，进入主机配置页面。

4. 在 **Host** 页签，配置需要被监控的主机实例。

   <img src="../../../_images/zabbix_create_host.png" style="zoom:50%;" />

   配置如下参数：

   - **Host name**：自定义主机名称。
   - **Templates**：选择监控模板。此处选择[步骤一](#步骤一下载并导入监控模板)中下载的模板。
   - **Host groups**：选择主机所属组。此处可选 `Databases`。
   - **Interface**：点击 **Add** > **Agent**，添加需要监控的主机。通过重复点击 **Add**  > **Agent** 添加多个主机。
     - **IP address** 配置为集群与 Zabbix Server 互通的节点 IP 地址。
     - **Port** 配置为集群 Zabbix 的服务端口。Zabbix 服务默认端口为 `10050`。

6. 点击 **Add**，完成 Host 添加。

   待主机的 **Status** 为 `Enabled` 表示监控配置成功，即可查看采集的最新数据和监控图。

   <img src="../../../_images/zabbix_create_host_done.png" style="zoom:50%;" />

## 步骤三：验证监控主机是否配置成功

如果以上两个项均验证通过，表示监控配置成功。

1. 在 Zabbix Server 的 Web 界面，选择 **Monitoring** > **Hosts**，查看新创建的 Host 是否显示 `Available`。

   <img src="../../../_images/zabbix_host_available.png" style="zoom:50%;" />

2. 在 Zabbix Server 的 Web 界面，选择 **Monitoring** > **Latest data**，选择您创建的 Host 的名称，查看是否有数据。

   <img src="../../../_images/zabbix_monitor_latest.png" style="zoom:50%;" />
