---
title: "DescribeResourceUserGroups"
description: 
draft: false
---



查询资源组、用户组等的授权关系。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource_groups.n | String | 资源组ID | No |
| user_groups.n | String | 用户组ID | No |
| group_roles.n | String | 角色ID | No |
| limit | Integer | 每次最多返回多少条数据。 | No |
| offset | Integer | 数据偏移量, 默认为0 | No |
| verbose | Integer | 是否返回冗长的信息, 若为1, 则返回云服务器相关其他资源的详细数据。 | No |
| sort_key | String | 排序字段，默认为 create_time | No |
| reverse | Integer | 0 为增序排列；1 为降序排列 | No |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeResourceUserGroups
&user_groups.1=ug-6g3js86a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeResourceUserGroupsResponse",
  "resource_user_group_set":[
    {
      "resource_group_id":"rg-0cwabe8z",
      "group_role_id":"gr-wd0m6fkx",
      "console_id":"admin",
      "root_user_id":"usr-lEoYNN7y",
      "create_time":"2016-02-21T22:45:31",
      "owner":"usr-lEoYNN7y",
      "user_group_id":"ug-6g3js86a"
    }
  ],
  "ret_code":0,
  "total_count":1
}
```
