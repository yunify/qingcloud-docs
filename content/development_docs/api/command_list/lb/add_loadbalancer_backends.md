---
title: "AddLoadBalancerBackends"
description: 
draft: false
---



给负载均衡器的监听器添加后端服务。后端服务资源可以是云服务器或路由器。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancer_listener | String | 要添加后端服务的监听器ID | Yes |
| backends.n.resource_id | String | 后端服务资源ID | Yes |
| backends.n.loadbalancer_backend_name | String | 后端服务名称 | No |
| backends.n.loadbalancer_policy_id | String | 转发策略ID | No |
| backends.n.port | Integer | 后端服务端口 | Yes |
| backends.n.weight | Integer | 后端服务权重 | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| loadbalancer_backends | Array | 新建的后端服务ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=AddLoadBalancerBackends
&loadbalancer_listener=lbl-1234abcd
&backends.1.resource_id=i-1234abcd
&backends.1.port=80
&backends.1.weight=5
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AddLoadBalancerBackendsResponse",
  "ret_code":0,
  "loadbalancer_backends":[
    "lbb-ryv8t68q"
  ]
}
```
