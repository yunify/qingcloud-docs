---
title: "AddRoutes"
description: 
draft: false
---



创建一条路由表规则

**Request Parameters**

| Parameter Name | Type | Description | Required |
| --- | --- | --- | --- |
| action | String | 请求动作，可选值：AddRoutes | Yes |
| routing_table | String | 路由表ID | Yes |
| rules.n.routing_table_rule_name | String | 路由表规则的名称 |Yes |
| rules.n.network | String | 路由表规则目标网段 | Yes |
| rules.n.nexthop | String | 路由表规则的下一跳，可以是路由器ID，也可以是IP地址，取决于nexthop_type | Yes |
| rules.n.nexthop_type | String | 路由表规则的下一跳类型, 可选值：2,3,4 <br> 2 - 路由器，nexthop取值应该是路由器的ID <br> 3 - IP地址，nexthop取值应该是IP地址 <br> 4 - NAT网关的ID | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| routing_table_rules | Array | 新创建的路由表规则的ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=AddRoutes
&routing_table=rt-w7xy0bq0
&rules.1.routing_table_name=test1
&rules.1.network=172.31.0.2
&rules.1.nexthop=rtr-s9l10zeb
&COMMON_PARAMS
```

_Example Response_

```
{
	"action": "AddRoutesResponse",
	"routing_table_rules": ["r-tfzvmsqr"],
	"ret_code": 0
}
```
