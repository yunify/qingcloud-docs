---
title: "DeleteGroupRoleRules"
description: 
draft: false
---



删除角色里的某些规则。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| group_role_rules.n | String | 规则ID | No |
| group_roles.n | String | 角色ID | No |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeleteGroupRoleRules
&group_role_rules.1=grr-613v0o2p
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteGroupRoleRulesResponse",
  "group_role_rule_ids":[
    "grr-613v0o2p"
  ],
  "ret_code":0
}
```
