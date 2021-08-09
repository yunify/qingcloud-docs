---
title: "ListKeys"
description: 
draft: false
weight: 70
---

查询所有CMK。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| offset         | int    | 数据偏移量, 默认为0                                        | No       |
| limit          | int    | 返回数据长度，默认为10                                     | No       |
| status         | string | 密钥状态，Enabled，Disabled，PendingDeletion，Deleted, All | No       |
| sort_key       | string | 默认按创建时间排序                                         | No       |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| ret_code    | int       | 返回码       |
| total_count | int       | 返回密钥数量 |
| user_id     | string    | 密钥用户ID   |
| create_time | TimeStamp | 密钥创建日期 |
| description | string    | 密钥描述     |
| name        | string    | 密钥名称     |
| key_id      | string    | 密钥ID       |
| key_usage   | string    | 密钥用途     |
| key_spec    | string    | 密钥算法     |
| valid_to    | TimeStamp | 密钥到期时间 |
| status      | string    | 密钥状态     |

**Example**

_Example Request_:

```
https://kms.api.qingcloud.com/action=ListKeys
&COMMON_PARAMS
```

_Example Response_:

```
{
"keys":[
{
"status":"Disabled",
"user_id":"usr-BeDG1iHC",
"description":"",
"valid_to":"2022-07-23T17:14:10+08:00",
"key_spec":"SYMMETRIC_DEFAULT",
"create_time":"2021-07-23T17:14:10.02149+08:00",
"key_usage":"ENCRYPT_DECRYPT",
"key_id":"cmk-59zzXgwJ",
"name":""
},
{
"status":"Enabled",
"user_id":"usr-BeDG1iHC",
"description":"",
"valid_to":"2022-07-23T16:33:46+08:00",
"key_spec":"SYMMETRIC_DEFAULT",
"create_time":"2021-07-23T16:33:46.82891+08:00",
"key_usage":"ENCRYPT_DECRYPT",
"key_id":"cmk-03kUT9Am",
"name":"test"
}
],
"total_count":2,
"ret_code":0
}
```
