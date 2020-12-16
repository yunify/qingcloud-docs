---
title: "ModifyEipAttributes"
description: 
draft: false
---



修改一个公网IP的名称和描述。

修改时不受公网IP状态限制。

一次只能修改一个公网IP。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| eip | String | 公网IP的ID | Yes |
| eip_name | String | 公网IP名称 | No |
| description | String | 公网IP描述 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ModifyEipAttributes
&eip=eip-rtyv0968
&eip_name=jenkins
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyEipAttributesResponse",
  "ret_code":0
}
```
