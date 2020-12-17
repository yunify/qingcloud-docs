---
title: "AddUserGroupMembers"
description: 
draft: false
---



添加用户组成员。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| user_group | String | 用户组ID | Yes |
| users.n | String | 用户ID，或者是用户登录邮箱。 | Yes |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=AddUserGroupMembers
&user_group=ug-6zp387ak
&users.1=usr-iKf0yJEZ
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AddUserGroupMembersResponse",
  "user_group_id":"ug-6zp387ak",
  "user_ids":[
    "usr-iKf0yJEZ"
4 ],
  "ret_code":0
}
```
