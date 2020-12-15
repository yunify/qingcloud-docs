---
title: "DeleteSecurityGroupIPSets"
description: 
draft: false
---



删除一个或多个防火墙IP/端口集合。

IP/端口集合须在没有资源（防火墙）使用的情况下才能被删除。 已加载到资源的IP/端口集合，需先将相关资源从防火墙移出后才能被删除。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| security_group_ipsets.n | String | ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| security_group_ipsets | Array | 成功删除的ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DeleteSecurityGroupIPSets
&security_group_ipsets.1=sgi-inijevna
&security_group_ipsets.2=sgi-o3msxqpp
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteSecurityGroupIPSetsResponse",
  "security_group_ipsets":[
    "sgi-inijevna",
    "sgi-o3msxqpp"
  ],
  "ret_code":0
}
```
