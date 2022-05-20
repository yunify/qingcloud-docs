---
title: "DissociateRouteTable"
description: 将路由表和资源解绑。
keyword: VPC, 路由表
weight: 6
draft: false
---

将路由表和资源解绑。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| action | String | 请求动作，可选值：DissociateRouteTable | Yes |
| resource | String | 资源ID, 可以是负载均衡器ID，也可以是私有网络ID | Yes |
| routing_table | String | 路由表ID | Yes |

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
https://api.qingcloud.com/iaas/?action=DissociateRouteTable
&routing_table=rt-h5nqxml7
&resource=lb-wkkqhohe
&COMMON_PARAMS
```
_Example Response_

```
{
	"action": "DissociateRouteTableResponse",
	"job_id": "j-m5k3vmeouyn",
	"ret_code": 0
}
```
