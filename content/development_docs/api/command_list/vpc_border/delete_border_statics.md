---
title: "DeleteBorderStatics"
description: 
draft: false
---



删除静态路由。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| border | String | 边界路由器 ID | Yes |
| border_statics | List | 需要删除的静态路由规则 ID | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| border_statics | List | 删除静态路由的 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeleteBorderStatics
&border=irt-2zevtm67
&border_statics.0=bdrs-22obzsfu
&zone=pek3
&COMMON_PARAMS
```

_Example Response_:

```
{
    "action":"DeleteBorderStaticsResponse",
    "border_statics":["bdrs-22obzsfu"],
    "ret_code":0
}
```
