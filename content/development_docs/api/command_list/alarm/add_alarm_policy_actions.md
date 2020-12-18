---
title: "AddAlarmPolicyActions"
description: 
draft: false
---

给监控策略添加告警行为，目前行为只支持发送通知。 即当资源发生告警、或解除告警、或取不到监控数据时 给通知列表中的所有联系项发邮件或短信通知。

通知列表中只有验证过的联系方式才能接收通知。

改后需要调用 [_ApplyAlarmPolicy_](../apply_alarm_policy/) 使修改生效。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| alarm_policy | String | 告警策略 ID | Yes |
| actions.n.trigger_action | String | 通知列表 ID ， | Yes |
| actions.n.trigger_status | String | 当监控告警变成什么状态时，发消息给此通知列表。有效值是 “ok”, “alarm”, “insufficient”, “deleted” | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| alarm_policy_actions | Array | 添加成功的告警行为 ID 列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=AddAlarmPolicyActions
&actions.1.trigger_action=nl-xxxxxx
&actions.1.trigger_status=ok
&alarm_policy=alp-xxxxxx
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AddAlarmPolicyActionsResponse",
  "alarm_policy_actions":[
    "alpa-xxxxx"
  ],
  "ret_code":0
}
```
