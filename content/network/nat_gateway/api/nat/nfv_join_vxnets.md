---
title: "NFVJoinVxnets"
description: 网络组件绑定一个或多个私有网络
draft: false
weight: 13
keyword: 青云, QingCloud, 云计算, API, NFV, NAT 网关, 网络组件, 私有网络
---



一个网络组件绑定一个或多个私有网络。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| nfv | String | 网络组件的 ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |
| vxnets.n | String | 私有网络 ID | Yes |
| security_group | String | 防火墙 ID | No |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 一个网络组件绑定一个或多个私有网络的 job ID 号 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=NFVJoinVxnets
&nfv=nfv-1234abcd
&vxnets.1=vxnet-123
&vxnets.2=vxnet-234
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"NFVJoinVxnetsResponse",
  "ret_code":0,
  "job_id":"j-1234abcd"
}
```
