---
title: "DeleteLoadBalancerPolicies"
description: 
keyword: 
weight: 
draft: false
---



删除一个或多个转发策略。

## 请求参数

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancer_policies.n | String | 要删除的转发策略ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

## 返回数据

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| loadbalancer_policies | Array | 删除的转发策略ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DeleteLoadBalancerPolicies
&loadbalancer_policies.1=lbp-1234abcd
&loadbalancer_policies.2=lbp-5678hjkl
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"DeleteLoadBalancerPoliciesResponse",
  "loadbalancer_policies":[
    "lbp-1234abcd",
    "lbp-5678hjkl"
  ],
  "zone":"pek3a"
}
```
