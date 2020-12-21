---
title: "RecoverClusters"
description: 
draft: false
---



从回收站恢复集群

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| clusters.n | String | 待恢复的集群ID | Yes |
| zone | String | 区域ID，注意id需要小写 | Yes |

[_公共参数_](../../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| node_ids | Array | 集群的节点ID |
| app_id | String | 应用ID |
| app_version | String | 应用的版本ID |
| node_count | Integer | 集群节点的数量 |
| cluster_name | String | 集群的名称 |
| cluster_id | String | 集群ID |
| vxnet_id | String | 集群所在的网络ID |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

以应用[ZooKeeper](https://appcenter.qingcloud.com/apps/app-tg3lbp0a/ZooKeeper%20on%20QingCloud)为例

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=RecoverClusters
&clusters.1=cl-q1witcdk
&zone=pek3b
&COMMON_PARAMS
```

_Example Response_:

```
{
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
}
```


