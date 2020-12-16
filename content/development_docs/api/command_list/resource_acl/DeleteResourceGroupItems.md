---
title: "DeleteResourceGroupItems"
description: 
draft: false
---



将资源从资源组里删除。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| zone | String | zone ID | Yes |
| resource_group | String | 资源组ID | Yes |
| resources.n | String | 资源ID | Yes |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeleteResourceGroupItems
&resource_group=rg-c7hmvt8u
&zone=beta
&resources.1=i-i8wewg3l
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteResourceGroupItemsResponse",
  "resource_group_id":"rg-c7hmvt8u",
  "ret_code":0
}
```
