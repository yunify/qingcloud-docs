---
title: "ListAliases"
description: 
draft: false
weight: 65
---

查询当前用户所有别名。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| key_id         | string | 密钥ID                                                       | Yes      |
| offset         | int    | 数据偏移，默认0                                              | No       |
| limit          | int    | 数据上限，默认10                                             | No       |
| sort_key       | string | 按key排序，默认是按create_time排序，最上方的数据时间距离现在最近 | No       |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| ret_code    | int       | 返回码       |
| total_count | int       | 返回别名数量 |
| alias_name  | string    | 别名名称     |
| key_id      | string    | 别名密钥ID   |
| create_time | timestamp | 密钥创建时间 |

**Example**

_Example Request_:

```
https://kms.api.qingcloud.com/?action=ListAliases
&COMMON_PARAMS
```

_Example Response_:

```
{
"total_count":1,
"aliases":[
{"key_id":"cmk-NCF91CL0",
"create_time":"2021-07-26T15:36:42.682916+08:00",
"alias_name":"alias/test02"}
],
"ret_code":0
}
```
