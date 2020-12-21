---
title: "ResizeCluster"
description: 
draft: false
---



纵向扩容集群，即改变集群节点的配置。前提是应用支持扩容，可以通过　查看应用节点的配置。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cluster | String | 集群ID | Yes |
| memory | Integer | 节点将要增加或减小到的内存，单位MB | No |
| cpu | Integer | 节点将要增加或减小到的cpu数量 | No |
| gpu | Integer | 节点将要增加或减小到的gpu数量 | No |
| storage | Integer | 节点将要增加到的存储大小，单位GB | No |
| node_role | String | 节点的角色，如应用未配置节点角色，可留空 | No |

[_公共参数_](../../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| memory | Integer | 扩容后的节点内存，单位MB |
| cpu | Integer | 扩容后的节点cpu数量 |
| gpu | Integer | 扩容后的节点gpu数量 |
| storage | Integer | 扩容后的节点存储大小，单位GB|
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

以应用[ZooKeeper](https://appcenter.qingcloud.com/apps/app-tg3lbp0a/ZooKeeper%20on%20QingCloud)为例

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ResizeCluster
&cluster=cl-q1witcdk
&cpu=2
&memory=4096
&storage_size=20
&zone=pek3b
&COMMON_PARAMS
```

_Example Response_:

```json
{
  "job_id":"j-7l8mrrvlvxa",
  "ret_code":0,
  "storage_size":20,
  "cluster_id":"cl-q1witcdk",
  "memory":4096,
  "action":"ResizeClusterResponse",
  "gpu":0,
  "cpu":2
}
```


