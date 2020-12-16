---
title: "ApplyAlarmPolicy"
description: 
draft: false
---



应用监控告警策略。当告警策略的属性、规则或告警行为发生改变后， 新规则不会即刻生效需要调用本 API 才会生效。

某个告警策略是否被应用过，可通过 [_DescribeAlarmPolicies_](../describe_alarm_policies) 返回的 is_applied 属性判断，

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| alarm_policy | String | 要应用生效的监控告警策略 ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ApplyAlarmPolicy
&alarm_policy=alp-12djpg8q
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ApplyAlarmPolicyResponse",
  "job_id":"j-bm6ym3r8",
  "ret_code":0
}
```
