---
title: "CreateKey"
description: 
draft: false
weight: 10
---

创建CMK，目前仅支持云管CMK，由云平台其他服务创建，加密材料由KMS生成。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| name           | string | 密钥名称                                                     | No       |
| alias_name     | string | 密钥别名                                                     | No       |
| description | String | 别名描述 | No |
| key_usage | string | 密钥用途，默认为ENCRYPT_DECRYPT。可选ENCRYPT_DECRYPT`, `SIGN_VERIFY | No |
| key_spec | string | 密钥算法，默认为SYMMETRIC_DEFAULT。可选SYMMETRIC_DEFAULT`, `RSA_2048`, `RSA_3072`, `RSA_4096`, `ECC_P256`, `ECC_P384`, `ECC_P521 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| ret_code | int  | 返回码      |
| key_id | string | 密钥ID |
| status   | string | 密钥状态，Enabled，Disabled，PendingDeletion，Deleted, All |

**Example**

_Example Request_:

```
https://kms.api.qingcloud.com/kms/?action=CreateKey
&COMMON_PARAMS
```

_Example Response_:

```
{
"status":"Enabled",
"key_id":"cmk-NCF91CL0",
"ret_code":0
}
```
