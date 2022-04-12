---
title: "OpenSearch Exporter 服务 "
description: 本小节主要介绍如何使用 OpenSearch Exporter 监控服务。 
keyword: OpenSearch Exporter 监控服务,监控服务
weight: 50
collapsible: false
draft: false
---


Prometheus 是一套开源的监控系统，以较低的系统资源要求，可实现了丰富的自定义和灵活的查询。Grafana 是一个跨平台的开源的度量分析和可视化工具，可以将采集的数据可视化呈现。

为了实现多维监控数据库，OpenSearch 默认启用 [OpenSearch Exporter](https://github.com/aparo/opensearch-prometheus-exporter) 监控服务，可通过对接 Prometheus 和 Grafana 提供节点服务状态监控。

- OpenSearch 集成 opensearch_exporter v1.2.4 版本，支持 Prometheus 标准 Exporter 监控指标。详细监控指标项，请参见 [Metrics reference](https://opensearch.org/docs/latest/monitoring-plugins/pa/reference/)。
- OpenSearch 默认开启 OpenSearch Exporter 监控服务。
- OpenSearch 默认监控端口为 9200。

本小节主要介绍如何启用 OpenSearch Exporter 监控服务。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 OpenSearch 集群，且集群状态为`活跃`。
- 已安装 Prometheus 和 Grafana，且已获取 Prometheus 和 Grafana 用户和密码。

   > **注意**
   > 
   > 安装 Prometheus 和 Grafana 的服务器与 OpenSearch 之间的网络通畅。
   > 
   > 若安装 Prometheus 和 Grafana 的服务器与 OpenSearch 网络不通，可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。不建议通过**端口转发**的方式将服务暴露到公网，以免造成 OpenSearch 关键信息暴露等风险。

## 启用 OpenSearch Exporter 服务

OpenSearch 服务默认开启 OpenSearch Exporter 服务，可通过访问 `http://<os_hot_node_IP>:9200/_prometheus/metrics` 查看监控数据。

您也可以通过在 Prometheus 添加 OpenSearch 热节点为数据源，成功添加数据源后，即可在可视化查看节点资源监控信息。

- 详细 Grafana 添加数据源说明，请参见[Add a data source](https://grafana.com/docs/grafana/latest/datasources/add-a-data-source/)。

- 详细 Prometheus 数据源的选项、变量、查询等说明，请参见[Prometheus data source](https://grafana.com/docs/grafana/latest/datasources/prometheus/)。
