---
title: "UpdateRouteTable"
description: 
draft: false
---



使路由表的修改生效

**Request Parameters**

| Parameter Name | Type | Description | Required |
| --- | --- | --- | --- |
| action | String | 请求动作，可选值：UpdateRouteTable | Yes |
| routing_table | String | 路由表的ID | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=UpdateRouteTable
&routing_table=rt-w7xy0bq0
&COMMON_PARAMS
```
_Example Response_

```
{
	"action": "UpdateRouteTableResponse",
	"job_id": "j-gomp6gndyf6",
	"ret_code": 0
}
```
