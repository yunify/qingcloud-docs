---
title: "ApplyRDBParameterGroup"
description: 
draft: false
---



应用数据库配置。

警告

应用操作会导致数据库服务重启。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| rdb | String | 数据库 ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ApplyRDBParameterGroup
&rdb=rdb-uccrvnve
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ApplyRDBParameterGroupResponse",
  "ret_code":0,
  "job_id":"j-s86v7ien",
  "rdb":"rdb-uccrvnve"
}
```
