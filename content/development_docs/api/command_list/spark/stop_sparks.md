---
title: "StopSparks"
description: 
draft: false
---



关闭一台或多台 Spark 服务。该操作将关闭 Spark 服务的所有 Spark 节点。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| sparks.n | String | Spark服务ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=StopSparks
&sparks.1=sk-mndwkqew
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"StopSparksResponse",
  "job_id":"j-1234abcd",
  "ret_code":0
}
```
