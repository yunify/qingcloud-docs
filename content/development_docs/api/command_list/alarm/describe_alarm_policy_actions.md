---
title: "DescribeAlarmPolicyActions"
description: 
draft: false
---

获取某个告警策略的告警行为列表。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| alarm_policy | String | 告警策略ID | No |
| alarm_policy_actions.n | String | 告警行为ID | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| alarm_policy_action_set | Array | JSON 格式的告警行为数据列表，每项参数可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的告警策略总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| alarm_policy_id | String | 告警策略ID |
| alarm_policy_action_id | String | 告警行为ID |
| trigger_action | String | 告警行为对应的 ID ，目前支持的是通知列表 ID 。 |
| trigger_status | String | 触发此行为的监控告警的状态，ok - 监控告警恢复正常时触发；alarm - 发生告警时触发 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeAlarmPolicyActions
&alarm_policy=alp-n43jh2pq
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeAlarmPolicyActionsResponse",
  "alarm_policy_action_set":[
    {
      "alarm_policy_id":"alp-nlqi5sa1",
      "alarm_policy_action_id":"alpa-0jzv8t0q",
      "trigger_status":"alarm",
      "trigger_action":"nl-xxxxx"
  ],
  "ret_code":0,
  "total_count":1
}
```
