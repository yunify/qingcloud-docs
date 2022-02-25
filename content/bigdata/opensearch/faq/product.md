---
title: "原生 OpenSearch"
description: 本小节主要介绍原生 OpenSearch 常见问题。 
keyword: 常见问题,OpenSearch,搜索引擎,大数据
weight: 10
collapsible: false
draft: false
---

## 什么是 OpenSearch？

OpenSearch 是一个完全开源的搜索和分析套件。

OpenSearch 包括 OpenSearch（源自 Elasticsearch 7.10.2）和 OpenSearch Dashboards（源自 Kibana 7.10.2）。OpenSearch ，随 Open Distro for Elasticsearch 分发的插件和高级功能发展。Open Distro for Elasticsearch 即将以 1.13 结版。

## OpenSearch 源于何处？

Elastic 停止为 Elasticsearch 和 Kibana 提供开源选项，在 Elastic 许可下发布，源代码在 Elastic 许可或 SSPL 下可用。

因此，OpenSearch 团队决定从 Elasticsearch 和 Kibana 的最新 Apache 2.0 版本创建一个分支，并在 Apache 许可，版本 2.0 (ALv2) 下提供 OpenSearch。

## OpenSearch 适合生产使用吗？

随着 OpenSearch 1.1.0 的全面发布，OpenSearch 于 2021 年 7 月开放到市场，即可投入生产使用。

## OpenSearch 与 Elasticsearch 兼容吗？

兼容。OpenSearch 是开源 Elasticsearch 7.10 的一个分支。

OpenSearch 提供了用于摄取、搜索和管理的向后 REST API。查询语法和响应也相同。此外，OpenSearch 可以使用 Elasticsearch 版本 6.0 到 7.10 的索引。目前使用 Elasticsearch 7.10 支持使用现有 Elasticsearch 客户端。

> **注意**
> 
> 虽然 OpenSearch API 向后兼容，但某些客户端或工具可能包含代码（例如版本检查），这可能会导致客户端或工具无法与 OpenSearch 一起使用。

## Logstash 和 Beats 等 Elasticsearch 客户端可以使用 OpenSearch 吗？

由于 OpenSearch 与 Elasticsearch 7.10 在线兼容。因此，当前使用 Elasticsearch 7.10 的任何客户端也应该使用 OpenSearch。

有关开源 Logstash 和 Beats 兼容性的详细信息，请参阅 [OpenSearch 官方文档](https://opensearch.org/docs/clients/agents-and-ingestion-tools/index/#compatibility-matrices)。
