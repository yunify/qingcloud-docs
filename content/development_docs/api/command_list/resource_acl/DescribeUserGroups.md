---
title: "DescribeUserGroups"
description: 
draft: false
---



查询用户组信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| user_groups.n | String | 用户组ID | No |
| status.n | String | 过滤状态。 | No |
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
https://api.qingcloud.com/iaas/?action=DescribeUserGroups
&user_groups.1=ug-9u38mu0g
&user_groups.2=ug-tvj8mhxc
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeUserGroupsResponse",
  "total_count":2,
  "user_group_set":[
    {
      "status":"enabled",
      "description":"",
      "user_group_name":"",
      "create_time":"2016-01-21T09:31:05Z",
      "status_time":"2016-01-21T09:31:05Z",
      "user_group_id":"ug-9u38mu0g"
    },
    {
      "status":"enabled",
      "description":"",
      "user_group_name":"U2",
      "create_time":"2016-01-21T05:42:48Z",
      "status_time":"2016-01-22T15:35:20Z",
      "user_group_id":"ug-tvj8mhxc"
    }
  ],
  "ret_code":0
}
```
