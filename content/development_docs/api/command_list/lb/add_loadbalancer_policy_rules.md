---
title: "AddLoadBalancerPolicyRules"
description: 
draft: false
---



给转发策略添加多条规则。 注意：在添加之后，为了让新规则生效，你需要执行 [_ApplyLoadBalancerPolicy_](../apply_loadbalancer_policy/) 指令。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancer_policy | String | 要添加规则的转发策略ID | Yes |
| rules.n.loadbalancer_policy_rule_name | String | 规则名称 | No |
| rules.n.rule_type | String | 规则匹配类型：按域名”domain” 还是按URL “url” | Yes |
| rules.n.val | String | 匹配规则，支持正则表达式 | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| loadbalancer_policy_rules | Array | 新建的规则ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=AddLoadBalancerPolicyRules
&loadbalancer_policy=lbp-1234abcd
&rules.1.rule_type=domain
&rules.1.val=qingcloud.com
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AddLoadBalancerPolicyRulesResponse",
  "ret_code":0,
  "loadbalancer_policy_rules":[
    "lbpr-1234abcd"
  ]
}
```
