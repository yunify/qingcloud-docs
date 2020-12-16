---
title: "ModifySecurityGroupIPSetAttributes"
description: 
draft: false
---



修改防火墙IP/端口集合的名称和描述。

一次只能修改一个。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| security_group_ipset | String | ID | Yes |
| security_group_ipset_name | String | 名称 | No |
| description | String | 描述 | No |
| val | String | 值 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| security_group_ipset_id | String | ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ModifySecurityGroupIPSetAttributes
&security_group_ipset=sgi-rtyv0968
&security_group_ipset_name=sample
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifySecurityGroupIPSetAttributesResponse",
  "security_group_ipset_id":"sgi-rtyv0968",
  "ret_code":0
}
```
