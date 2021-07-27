---
title: "集群组件说明"
description: 本小节主要介绍 ELK 主要集群组件。 
keywords: ELK 集群组件, 
weight: 25
collapsible: false
draft: false
---

ELK 为用户提供了以下组件，用以服务集群其他组件或直接为用户提供服务。

* [ES Head](http://mobz.github.io/elasticsearch-head/) 提供一个 Elasticsearch cluster 的 web 控制台，用户可以在这个控制台里很方便的查看集群拓扑架构、监控集群状态，进行节点和索引级别的各种操作，以及进行数据的浏览、查询、分析等。在浏览器输入网址 `http://<Kibana节点IP>:9100/` 即可使用该插件提供的集群控制台。进入后请输入 `http://<任意Elasticsearch节点IP>:9200/` 后，点击连接即可查看 Elasticsearch 集群状态。

* [elasticsearch-sql](https://github.com/NLPchina/elasticsearch-sql) 使用户可以使用SQL来进行 Elasticsearch 查询，并且可以在 SQL 中使用 Elasticsearch 的函数。在浏览器输入网址 `http://<Kibana节点IP>:8080/` 即可使用该插件提供的查询页面。此插件在 1.2.1 版本加入。

* [Cerebro](https://github.com/lmenezes/cerebro) 的前身是 kopf，她是一个开源的 Elasticsearch Web 管理工具，她提供了查看集群节点资源使用状态、查看集群分片状态、创建索引、修改集群设置、创建仓库及快照等功能，为用户提供了极大的便利。在浏览器输入网址 `http://<Kibana节点IP>:9000/` 即可使用该插件提供的集群控制台。进入后请输入`http://<任意Elasticsearch节点IP>:9200/`后，点击 Connect 即可查看 Elasticsearch 集群状态。此插件在 1.2.1 版本加入。

* [ElasticHD](https://github.com/360EntSecGroup-Skylar/ElasticHD) 是一个 Elasticsearch 可视化管理工具, 支持 ES 监控、实时搜索，Index template 快捷替换修改，索引列表信息查看，SQL converts to DSL 等功能。在浏览器输入网址 `http://<Kibana节点IP>:9800/` 即可使用该插件提供的集群控制台。

* [Elasticsearch-HQ](https://github.com/ElasticHQ/elasticsearch-HQ) 是一个 ES 可视化监控和管理工具，可在浏览器打开 `http://<Kibana 节点 IP>:5000` 使用。

* [Caddy](https://caddyserver.com/) 是一个支持 HTTP/2 的跨平台 Web 服务器，除了日志查看功能，还为 Logstash 节点提供上传分词和停止词词典功能，为 Elasticsearch 节点提供上传同义词词典功能。Caddy运行在集群节点的80端口，用户可通过 `http://[节点IP]/logs/` 查看日志。

* [HAProxy](http://www.haproxy.org/) 是一个高性能的负载均衡软件，部署在 Kibana 节点上，为我们提供 Elasticsearch 的负载均衡和故障转移功能。建议用户通过集群的 VIP （绑定在 Kibana 节点上）访问 Elasticsearch 服务（http://[VIP]:9200/)。

  > **说明**：
  >
  > `ELK 5.5.1 - QingCloud 1.2.8` 及之前版本使用 Nginx 。

* [Keepalived](https://www.keepalived.org) 为 HAProxy 提供故障转移能力，防止 HAProxy 单点失败，确保 http://[VIP]:9200/ 的高可用。

  > **说明**：
  >
  > 如需此功能，需要配置两个 Kibana 节点。此组件从版本 `ELK 5.6.16 - QingCloud 1.5.0` 起开始支持。
