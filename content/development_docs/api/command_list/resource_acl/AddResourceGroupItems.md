---
title: "AddResourceGroupItems"
description: 
draft: false
---



将资源加入到资源组中。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| zone | String | zone ID | Yes |
| resource_group | String | 资源组ID | Yes |
| resources.n | String | 资源 ID | Yes |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=AddResourceGroupItems
&resource_group=rg-c7hmvt8u
&zone=beta
&resources.1=i-i8wewg3l
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AddResourceGroupItemsResponse",
  "resource_group_id":"rg-c7hmvt8u",
  "resource_ids":[
    "i-i8wewg3l"
  ],
  "ret_code":0
}
```
