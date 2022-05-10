---
title: "DeleteLoadBalancerListeners"
description: 删除负载均衡器监听器的 API 接口说明。
keyword: 负载均衡器API,删除监听器
weight: 15
draft: false
---

删除一个或多个负载均衡器监听器。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| loadbalancer_listeners.n | String | 要删除的监听器 ID。 | Yes |
| zone | String | 区域 ID，注意要小写。 | Yes |

[_公共参数_](../../gei_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作。 |
| loadbalancer_listeners | Array | 删除的监听器 ID 列表。 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码。 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DeleteLoadBalancerListeners
&loadbalancer_listeners.1=lbl-1234abcd
&loadbalancer_listeners.2=lbl-5678hjkl
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

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
