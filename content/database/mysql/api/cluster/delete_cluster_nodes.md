---
title: "DeleteClusterNodes"
description: 本小节主要介绍 MySQL Plus 删除节点接口。 
keywords: mysql plus 删除节点
weight: 102
collapsible: false
draft: false
---


删除集群的一个或多个节点，前提是集群支持增加节点的操作，可以查看应用是否支持。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| cluster | String | 集群的 ID。 | Yes |
| nodes.n | String | 将要删除的集群节点的 ID。 | Yes |
| force | Integer | 是否强制删除。<li>取值 `1` 表示强制删除；<li>取值 `0`表示否，默认为 `0`。 | No |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| action | String | 响应动作。 |
| cluster_id | String | 集群 ID。 |
| deleted_node_ids | Array | 删除的集群节点 ID。 |
| job_id | String | 执行任务的 Job ID。 |
| ret_code | Integer | 执行成功与否。<li>取值 `0` 表示成功，其他值则为错误代码。 |

## 示例 

### 请求示例

```
https://api.qingcloud.com/iaas/?
action=DeleteClusterNodes
&cluster=cl-q1witcdk
&force=0
&nodes.1=cln-2x5w6l81
&nodes.2=cln-yrlus78f
&zone=pek3b
&COMMON_PARAMS
```

### 响应示例

```
{
  "action":"DeleteClusterNodesResponse",
  "deleted_node_ids":[
    "cln-2x5w6l81",
    "cln-yrlus78f"
  ],
  "cluster_id":"cl-q1witcdk",
  "job_id":"j-qgn3a6cegfe",
  "ret_code":0
}
```
