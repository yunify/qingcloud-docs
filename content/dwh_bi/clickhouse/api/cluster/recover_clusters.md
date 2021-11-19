---
title: "RecoverClusters"
description: 本小节主要介绍 ClickHouse 从回收站恢复集群的接口。 
keywords: ClickHouse 从回收站恢复集群，从回收站恢复集群
weight: 22
collapsible: false
draft: false
---



从回收站恢复集群。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| clusters.n | String | 待恢复的集群 ID。 | Yes |
| zone | String | 区域 ID 名称。注意 区域 ID 需要小写。 | Yes |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| action | String | 响应动作。 |
| node_ids | Array | 集群的节点 ID。 |
| app_id | String | 应用 ID。 |
| app_version | String | 应用的版本 ID。 |
| node_count | Integer | 集群节点的数量。 |
| cluster_name | String | 集群的名称。 |
| cluster_id | String | 集群 ID。 |
| vxnet_id | String | 集群所在的网络 ID。 |
| job_id | String | 执行任务的 Job ID。 |
| ret_code | Integer | 执行成功与否。0 表示成功，其他值则为错误代码。 |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=RecoverClusters
&clusters.1=cl-q1witcdk
&zone=pek3b
&COMMON_PARAMS
```

### 响应示例

```json
“{
  "vxnet_id":"vxnet-iuy3lnd",
  "ret_code":0,
  "node_ids":[
    "cln-hk5zf06w"
  ],
  "app_id":"app-tg3lbp0a",
  "cluster_name":"ZooKeeper",
  "cluster_id":"cl-kwy18xe7",
  "action":"CreateClusterResponse",
  "node_count":1,
  "app_version":"appv-70gegwmp",
  "job_id":"j-lvilrk89641"
}”
```
