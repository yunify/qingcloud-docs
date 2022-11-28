---
title: "使用 Zabbix 监控 Harbor"
draft: false
description: 介绍如何部署 Harbor 镜像仓库。
keyword: Harbor,私有镜像仓库,镜像仓库,容器
weight: 15
---
本文介绍如何使用 Zabbix 监控 Harbor 集群。

## 背景信息

本文介绍通过使用 Zabbix 监控模板，并[调用 Harbor API 接口](https://goharbor.io/docs/1.10/build-customize-contribute/configure-swagger/)获取 Harbor 数据，来实现对 Harbor 的监控。

此外，Harbor 还提供了 [exporter](https://goharbor.io/docs/2.2.0/administration/metrics/#harbor-exporter-metrics) 组件，该组件通过 `<harbor_instance>:<metrics_port>/<metrics_path>` 对外提供监控数据获取接口，如 “http://127.0.0.1:9090/metrics”。QingCloud Harbor 默认未安装 exporter 组件，如果您想使用此方式，需要先通过配置文件启用 **metric** 功能，且需要自定义监控模板。本文不做详细阐述。

## 适用范围

Harbor 版本不低于 2.0.0。Harbor 2.0.0 及以上版本才支持对外的监控数据暴露。

本文使用的版本信息如下：

- OS：Ubuntu/20.4
- Harbor 2.2.1
- Zabbix 5.0

## 前提条件

- 已创建 Harbor 集群，且集群状态为`活跃`。

- 已[下载和安装 Zabbix](https://www.zabbix.com/documentation/6.0/zh/manual/installation)，Zabbix 与 Harbor 节点能正常通信。

  > **说明**
  >
  > 建议 Zabbix 与 Harbor  部署在同一 VPC 下。若安装 Zabbix 的服务器与 Harbor 网络不通，可通过[边界路由器](/network/border_router/intro/border_router/)或 [VPN](/network/vpc/manual/vpn/vpn_intro/) 等方式打通网络。不建议通过**端口转发**的方式将服务暴露到公网，以免造成信息暴露等风险。

## 操作步骤

### 步骤一：下载并导入监控模板

1. 根据你使用的 Zabbix Server 版本，下载对应的 [Harbor 监控模板](https://github.com/zabbix/community-templates/tree/main/Virtualization/Docker/template_harbor_services_status)。

2. 登录 Zabbix Server 的 Web 界面。

3. 在左侧导航栏，选择 **Configuration** > **Hosts**，进入主机管理页面。

4. 点击 **Import**，在弹出的对话框中，选择下载好的模板文件并配置导入规则。

   <img src="/middware/etcd/_images/import_zabbix_tmp.png"  />

4. 点击 **Import** 完成导入。

5. 在左侧导航栏，选择 **Configuration** > **Templates**，可以查看到您刚导入的模板。

   ![image-20221116142049137](../../_images/image-20221116142049137.png)

### 步骤二：配置监控主机

> **说明**
>
> 请确保 Harbor 集群的主服务节点已[安装  Zabbix Agent/Zabbix Agent 2](https://www.zabbix.com/download_agents)。

1. 在 Harbor 集群的**节点**页面，查看并记录 Harbor 主服务节点的 IP 信息。

   ![image-20221116142427549](../../_images/harbor_service_node_ip.png)

2. 在 Zabbix Server Web 配置界面，选择 **Configuration** > **Hosts**，进入主机管理页面。

3. 点击 **Create host**，进入主机配置页面。

   ![img](../../_images/zabbix_create_host.png)

4. 在 **Host** 页签，配置需要被监控的主机实例。

   - **Host name**：自定义主机名称。

   - **Templates**：选择监控模板。此处选择[步骤一](#步骤一下载并导入监控模板)中下载的 Harbor  监控模板。

   - **Host groups**：选择主机所属组。此处可选 `Linux Server`。

   - **Interface**：点击 **Add** > **Agent**，添加需要监控的主机。

     本操作中只需要添加集群主服务节点。

     - **IP address** 为节点 IP 地址。
     - **Port** 为集群 Zabbix Agent/Zabbix Agent 2 的服务端口。Zabbix Agent 服务默认端口为 `10050`，Zabbix Agent2 服务端口默认为 `10051`，可以根据实际环境修改。
   
5. 点击 **Macros** 页签，在 **Host macros** 区域，配置**主机宏**参数。

   ![image-20221116143932784](../../_images/image-20221116143932784.png)

   下载的模板需要配置的宏可在模板页面查看，本操作中需配置以下 3 个宏。

   - {$HARBOR_USERNAME}：Harbor 集群的登录账号。
   - {$HARBOR_PASSWORD}：Harbor 集群的登录密码。
   - {$HARBOR_URL}：访问 Harbor 的 URL。

   > 说明
   >
   > - **Inherited and host macros** 页签中的参数为默认宏函数，您可自行设定和修改。
   > - **Host macros** 页签下为主机宏，可自定义设置，也可使用 **Inherited and host macros** 页签中的宏函数。如果两者存在相同的宏，则主机宏将替代 **Inherited and host macros** 页签中的宏函数。

6. 点击 **Add**，完成 Host 添加。

   待主机的 **Status** 为 `Enabled` ，**Availability** 变为 `ZBX` ，表示 Zabbix Server 已正常监控主机。

   ![image-20221116150516804](../../_images/image-20221116150516804.png)

### 步骤三：查看监控数据

1. 在 Zabbix Server 的 Web 界面，选择 **Monitoring** > **Latest data**，进入最新数据查看页面。

2. 在 **Application** 选项后，输入 `Harbor` 进行筛选，即可查看 Harbor 的最新监控数据。

   ![image-20221116151226690](../../_images/image-20221116151226690.png)

3. 点击监控数据项所在行的 **Graphs**，查看对应的图形统计数据。

4. 在页面右上方，可自定义时间或筛选时间段进行查看。

   ![image-20221116151556510](../../_images/image-20221116151556510.png)



