---
title: "ModifyGroupRoleRuleAttributes"
description: 
draft: false
---



修改角色规则属性。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| group_role_rule | String | 规则ID | Yes |
| description | String | 描述 | No |
| policy | String | 策略，参考 AddGroupRoleRules 里的描述。 | No |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ModifyGroupRoleRuleAttributes
&group_role_rule=grr-613v0o2p
&policy=all.describe
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyGroupRoleRuleAttributesResponse",
  "policy":"all.describe",
  "group_role_rule_id":"grr-613v0o2p",
  "ret_code":0
}
```
