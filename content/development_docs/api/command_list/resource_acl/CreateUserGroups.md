---
title: "CreateUserGroups"
description: 
draft: false
---



创建用户组。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| user_group_name | String | 用户组名称 | No |
| description | String | 描述 | No |
| count | Integer | 一次创建用户组的数量。默认是 1. | No |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateUserGroups
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateUserGroupsResponse",
  "user_group_ids":[
    "ug-c7f9gmc6"
  ],
  "ret_code":0
}
```
