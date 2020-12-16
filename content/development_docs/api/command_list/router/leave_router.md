---
title: "LeaveRouter"
description: 
draft: false
---



将一个或多个受管私有网络从一台路由器上断开。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| vxnets.n | String | 需要从路由器上断开的受管私有网络ID | Yes |
| router | String | 受管私有网络需要断开的路由器ID | Yes |
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
https://api.qingcloud.com/iaas/?action=LeaveRouter
&vxnets.1=vxnet-rzg2llb
&router=rtr-9iy0lt3s
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "router_id":"rtr-9iy0lt3s",
  "vxnets":[
    "vxnet-rzg2llb"
  ],
  "job_id":"j-qqcivo9d",
  "ret_code":0,
  "action":"LeaveRouterResponse",
}
```
