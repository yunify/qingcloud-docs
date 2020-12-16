---
title: "DissociateAlarmPolicy"
description: 
draft: false
---

将告警策略从资源上解绑，

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| alarm_policy | String | 告警策略 ID | Yes |
| resources | Array | 要与这个告警策略解绑的资源 ID 列表。 如果不传此参数，则解绑与此告警策略关联的所有资源。 | No |
| related_resource | String | 当解绑公网负载均衡器时，related_resource 需指定此负载均衡器关联的公网 IP ID 。 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 任务 ID (解绑操作是异步任务)。 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DissociateAlarmPolicy
&alarm_policy=alp-hp55o9i5
&resources.1=i-xxxxx
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DissociateAlarmPolicyResponse",
  "job_id":"j-xxxx",
  "ret_code":0
}
```
