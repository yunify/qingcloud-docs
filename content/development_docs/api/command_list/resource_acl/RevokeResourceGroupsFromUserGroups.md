---
title: "RevokeResourceGroupsFromUserGroups"
description: 
draft: false
---



取消资源组对用户组的授权。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| ru_set.n.resource_group | String | 资源组ID | Yes |
| ru_set.n.user_group | String | 用户组ID | Yes |
| resource_groups.n | String | 资源组ID。如果传参，会将该资源组的所有授权关系取消。 | No |
| user_groups.n | String | 用户组ID。如果传参，会将该用户组的所有授权关系取消。 | No |
| group_roles.n | String | 角色ID。如果传参，会将该角色的所有授权关系取消。 | No |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=RevokeResourceGroupsFromUserGroups
&ru_set.1.resource_group=rg-c7hmvt8u
&ru_set.1.user_group=ug-tvj8mhxc
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"RevokeResourceGroupsFromUserGroupsResponse",
  "ru_set":[
    {
      "resource_group":"rg-c7hmvt8u",
      "user_group":"ug-tvj8mhxc"
    }
  ],
  "ret_code":0
}
```
