---
title: "LoadBalancerLeaveVxnet"
description: 
draft: false
---



若负载均衡器集群已加入到私有网络，该 api 可以使负载均衡器集群离开私有网络。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| vxnet | String | 私有网络 ID | Yes |
| loadbalancer | String | 离开网络的负载均衡器 ID | Yes |
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
https://api.qingcloud.com/iaas/?action=LoadBalancerLeaveVxnet
&vxnet=vxnet-q8f2bu
&loadbalancer=lb-ciy73nib
&zone=pek3
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"LoadBalancerLeaveVxnetResponse",
  "job_id":"j-1y34lyjfnf5",
  "ret_code":0
}
```
