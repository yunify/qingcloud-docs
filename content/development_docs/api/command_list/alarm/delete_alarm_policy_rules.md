---
title: "DeleteAlarmPolicyRules"
description: 
draft: false
---

删除告警策略规则。

删除规则后，记得调用 [_ApplyAlarmPolicy_](../apply_alarm_policy/) 使其生效。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| alarm_policy_rules.n | String | 告警策略规则ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| alarm_policy_rules | Array | 成功删除的告警策略规则ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DeleteAlarmPolicyRules
&alarm_policy_rules.1=alpr-13cooxdd
&alarm_policy_rules.2=alpr-c25rz9c1
&alarm_policy_rules.3=alpr-191d8eb5
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteAlarmPolicyRulesResponse",
  "alarm_policy_rules":[
    "alpr-13cooxdd",
    "alpr-c25rz9c1",
    "alpr-191d8eb5"
  ],
  "ret_code":0
}
```
