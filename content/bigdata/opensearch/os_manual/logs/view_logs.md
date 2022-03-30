---
title: "日志管理"
description: 本小节主要介绍 OpenSearch 集群日志查看。
keyword: 搜索分析,OpenSearch 日志查看,OpenSearch,搜索引擎,大数据
weight: 35
collapsible: false
draft: true
---


OpenSearch 节点通过内置 Caddy Server 日志管理工具，支持通过节点 IP 直接访问日志文件，方便定位。

本小节主要介绍如何查看 OpenSearch 节点日志。

可直接通过浏览器访问任意 OpenSearch 节点的 80 端口 http://$ES_IP/logs/ 查看所有 OpenSearch 节点的日志，如下图所示。

![es-logs](../../images/es-logs.png)
