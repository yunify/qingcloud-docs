---
title: "ModifyRouterStaticEntryAttributes"
description: 
draft: false
---



修改路由器规则中的某条条目属性。修改后，需要执行 [_UpdateRouters_](../update_routers/) 来使规则生效。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| router_static_entry | String | 需要修改的路由器规则条目 ID | Yes |
| router_static_entry_name | String | 规则条目名称 | No |
| val1 | String | 规则条目的 val1 值，会根据规则类型的不同，代表不同含义：<br/>*   PPTP 账户信息：val1 表示账户名<br/>*   三层 GRE 隧道：val1 表示目标网络<br/>*   三层 IPsec 隧道：val1 表示本地网络 | No |
| val2 | String | 规则条目的 val2 值，会根据规则类型的不同，代表不同含义：<br/>*   PPTP 账户信息：val2 表示密码<br/>*   三层 IPsec 隧道：val2 表示目标网络 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| router_static_entry | String | 修改的路由器规则条目ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ModifyRouterStaticEntryAttributes
&router_static_entry=rse-c173g36a
&router_static_entry_name=new_name,
&val1=192.168.100.0/24
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyRouterStaticEntryAttributesResponse",
  "router_static_entry_id":"rse-c173g36a",
  "ret_code":0
}
```
