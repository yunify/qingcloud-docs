---
title: "DetachNics"
description: 
draft: false
---



将一块或多块以挂载(in-use)状态的网卡从某台主机中卸载。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| nics.n | String | 网卡 ID | Yes |
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
https://api.qingcloud.com/iaas/?action=DetachNics
&nics.1="52:54:00:00:12:34"
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DetachNicsResponse",
  "job_id":"j-bm6ym3r8",
  "ret_code":0
}
```
