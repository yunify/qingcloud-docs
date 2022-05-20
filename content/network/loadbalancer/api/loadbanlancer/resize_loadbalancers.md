---
title: "ResizeLoadBalancers"
description: 修改负载均衡器规格类型的 API接口说明。
keyword: 负载均衡器API,负载均衡器类型,最大连接数
weight: 16
draft: false
---

修改负载均衡器最大连接数配置。

负载均衡器状态必须是关闭的 (stopped) ，不然会返回错误。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| loadbalancers.n | String | 负载均衡器 ID。 | Yes |
| loadbalancer_type | Integer | 负载均衡器类型。<br/>有效值 0、1、2、3：<br/>0 – 最大连接数 5000<br/>1 – 最大连接数 20,000<br/>2 – 最大连接数 40,000<br/>3 – 最大连接数 100,000 | Yes |
| zone | String | 区域 ID，注意要小写。 | Yes |

[_公共参数_](../../gei_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作。 |
| job_id | String | 执行任务的 Job ID。 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码。 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=ResizeLoadBalancers
&loadbalancers.1=lb-1234abcd
&loadbalancer_type=2
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"ResizeLoadBalancersResponse",
  "job_id":"j-1234abcd",
  "ret_code":0
}
```
