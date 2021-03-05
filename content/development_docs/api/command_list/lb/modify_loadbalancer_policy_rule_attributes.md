---
title: "ModifyLoadBalancerPolicyRuleAttributes"
description: 
draft: false
---



修改负载均衡器转发策略规则的属性。 修改之后，为了让新规则生效，你需要执行 [_ApplyLoadBalancerPolicy_](../apply_loadbalancer_policy/) 指令。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancer_policy_rule | String | 要修改属性的转发策略规则ID | Yes |
| loadbalancer_policy_rule_name | String | 转发策略规则名称 | No |
| val | String | 转发策略规则匹配规则 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ModifyLoadBalancerPolicyRuleAttributes
&loadbalancer_policy_rule=lbpr-1234abcd
&val=new_regex
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyLoadBalancerPolicyRuleAttributesResponse",
  "ret_code":0
}
```
