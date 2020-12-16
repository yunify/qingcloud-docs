---
title: "DeleteRouteTables"
description: 
draft: false
---



删除一个或者多个路由表

**Request Parameters**

| Parameter Name | Type | Description | Required |
| --- | --- | --- | --- |
| action | String | 请求动作，可选值：DeleteRouteTables | Yes |
| routing_tables.n | String | 一个或者多个路由表的ID | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| routing_tables | Array | 已刪除的路由表的ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

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
