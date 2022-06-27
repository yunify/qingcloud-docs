---
title: "LeaveRouter"
description: 将一个或多个受管私有网络从一台 VPC 网络上断开。
keyword: VPC,  VPC 网络
weight: 11
draft: false
---

将一个或多个受管私有网络从一台 VPC 网络上断开。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| vxnets.n | String | 需要从 VPC 网络上断开的受管私有网络ID | Yes |
| router | String | 受管私有网络需要断开的 VPC 网络ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

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
https://api.qingcloud.com/iaas/?action=LeaveRouter
&vxnets.1=vxnet-rzg2llb
&router=rtr-9iy0lt3s
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "router_id":"rtr-9iy0lt3s",
  "vxnets":[
    "vxnet-rzg2llb"
  ],
  "job_id":"j-qqcivo9d",
  "ret_code":0,
  "action":"LeaveRouterResponse",
}
```
