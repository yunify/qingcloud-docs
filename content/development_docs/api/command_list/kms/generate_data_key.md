---
title: "GenerateDataKey"
description: 
draft: false
weight: 45
---

使用CMK生成数据密钥。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| encryption_context | string | 加密上下文  | No       |
| key_id             | string | 密钥ID      | Yes      |
| key_length         | int    | 密钥长度    | No       |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| ret_code    | int    | 返回码      |
| key_id      | string | 密钥ID      |
| cipher_text | string | 密钥密文    |
| plain_text  | string | 密钥明文    |

**Example**

_Example Request_:

```
https://kms.api.qingcloud.com/?action=GenerateDataKey
&COMMON_PARAMS
&key_id=
```

_Example Response_:

```
{
	"ret_code": 0,
	"key_id":"cmk-12345678",
	"cipher_text":"Y21rLTdjSnNvVHRVDQIAAJPuGSl+tyJcDqFkHVlEGdyydP0znXJtjRh9OFKOt4d9njg0IwWHl6hm44KI9d",
	"plain_text":"hsECxYUqHUtNOn0WDP+8cw==",
}
```
