---
title: "DescribeLoadBalancerPolicyRules"
description: 
draft: false
---



获取转发策略规则列表。

可根据转发策略ID，转发策略规则ID 作为过滤条件获取转发策略规则列表。 如果不指定任何过滤条件，默认返回你拥有的所有转发策略规则。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancer_policy_rules.n | String | 转发策略规则ID | No |
| loadbalancer_policy | String | 转发策略ID | No |
| offset | Integer | 数据偏移量, 默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| loadbalancer_policy_rule_set | Array | JSON 格式的转发策略规则数据列表, 每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的转发策略规则总数 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| loadbalancer_policy_rule_id | String | 转发策略规则ID |
| loadbalancer_policy_rule_name | String | 转发策略规则名称 |
| rule_type | String | 转发策略规则类型：”domain” 或 “url”，分别表示按域名匹配和按 url 匹配 |
| val | String | 匹配规则，支持正则表达式 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeLoadBalancerPolicyRules
&loadbalancer_policy=lbp-1234abcd
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeLoadBalancerPolicyRulesResponse",
  "total_count":2,
  "loadbalancer_policy_rule_set":[
    {
      "rule_type":"domain",
      "val":"www.qingcloud.com",
      "loadbalancer_policy_rule_id":"lbpr-1234abcd",
      "loadbalancer_policy_rule_name":null,
      "loadbalancer_policy_id":"lbp-1234abcd"
    },
    {
      "rule_type":"url",
      "val":"/scripts",
      "loadbalancer_policy_rule_id":"lbpr-abcd1234",
      "loadbalancer_policy_rule_name":null,
      "loadbalancer_policy_id":"lbp-1234abcd"
    }
  ],
  "ret_code":0
}
```
