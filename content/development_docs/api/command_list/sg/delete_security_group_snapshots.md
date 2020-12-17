---
title: "DeleteSecurityGroupSnapshots"
description: 
draft: false
---



删除防火墙备份。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| security_group_snapshots.n | String | 防火墙规则ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| security_group_snapshots | Array | 成功删除的防火墙备份ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DeleteSecurityGroupSnapshots
&security_group_snapshots.1=sgs-wx55xhix
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteSecurityGroupSnapshotsResponse",
  "security_group_snapshots":[
    "sgs-wx55xhix"
  ],
  "ret_code":0
}
```
