---
title: "ModifyAlarmPolicyActionAttributes"
description: 
draft: false
---

修改告警行为的属性。

修改规则后，记得调用 [_ApplyAlarmPolicy_](../apply_alarm_policy/) 使其生效。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| alarm_policy_action | String | 告警行为ID | Yes |
| trigger_action | String | 通知列表 ID | No |
| trigger_status | String | 当监控告警变成什么状态时，发消息给此通知列表。有效值是 “ok”, “alarm”, “deleted” | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| alarm_policy_action_id | String | 成功修改的告警行为ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ModifyAlarmPolicyActionAttributes
&alarm_policy_action=alpa-13cooxdd
&trigger_action=nl-xxxxx
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyAlarmPolicyActionAttributesResponse",
  "alarm_policy_action_id":"alpa-13cooxdd",
  "ret_code":0
}
```
