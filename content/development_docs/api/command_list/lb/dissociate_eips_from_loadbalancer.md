---
title: "DissociateEipsFromLoadBalancer"
description: 
draft: false
---



将一个或多个“绑定中”（ associated ）状态的公网IP从负载均衡器中解绑， 解绑后会变回“可用”（ available ）状态。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| eips.n | String | 公网IP的ID | Yes |
| loadbalancer | String | 负载均衡器 ID | Yes |
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
https://api.qingcloud.com/iaas/?action=DissociateEipsFromLoadBalancer
&loadbalancer=lb-1234abcd
&eips.1=eip-1234abcd
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DissociateEipsFromLoadBalancerResponse",
  "job_id":"j-bm6ym3r8",
  "ret_code":0
}
```
