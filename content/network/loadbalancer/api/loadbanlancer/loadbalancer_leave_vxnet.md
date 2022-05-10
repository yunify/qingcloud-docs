---
title: "LoadBalancerLeaveVxnet"
description: 负载均衡器集群离开私有网络的 API 接口说明。
keyword: 负载均衡器API,离开私有网络
weight: 11
draft: false
---

若负载均衡器集群已加入到私有网络，该 API 可以使负载均衡器集群离开私有网络。


## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| vxnet | String | 私有网络 ID | Yes |
| loadbalancer | String | 离开网络的负载均衡器 ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../gei_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=LoadBalancerLeaveVxnet
&vxnet=vxnet-q8f2bu
&loadbalancer=lb-ciy73nib
&zone=pek3
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"LoadBalancerLeaveVxnetResponse",
  "job_id":"j-1y34lyjfnf5",
  "ret_code":0
}
```
