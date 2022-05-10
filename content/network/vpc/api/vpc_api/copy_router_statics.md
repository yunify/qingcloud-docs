---
title: "CopyRouterStatics"
description: 把源 VPC 网络的路由规则复制给目的 VPC 网络。
keyword: VPC,  VPC 网络, 路由规则
weight: 23
draft: false
---

把源 VPC 网络的路由规则复制给目的 VPC 网络。

如果源 VPC 网络和目的 VPC 网络都属于网络 2.0，且自身的网络地址不同，那么复制 IPsec 隧道规则时， 会修改规则里的目标网络地址，以适配目的 VPC 网络。

## 请求参数

| 参数   | 参数类型   | 描述          | 是否必选 |
| ---------------- | ------ | -------------------- | -------- |
| source_router_id | String | 源 VPC 网络 ID       | Yes      |
| dest_router_id   | String | 目的 VPC  网络 ID    | Yes      |
| dest_zone        | String | 目的区域 ID          | Yes      |
| router-statics   | Array  | VPC 网络规则 ID 列表 | No       |
| static-type      | Array  | VPC 网络规则类型列表 | No       |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=CopyRouterStatics
&source_router=rtr-srcsrc11
&dest_router=rtr-destdest
&dest_zone=dest
```

**返回示例：**

```
{
  "action":"CopyRouterStaticsResponse",
  "ret_code":0
}
```
