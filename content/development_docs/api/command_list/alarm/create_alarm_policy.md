---
title: "CreateAlarmPolicy"
description: 
draft: false
---

创建告警策略，每个告警策略可以绑定多个资源。

创建策略时，可一同创建规则(rules) 和行为(action) ，也可创建之后再添加规则或行为。

告警策略数据可以通过 [_DescribeAlarmPolicies_](../describe_alarm_policies) 得到。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| alarm_policy_type | String | 告警策略类型: 云服务器（instance），路由器（router），公网 IP（eip），负载均衡器（loadbalancer_listener_http / loadbalancer_listener_https / loadbalancer_listener_tcp / loadbalancer_backend_http / loadbalancer_backend_tcp），集群（cluster_node） | Yes |
| period | String | 告警策略周期：一分钟：1m ，5分钟：5m | Yes |
| alarm_policy_name | String | 告警策略名称 | No |
| zone | String | 区域 ID，注意要小写 | Yes |
| notice_count | Integer | 连续告警次数（1-5） | No |
| rules.n.alarm_policy_rule_name | String | 规则名称 | No |
| rules.n.meter | String | 资源监控项，不同资源类型有不同的监控项。可参考 [_资源监控_](../../monitor/) | No |
| rules.n.condition_type | String | 条件类型: gt (大于), lt (小于) | No |
| rules.n.thresholds | Integer | 阈值 | No |
| rules.n.data_processor | String | 监控数据处理方式: raw (使用监控数据原始值), percent (只适用于 IP 带宽监控，将监控数据转换为带宽占用百分比，再跟阈值进行比较) 默认是 raw 。 | No |
| rules.n.consecutive_periods | Integer | 连续周期数，即连续几个检查周期，监控数据都达到了告警阈值，才触发告警行为。 默认是 1 。 | No |
| rules.n.period_start_hhmm | String | 规则生效开始时间 | No |
| rules.n.period_end_hhmm | String | 规则生效结束时间 | No |
| rules.n.alarm_level_id | String | 告警级别，level-00000000 表示高，level-00000001表示低 | No |
| actions.n.trigger_action | String | 通知列表 ID ， | No |
| actions.n.trigger_status | String | 当监控告警变成什么状态时，发消息给此通知列表。有效值是 “ok”, “alarm”, “insufficient” | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| alarm_policy_id | String | 创建成功的告警策略 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=CreateAlarmPolicy
&alarm_policy_type=eip
&period=5m
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateAlarmPolicyResponse",
  "alarm_policy_id":"alp-axbkmf20",
  "ret_code":0
}
```
