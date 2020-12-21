---
title: "ModifyAlarmPolicyRuleAttributes"
description: 
draft: false
---

修改告警策略规则的属性。

修改规则后，记得调用 [_ApplyAlarmPolicy_](../apply_alarm_policy/) 使其生效。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| alarm_policy_rule | String | 告警策略规则ID | Yes |
| alarm_policy_rule_name | String | 告警策略规则名称 | No |
| condition_type | String | 条件类型: gt (大于), lt (小于) | Yes |
| thresholds | String | 阈值 | No |
| data_processor | String | 监控数据处理方式: raw (使用监控数据原始值), percent (只适用于 IP 带宽监控，将监控数据转换为带宽占用百分比，再跟阈值进行比较) | No |
| consecutive_periods | String | 连续周期数，即连续几个检查周期，监控数据都达到了告警阈值，才触发告警行为。 | No |
| period_start_hhmm | String | 规则生效开始时间 | No |
| period_end_hhmm | String | 规则生效结束时间 | No |
| alarm_level_id | String | 告警级别，level-00000000 表示高，level-00000001表示低 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| alarm_policy_rule_id | String | 成功修改的告警策略规则ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ModifyAlarmPolicyRuleAttributes
&alarm_policy_rule=alpr-13cooxdd
&alarm_policy_rule_name=demo_rule
&thresholds=83
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyAlarmPolicyRuleAttributesResponse",
  "alarm_policy_rule_id":"alpr-13cooxdd",
  "ret_code":0
}
```
