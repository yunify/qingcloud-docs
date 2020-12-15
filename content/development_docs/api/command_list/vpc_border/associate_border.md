---
title: "AssociateBorder"
description: 
draft: false
---



VPC 路由器关联边界路由器。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| router | String | 关联的VPC路由 ID | Yes |
| border | String | 关联的边界路由器 ID | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| router_id | String | VPC路由 ID |
| border_id | String | 边界路由器 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=AssociateBorder
&border=irt-2zevtm67
&router=rtr-e5m6sr20
&zone=pek3
&COMMON_PARAMS
```

_Example Response_:

```
{
    "action":"AssociateBorderResponse",
    "router_id":"rtr-e5m6sr20",
    "border_id":"irt-2zevtm67",
    "job_id":"j-0mug739f6ez",
    "ret_code":0
}
```