---
title: "DissociateBorder"
description: 
draft: false
---



解除边界路由器关联的 VPC 路由器。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| router | String | 解除关联的 vpc 路由器 | Yes |
| border | String | 解除的边界路由器 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| router_id | String | VPC路由 ID |
| border_id | String | 边界路由器 ID |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DissociateBorder
&border=irt-2zevtm67
&router=rtr-e5m6sr20
&zone=pek3
&COMMON_PARAMS
```

_Example Response_:

```
{
    "action":"DissociateBorderResponse",
    "router_id":"rtr-e5m6sr20",
    "border_id":"irt-2zevtm67",
    "job_id":"j-082qslqa1k8",
    "ret_code":0
}
```
