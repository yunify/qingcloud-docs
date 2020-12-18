---
title: "DeleteAlarmPolicyActions"
description: 
draft: false
---

删除告警行为。

删除后，记得调用 [_ApplyAlarmPolicy_](../apply_alarm_policy/) 使其生效。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| alarm_policy_actions.n | String | 告警行为ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| alarm_policy_actions | Array | 成功删除的告警行为ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DeleteAlarmPolicyActions
&alarm_policy_actions.1=alpa-13cooxdd
&alarm_policy_actions.2=alpa-c25rz9c1
&alarm_policy_actions.3=alpa-191d8eb5
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteAlarmPolicyActionsResponse",
  "alarm_policy_actions":[
    "alpa-13cooxdd",
    "alpa-c25rz9c1",
    "alpa-191d8eb5"
  ],
  "ret_code":0
}
```
