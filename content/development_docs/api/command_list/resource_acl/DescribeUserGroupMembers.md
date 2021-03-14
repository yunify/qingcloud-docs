---
title: "DescribeUserGroupMembers"
description: 
draft: false
---



查询用户组成员信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| user_groups.n | String | 用户组ID | No |
| users.n | String | 用户ID | No |
| status.n | String | 状态过滤。 | No |
| search_word | String | 搜索关键词, 支持云服务器ID, 云服务器名称 | No |
| limit | Integer | 每次最多返回多少条数据。 | No |
| offset | Integer | 数据偏移量, 默认为0 | No |
| verbose | Integer | 是否返回冗长的信息, 若为1, 则返回云服务器相关其他资源的详细数据。 | No |
| sort_key | String | 排序字段，默认为 create_time | No |
| reverse | Integer | 0 为增序排列；1 为降序排列 | No |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeUserGroupMembers
&search_word=deleted
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeUserGroupMembersResponse",
  "item_set":[],
  "user_group_member_set":[
    {
      "status":"disabled",
      "user_id":"usr-iKf0yJEZ",
      "create_time":"2016-01-23T00:05:42",
      "remarks":"to_be_deleted",
      "status_time":"2016-01-25T19:08:31",
      "user_group_id":"ug-6zp387ak"
    }
  ],
  "ret_code":0,
  "total_count":1
}
```
