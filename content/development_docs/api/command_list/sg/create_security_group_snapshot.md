---
title: "CreateSecurityGroupSnapshot"
description: 
draft: false
---

> 根据当前的防火墙规则创建一个备份, 用于随时回滚之前的防火墙规则。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| security_group | String | 防火墙ID | Yes |
| name | String | 名称 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| security_group_snapshot_id | String | 创建成功的防火墙备份的 ID |
| security_group_id | String | 防火墙 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=CreateSecurityGroupSnapshot
&security_group=sg-q36kwq5r
&name=sg_snapshot
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateSecurityGroupSnapshotResponse",
  "security_group_id":"sg-j38f2h3h",
  "security_group_snapshot_id":"sgs-6la5ljm3",
  "ret_code":0
}
```
