---
title: "ModifyBorderStaticAttributes"
description: 
draft: false
---



修改静态路由属性。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| border_static | String | 静态路由 ID | Yes |
| border_static_name | String | 静态路由名称 | No |
| val1 | String | 静态路由目标网络 | No |
| val2 | String | 静态路由下一跳 ID | No |
| val3 | String | 静态路由是否发布 | No |
| disabled | Integer | 是否禁用静态路由 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| border_statics | List | 修改的静态路由 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ModifyBorderStaticAttributes
&disabled=1
&border_static=bdrs-c8zo9kra
&zone=pek3
&COMMON_PARAMS
```

_Example Response_:

```
{
    "action":"ModifyBorderStaticAttributesResponse",
    "border_statics":["bdrs-c8zo9kra"],
    "ret_code":0
}
```
