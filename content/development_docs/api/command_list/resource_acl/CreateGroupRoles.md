---
title: "CreateGroupRoles"
description: 
draft: false
---



创建角色

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| role_type | String | 角色类型。当前仅支持 “rule” | Yes |
| group_role_name | String | 角色名称。 | No |
| description | String | 角色描述 | No |
| count | Integer | 一次创建的角色数量。 | No |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateGroupRoles
&group_role_name=T1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateGroupRolesResponse",
  "group_role_ids":[
    "gr-rlj5c72r"
  ],
  "ret_code":0
}
```
