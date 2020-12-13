---
title: "DeleteClusterNodes"
description: 
draft: false
---



删除集群的一个或多个节点，前提是集群支持增加节点的操作，可以通过　查看应用是否支持。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cluster | String | 集群的ID | Yes |
| nodes.n | String | 将要删除的集群节点的ID | Yes |
| force | Integer | 是否强制删除，1表示强制删除，0表示否，默认为0 | No |

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| cluster_id | String | 集群ID |
| deleted_node_ids | Array | 删除的集群节点ID |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

以应用[ZooKeeper](https://appcenter.qingcloud.com/apps/app-tg3lbp0a/ZooKeeper%20on%20QingCloud)为例

_Example Request_:

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

_Example Response_:

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


