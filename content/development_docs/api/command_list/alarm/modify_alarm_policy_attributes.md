---
title: "ModifyAlarmPolicyAttributes"
description: 
draft: false
---

修改告警策略的名称和描述等属性，如果修改告警检查周期或者连续告警次数， 改后需要调用 [_ApplyAlarmPolicy_](../apply_alarm_policy/) 使修改生效。

一次只能修改一个告警策略。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| alarm_policy | String | 告警策略 ID | Yes |
| alarm_policy_name | String | 告警策略名称 | No |
| period | String | 告警策略检查周期 | No |
| description | String | 告警策略描述 | No |
| zone | String | 区域 ID，注意要小写 | Yes |
| notice_count | Integer | 连续告警次数（1-5） | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ModifyAlarmPolicyAttributes
&alarm_policy=alarm_policy-axbkmf21
&alarm_policy_name=sample
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyAlarmPolicyAttributesResponse",
  "ret_code":0
}
```
