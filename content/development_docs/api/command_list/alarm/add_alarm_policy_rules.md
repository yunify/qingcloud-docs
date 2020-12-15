---
title: "AddAlarmPolicyRules"
description: 
draft: false
---

给监控告警策略添加规则，当资源监控数据满足设置的任何一条规则，都会触发告警行为。 改后需要调用 [_ApplyAlarmPolicy_](../apply_alarm_policy) 使修改生效。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| alarm_policy | String | 监控告警策略 ID | Yes |
| rules.n.alarm_policy_rule_name | String | 规则名称 | No |
| rules.n.meter | String | 资源监控项，不同资源类型有不同的监控项。可参考 [_资源监控_](../../monitor/) | Yes |
| rules.n.condition_type | String | 条件类型: gt (大于), lt (小于) | Yes |
| rules.n.thresholds | Integer | 阈值 | No |
| rules.n.data_processor | String | 监控数据处理方式: raw (使用监控数据原始值), percent (只适用于 IP 带宽监控，将监控数据转换为带宽占用百分比，再跟阈值进行比较) 默认是 raw 。 | No |
| rules.n.consecutive_periods | Integer | 连续周期数，即连续几个检查周期，监控数据都达到了告警阈值，才触发告警行为。 默认是 1 。 | No |
| rules.n.period_start_hhmm | String | 规则生效开始时间 | No |
| rules.n.period_end_hhmm | String | 规则生效结束时间 | No |
| rules.n.alarm_level_id | String | 告警级别，level-00000000 表示高，level-00000001表示低 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| alarm_policy_rules | Array | 添加成功的监控告警策略规则 ID 列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=AddAlarmPolicyRules
&rules.1.meter=cpu
&rules.1.condition_type=gt
&rules.1.thresholds=70
&rules.1.data_processor=raw
&rules.1.consecutive_periods=5
&alarm_policy=alp-xxxxx
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AddAlarmPolicyRulesResponse",
  "alarm_policy_rules":[
    "alpr-xxxxx"
  ],
  "ret_code":0
}
```
