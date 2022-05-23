---
title: "AssociateEipsToLoadBalancer"
description: 介绍如何将公网 IP 绑定到负载均衡器。
keyword: 负载均衡器API,绑定公网IP
weight: 5
draft: false
---

将一个或多个“可用”（ available ）状态的公网 IP 绑定到负载均衡器。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| eips.n | String | 公网 IP 的 ID | Yes |
| loadbalancer | String | 负载均衡器 ID | Yes |
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
https://api.qingcloud.com/iaas/?action=AssociateEipsToLoadBalancer
&eips.1=eip-1234abcd
&loadbalancer=lb-1234abcd
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"AssociateEipsToLoadBalancerResponse",
  "job_id":"j-1234abcd",
  "ret_code":0
}
```
