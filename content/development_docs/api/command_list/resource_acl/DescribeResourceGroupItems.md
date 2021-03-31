---
title: "DescribeResourceGroupItems"
description: 
draft: false
---



查询资源组里面的资源。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| zone | String | zone ID | Yes |
| resource_groups.n | String | 资源组ID | No |
| resources.n | String | 资源ID，用于查询该资源所在的所有资源组 | No |
| limit | Integer | 每次最多返回多少条数据。 | No |
| offset | Integer | 数据偏移量, 默认为0 | No |
| verbose | Integer | 是否返回冗长的信息, 若为1, 则返回云服务器相关其他资源的详细数据。 | No |
| sort_key | String | 排序字段，默认为 create_time | No |
| reverse | Integer | 0 为增序排列；1 为降序排列 | No |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeResourceGroupItems
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeResourceGroupItemsResponse",
  "item_set":[],
  "ret_code":0,
  "resource_group_item_set":[
    {
      "resource_group_id":"rg-c7hmvt8u",
      "create_time":"2016-01-21T13:45:43",
      "resource_type":"instance",
      "resource_id":"i-i8wewg3l"
    }
  ],
  "total_count":1
}
```
