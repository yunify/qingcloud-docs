---
title: "AssociateAlarmPolicy"
description: 
draft: false
---

将告警策略绑定到资源上, 绑定每个资源都会自动创建对应的 Alarm 。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| alarm_policy | String | 资源告警策略 ID | Yes |
| resources | Array | 资源 ID 列表。可一次绑定多个资源，但这些资源需要匹配告警策略的类型 (alarm_policy_type) 。 | Yes |
| related_resource | String | 当绑定公网负载均衡器时，related_resource 需指定某一个此负载均衡器关联的公网 IP ID 。 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 任务 ID (绑定操作是异步任务)。 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=AssociateAlarmPolicy
&alarm_policy=alp-hp55o9i5
&resources.1=i-xxxxx
&resources.2=i-xxxxx
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AssociateAlarmPolicyResponse",
  "job_id":"j-xxxxx",
  "ret_code":0
}
```
