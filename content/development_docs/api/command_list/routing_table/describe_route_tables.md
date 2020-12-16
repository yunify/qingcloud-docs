---
title: "DescribeRouteTables"
description: 
draft: false
---



获取一个或者多个路由表的配置信息

**Request Parameters**

| Parameter Name | Type | Description | Required |
| --- | --- | --- | --- |
| action | String | 请求动作，可选值：DescribeRouteTables | Yes |
| routing_tables.n | String | 一个或者多个路由表的ID | No |
| routing_table_types.n | String | 一个或者多个路由表的类型 | No |
| rtable_rtype | Integer | 路由表对应的资源类型，可选值：1,2 <br> 1 - 负载均衡器 <br> 2 - 私有网络 | No |
| verbose | Integer | 是否返回冗长的信息，如果为1，则返回路由表相关的详细信息 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| routing_table_set | Array | 获取到的路由表信息列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |
| total_count | Integer | 获取到的路由表信息列表的长度 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeRouteTables
&verbose=1
&routing_tables.1=rt-h5nqxml7
&COMMON_PARAMS
```
_Example Response_

```
{
	"action": "DescribeRouteTablesResponse",
	"total_count": 1,
	"routing_table_set": [{
		"is_applied": 1,
		"rtable_rtype": 1,
		"rtable_name": "Test",
		"root_user_id": "usr-yEH1LMRI",
		"create_time": "2020-05-26T13:52:20Z",
		"rtable_type": 0,
		"owner": "usr-yEH1LMRI",
		"status_time": "2020-05-26T13:52:20Z",
		"routing_table_rule_set": [],
		"rtable_id": "rt-h5nqxml7"
	}],
	"ret_code": 0
}
```
