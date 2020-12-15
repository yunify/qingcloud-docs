---
title: "DeleteUserGroups"
description: 
draft: false
---



删除用户组。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| user_groups.n | String | 要删除的用户组ID。 | Yes |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeletUserGroups
&user_groups.1=ug-c7f9gmc6
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteUserGroupsResponse",
  "user_group_ids":[
    "ug-c7f9gmc6"
  ],
  "ret_code":0
}
```
