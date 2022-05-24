---
title: "JoinRouter"
description: 将一个受管私有网络连接到一台 VPC 网络。
keyword: VPC,  VPC 网络
weight: 10
draft: false
---

将一个受管私有网络连接到一台 VPC 网络。这样受管私有网络可以被 VPC 网络管理起来， 受管私有网络里的云服务器也将获得 DHCP 自动分配地址的能力。

只有受管私有网络才能连接到 VPC 网络，一个受管私有网络可以且仅可以连接到一台 VPC 网络。 受管私有网络可以连接到状态为 active 和 poweroffed 的 VPC 网络。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| vxnet | String | 需要连接 VPC 网络的受管私有网络ID | Yes |
| router | String | 受管私有网络需要连接的 VPC 网络ID | Yes |
| ip_network | String | 受管私有网络的网段，目前支持的网段为 192.168.x.0/24 和 172.16.x.0/24，需要满足 [CIDR格式](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)<br/>注解<br/>同一个 VPC 网络下管理的受管私有网络的网段不能重复。 | Yes |
| features | Integer |  VPC 网络需要开启的功能，默认为1，目前这个值只能填1，表示开启DHCP服务。 | No |
| manager_ip | String |  VPC 网络的管理IP | No |
| dyn_ip_start | String | DHCP服务分配开始IP | No |
| dyn_ip_end | String | DHCP服务分配终止IP | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=JoinRouter
&vxnet=vxnet-rzg2llb
&router=rtr-xt37nm9j
&ip_network=192.168.1.0/24
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "router_id":"rtr-xt37nm9j",
  "job_id":"j-lesy0k0k",
  "ret_code":0,
  "action":"JoinRouterResponse",
  "vxnet_id":"vxnet-rzg2llb"
}
```
