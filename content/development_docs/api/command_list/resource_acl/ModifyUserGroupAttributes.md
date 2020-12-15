---
title: "ModifyUserGroupAttributes"
description: 
draft: false
---



修改用户组属性。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| user_group | String | 用户组ID | Yes |
| user_group_name | String | 用户组名称。 | No |
| description | String | 描述 | No |
| status | String | 用户组状态 | No |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ModifyUserGroupAttributes
&user_group=ug-c7f9gmc6
&status=disabled
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyUserGroupAttributesResponse",
  "status":"disabled",
  "user_group_id":"ug-c7f9gmc6",
  "ret_code":0,
  "status_time":"2016-01-25T19:20:17"
}
```
