---
title: "ModifyRouteTableAttributes"
description: 修改一个路由表的配置。
keyword: VPC, 路由表
weight: 3
draft: false
---

修改一个路由表的配置。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| action | String | 请求动作，可选值：ModifyRouteTableAttributes | Yes |
| routing_table | String | 路由表的ID | Yes |
| routing_table_name | String | 路由表的名称 | No |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| routing_table | String | 修改的路由表的ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=ModifyRouteTableAtrributes
&routing_table=rt-w7xy0bq0
&routing_table.name=Test1
&COMMON_PARAMS
```
_Example Response_

```
{
	"action": "ModifyRouteTableAttributesResponse",
	"routing_table": "rt-w7xy0bq0",
	"ret_code": 0
}
```



