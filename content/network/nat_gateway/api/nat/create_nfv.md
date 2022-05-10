---
title: "CreateNFV"
description: 创建一个网络组件(NFV)
draft: false
weight: 1
keyword: 青云, QingCloud, 云计算, API, NFV, NAT 网关, 网络组件
---



创建一个网络组件(NFV)。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| nfv_type | Integer | 网络组件的类型，值为 1 时代表创建 NAT 网关 | Yes |
| nfv_spec | Integer | 网络组件的规格，可以是 1-3 ：<br/> 1 - 流量转发能力 1Mpps  <br/> 2 - 流量转发能力 2Mpps <br/> 3 - 流量转发能力 4Mpps | Yes |
| vxnets.n | String | 私有网络 ID，一个网络组件根据规格的大小可加入 2 - 4 个私有网络 | No |
| eips.n | String | 要绑定的公网 IP 地址， 一个网络组件可绑定的公网 IP 地址不超过10个 | No |
| description | String | 网络组件的描述信息 | No |
| place_group | String | 网络组件节点使用的安置组 | No |
| repl | Integer | 网络组件使用的副本策略 | No |
| nfv_name | String | 网络组件名称 | No |
| security_group | String | 网络组件所加入的私有网络所加载的安全组 ID，若未提供，则默认加载缺省安全组。 | No |
| hypervisor | String | 网络组件节点使用的虚拟化方式，可以使用 kvm 或者 lxc。 | No |
| zone | String | 区域 ID，注意要小写 | Yes |
| version | String | 网络组件版本号，1.0 或者 2.0 | Yes |
| vpc_router_id | String | 网络组件绑定的 VPC 路由 ID | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| nfv_id | String | 创建的网络组件ID |
| job_id | String | 创建一个网络组件(NFV) job ID 号 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=CreateNFV
&nfv_type=1
&nfv_spec=1
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"CreateNFVResponse",
  "nfv_id":"nfv-qealnq38",
  "job_id":"j-2i6yb7w0vny",
  "ret_code":0
}
```
