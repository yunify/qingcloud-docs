---
title: "CreateRouters"
description: 创建一个或多个 VPC 网络。
keyword: VPC 网络, 私有网络
weight: 1
draft: false
---



创建一个或多个 VPC 网络。 VPC 网络用于受管私有网络之间互联，并提供 DHCP 服务、端口转发、VPN 隧道服务等功能。

该 API 只负责 VPC 网络的创建工作，如果需要通过 VPC 网络将自己名下的受管私有网络连接起来，请查看 [_JoinRouter_](../join_router/)。

如果需要配置端口转发规则或打开VPN 隧道服务，请查看 [_AddRouterStatics_](../add_router_statics/) 和 [_UpdateRouters_](../update_routers/)。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| router_name | String |  VPC 网络名称 | No |
| router_type | Integer |  VPC 网络类型: 0 - 中型，1 - 小型，2 - 大型，默认为 1 | No |
| vpc_network | String | VPC 网络地址范围，目前支持 192.168.0.0/16 或 172.16.0.0/16 。 注：此参数只在北京3区需要且是必填参数。 | No |
| count | Integer | 创建 VPC 网络的数量，默认是1 | No |
| security_group | String | 需要加载到 VPC 网络上的防火墙ID | No |
| zone | String | 区域 ID，注意要小写 | Yes |
| target_user | String | 目标用户 ID ，可用于主账号为其子账号创建资源。 | No |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| routers | Array | 新创建的 VPC 网络 ID 列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=CreateRouters
&router_name=demo
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

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
