---
title: "DeleteRouterStatics"
description: 删除一条或多条 VPC 网络规则。
keyword: VPC, VPC 网络规则
weight: 30
draft: false
---

删除一条或多条 VPC 网络规则。在删除 VPC 网络规则之后，你需要执行 [_UpdateRouters_](../update_routers/) 来使规则删除生效。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| router_statics.n | String |  VPC 网络规则ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |
| router_statics | Array | 删掉的 VPC 网络规则ID列表 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DeleteRouterStatics
&router_statics.1=rtrs-wls7otet
&router_statics.2=rtrs-j1tsul7v
&router_statics.3=rtrs-b3epyxu5
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"DeleteRouterStaticsResponse",
  "ret_code":0,
  "router_statics":[
    "rtrs-wls7otet",
    "rtrs-j1tsul7v",
    "rtrs-b3epyxu5"
  ]
}
```
