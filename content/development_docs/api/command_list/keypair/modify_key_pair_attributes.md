---
title: "ModifyKeyPairAttributes"
description: 
draft: false
---



修改密钥对的名称和描述。

一次只能修改一个密钥对。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| keypair | String | 密钥 ID | Yes |
| keypair_name | String | 密钥名称 | No |
| description | String | 密钥描述 | No |
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
https://api.qingcloud.com/iaas/?action=ModifyKeyPairAttributes
&keypair=kp-rtyv0968
&keypair_name=sample
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyKeyPairAttributesResponse",
  "ret_code":0
}
```
