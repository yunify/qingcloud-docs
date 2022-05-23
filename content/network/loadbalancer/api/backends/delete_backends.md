---
title: "DeleteLoadBalancerBackends"
description: 删除负载均衡器后端服务的 API 接口说明。
keyword: 负载均衡器API,删除后端服务
weight: 5
draft: false
---

删除一个或多个负载均衡器后端服务。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| loadbalancer_backends.n | String | 后端服务 ID。 | Yes |
| zone | String | 区域 ID，注意要小写。 | Yes |

[_公共参数_](../../gei_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| loadbalancer_backends | Array | 删除的后端服务 ID 列表。 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码。 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DeleteLoadBalancerBackends
&loadbalancer_backends.1=lbb-1234abcd
&loadbalancer_backends.2=lbb-5678hjkl
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

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
