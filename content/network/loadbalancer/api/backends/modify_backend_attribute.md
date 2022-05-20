---
title: "ModifyLoadBalancerBackendAttributes"
description: 修改负载均衡器后端服务属性的 API 接口说明。
keyword: 负载均衡器API,后端服务,修改属性
weight: 3
draft: false
---

修改负载均衡器后端服务的属性。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| loadbalancer_backend | String | 要修改属性的后端服务 ID。 | Yes |
| port | Integer | 后端服务端口。 | No |
| weight | Integer | 后端服务权重。 | No |
| disabled | Integer | 1 表示禁用，0 表示启用。 | No |
| loadbalancer_policy_id | String | 转发策略 ID。 | No |
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
https://api.qingcloud.com/iaas/?action=ModifyLoadBalancerBackendAttributes
&loadbalancer_backend=lbb-1234abcd
&port=80
&weight=5
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"ModifyLoadBalancerBackendAttributesResponse",
  "ret_code":0
}
```
