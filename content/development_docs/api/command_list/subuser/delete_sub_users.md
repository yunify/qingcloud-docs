---
title: "DeleteSubUsers"
description: 
draft: false
---



删除子帐户。

注意这里并非完全删除数据，只是禁用了此子账号，还可以通过 [_RestoreSubUsers_](../restore_sub_users/) 恢复。

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
https://api.qingcloud.com/iaas/?action=DeleteSubUsers
&users.1=usr-abcd1234
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteSubUsersResponse",
  "ret_code":0,
  "users":[
    "usr-abcd1234"
  ]
}
```
