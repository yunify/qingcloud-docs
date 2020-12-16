---
title: "ConfigBorder"
description: 
draft: false
---



配置边界路由器。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| operation | String | 操作：ConfigRoute | Yes |
| border | String | 需要配置的边界路由器 | Yes |
| data | String | 配置的数据 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| border_id | String | 边界路由器 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ConfigBorder
&border=irt-2zevtm67
&operation=ConfigRoute
&zone=pek3
&COMMON_PARAMS
```

_Example Response_:

```
{
    "action":"ConfigBorderResponse",
    "border_id":"irt-2zevtm67",
    "job_id":"j-9xmfzgnfpoy",
    "ret_code":0
}
```
