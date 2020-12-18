---
title: "RollbackSecurityGroup"
description: 
draft: false
---



使用防火墙备份回滚。

注解

回滚规则后，记得调用 [_ApplySecurityGroup_](../apply_security_group/) 使其生效。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| security_group | String | 防火墙ID | Yes |
| security_group_snapshot | String | 防火墙备份ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| security_group_id | String | 防火墙ID |
| security_group_snapshot_id | String | 防火墙备份ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=RollbackSecurityGroup
&security_group_snapshot=sgs-wx55xhix
&security_group=sg-q36kwq5r
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"RollbackSecurityGroupResponse",
  security_group_id: "sg-q36kwq5r",
  security_group_snapshot_id: "sgs-hycrez7a",
  "ret_code":0
}
```
