---
title: "JoinRouter"
description: 
draft: false
---



将一个受管私有网络连接到一台路由器。这样受管私有网络可以被路由器管理起来， 受管私有网络里的云服务器也将获得 DHCP 自动分配地址的能力。

只有受管私有网络才能连接到路由器，一个受管私有网络可以且仅可以连接到一台路由器。 受管私有网络可以连接到状态为 active 和 poweroffed 的路由器。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| vxnet | String | 需要连接路由器的受管私有网络ID | Yes |
| router | String | 受管私有网络需要连接的路由器ID | Yes |
| ip_network | String | 受管私有网络的网段，目前支持的网段为 192.168.x.0/24 和 172.16.x.0/24，需要满足 [CIDR格式](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)<br/>注解<br/>同一个路由器下管理的受管私有网络的网段不能重复。 | Yes |
| features | Integer | 路由器需要开启的功能，默认为1，目前这个值只能填1，表示开启DHCP服务。 | No |
| manager_ip | String | 路由器的管理IP | No |
| dyn_ip_start | String | DHCP服务分配开始IP | No |
| dyn_ip_end | String | DHCP服务分配终止IP | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=JoinRouter
&vxnet=vxnet-rzg2llb
&router=rtr-xt37nm9j
&ip_network=192.168.1.0/24
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "router_id":"rtr-xt37nm9j",
  "job_id":"j-lesy0k0k",
  "ret_code":0,
  "action":"JoinRouterResponse",
  "vxnet_id":"vxnet-rzg2llb"
}
```
