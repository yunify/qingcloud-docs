---
title: "AddLoadBalancerPolicyRules"
description: 给转发策略添加多条规则的 API 接口说明。
keyword: 负载均衡器API,转发策略,转发规则
weight: 2
draft: false
---

给转发策略添加多条规则。

 **注意**：在添加之后，为了让新规则生效，你需要执行 [_ApplyLoadBalancerPolicy_](../apply_lb_policy/) 指令。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| loadbalancer_policy | String | 要添加规则的转发策略 ID。 | Yes |
| rules.n.loadbalancer_policy_rule_name | String | 规则名称。 | No |
| rules.n.rule_type | String | 规则匹配类型：按域名”domain” 还是按URL “url”。 | Yes |
| rules.n.val | String | 匹配规则，支持正则表达式。 | Yes |
| zone | String | 区域 ID，注意要小写。 | Yes |

[_公共参数_](../../gei_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作。 |
| loadbalancer_policy_rules | Array | 新建的规则 ID 列表。 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码。 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=AddLoadBalancerPolicyRules
&loadbalancer_policy=lbp-1234abcd
&rules.1.rule_type=domain
&rules.1.val=qingcloud.com
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"AddLoadBalancerPolicyRulesResponse",
  "ret_code":0,
  "loadbalancer_policy_rules":[
    "lbpr-1234abcd"
  ]
}
```
