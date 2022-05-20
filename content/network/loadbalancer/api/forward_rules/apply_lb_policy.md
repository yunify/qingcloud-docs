---
title: "ApplyLoadBalancerPolicy"
description: 更新负载转发策略的 API 接口说明。
keyword: 负载均衡器API,转发策略,更新
weight: 3
draft: false
---

更新负载转发策略。

在每次对转发策略、转发规则进行修改后， 需要主动调用此 API 使改动生效。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| loadbalancer_policy | String | 要应用修改的转发策略 ID。 | Yes |
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
https://api.qingcloud.com/iaas/?action=ApplyLoadBalancerPolicy
&loadbalancer_policy=lbp-1234abcd
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"ApplyLoadBalancerPolicyResponse",
  "job_id":"j-1234abcd",
  "ret_code":0
}
```
