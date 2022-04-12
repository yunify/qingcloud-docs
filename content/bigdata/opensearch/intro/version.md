---
title: "产品版本"
description: 本小节主要介绍 OpenSearch 主要系列和版本。 
keyword: 版本介绍,系列介绍,OpenSearch,搜索引擎,大数据
weight: 25
collapsible: false
draft: false
---


OpenSearch 目前支持原生 OpenSearch 和传统 Elasticsearch OSS 版本如下：

| OpenSearch 服务               | 原生 OpenSearch | Elasticsearch OSS |
| -------------------------------------- | ------------- | -------- |
| OpenSearch 1.2.4 - v1.0.0          | 1.2.4        | 7.10.2、7.5.1 |
| OpenSearch 1.1.0 - v1.0.0          | 1.1.0、1.0.0        | 7.10.2、7.5.1 |

> **说明**
> 
> 若需启动 OpenSearch 项目，建议您选择支持的最新 OpenSearch 版本。
> 
> 若现有域使用的是较旧的 Elasticsearch 版本，您可以选择保留该域或迁移您的数据。

## 版本历程

### 1.2.4 - v1.0.0

OpenSearch 1.2.4 - v1.0.0 基于原生 OpenSearch 1.2.4 内核版本构建。集成 opensearch_exporter v1.2.4、node_exporter v0.18.1、Cerebro v0.9.4 组件。

- 新增 Node Exporter 配置参数，支持对接 Prometheus，提供基于 Exporter 方式的资源状态监控功能。
- 默认开启 OpenSearch Exporter，支持对接 Prometheus，提供基于 Exporter 方式的服务状态监控功能。
- 新增`索引压力`、`索引压力百分比`服务监控指标，丰富服务监控与告警信息。
- 新增 IK 分词插件，支持结巴分词的词库、自定义词典。
- 新增 Cerebro 配置参数，支持 Cerebro 第三方可视化管理工具。
- 集群节点新增 `企业型 e3`云服务器类型。

### 1.1.0 - v1.0.0

OpenSearch 1.1.0 - v1.0.0 基于原生 OpenSearch 1.1.0 内核版本构建。集成 opensearch_exporter 组件。

- 提供 OpenSearch 热温冷（Hot-Warm-Cold）架构，以及支持高可用专有主节点。
- 支持多租户管理、高级安全管理、跨集群复制、集群管理、节点管理等功能。
- 支持自动水平和横向扩容。
- 支持高可用性能，包括滚动重启节点、高可用 IP 管理等。
