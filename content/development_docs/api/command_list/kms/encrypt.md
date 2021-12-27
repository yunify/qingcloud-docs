---
title: "Encrypt"
description: 
draft: false
weight: 40
---

使用CMK KeyId 对明文加密。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| encryption_context | string | 验证数据    | No       |
| key_id             | string | 密钥ID      | Yes      |
| plain_text         | string | 加密明文    | Yes      |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| ret_code    | int    | 返回码      |
| message     | string | 响应消息    |
| cipher_text | string | 加密密文    |
| key_id      | string | 密钥ID      |

**Example**

_Example Request_:

```
https://kms.api.qingcloud.com/?action=Encrypt
&COMMON_PARAMS
&key_id=
&plain_text=
```

_Example Response_:

```
{
	"ret_code":0,
	"key_id":"cmk-12345678",
	"cipher_text":"Y21rLXV2T1NTSTNsKwIAAOsMx12UkxSWgLzDbzYBBXbMPra60GEIVMF9eEdlA88rGuHYNWN9KQ0heDe8KL"
}
```
