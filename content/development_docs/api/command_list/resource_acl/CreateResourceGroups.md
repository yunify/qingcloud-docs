---
title: "CreateResourceGroups"
description: 
draft: false
---



创建资源组。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource_group_name | String | 资源组的名称 | No |
| description | String | 资源组的描述 | No |
| count | Integer | 一次创建资源组的数量 | No |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateResourceGroups
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateResourceGroupsResponse",
  "resource_group_ids":[
    "rg-5ukijwcx"
  ],
  "ret_code":0
}
```
