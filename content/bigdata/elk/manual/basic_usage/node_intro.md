---
title: "ELK 节点使用方法"
description: 本小节主要介绍 ELK 节点使用方法。 
keyword: ELK 节点使用方法,ELK
weight: 05
collapsible: false
draft: false
---


## 节点简介

ELK 集群创建成功后，点击集群列表页面相应集群可查看集群详情。可以看到集群分为 Elasticsearch 节点（热、温、冷共三组）、Elasticsearch 专有主节点、Kibana 节点和 Logstash 节点等角色。

- Elasticsearch 节点  
  Elasticsearch 节点可提供远程扩展字典及热更新。  
  Elasticsearch 节点（热、温、冷共三组）管理所有数据。  
  Elasticsearch 专有主节点管理集群状态，生产环境建议配置三个 ES 专有主节点保证 ES 集群的高可用。  
- Logstash 节点  
  Logstash 节点提供数据收集及实时数据转换处理的能力。  
  Logstash 节点提供用户自定义插件能力。  
- Kibana 节点  
  Kibana 节点提供 Kibana 以及 Cerebro 等 Elasticsearch 可视化管理工具，并且绑定了 VIP 保证 Elasticsearch 服务的高可用。

![elk-arch](../../../_images/elk-arch.png)

## 使用方法

ELK 提供的是 HTTP RESTful 接口，可以使用很多兼容的工具进行交互。  
为了方便理解，以下示例使用 [Kibana Console 语法](https://www.elastic.co/guide/en/kibana/current/console-kibana.html#console-api) 和 `curl` 语法来演示与 ELK 的交互。

- Kibana Console 语法  
  通过 Kibana 的 Dev Tools 直接执行。

  ```sql
  GET _search
  {
  "query": {
   "match_all": {}
  }
  }
  ```

- curl 语法

  ```bash
  curl -XGET "http://<ES_IP>:9200/_search" -d'
  {
  "query": {
   "match_all": {}
  }
  }
  ```

| 变量名 | 说明                  | 示例 | 
| :------------ | :---------- | :--------------------- |
|  ES_IP      | Elasticsearch 节点 IP |192.168.2.2  |
|  LS_IP      | Logstash 节点 IP      |192.168.2.7  |
|  KB_IP      | Kibana 节点 IP        |192.168.2.9  |

在运行下面涉及到的脚本前，需要先在 Shell 中设置相应节点的 IP。

```shell
ES_IP=192.168.2.2
LS_IP=192.168.2.7
KB_IP=192.168.2.9
```
