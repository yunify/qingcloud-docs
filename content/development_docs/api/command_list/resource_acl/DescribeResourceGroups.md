---
title: "DescribeResourceGroups"
description: 
draft: false
---



查询资源组信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource_groups.n | String | 查询特定的资源组 | No |
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
https://api.qingcloud.com/iaas/?action=DescribeResourceGroups
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeResourceGroupsResponse",
  "total_count":2,
  "resource_group_set":[
    {
      "resource_group_id":"rg-66yplkbo",
      "create_time":"2016-01-21T05:42:17Z",
      "description":"",
      "resource_group_name":"R2"
    },
    {
      "resource_group_id":"rg-c7hmvt8u",
      "create_time":"2016-01-21T05:42:13Z",
      "description":"",
      "resource_group_name":"R1"
    }
  ],
  "ret_code":0
}
```
