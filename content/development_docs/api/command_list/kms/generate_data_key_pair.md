---
title: "GenerateDataKeyPair"
description: 
draft: false
weight: 50
---

使用CMK生成**数据密钥**，不返回明文密钥。

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
| ret_code           | int    | 返回码      |
| key_id             | string | 密钥ID      |
| private_key_cipher | string | 加密私钥    |
| public_key         | string | 明文公钥    |
| private_key        | string | 明文私钥    |

**Example**

_Example Request_:

```
https://kms.api.qingcloud.com/?action=GenerateDataKeyPair
&COMMON_PARAMS
&key_id=
&key_pair_spec=
```

_Example Response_:

```
{
	"ret_code":0,
	"key_id": "cmk-12345678",
  "private_key_cipher":"Y21rLTdjSnNvVHRVEQIAAHp5fIL/V4J8ICBoFqrRNkyjaKsDyuLBRrw4t7ypJvWAWBFuO2gr8JSYdP1owH",
	"public_key":,"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEcqBuHW1DaepdV0b6SSOBVXKJ7HXxe7ZTxndohMy9vZCzmFJ"
	"private_key": "MHcCAQEEIFYEyGYCa1K85TrJ1NelOWi+8wghovRKSMi"
}
```
