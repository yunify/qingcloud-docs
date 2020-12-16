---
title: "ModifyLoadBalancerBackendAttributes"
description: 
draft: false
---



修改负载均衡器后端服务的属性。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancer_backend | String | 要修改属性的后端服务ID | Yes |
| port | Integer | 后端服务端口 | No |
| weight | Integer | 后端服务权重 | No |
| disabled | Integer | 1表示禁用，0表示启用 | No |
| loadbalancer_policy_id | String | 转发策略id | No |
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
https://api.qingcloud.com/iaas/?action=ModifyLoadBalancerBackendAttributes
&loadbalancer_backend=lbb-1234abcd
&port=80
&weight=5
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyLoadBalancerBackendAttributesResponse",
  "ret_code":0
}
```
