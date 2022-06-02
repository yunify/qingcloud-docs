---
title: "DissociateEipsFromNFV"
description: 网络组件解绑一个或多个公网 IP
draft: false
weight: 3
keyword: 青云, QingCloud, 云计算, API, NFV, NAT 网关, 网络组件, 公网 IP
---



从一个网络组件解绑一个或多个公网 IP。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| nfv | String | 网络组件的 ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |
| eips.n | String | 将要解绑的公网 IP 的 ID | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 从一个网络组件解绑一个或多个公网IP job ID 号 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DissociateEipsFromNFV
&nfv=nfv-1234abcd
&eips.1=eip-ek3scgap
&eips.2=eip-ek4scgam
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"DissociateEipsFromNFVResponse",
  "ret_code":0,
  "job_id":"j-1234abcd"
}
```
