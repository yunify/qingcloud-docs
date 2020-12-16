---
title: "RemoveRoutes"
description: 
draft: false
---



删除一条或者多条路由表规则

**Request Parameters**

| Parameter Name | Type | Description | Required |
| --- | --- | --- | --- |
| action | String | 请求动作，可选值：RemoveRoutes | Yes |
| routing_table_rules.n | String | 一个或者多个路由表规则的ID | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| routing_table_rules | Array | 已刪除的路由表规则的ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

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
