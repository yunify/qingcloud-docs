---
title: "DescribeKey"
description: 
draft: false
weight: 25
---

显示指定CMK的详细信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| key_id         | String | 密钥ID      | Yes      |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| ret_code | int  | 返回码      |
| user_id     | string    | 密钥用户ID   |
| create_time | TimeStamp | 密钥创建日期 |
| description | string    | 密钥描述     |
| name | string | 密钥名称 |
| key_id | string | 密钥ID |
| key_usage | string | 密钥用途 |
| key_spec | string | 密钥算法 |
| valid_to | TimeStamp | 密钥到期时间 |
| status | string | 密钥状态 |

**Example**

_Example Request_:

```
https://kms.api.qingcloud.com/?action=DescribeKey
&COMMON_PARAMS
&key_id=
```

_Example Response_:

```
{
"key_metadata":
{
"status":"Enabled",
"user_id":"usr-BeDG1iHC",
"description":"test01",
"valid_to":"2022-07-26T14:23:15+08:00",
"key_spec":"SYMMETRIC_DEFAULT",
"create_time":"2021-07-26T14:23:15.72495+08:00",
"key_usage":"ENCRYPT_DECRYPT",
"key_id":"cmk-NCF91CL0",
"name":"test-cmk"
},
"ret_code":0
}
```
