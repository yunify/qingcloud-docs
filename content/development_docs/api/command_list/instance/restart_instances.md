---
title: "RestartInstances"
description: 
draft: false
weight: 7
---

重启一台或多台运行状态的云服务器。

云服务器只有在运行 running 状态才能被重启，如果处于非运行状态，则返回错误信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| instances.n | String | 一个或多个云服务器ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=RestartInstances
&instances.1=i-rtyv0968
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"RestartInstancesResponse",
  "job_id":"j-ybnoeitr",
  "ret_code":0
}
```
