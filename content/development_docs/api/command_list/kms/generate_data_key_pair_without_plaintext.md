---
title: "GenerateDataKeyPairWithoutPlaintext"
description: 
draft: false
weight: 55
---

使用CMK生成数据密钥，不返回明文密钥。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| encryption_context | string | 加密上下文                                                   | No       |
| key_id             | string | 密钥名称                                                     | Yes      |
| key_pair_spec      | string | 密钥算法，默认SYMMETRIC_DEFAULT。可选SYMMETRIC_DEFAULT`, `RSA_2048`, `RSA_3072`, `RSA_4096`, `ECC_P256`, `ECC_P384`, `ECC_P521 | Yes      |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| ret_code | int  | 返回码      |

**Example**

_Example Request_:

```
https://kms.api.qingcloud.com/?action=GenerateDataKeyPairWithoutPlaintext
&COMMON_PARAMS
&key_id=
```

_Example Response_:

```
{
	"ret_code":0
}
```
