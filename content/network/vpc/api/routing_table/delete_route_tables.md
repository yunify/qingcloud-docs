---
title: "DeleteRouteTables"
description: 删除一个或者多个路由表。
keyword: VPC, 路由表
weight: 15
draft: false
---

删除一个或者多个路由表。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| action | String | 请求动作，可选值：DeleteRouteTables | Yes |
| routing_tables.n | String | 一个或者多个路由表的ID | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| routing_tables | Array | 已刪除的路由表的ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DeleteRouteTables
&routing_tables.1=rt-h5nqxml7
&COMMON_PARAMS
```

_Example Response_

```
{
	"action": "DeleteRouteTablesResponse",
	"routing_tables": ["rt-h5nqxml7"],
	"ret_code": 0
}
```
