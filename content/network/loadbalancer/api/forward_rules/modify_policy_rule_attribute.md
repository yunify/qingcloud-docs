---
title: "ModifyLoadBalancerPolicyRuleAttributes"
description: 修改负载均衡器转发策略规则的属性。
keyword: 负载均衡器API,转发策略,转发规则,修改
weight: 11
draft: false
---

修改负载均衡器转发策略规则的属性。

**注意**：修改之后，为了让新规则生效，需要执行 [_ApplyLoadBalancerPolicy_](../apply_loadbalancer_policy/) 指令。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| loadbalancer_policy_rule | String | 要修改属性的转发策略规则 ID。 | Yes |
| loadbalancer_policy_rule_name | String | 转发策略规则名称。 | No |
| val | String | 转发策略规则匹配规则。 | No |
| zone | String | 区域 ID，注意要小写。 | Yes |

[_公共参数_](../../gei_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作。 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码。 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=ModifyLoadBalancerPolicyRuleAttributes
&loadbalancer_policy_rule=lbpr-1234abcd
&val=new_regex
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"ModifyLoadBalancerPolicyRuleAttributesResponse",
  "ret_code":0
}
```
