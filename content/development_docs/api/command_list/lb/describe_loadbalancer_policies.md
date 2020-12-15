---
title: "DescribeLoadBalancerPolicies"
description: 
draft: false
---



获取负载均衡器的转发策略。

可根据负载转发策略ID，策略名称获取转发策略列表。 如果不指定过滤条件，默认返回你拥有的所有负载转发策略。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancer_policies.n | String | 转发策略ID | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则会返回使用了此转发策略的负载均衡器 ID 列表。 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| loadbalancer_policy_set | Array | JSON 格式的转发策略数据列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的转发策略总数 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| loadbalancer_policy_id | String | 转发策略ID |
| loadbalancer_policy_name | String | 转发策略名称 |
| loadbalancer_ids | Array | 使用此转发策略的负载均衡器 ID 列表<br/>只有在请求参数 verbose=1 时才会返回此信息。 |
| create_time | TimeStamp | 转发策略创建时间，为 UTC 时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| is_applied | Integer | 是否已应用修改，1为是，0为否。只有应用修改后，对负载策略的改动才会生效。 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeLoadBalancerPolicies
&loadbalancer_policies.1=lbp-1234abcd
&verbose=1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeLoadBalancerPoliciesResponse",
  "total_count":1,
  "loadbalancer_policy_set":[
    {
      "loadbalancer_policy_id":"lbp-1234abcd",
      "loadbalancer_policy_name":"static resource domain",
      "loadbalancer_ids":['lb-1234abcd'],
      "create_time":"2013-09-30T07:34:07Z",
      "is_applied":1
    },
  ],
  "ret_code":0
}
```
