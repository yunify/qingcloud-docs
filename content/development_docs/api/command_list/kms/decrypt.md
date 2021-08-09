---
title: "Decrypt"
description: 
draft: false
weight: 15
---

使用CMK对密文解密。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cipher_text        | string | 解密密文    | Yes      |
| encryption_context | string | 加密上下文  | No       |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| ret_code | int  | 返回码      |
| key_id | string | 密钥ID |
| plain_text | string | 解密明文    |

**Example**

_Example Request_:

```
https://kms.api.qingcloud.com/?action=Decrypt
&COMMON_PARAMS
```

_Example Response_:

```
{
	"ret_code":0,
	"key_id":"cmk-uNLW5l3D",
	"plain_text":"itgyid2319fdOXrJjFtwf41996gPio/1Ht9p6REa4FU="
}
```
