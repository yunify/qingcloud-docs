---
title: "DescribeRoutes"
description: 
draft: false
---



获取一个或者多个路由表的配置信息

**Request Parameters**

| Parameter Name | Type | Description | Required |
| --- | --- | --- | --- |
| action | String | 请求动作，可选值：DescribeRoutes | Yes |
| nexthop | String | 路由表规则的下一跳，可以是路由器ID，也可以是IP地址，取决于nexthop_type | No |
| nexthop_type | String | 路由表规则的下一跳类型, 可选值：2,3,4 <br> 2 - 路由器，nexthop取值应该是路由器的ID <br> 3 - IP地址，nexthop取值应该是IP地址 <br> 4 - NAT网关的ID | No |
| routing_table_rules.n | String | 一个或者多个路由表规则的ID | No |
| routing_table | String | 路由表ID | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| routing_table_rule_set | Array | 获取到的路由表规则信息列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |
| total_count | Integer | 获取到的路由表信息列表的长度 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeRoutes
&routing_table=rt-w7xy0bq0
&COMMON_PARAMS
```
_Example Response_

```
{
	"action": "DescribeRoutesResponse",
	"total_count": 1,
	"routing_table_rule_set": [{
		"rtable_rule_id": "r-qdkyht01",
		"network": "172.31.2.0/24",
		"nexthop": "172.30.0.5",
		"disabled": 0,
		"root_user_id": "usr-yEH1LMRI",
		"create_time": "2020-05-27T03:02:01Z",
		"rtable_rule_name": "test1",
		"owner": "usr-yEH1LMRI",
		"status_time": "2020-05-27T03:18:02Z",
		"nexthop_type": 3,
		"rtable_id": "rt-w7xy0bq0"
	}],
	"ret_code": 0
}
```
