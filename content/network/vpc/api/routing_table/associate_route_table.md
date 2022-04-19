---
title: "AssociateRouteTable"
description: 将路由表绑定到某个资源。
keyword: VPC, 路由表
weight: 5
draft: false
---

将路由表绑定到某个资源。

## 请求参数

| Parameter Name | Type | Description | Required |
| --- | --- | --- | --- |
| action | String | 请求动作，可选值：AssociateRouteTable | Yes |
| resource | String | 资源ID, 可以是负载均衡器ID，也可以是私有网络ID <br> 资源类型必须和创建路由表时指定的资源的资源，比如创建路由表时绑定的是负载均衡器，那么这里的资源类型也必须是负载均衡器 | Yes |
| routing_table | String | 路由表ID | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=AssociateRouteTable
&routing_table=rt-h5nqxml7
&resource=lb-wkkqhohe
&COMMON_PARAMS
```

_Example Response_

```
{
	"action": "AssociateRouteTableResponse",
	"job_id": "j-ow0t87acb9q",
	"ret_code": 0
}
```
