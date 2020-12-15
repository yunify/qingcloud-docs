---
title: "ResizeLoadBalancers"
description: 
draft: false
---



修改负载均衡器最大连接数配置。负载均衡器状态必须是关闭的 stopped ，不然会返回错误。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancers.n | String | 负载均衡器ID | Yes |
| loadbalancer_type | Integer | 负载均衡器类型，有效值 0、1、2、3<br/>0 – 最大连接数 5000<br/>1 – 最大连接数 20,000<br/>2 – 最大连接数 40,000<br/>3 – 最大连接数 100,000 | Yes |
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
https://api.qingcloud.com/iaas/?action=ResizeLoadBalancers
&loadbalancers.1=lb-1234abcd
&loadbalancer_type=2
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ResizeLoadBalancersResponse",
  "job_id":"j-1234abcd",
  "ret_code":0
}
```
