---
title: "CreateLoadBalancer"
description: 
draft: false
---



创建一个负载均衡器。 负载均衡器按所处网络环境可分为 “公网” 和 “私网” 两类，公网负载均衡器可绑定多个公网 IP ；私网则只有一个内网 IP 。 API 参数中由 eips.n 和 vxnet 决定所处网络类型，必选其中一个。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| eips.n | String | 公网 IP 的 ID，一个 “公网” 类型的负载均衡器可绑定4个公网 IP | No |
| vxnet | String | 要加入的私网 ID， “私网” 类型负载均衡器需要指定创建在哪个私网中。 | No |
| private_ip | String | 要使用的私网 IP， “私网” 类型负载均衡器可指定私网 IP 地址，如不指定则由路由器自动分配。 | No |
| loadbalancer_type | Integer | 负载均衡器承载能力类型:<br/> 0 - 最大连接数5千 (默认)<br/> 1 - 最大连接数2万<br/> 2 - 最大连接数4万<br/> 3 - 最大连接数10万<br/> 4 - 最大连接数20万<br/> 5 - 最大连接数50万 | No |
| loadbalancer_name | String | 负载均衡器名称 | No |
| security_group | String | 公网负载均衡器加载的防火墙ID，若未提供，则默认加载缺省防火墙 | No |
| http_header_size | Integer | 负载均衡器允许的最大http头部长度，默认值为15，合法范围[1-127]，单位为kbytes，调高此参数时会影响最大连接数 | No |
| zone | String | 区域 ID，注意要小写 | Yes |
| target_user | String | 目标用户 ID ，可用于主账号为其子账号创建资源。 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| loadbalancer_id | String | 创建的负载均衡器ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateLoadBalancer
&eips.1=eip-1234abcd
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateLoadBalancerResponse",
  "ret_code":0,
  "loadbalancer_id":"lb-1234abcd",
  "job_id":"j-1234abcd"
}
```
