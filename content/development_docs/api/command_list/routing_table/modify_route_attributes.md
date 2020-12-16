---
title: "ModifyRouteAttributes"
description: 
draft: false
---



修改一条路由表规则。

**Request Parameters**

| Parameter Name | Type | Description | Required |
| --- | --- | --- | --- |
| action | String | 请求动作，可选值：ModifyRouteAttributes | Yes |
| disable | Integer | 是否禁用，取值如下 <br> 0 - 启用 <br> 1 - 禁用 | No |
| network | String | 路由表规则目标网段 | No |
| nexthop | String | 路由表规则的下一跳，可以是路由器ID，也可以是IP地址，取决于nexthop_type | No |
| nexthop_type | String | 路由表规则的下一跳类型, 可选值：2,3,4 <br> 2 - 路由器，nexthop取值应该是路由器的ID <br> 3 - IP地址，nexthop取值应该是IP地址 <br> 4 - NAT网关的ID | No |
| route_table_rule_name | String | 路由表规则名称  | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ModifyRouteAttributes
&routing_table_rule=r-qdkyht01
&network=172.31.0.0/24
&nexthop_type=2
&nexthop=rtr-s9l10zeb
&COMMON_PARAMS
```
_Example Response_

```
{
	"action": "ModifyRouteAttributesResponse",
	"ret_code": 0
}
```
