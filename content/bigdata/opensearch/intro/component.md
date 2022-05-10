---
title: "集群组件"
description: 本小节主要介绍 OpenSearch 主要集群组件。 
keyword: 集群组件,OpenSearch,搜索引擎,大数据 
weight: 30
collapsible: false
draft: false
---

OpenSearch 为用户提供了以下组件，用以服务集群其他组件或直接为用户提供服务。

## Exporter 组件

Prometheus 是一套开源的监控系统，以较低的系统资源要求，可实现了丰富的自定义和灵活的查询。

- OpenSearch 默认启用 [OpenSearch Exporter](https://github.com/aparo/opensearch-prometheus-exporter) 监控服务，可通过对接 Prometheus 提供节点服务状态监控，可访问 `http://<os_hot_node_IP>:9200/_prometheus/metrics` 查看监控数据。

- OpenSearch 支持启用 [Node Exporter](https://github.com/prometheus/node_exporter) 监控服务，通过对接 Prometheus提供节点资源状态监控服务，可访问 `http://<os_hot_node_IP>:<node_exporter_port>/metrics` 查看监控数据。

## Cerbro 组件

Cerebro 是基于 Web 的 OpenSearch 第三方管理工具，提供集群、索引、快照等的可视化管理功能。OpenSearch 服务集成 Cerebro 组件，可访问 `http://<dashboard_IP>:<cerebro_port>` 进行索引和节点可视化管理。

## Caddy 组件

[Caddy](https://caddyserver.com/) 是一个支持 HTTP/2 的跨平台 Web 服务器，除了日志查看功能，还为 Logstash 节点提供上传分词和停止词词典功能，为 OpenSearch 节点提供上传同义词词典功能。

Caddy 运行在集群节点的 80 端口，可通过 `http://<节点 IP>/logs/` 查看日志。

## HAProxy 组件

[HAProxy](http://www.haproxy.org/) 是一个高性能的负载均衡软件，部署在 Dashboard 节点上，提供 OpenSearch 的负载均衡和故障转移功能。

**建议**通过集群的高可用 IP（绑定在 Dashboard 节点上）访问 OpenSearch 服务 `http://<VIP>:9200/`。

## Keepalived 组件

[Keepalived](https://www.keepalived.org) 为 HAProxy 提供故障转移能力，防止 HAProxy 单点失败，确保 `http://<VIP>:9200/` 的高可用。
