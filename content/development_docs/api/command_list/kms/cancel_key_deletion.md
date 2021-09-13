---
title: "CancelKeyDeletion"
description: 
draft: false
weight: 1
---

取消密钥删除计划。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| key_id         | String | 密钥ID      | Yes      |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| ret_code | int  | 返回码      |

**Example**

_Example Request_:

```
https://kms.api.qingcloud.com/?action=CancelKeyDeletion
&key_id=
&COMMON_PARAMS
```

_Example Response_:

```
{
	"ret_code":0
}
```
