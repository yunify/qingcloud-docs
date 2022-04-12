---
title: "Node Exporter 监控服务"
description: 本小节主要介绍如何开启或关闭 Node Exporter 监控服务。 
keyword: Node Exporter监控,Prometheus Server,开启 Node Exporter,OpenSearch,搜索引擎
weight: 60
collapsible: false
draft: false
---


为了实现多维监控数据库，OpenSearch 支持启用 Node Exporter 监控服务，通过对接 Prometheus 和 Grafana 提供节点资源状态监控服务。  

- OpenSearch 集成 node_exporter v0.18.1 版本，支持 Prometheus 标准 Exporter 监控指标。详细监控指标项，请参见 [node_exporter](https://github.com/prometheus/node_exporter)。
- OpenSearch 默认开启 Node Exporter 监控服务。
- OpenSearch 默认监控端口为 9100。

本小节主要介绍如何启动和关闭 Node Exporter 服务。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 OpenSearch 集群，且集群状态为`活跃`。
- 已安装 Prometheus 和 Grafana，且已获取 Prometheus 和 Grafana 用户和密码。

   > **注意**
   > 
   > 安装 Prometheus 和 Grafana 的服务器与 OpenSearch 之间的网络通畅。
   > 
   > 若安装 Prometheus 和 Grafana 的服务器与 OpenSearch 网络不通，可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。不建议通过**端口转发**的方式将服务暴露到公网，以免造成 OpenSearch 关键信息暴露等风险。

## 启动 Node Exporter 服务

启动 Node Exporter 服务，需先在 AppCenter 启用服务客户端，并在 Prometheus 添加数据源配置 OpenSearch 相应参数，才能正常启用 Node Exporter 监控服务。

### 开启 Node Exporter 服务
   
1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **OpenSearch 服务**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 在**配置参数**页签，选择 **OpenSearch 节点（热）**，点击**修改属性**。
5. 设置 **prometheus.node.exporter** 参数值为`true`。
6. 点击**保存**，确认启用服务。

### 配置 Node Exporter 监控

参考 [Prometheus 官方配置指导](https://prometheus.io/docs/prometheus/latest/configuration/configuration/)和 [Grafana 官方配置指导](https://grafana.com/docs/grafana/latest/administration/configuration/)，添加 OpenSearch 节点为数据源。成功添加数据源后，即可在 Grafana 查看节点资源监控信息。

通过访问 `http://<os_hot_node_IP>:<node_exporter_port>/metrics`，可验证 Node Exporter 监控是否配置成功。

## 关闭 Node Exporter 服务

若无需 Node Exporter 服务时，可在 AppCenter 确认关闭服务。

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **OpenSearch 服务**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 在**配置参数**页签，选择 **OpenSearch 节点（热）**，点击**修改属性**。
5. 设置 **prometheus.node.exporter** 参数值为`false`。
6. 点击**保存**，关闭服务。
