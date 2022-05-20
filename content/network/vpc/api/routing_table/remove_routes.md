---
title: "RemoveRoutes"
description: 删除一条或者多条路由表规则。
keyword: VPC, 路由表
weight:  25
draft: false
---

删除一条或者多条路由表规则。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| action | String | 请求动作，可选值：RemoveRoutes | Yes |
| routing_table_rules.n | String | 一个或者多个路由表规则的ID | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| routing_table_rules | Array | 已刪除的路由表规则的ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=RemoveRoutes
&routing_table_rules.1=r-qdkyht01
&COMMON_PARAMS
```

_Example Response_

```
{
	"action": "RemoveRoutesResponse",
	"routing_table_rules": ["r-qdkyht01"],
	"ret_code": 0
}
```
