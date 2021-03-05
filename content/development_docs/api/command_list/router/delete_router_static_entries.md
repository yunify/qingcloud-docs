---
title: "DeleteRouterStaticEntries"
description: 
draft: false
---



删除一条或多条路由器规则条目。在删除路由器规则条目之后，你需要执行 [_UpdateRouters_](../update_routers/) 来使规则删除生效。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| router_static_entries.n | String | 路由器规则条目ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |
| router_static_entries | Array | 删掉的路由器规则条目ID列表 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DeleteRouterStaticEntries
&router_static_entries.1=rse-wls7otet
&router_static_entries.2=rse-b3epyxu5
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

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
