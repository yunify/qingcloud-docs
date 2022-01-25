---
title: "Prometheus 监控服务"
description: 本小节主要介绍 ClickHouse 的 Prometheus 监控服务。 
keyword: Prometheus 监控,Grafana 监控,ClickHouse,数据仓库,
weight: 50
collapsible: false
draft: false
---

Prometheus 是一套开源的监控系统，以较低的系统资源要求，可实现了丰富的自定义和灵活的查询。Grafana 是一个跨平台的开源的度量分析和可视化工具，可以将采集的数据可视化呈现。

原生 ClickHouse 从 v20.1.2.4 版本开始，内置对接 Prometheus 监控功能，将 ClickHouse 作为 Prometheus 的 Endpoint 服务，可自动的将 `system.metrics`、`system.events` 和 `system.asynchronous_metrics` 三张表数据发送给 Prometheus，从而实现 Prometheus 监控服务。

- ClickHouse 默认开启 Prometheus 监控服务，您仅需在 Prometheus 配置 ClickHouse 为数据源。
- 默认监控端口为 8001。

本小节简要介绍如何搭建 ClickHouse + Prometheus + Grafana 监控。

## 约束限制

- `v1.0.9` 及以上版本默认开启 Prometheus 监控服务。

## 前提条件

- 已创建 ClickHouse 集群，集群状态为**活跃**，且服务状态为**正常**。
- 已创建用于安装 Prometheus 和 Grafana 的服务器。
  
> **注意**
> 
> 安装 Prometheus 和 Grafana 的服务器与 ClickHouse 之间的网络需保持通畅。
> 
> 若安装 Prometheus 和 Grafana 的服务器与 ClickHouse 之间网络不通，可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。不建议通过**端口转发**的方式将服务暴露到公网，以免造成 ClickHouse 关键信息暴露等风险。

## 安装 Prometheus

1. （可选）在服务器执行如下命令，安装 Prometheus。

    ```docker
    docker pull prom/prometheus  
    ```

2. 执行如下命令，指定 ClickHouse 节点数据源。

    ```shell
    $ vim  /home/ubuntu/prometheus/prometheus.yml
    global:
      scrape_interval:     15s 
      evaluation_interval: 15s 

    alerting:
      alertmanagers:
       - static_configs:
         - targets:

    scrape_configs:
       - job_name: 'clickhouse'

    static_configs:
       - targets: '<node_IP>:8001'
    ```

3. 执行如下命令，启动 Prometheus 服务。

    ```docker
    docker run -d -p 9090:9090
    -v /home/ubuntu/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml
    -v /home/ubuntu/prometheus-data:/prometheus
    --user "root" --name prometheus prom/prometheus
    ```

## （可选）安装 Grafana

1. 在服务器执行如下命令，安装 Grafana。

    ```docker
    docker pull grafana/grafana 
    ```

2. 执行如下命令，启动 Grafana 服务。

    ```docker
    docker run -d -p 3000:3000
    -v /home/ubunt/grafana:/var/lib/grafana
    --user "root" --name=grafana grafana/grafana
    ```

## （可选）添加 Prometheus 数据源

Grafana 内置支持 Prometheus 数据源。

- 详细 Grafana 添加数据源说明，请参见[Add a data source](https://grafana.com/docs/grafana/latest/datasources/add-a-data-source/)。
- 详细 Prometheus 数据源的选项、变量、查询等说明，请参见[Prometheus data source](https://grafana.com/docs/grafana/latest/datasources/prometheus/)。

## 导入 ClickHouse 模版

Grafana 的 Dashboard 是一组多属性数据的可视化 UI 仪表盘，可自定义仪表盘配置，接入任何配置的 Grafana 数据源。  
ClickHouse 支持 [Clickhouse internal exporter](https://grafana.com/grafana/dashboards/13500) 模版样式。  
Grafana Dashboard 导入模版说明，请参见[Dashboard Export and import](https://grafana.com/docs/grafana/v7.5/dashboards/export-import/)。

## 查看监控

成功导入模版后，即可在 Grafana 平台相应 Dashboard 页面，查看 ClickHouse 监控。

<img src="../../../_images/monitor_prometheus.png" alt="Prometheus 监控" style="zoom:50%;" />
