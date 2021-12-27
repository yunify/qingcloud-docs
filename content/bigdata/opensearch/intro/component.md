---
title: "集群组件"
description: 本小节主要介绍 OpenSearch 主要集群组件。 
keyword: OpenSearch 集群组件, 
weight: 30
collapsible: false
draft: false
---

OpenSearch 为用户提供了以下组件，用以服务集群其他组件或直接为用户提供服务。

## Caddy 组件

[Caddy](https://caddyserver.com/) 是一个支持 HTTP/2 的跨平台 Web 服务器，除了日志查看功能，还为 Logstash 节点提供上传分词和停止词词典功能，为 OpenSearch 节点提供上传同义词词典功能。

Caddy 运行在集群节点的 80 端口，用户可通过 `http://<节点 IP>/logs/` 查看日志。

## HAProxy 组件

[HAProxy](http://www.haproxy.org/) 是一个高性能的负载均衡软件，部署在 Dashboard 节点上，为我们提供 OpenSearch 的负载均衡和故障转移功能。

**建议**通过集群的高可用 IP（绑定在 Dashboard 节点上）访问 OpenSearch 服务 `http://<VIP>:9200/`。

## Keepalived 组件

[Keepalived](https://www.keepalived.org) 为 HAProxy 提供故障转移能力，防止 HAProxy 单点失败，确保 `http://<VIP>:9200/` 的高可用。
