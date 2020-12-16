---
title: "ModifyUserGroupMemberAttributes"
description: 
draft: false
---



修改用户组成员属性。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| user_group | String | 用户组ID | Yes |
| user | String | 用户ID | Yes |
| remarks | String | 备注 | No |
| status | String | 状态 | No |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ModifyUserGroupMemberAttributes
&user_group=ug-6zp387ak
&user=usr-iKf0yJEZ
&status=disabled
&remarks=to_be_deleted
&COMMON_PARAMS
```

_Example Response_:

```
{
  "status":"disabled",
  "user_id":"usr-iKf0yJEZ",
  "ret_code":0,
  "action":"ModifyUserGroupMemberAttributesResponse",
  "remarks":"to_be_deleted",
  "status_time":"2016-01-25T19:08:31",
  "user_group_id":"ug-6zp387ak"
}
```
