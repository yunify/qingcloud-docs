---
title: "LeaveBorder"
description: 
draft: false
---



VXNET 离开边界路由器。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| border | String | 需要离开的边界路由器 ID | Yes |
| vxnets | List | 离开边界路由器的 vxnet | Yes |
| force | Integer | 是否强制离开边界路由器 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| border_id | String | 边界路由器的 ID |
| vxnet_id | List | vxnet的 ID |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=LeaveBorder
&border=irt-2zevtm67
&vxnets.0=vxnet-gonkgpv
&zone=pek3
&COMMON_PARAMS
```

_Example Response_:

```
{
    "action":"LeaveBorderResponse",
    "border_id":"irt-2zevtm67",
    "vxnets":["vxnet-gonkgpv"],
    "job_id":"j-dwe9ji4ja03",
    "ret_code":0
}
```
