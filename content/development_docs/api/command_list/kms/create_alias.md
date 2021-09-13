---
title: "CreateAlias"
description: 
draft: false
weight: 5
---

创建CMK的别名。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| key_id         | String | 密钥ID      | Yes      |
| alias_name | String | 密钥别名 | Yes |
| description | String | 别名描述 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| ret_code | int  | 返回码      |
| key_id | string | 密钥ID |
| description | string | 描述 |
| alias_name | string | 密钥别名 |
| name | string | 密钥名称 |

**Example**

_Example Request_:

```
https://kms.api.qingcloud.com/?action=CreateAlias
&alias_name=
&key_id=
&COMMON_PARAMS
```

_Example Response_:

```
{
"key_id":"cmk-NCF91CL0",
"alias_name":"alias/test01",
"description":"",
"name":"",
"ret_code":0
}
```
