---
title: "DescribeGroupRoleRules"
description: 
draft: false
---



查询角色的规则。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| group_role_rules.n | String | 规则ID | No |
| group_roles.n | String | 角色ID | No |
| status.n | String | 状态过滤，可以为 “enabled” 或 “disabled” | No |
| limit | Integer | 每次最多返回多少条数据。 | No |
| offset | Integer | 数据偏移量, 默认为0 | No |
| verbose | Integer | 是否返回冗长的信息, 若为1, 则返回云服务器相关其他资源的详细数据。 | No |
| sort_key | String | 排序字段，默认为 create_time | No |
| reverse | Integer | 0 为增序排列；1 为降序排列 | No |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeGroupRoleRules
&group_roles.1=gr-tirat7zw
&status.1=enabled
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeGroupRoleRulesResponse",
  "item_set":[],
  "group_role_rule_set":[
    {
      "status":"enabled",
      "description":"",
      "group_role_id":"gr-tirat7zw",
      "create_time":"2016-01-21T13:50:16",
      "principle":"StopInstances",
      "policy":"all.describe",
      "status_time":"2016-01-23T00:02:40",
      "group_role_rule_id":"grr-613v0o2p"
    }
  ],
  "ret_code":0,
  "total_count":1
}
```
