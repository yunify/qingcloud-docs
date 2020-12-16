---
title: "DeleteGroupRoles"
description: 
draft: false
---



删除角色。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| group_roles.n | String | 角色ID | Yes |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeleteGroupRoles
&group_roles.1=gr-rlj5c72r
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteGroupRolesResponse",
  "group_role_ids":[
    "gr-rlj5c72r"
  ],
  "ret_code":0
}
```
