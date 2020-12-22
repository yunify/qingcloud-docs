---
title: "RestartClusterService"
description: 
draft: false
---



重启集群服务，前提是应用定义了`restart_service`。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cluster | String | 将要重启服务的集群ID | Yes |
| role | String | 重启的集群角色 | No |

[_公共参数_](../../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| cluster_id | String | 集群ID |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

以应用[QingCloud MySQL Plus](https://appcenter.qingcloud.com/apps/app-00r26u27/QingCloud%20MySQL%20Plus)为例

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=RestartClusterService
&cluster=cl-95av0jxo
&zone=pek3b
&COMMON_PARAMS
```

_Example Response_:

```json
{
  "action":"RestartClusterServiceResponse",
  "cluster_id":"cl-95av0jxo",
  "job_id":"j-itxd749281a",
  "ret_code":0
}
```


