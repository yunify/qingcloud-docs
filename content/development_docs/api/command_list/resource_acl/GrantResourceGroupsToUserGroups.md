---
title: "GrantResourceGroupsToUserGroups"
description: 
draft: false
---



将资源组授权给用户组。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| rur_set.n.resource_group | String | 资源组ID | Yes |
| rur_set.n.user_group | String | 用户组ID | Yes |
| rur_set.n.group_role | String | 角色ID | Yes |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=GrantResourceGroupsToUserGroups
&rur_set.1.resource_group=rg-c7hmvt8u
&rur_set.1.user_group=ug-tvj8mhxc
&rur_set.1.group_role=gr-tirat7zw
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"GrantResourceGroupsToUserGroupsResponse",
  "rur_set":[
    {
      "group_role":"gr-tirat7zw",
      "resource_group":"rg-c7hmvt8u",
      "user_group":"ug-tvj8mhxc"
    }
  ],
  "ret_code":0
}
```
