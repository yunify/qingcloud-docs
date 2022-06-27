---
title: "索引管理基本用法"
description: 本小节主要介绍如何使用 OpenSearch。 
keyword: 索引管理,可视化工具, OpenSearch
weight: 10
collapsible: false
draft: false
---



本小节主要介绍如何使用 OpenSearch 进行索引管理和数据查询。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 OpenSearch 集群，且集群状态为`活跃`。
- 若需通过外网访问 OpenSearch 集群，请先通过设置[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。

## 快速管理索引

- 创建索引

   ```bash
   curl -XPUT --insecure -u 'admin:Change1Pwd' 'https://<os_hot_node_ip>:9200/my-first-index'
   ```

- 添加数据并验证，以及删除数据

   ```bash
   curl -XPUT --insecure -u 'admin:Change1Pwd' 'https://<os_hot_node_ip>:9200/my-first-index/_doc/1' -H 'Content-Type: application/json' -d '{"Description": "To be or not to be, that is the question."}'
   curl -XGET --insecure -u 'admin:Change1Pwd' 'https://<os_hot_node_ip>:9200/my-first-index/_doc/1'
   curl -XDELETE --insecure -u 'admin:Change1Pwd' 'https://<os_hot_node_ip>:9200/my-first-index/_doc/1'
   ```

- 删除索引

   ```bash
   curl -XDELETE --insecure -u 'admin:Change1Pwd' 'https://<os_hot_node_ip>:9200/my-first-index/'
   ```

## 通过 Dashboards 管理

Dashboard 语法（[DQL](https://opensearch.org/docs/1.2/dashboards/dql/)）类似于 [Query DSL](https://opensearch.org/docs/1.2/opensearch/query-dsl/index) 允许使用 HTTP 请求主体搜索数据，您可以使用 DQL 进行可视化数据搜索。

更多 Dashboard 使用和功能介绍，请参见 [OpenSearch Dashboards](https://opensearch.org/docs/latest/dashboards/index/)。
