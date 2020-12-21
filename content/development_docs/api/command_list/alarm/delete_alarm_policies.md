---
title: "DeleteAlarmPolicies"
description: 
draft: false
---

删除一个或多个你拥有的告警策略，删除前该告警策略绑定的所有资源需先解除绑定关系。

解绑告警策略可参考 [_DissociateAlarmPolicy_](../dissociate_alarm_policy/)

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| alarm_policies.n | String | 告警策略 ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| alarm_policies | Array | 删除的告警策略 ID 列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DeleteAlarmPolicys
&alarm_policies.1=alp-axbkmf20
&alarm_policies.2=alp-axbkmf21
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteAlarmPolicysResponse",
  "alarm_policies":[
    "alp-axbkmf20",
    "alp-axbkmf21"
  ],
  "ret_code":0
}
```
