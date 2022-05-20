---
title: "CancelBorderStaticChanges"
description: 
draft: false
keyword: 边界路由器,撤销修改
weight: 10
---

撤销静态路由的修改。


## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| border_statics | List | 边界路由器的静态路由规则 ID | No |
| border | String | 关联的边界路由器 ID | No |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| border_statics | List | 静态路由的 ID 列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=CancelBorderStaticChanges
&border=irt-2zevtm67
&zone=pek3
&COMMON_PARAMS
```

**返回示例：**

```
{
    "action":"CancelBorderStaticChangesResponse",
    "border_statics":["bdrs-c8zo9kra"],
    "ret_code":0
}
```
