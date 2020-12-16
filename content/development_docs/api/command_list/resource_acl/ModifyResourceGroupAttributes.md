---
title: "ModifyResourceGroupAttributes"
description: 
draft: false
---



修改资源组属性。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource_group | String | 资源组ID | Yes |
| resource_group_name | String | 资源组名称 | No |
| description | String | 资源组描述 | No |

[_公共参数_](../../../parameters/)

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ModifyResourceGroupAttributes
&resource_group=rg-5ukijwcx
&resource_group_name=TTTT
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyResourceGroupAttributesResponse",
  "resource_group_id":"rg-5ukijwcx",
  "ret_code":0,
  "resource_group_name":"TTTT"
}
```
