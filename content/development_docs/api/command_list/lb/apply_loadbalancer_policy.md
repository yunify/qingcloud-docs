---
title: "ApplyLoadBalancerPolicy"
description: 
draft: false
---



更新负载转发策略。在每次对转发策略、转发规则进行修改后， 都需要主动『更新修改』使改动生效，即调用此 API 。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancer_policy | String | 要应用修改的转发策略 ID | Yes |
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
https://api.qingcloud.com/iaas/?action=ApplyLoadBalancerPolicy
&loadbalancer_policy=lbp-1234abcd
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ApplyLoadBalancerPolicyResponse",
  "job_id":"j-1234abcd",
  "ret_code":0
}
```
