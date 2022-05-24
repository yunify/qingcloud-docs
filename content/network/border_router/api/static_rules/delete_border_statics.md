---
title: "DeleteBorderStatics"
description: 
draft: false
keyword: 边界路由器,静态路由,删除
weight: 15
---

删除静态路由。


## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| border | String | 边界路由器 ID | Yes |
| border_statics | List | 需要删除的静态路由规则 ID | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| border_statics | List | 删除静态路由的 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DeleteBorderStatics
&border=irt-2zevtm67
&border_statics.0=bdrs-22obzsfu
&zone=pek3
&COMMON_PARAMS
```

**返回示例：**

```
{
    "action":"DeleteBorderStaticsResponse",
    "border_statics":["bdrs-22obzsfu"],
    "ret_code":0
}
```
