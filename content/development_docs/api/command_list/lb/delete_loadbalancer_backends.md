---
title: "DeleteLoadBalancerBackends"
description: 
draft: false
---



删除一个或多个负载均衡器后端服务。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancer_backends.n | String | 后端服务ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| loadbalancer_backends | Array | 删除的后端服务ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DeleteLoadBalancerBackends
&loadbalancer_backends.1=lbb-1234abcd
&loadbalancer_backends.2=lbb-5678hjkl
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteLoadBalancerBackendsResponse",
  "loadbalancer_backends":[
    "lbb-1234abcd",
    "lbb-5678hjkl"
  ],
  "zone":"pek3a"
}
```
