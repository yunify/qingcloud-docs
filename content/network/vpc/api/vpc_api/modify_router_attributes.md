---
title: "ModifyRouterAttributes"
description: 修改一台 VPC 网络的配置。
keyword: VPC,  VPC 网络
weight: 5
draft: false
---

修改一台 VPC 网络的配置。

在修改配置之后，为了让配置生效，你可能需要执行 [_UpdateRouters_](../update_routers/) 或者 [_ApplySecurityGroup_](../../sg/apply_security_group/) 指令。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| router | String |  VPC 网络ID | Yes |
| eip | String |  VPC 网络的公网IP，如果值为 "" ，表示将公网IP从 VPC 网络上解绑。<br/>修改这个参数之后，需要执行 [_UpdateRouters_](../update_routers) 指令才能使得修改生效。 | No |
| security_group | String |  VPC 网络的防火墙ID。<br/>修改这个参数之后，需要执行 [_ApplySecurityGroup_](../../sg/apply_security_group) 指令才能使得修改生效。 | No |
| router_name | String |  VPC 网络的名称。 | No |
| description | String |  VPC 网络的描述。 | No |
| features | Integer |  VPC 网络功能项，目前包括 DHCP 和 DNS 。<br/>“1”: 开启 DHCP，开启时还需同时传参数 vxnet, dyn_ip_start, dyn_ip_end (私有网络连接 VPC 网络后默认即开启 DHCP)<br/>“2”: 开启私网内 DNS | No |
| vxnet | String | 私有网络 ID。当开启、关闭 VPC 网络 DHCP 功能时，需指定私有网络。 | No |
| dyn_ip_start | String | DHCP服务分配开始IP | No |
| dyn_ip_end | String | DHCP服务分配终止IP | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=ModifyRouterAttributes
&router=rtr-9iy0lt3s
&router_name=demo
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"ModifyRouterAttributesResponse",
  "ret_code":0
}
```
