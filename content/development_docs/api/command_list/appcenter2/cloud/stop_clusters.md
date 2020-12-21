---
title: "StopClusters"
description: 
draft: false
---



关闭处于活跃状态的集群，可以是一个或者多个集群。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| clusters.n | String | 将要启动的集群ID | Yes |

[_公共参数_](../../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID，格式为`{"cln-ssdfawx":"j-kdlsafda"}` |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

以应用[ZooKeeper](https://appcenter.qingcloud.com/apps/app-tg3lbp0a/ZooKeeper%20on%20QingCloud)为例

_Example Request_:

```
https://api.qingcloud.com/iaas/?&action=StopClusters
&clusters.1=cl-q1witcdk
&zone=pek3b
&COMMON_PARAMS
```

_Example Response_:

```json
{
  "action":"StopClustersResponse",
  "job_ids":{
    "cl-q1witcdk":"j-m430f0i8ldu"
  },
  "ret_code":0
}
```


