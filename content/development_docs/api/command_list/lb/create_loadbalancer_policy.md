---
title: "CreateLoadBalancerPolicy"
description: 
draft: false
---



创建一个负载均衡器转发策略，可通过自定义转发策略来进行更高级的转发控制。 每个策略可包括多条规则，规则间支持『与』和『或』关系。

**Request Parameters**

| loadbalancer_policy_name | String | 转发策略名称 | No |
| --- | --- | --- | --- |
| operator | String | 转发策略规则间的逻辑关系：”and” 是『与』，”or” 是『或』，默认是 “or” | No |
| balance_mode | String | 绑定相应转发策略的后端逻辑组之间的均衡算法：roundrobin (轮询)，leastconn (最小连接)和 source (源地址) 三种。不指定的话默认使用的是监听器均衡算法| No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| loadbalancer_poicy_id | String | 创建的转发策略ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateLoadBalancerPolicy
&loadbalancer_policy_name=static
&balance_mode=roundrobin
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateLoadBalancerPolicyResponse",
  "ret_code":0,
  "loadbalancer_policy_id":"lbp-1234abcd",
}
```
