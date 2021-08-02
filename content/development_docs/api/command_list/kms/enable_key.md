---
title: "EnableKey"
description: 
draft: false
weight: 35
---

启用密钥。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| key_id         | String | 密钥ID      | Yes      |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| ret_code | int  | 返回码      |
| message  | string | 响应消息    |

**Example**

_Example Request_:

```
https://kms.api.qingcloud.com/?action=EnableKey
&key_id=
&COMMON_PARAMS
```

_Example Response_:

```
{"message":"","ret_code":0}
```
