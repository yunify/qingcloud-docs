---
title: "JoinBorder"
description: 
draft: false
---



VXNET 加入边界路由器。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| border | String | 需要加入的边界路由器 ID | Yes |
| vxnets | List | 加入边界路由器的 vxnet ID | Yes |
| border_private_ips | List of dictionary | 加入边界路由器 vxnet IP | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| border_id | String | 边界路由器的 ID |
| vxnet_id | String | vxnet的 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=JoinBorder
&border=irt-2zevtm67
&vxnets.1=vxnet-gonkgpv
&border_private_ips.0.vxnet_id=vxnet-gonkgpv
&border_private_ips.0.border_private_ip=192.168.0.254
&zone=pek3
&COMMON_PARAMS
```

_Example Response_:

```
{
    "action":"JoinBorderResponse",
    "border_id":"irt-2zevtm67",
    "vxnet_id":"vxnet-gonkgpv",
    "ret_code":0,
    "job_id":"j-8w7gfk8j3m0"
}
```
