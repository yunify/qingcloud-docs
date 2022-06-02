---
title: "DeleteRouterStaticEntries"
description: 删除一条或多条 VPC 网络规则条目。
keyword: VPC,  VPC 网络, 路由规则
weight: 31
draft: false
---



删除一条或多条 VPC 网络规则条目。在删除 VPC 网络规则条目之后，你需要执行 [_UpdateRouters_](../update_routers/) 来使规则删除生效。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| router_static_entries.n | String |  VPC 网络规则条目ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |
| router_static_entries | Array | 删掉的 VPC 网络规则条目ID列表 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DeleteRouterStaticEntries
&router_static_entries.1=rse-wls7otet
&router_static_entries.2=rse-b3epyxu5
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"DeleteRouterStaticEntriesResponse",
  "ret_code":0,
  "router_static_entries":[
    "rse-wls7otet",
    "rse-b3epyxu5"
  ]
}
```
