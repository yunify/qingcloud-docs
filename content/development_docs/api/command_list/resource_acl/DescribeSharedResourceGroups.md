---
title: "DescribeSharedResourceGroups"
description: 
draft: false
---



查询共享给自己的资源组。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource_groups.n | String | 查询特定的资源组 | No |
| owner | String | 查询这个 owner 共享给自己的资源组 | No |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeSharedResourceGroups
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeSharedResourceGroupsResponse",
  "total_count":2,
  "shared_resource_group_set":[
    {
      "resource_group_id":"rg-c7hmvt8u",
      "create_time":"2016-01-21T13:42:13",
      "description":"",
      "resource_group_name":"R1"
    },
    {
      "resource_group_id":"rg-c7hmvt8u",
      "create_time":"2016-01-21T13:42:13",
      "description":"",
      "resource_group_name":"R1"
    }
  ],
  "ret_code":0
}
```
