---
title: "AssociateBorder"
description: 
draft: false
keyword: 边界路由器,关联 VPC
weight: 12
---

VPC 网络关联边界路由器。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| router | String | 关联的 VPC  ID | Yes |
| border | String | 关联的边界路由器 ID | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| router_id | String | VPC路由 ID |
| border_id | String | 边界路由器 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=AssociateBorder
&border=irt-2zevtm67
&router=rtr-e5m6sr20
&zone=pek3
&COMMON_PARAMS
```

**返回示例：**

```
{
    "action":"AssociateBorderResponse",
    "router_id":"rtr-e5m6sr20",
    "border_id":"irt-2zevtm67",
    "job_id":"j-0mug739f6ez",
    "ret_code":0
}
```