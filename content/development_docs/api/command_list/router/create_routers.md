---
title: "CreateRouters"
description: 
draft: false
---



创建一台或多台路由器。路由器用于受管私有网络之间互联，并提供三项附加服务：DHCP 服务、端口转发、VPN 隧道服务。

这个API只负责路由器的创建工作，如果需要通过路由器将自己名下的受管私有网络连接起来，请查看 [_JoinRouter_](../join_router/)。

如果需要配置端口转发规则或打开VPN 隧道服务，请查看 [_AddRouterStatics_](../add_router_statics/) 和 [_UpdateRouters_](../update_routers/)。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| router_name | String | 路由器名称 | No |
| router_type | Integer | 路由器类型: 0 - 中型，1 - 小型，2 - 大型，默认为 1 | No |
| vpc_network | String | VPC 网络地址范围，目前支持 192.168.0.0/16 或 172.16.0.0/16 。 注：此参数只在北京3区需要且是必填参数。 | No |
| count | Integer | 创建路由器的数量，默认是1 | No |
| security_group | String | 需要加载到路由器上的防火墙ID | No |
| zone | String | 区域 ID，注意要小写 | Yes |
| target_user | String | 目标用户 ID ，可用于主账号为其子账号创建资源。 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| routers | Array | 新创建的路由器 ID 列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=CreateRouters
&router_name=demo
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateRoutersResponse",
  "ret_code":0,
  "job_id":"j-i76waodo",
  "routers":[
    "rtr-s5nqo8mr"
  ]
}
```
