---
title: "DeleteLoadBalancerListeners"
description: 
draft: false
---



删除一个或多个负载均衡器监听器。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancer_listeners.n | String | 要删除的监听器ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| loadbalancer_listeners | Array | 删除的监听器ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DeleteLoadBalancerListeners
&loadbalancer_listeners.1=lbl-1234abcd
&loadbalancer_listeners.2=lbl-5678hjkl
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteLoadBalancerListenersResponse",
  "loadbalancer_listeners":[
    "lbl-1234abcd",
    "lbl-5678hjkl"
  ],
  "zone":"pek3a"
}
```
