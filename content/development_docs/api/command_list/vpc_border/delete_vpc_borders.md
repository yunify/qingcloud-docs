---
title: "DeleteVpcBorders"
description: 
draft: false
---



删除边界路由器。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| vpc_borders | List | 需要删除的边界路由器 ID | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeleteVpcBorders
&vpc_borders.0=irt-2zevtm67
&zone=pek3
&COMMON_PARAMS
```

_Example Response_:

```
{
    "action":"DeleteVpcBordersResponse",
    "job_id":"j-jn656bklpsy",
    "ret_code":0
}
```
