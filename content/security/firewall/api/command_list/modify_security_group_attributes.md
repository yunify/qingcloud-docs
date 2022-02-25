---
title: "ModifySecurityGroupAttributes"
description: 
draft: false
---



修改防火墙的名称和描述。

一次只能修改一个防火墙。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| security_group | String | 防火墙 ID | Yes |
| security_group_name | String | 防火墙名称 | No |
| description | String | 防火墙描述 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| security_group_id | String | 防火墙 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ModifySecurityGroupAttributes
&security_group=sg-rtyv0968
&security_group_name=sample
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifySecurityGroupAttributesResponse",
  "security_group_id":"sg-rtyv0968",
  "ret_code":0
}
```
