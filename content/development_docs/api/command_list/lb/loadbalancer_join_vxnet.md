---
title: "LoadBalancerJoinVxnet"
description: 
draft: false
---



将负载均衡器集群加入到私有网络，可以指定负载均衡器集群加入私有网络时的 IP 地址。

警告

一个负载均衡器集群最多只能加入一个受管网络 ( 包括基础网络vxnet-0 )

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| vxnet | String | 私有网络 ID | Yes |
| loadbalancer | String | 加入到网络的负载均衡器 ID | Yes |
| private_ip | String | 负载均衡器集群加入到私有网络后占用的地址 | No |
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
https://api.qingcloud.com/iaas/?action=LoadBalancerJoinVxnet
&vxnet=vxnet-q8f2bu
&loadbalancer=lb-ciy73nib
&private_ip=192.168.131.45
&zone=pek3
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"LoadBalancerJoinVxnetResponse",
  "job_id":"j-1y34lyjfvn5",
  "ret_code":0
}
```
