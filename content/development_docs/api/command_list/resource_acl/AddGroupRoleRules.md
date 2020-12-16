---
title: "AddGroupRoleRules"
description: 
draft: false
---



增加某个角色的规则。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| group_role | String | 角色ID | Yes |
| policy | String | 策略，格式为 resource_type.`operation_type`。resource_type 可以为 “all” 或者是具体的资源类型；operation_type 可以为 “create” / “delete” / “describe” / “modify” / “all”. | Yes |
| description | String | 规则描述 | No |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=AddGroupRoleRules
&group_role=gr-tirat7zw
&policy=all.describe
&COMMON_PARAMS
```

_Example Response_:

```
{
  "status":"enabled",
  "description":"",
  "ret_code":0,
  "group_role_id":"gr-tirat7zw",
  "console_id":"admin",
  "action":"AddGroupRoleRulesResponse",
  "root_user_id":"usr-rJsqzEFC",
  "create_time":"2016-01-25T18:00:16",
  "principle":"",
  "policy":"all.describe",
  "owner":"usr-rJsqzEFC",
  "status_time":"2016-01-25T18:00:16",
  "group_role_rule_id":"grr-3uvi3h6i"
}
```
