---
title: "CancelBorderStaticChanges"
description: 
draft: false
---



撤销静态路由的修改。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| border_statics | List | 边界路由器的静态路由规则 ID | No |
| border | String | 关联的边界路由器 ID | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| border_statics | List | 静态路由的 ID 列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CancelBorderStaticChanges
&border=irt-2zevtm67
&zone=pek3
&COMMON_PARAMS
```

_Example Response_:

```
{
    "action":"CancelBorderStaticChangesResponse",
    "border_statics":["bdrs-c8zo9kra"],
    "ret_code":0
}
```
