---
title: "DeleteLoadBalancerPolicyRules"
description: 
draft: false
---



删除一个或多个负载均衡器转发策略规则。 注意：在删除后，你需要执行 [_ApplyLoadBalancerPolicy_](../apply_loadbalancer_policy/) 指令才会生效。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancer_policy_rules.n | String | 要删除的转发策略规则ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| loadbalancer_policy_rules | Array | 删除的转发策略规则ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DeleteLoadBalancerPolicyRules
&loadbalancer_policy_rules.1=lbpr-1234abcd
&loadbalancer_policy_rules.2=lbpr-5678hjkl
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

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
