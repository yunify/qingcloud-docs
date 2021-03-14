---
title: "DescribeGroupRoles"
description: 
draft: false
---



查询角色。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| group_roles.n | String | 查询特定的角色 | No |
| status.n | String | 过滤角色的状态 | No |
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
https://api.qingcloud.com/iaas/?action=DescribeGroupRoles
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeGroupRolesResponse",
  "total_count":2,
  "group_role_set":[
    {
      "status":"enabled",
      "description":"",
      "group_role_id":"gr-170kkfim",
      "create_time":"2016-01-21T09:32:15Z",
      "group_role_name":"",
      "status_time":"2016-01-21T09:32:15Z",
      "role_type":"rule"
    },
    {
      "status":"enabled",
      "description":"",
      "group_role_id":"gr-tirat7zw",
      "create_time":"2016-01-21T05:49:35Z",
      "group_role_name":"R1",
      "status_time":"2016-01-22T15:36:04Z",
      "role_type":"rule"
    }
  ],
  "ret_code":0
}
```
