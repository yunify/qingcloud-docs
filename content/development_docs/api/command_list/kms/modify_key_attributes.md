---
title: "ModifyKeyAttributes"
description: 
draft: false
weight: 75
---

修改密钥的信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| key_id         | string | 密钥ID      | Yes      |
| name           | string | 密钥名称    | No       |
| description    | string | 密钥描述    | No       |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| message  | string | 响应消息    |
| ret_code | int    |             |
|          |        |             |

**Example**

_Example Request_:

```
https://kms.api.qingcloud.com/?action=ModifyKeyAttributes
&key_id=
&COMMON_PARAMS
```

_Example Response_:

```
{
"message":"",
"ret_code":0
}
```
