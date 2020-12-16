---
title: "CreateRouteTable"
description: 
draft: false
---



创建一个路由表

**Request Parameters**

| Parameter Name | Type | Description | Required |
| --- | --- | --- | --- |
| action | String | 请求动作，可选值：CreateRouteTable | Yes |
| routing_table_name | String | 路由表名称 | No |
| routing_table_type | Integer | 路由表类型，可选值：0 | Yes|
| rtable_rtype | Integer | 路由表对应的资源类型，可选值：1,2 <br> 1 - 负载均衡器 <br> 2 - 私有网络 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| routing_table | String | 新创建的路由表的ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateRouteTable
&routing_table_name=Test
&routing_table_type=0
&rtable_rtype=1
&COMMON_PARAMS
```
_Example Response_

```
{
	"action": "CreateRouteTableResponse",
	"routing_table": "rt-h5nqxml7",
	"ret_code": 0
}
```
