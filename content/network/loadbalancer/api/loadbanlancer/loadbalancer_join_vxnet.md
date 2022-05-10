---
title: "LoadBalancerJoinVxnet"
description: 将负载均衡器集群加入到私有网络
keyword: 负载均衡器API,加入私有网络
weight: 10
draft: false
---

将负载均衡器集群加入到私有网络，可以指定负载均衡器集群加入私有网络时的 IP 地址。

> **说明**
>
> 一个负载均衡器集群最多只能加入一个受管网络 ( 包括基础网络vxnet-0 )。



## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| vxnet | String | 私有网络 ID。 | Yes |
| loadbalancer | String | 加入到网络的负载均衡器 ID。 | Yes |
| private_ip | String | 负载均衡器集群加入到私有网络后占用的地址。 | No |
| zone | String | 区域 ID，注意要小写。 | Yes |

[_公共参数_](../../gei_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作。 |
| job_id | String | 执行任务的 Job ID。 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码。 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=LoadBalancerJoinVxnet
&vxnet=vxnet-q8f2bu
&loadbalancer=lb-ciy73nib
&private_ip=192.168.131.45
&zone=pek3
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"LoadBalancerJoinVxnetResponse",
  "job_id":"j-1y34lyjfvn5",
  "ret_code":0
}
```
