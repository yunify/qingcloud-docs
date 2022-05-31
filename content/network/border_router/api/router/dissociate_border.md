---
title: "DissociateBorder"
description: 
draft: false
keyword: 边界路由器,接绑vpc
weight: 15
---

解除边界路由器关联的 VPC 网络。


## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| router | String | 需要解除关联的 VPC 网络 | Yes |
| border | String | 解除的边界路由器 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| router_id | String | VPC 网络 ID |
| border_id | String | 边界路由器 ID |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DissociateBorder
&border=irt-2zevtm67
&router=rtr-e5m6sr20
&zone=pek3
&COMMON_PARAMS
```

**返回示例：**

```
{
    "action":"DissociateBorderResponse",
    "router_id":"rtr-e5m6sr20",
    "border_id":"irt-2zevtm67",
    "job_id":"j-082qslqa1k8",
    "ret_code":0
}
```
