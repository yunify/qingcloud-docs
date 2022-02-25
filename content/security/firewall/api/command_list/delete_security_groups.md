---
title: "DeleteSecurityGroups"
description: 
draft: false
---



删除一个或多个防火墙。

防火墙须在没有资源（云服务器或路由器）使用的情况下才能被删除。 已加载规则到资源的防火墙，需先将相关资源从防火墙移出后才能被删除。

*   要删除的防火墙已加载规则到云服务器，则需要先调用 [_ApplySecurityGroup_](../apply_security_group/) 将其他防火墙的规则应用到对应云服务器，之后才能被删除。
*   要删除的防火墙已加载规则到路由器，则需要先调用 [_ModifyRouterAttributes_](../../router/modify_router_attributes/) 并 [_UpdateRouters_](../../router/update_routers/) 将其他防火墙的规则应用到对应路由器，之后才能被删除。

青云系统提供的缺省防火墙不能被删除。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| security_groups.n | String | 防火墙 ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| security_groups | Array | 成功删除的防火墙ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DeleteSecurityGroups
&security_groups.1=sg-inijevna
&security_groups.2=sg-o3msxqpp
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteSecurityGroupsResponse",
  "security_groups":[
    "sg-inijevna",
    "sg-o3msxqpp"
  ],
  "ret_code":0
}
```
