---
title: "CopySecurityGroupIPSets"
description: 
draft: false
---



复制IP/端口集合到其他zone（可以复制到当前zone）。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| ipsets.n | String | 一个或多个IP/端口集合ID | Yes |
| dest_zones.n | String | 一个或多个区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=CopySecurityGroupIPSets
&ipsets.1=sgi-12345678
&dest_zones.1=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CopySecurityGroupIPSetsResponse",
  "ret_code":0
}
```
