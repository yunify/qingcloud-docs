---
title: "跨集群搜索"
description: 本小节主要介绍如何在 Dashboard 上进行跨集群搜索。 
keyword: 跨集群搜索,OpenSearch
weight: 15
collapsible: false
draft: false
---

**跨集群搜索**是通过本地集群向一个或多个远程集群发起搜索请求，可实现对存储在不同数据中心集群的日志数据进行筛选和分析。

**跨集群搜索**工作原理是在本地集群中配置一个或多个远程集群，并且仅连接到远程集群中有限数量的节点。每个远程集群都由一个名称和一个 `seed nodes`（种子节点）的列表引用。 这些 `seed nodes`（种子节点）用于发现远程集群中作为 `gateway nodes`（网关节点）的节点。本地集群中配置远程集群的每个节点都连接到一个或多个 `gateway nodes`（网关节点），并使用它们将搜索请求发送到远程集群。

更多**跨集群搜索**使用方法和说明，请参见 [Search across clusters](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-cross-cluster-search.html/)。

本小节主要介绍在多个集群间如何跨集群搜索。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 OpenSearch 集群，且集群状态为`活跃`。
- 已获取 Dashboard 登录帐号和密码。
- 请确保本地集群与远端集群间网络通畅。若需通过外网访问 Dashboard，请先通过设置[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。

## 步骤1：创建并添加远端集群

1. 登录管理控制台，创建2个远端集群，并获取远端集群 OpenSearch 热节点 IP。

   - 本地集群：opensearch-local
   - 远端集群1：opensearch-r1 172.22.2.47
   - 远端集群2：opensearch-r2 172.22.2.51

2. 登录 Dashboard 可视化管理平台，执行如下语句，在本地集群上添加远端集群。

   > **注意**
   >
   > - 9300 为 OpenSearch 节点之间的传输端口。
   >
   > - 一个 **seeds** 字段下可设置一个或多个节点，设置多个节点可确保搜索的高可用。

   ```bash
   PUT _cluster/settings
   {
      "persistent": {
         "search": {
            "remote": {
               "cluster_one": {
                  "seeds": [
                     "172.22.2.47:9300"
                  ]
               },
               "cluster_two": {
                  "seeds": [
                     "172.22.2.51:9300"
                  ]
               }
            }
         }
      }
   }
   ```

## 步骤2：向远端集群存入文档

执行如下命令，分别在 cluster_one、cluster_two 创建索引并存入文档。

```bash
curl -u 'admin:Change1Pwd' -XPUT "http://172.22.2.47:9200/mydata/_doc/0" -H 'Content-Type: application/json' -d'{  "msg": "你好，世界！"}'
curl -u 'admin:Change1Pwd' -XPUT "http://172.22.2.51:9200/mydata/_doc/1" -H 'Content-Type: application/json' -d'{  "msg": "Hello, world!"}'
```

## 步骤3：查询远端索引

登录本地集群的 Dashboard 管理平台，执行以下语句查询远端索引。

```bash
GET /cluster_one:mydata/_search
GET /cluster_two:mydata/_search
GET /cluster_one:mydata,cluster_two:mydata/_search
```

示例回显结果如下：

```powershell
"max_score" : 1.0,
"hit" : [
   {
      "_index" :"cluster_one:mydata",
      "_type" : "_doc",
      "_id" : "0",
      "_score" : 1.0,
      "_source" :{
         "msg" : "你好，世界！"
      }
   },
      {
      "_index" :"cluster_two:mydata",
      "_type" : "_doc",
      "_id" : "1",
      "_score" : 1.0,
      "_source" :{
         "msg" : "Hello, world!"
      }
   },
]
```
