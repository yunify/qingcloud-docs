---
title: "CreateLoadBalancer"
description: 介绍如何创建一个负载均衡器。 
keyword: 负载均衡器API,创建负载均衡器
weight: 1 
draft: false
---

创建一个负载均衡器。 

负载均衡器按所处网络环境可分为 “公网” 和 “私网” 两类，API 参数中由 `eips.n` 和 `vxnet` 决定其网络类型，必选其中一个。公网负载均衡器可绑定多个公网 IP ；私网则只有一个内网 IP 。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| eips.n | String | 公网 IP 的 ID。<br/>一个 “公网” 类型的负载均衡器可绑定 4 个公网 IP。 | No |
| vxnet | String | 要加入的私网 ID。 | No |
| private_ip | String | 要使用的私网 IP。<br/> “私网” 类型负载均衡器可指定私网 IP 地址，如不指定则由路由器自动分配。 | No |
| loadbalancer_type | Integer | 负载均衡器承载能力类型。取值如下：<br/> 0 - 最大连接数5千 (默认)<br/> 1 - 最大连接数2万<br/> 2 - 最大连接数4万<br/> 3 - 最大连接数10万<br/> 4 - 最大连接数20万<br/> 5 - 最大连接数50万 | No |
| loadbalancer_name | String | 负载均衡器名称。 | No |
| security_group | String | 公网负载均衡器绑定的安全组 ID。若未提供，则绑定默认安全组。 | No |
| http_header_size | Integer | 负载均衡器允许的最大 HTTP 头部长度。<br/>默认值为 15，合法范围：[1-127]，单位：kbytes，调高此参数时会影响最大连接数。 | No |
| zone | String | 区域 ID，注意要小写。 | Yes |
| target_user | String | 目标用户 ID ，可用于主账号为其子账号创建资源。 | No |

[_公共参数_](../../gei_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作。 |
| loadbalancer_id | String | 创建的负载均衡器 ID。 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码。 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=CreateLoadBalancer
&eips.1=eip-1234abcd
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"CreateLoadBalancerResponse",
  "ret_code":0,
  "loadbalancer_id":"lb-1234abcd",
  "job_id":"j-1234abcd"
}
```
