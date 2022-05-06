---
title: "ModifyLoadBalancerPolicyAttributes"
description: 修改负载均衡器转发策略的属性。
keyword: 负载均衡器API,转发策略,转发规则,修改
weight: 10
draft: false
---

修改负载均衡器转发策略的属性。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| loadbalancer_policy | String | 要修改属性的转发策略 ID。 | Yes |
| loadbalancer_policy_name | String | 转发策略名称。 | No |
| operator | String | 转发策略规则间的逻辑关系：<ul><li>and：与</li><li>or：或</li></ul> | No |
| balance_mode | String | 绑定相同的转发策略的后端逻辑组之间使用的均衡算法：<ul><li>roundrobin ：轮询</li><li>leastconn：最小连接</li><li>source ：源地址 </li></ul>如果不指定则使用监听器的均衡算法 | No |
| priority | Integer | 转发策略的优先级。默认是 0，可用范围 0-99。 | No |
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
https://api.qingcloud.com/iaas/?action=ModifyLoadBalancerPolicyAttributes
&loadbalancer_policy=lbp-1234abcd
&operator=and
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"ModifyLoadBalancerPolicyAttributesResponse",
  "ret_code":0
}
```
