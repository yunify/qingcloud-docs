---
title: "ApplyWAFDomainPolicy"
description: 
draft: false
---



更新WAF防护策略。在每次对规则进行修改后， 都需要主动『更新修改』使改动生效，即调用此 API 。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| domain_policy | String | 要应用修改的策略 ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[公共参数](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ApplyWAFDomainPolicy
&domain_policy=wafdp-uv6qtfm5
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ApplyWAFDomainPolicyResponse",
  "job_id":"j-r51ebsba5qw",
  "ret_code":0
}
```
