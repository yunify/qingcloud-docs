---
title: "DeleteResourceGroups"
description: 
draft: false
---



删除资源组。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource_groups.n | String | 资源组ID | Yes |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeleteResourceGroups
&resource_groups.1=rg-5ukijwcx
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteResourceGroups",
  "resource_groups":[
    "rg-5ukijwcx"
  ]
}
```
