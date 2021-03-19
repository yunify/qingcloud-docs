---
title: "AddBorderStatics"
description: 
draft: false
---



添加边界路由器静态路由。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| border | String | 需要添加静态路由的边界路由器的 ID | Yes |
| statics.n.border_static_name | String | 静态路由名称 | Yes |
| statics.n.static_type | Integer | 静态路由类型 | Yes |
| statics.n.type | Integer | 静态路由下一跳的类型， 0 表示下一跳是 VPC 路由器， 1 表示下一跳是云服务器 | Yes |
| statics.n.val1 | String | 静态路由目标网络 | Yes |
| statics.n.val2 | String | 静态路由下一跳 ID，下一跳目前支持关联 vxnet 下的云服务器或者是关联的 VPC 路由器 | Yes |
| statics.n.val3 | Integer | 静态路由是否发布， 0 表示不发布， 1 表示发布 | Yes |
| statics.n.vpc | String | type 为 0 时，静态路由下一跳 VPC 的 ID | No |
| statics.n.instance | String | type 为 1 时，静态路由下一跳云服务器的 ID | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| border_statics | List | 边界路由器静态路由 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=AddBorderStatics
&border=irt-2zevtm67
&statics.0.border_static_name=r0
&statics.0.static_type=0
&statics.0.type=0
&statics.0.val1=3.3.3.3
&statics.0.val2=rtr-e5m6sr20
&statics.0.val3=0
&statics.0.vpc=rtr-e5m6sr20
&zone=pek3
&COMMON_PARAMS
```

_Example Response_:

```
{
    "action":"AddBorderStaticsResponse",
    "border_statics":["bdrs-22obzsfu"],
    "ret_code":0
}
```
