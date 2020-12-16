---
title: "DeleteLoadBalancers"
description: 
draft: false
---



删除一台或多台负载均衡器。

销毁资源的前提，是此资源已建立租用信息（租用信息是在资源创建成功后， 几秒钟内系统自动建立的）。所以正在创建的资源（状态是 pending ）， 以及刚刚创建但还没有建立租用信息的，是不能被销毁的。

删除负载均衡器后，与其关联的公网IP会自动解绑，变为“可用”状态。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancers.n | String | 负载均衡器ID | Yes |
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
https://api.qingcloud.com/iaas/?action=DeleteLoadBalancers
&loadbalancers.1=lb-1234abcd
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteLoadBalancersResponse",
  "job_id":"j-1234abcd",
  "ret_code":0
}
```
