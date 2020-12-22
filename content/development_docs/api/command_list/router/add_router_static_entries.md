---
title: "AddRouterStaticEntries"
description: 
draft: false
---



增加一条路由器规则条目，比如 OpenVPN / PPTP 的账户信息或是隧道规则的网络地址。 注意：在增加路由器规则条目后，你需要执行 [_UpdateRouters_](../update_routers/) 才能使之生效。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| router_static | String | 需要增加条目的路由器规则ID | Yes |
| entries.n.val1 | String | 第n条规则的 val1 值，会根据规则类型的不同，代表不同含义：<br/>*   OpenVPN / PPTP 账户信息：val1 表示账户名<br/>*   三层 GRE 隧道：val1 表示目标网络<br/>*   三层 IPsec 隧道：val1 表示本地网络 (val2 可为空) | Yes |
| entries.n.val2 | String | 第n条规则的 val2 值，会根据规则类型的不同，代表不同含义：<br/>*   OpenVPN / PPTP 账户信息：val2 表示密码<br/>*   三层 IPsec 隧道：val2 表示目标网络 (val1 可为空) | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| router_static_entries | Array | 新增加的路由器规则条目ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=AddRouterStaticEntries
&router_static=rtrs-hcnwdfwc
&entries.1.val1=admin
&entries.1.val2=passwOrd
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AddRouterStaticEntriesResponse",
  "ret_code":0,
  "router_static_entries":[
    "rse-hkzqquga"
  ]
}
```
