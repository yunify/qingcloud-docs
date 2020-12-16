---
title: "DescribeAlarmPolicyRules"
description: 
draft: false
---

获取某个告警策略的规则信息。

可根据告警策略ID，告警策略规则ID 作过滤条件，获取告警策略规则列表。 如果不指定任何过滤条件，默认返回你所拥有的所有告警策略的所有规则。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| alarm_policy | String | 告警策略 ID | No |
| alarm_policy_rules.n | String | 告警策略规则ID | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| alarm_policy_rule_set | Array | JSON 格式的告警策略规则数据列表，每项参数可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的告警策略总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| alarm_policy_id | String | 告警策略ID |
| alarm_policy_rule_id | String | 告警策略规则ID |
| meter | String | 资源监控项，不同资源类型有不同的监控项。可参考 [_资源监控_](../../monitor/) |
| condition_type | String | 判断条件类型：gt - 大于, lt - 小于 |
| thresholds | String | 告警阈值 |
| data_processor | String | 通常都是采用默认值 “raw” 表示对监控数据不需做额外处理。 如果监控资源类型是公网 IP ，还可选择 “percent” 表示阈值数字代表的是百分比， 这样系统会自动根据公网 IP 当前的带宽上限计算百分比。 |
| consecutive_periods | String | 连续周期数，表示连续多个周期都满足告警条件时，才出发告警。默认是 1 。 |
| period_start_hhmm | String | 此规则生效的起始时间，格式为 hh:mm ，默认是零点。 |
| period_end_hhmm | String | 此规则生效的结束时间，格式为 hh:mm 默认是 23:59 。 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeAlarmPolicyRules
&alarm_policy=alp-n43jh2pq
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeAlarmPolicyRulesResponse",
  "alarm_policy_rule_set":[
    {
      "meter":"cpu",
      "alarm_policy_id":"sg-nlqi5sa1",
      "condition_type":"gt",
      "thresholds":"90",
      "alarm_policy_rule_id":"sgr-0jzv8t0q",
      "consecutive_periods":"1",
      "period_start_hhmm":"00:00",
      "period_end_hhmm":"23:59",
      "create_time":"2017-07-18T07:17:13Z",
      "data_processor":"raw"
    }
  ],
  "ret_code":0,
  "total_count":1
}
```
