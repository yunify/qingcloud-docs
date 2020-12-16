---
title: "RestoreSubUsers"
description: 
draft: false
---



恢复删除的子帐户。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| users.n | String | 子帐户 ID。 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| users | String | 被删除的子帐户 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=RestoreSubUsers
&users.1=usr-abcd1234
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"RestoreSubUsersResponse",
  "ret_code":0,
  "users":[
    "usr-abcd1234"
  ]
}
```
