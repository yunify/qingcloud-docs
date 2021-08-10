---
title: "DeleteAlias"
description: 
draft: false
weight: 20
---

删除CMK的别名。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| AliasName | String | 密钥别名 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| ret_code | int  | 返回码      |

**Example**

_Example Request_:

```
https://kms.api.qingcloud.com/?action=DeleteAlias
&COMMON_PARAMS
&AliasName=
```

_Example Response_:

```
{
	"ret_code":0
}
```
