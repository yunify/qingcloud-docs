---
title: "ModifyGroupRoleAttributes"
description: 
draft: false
---



修改角色属性。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| group_role | String | 角色ID | Yes |
| role_type | String | 角色类型，当前仅支持 “rule” | No |
| group_role_name | String | 角色名称 | No |
| description | String | 角色描述 | No |
| status | String | 角色状态，可以为 “disabled” 或 “enabled” | No |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ModifyGroupRoleAttributes
&group_role=gr-170kkfim
&description=X1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyGroupRoleAttributesResponse",
  "group_role_id":"gr-170kkfim",
  "description":"X1",
  "ret_code":0
}
```
