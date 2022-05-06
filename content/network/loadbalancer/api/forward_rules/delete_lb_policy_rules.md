---
title: "DeleteLoadBalancerPolicyRules"
description: 删除负载均衡转发策略规则的 API 接口说明。
keyword: 负载均衡器API,转发策略,转发规则,删除
weight: 16
draft: false
---

删除一个或多个负载均衡器转发策略规则。 

**注意**：删除后需要执行 [_ApplyLoadBalancerPolicy_](../apply_lb_policy/) 指令才会生效。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| loadbalancer_policy_rules.n | String | 要删除的转发策略规则 ID。 | Yes |
| zone | String | 区域 ID，注意要小写。 | Yes |

[_公共参数_](../../gei_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作。 |
| loadbalancer_policy_rules | Array | 删除的转发策略规则 ID 列表。 |
| ret_code | Integer | 。执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DeleteLoadBalancerPolicyRules
&loadbalancer_policy_rules.1=lbpr-1234abcd
&loadbalancer_policy_rules.2=lbpr-5678hjkl
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"DeleteLoadBalancerPolicyRulesResponse",
  "loadbalancer_policy_rules":[
    "lbl-1234abcd",
    "lbl-5678hjkl"
  ],
  "zone":"pek3a"
}
```
