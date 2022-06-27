---
title: "UpdateRouteTable"
description: 使路由表的修改生效。
keyword: VPC, 路由表
weight: 10
draft: false
---

使路由表的修改生效。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| action | String | 请求动作，可选值：UpdateRouteTable | Yes |
| routing_table | String | 路由表的ID | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

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
