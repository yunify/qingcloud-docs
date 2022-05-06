---
title: "ModifyNFVAttributes"
description: 修改网络组件属性
draft: false
weight: 15
keyword: 青云, QingCloud, 云计算, API, NFV, NAT 网关, 网络组件
---



修改一个网络组件的一个或多个属性。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| nfv | String | 网络组件的 ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |
| nfv_name | String | 网络组件名称 | No |
| description | String | 描述信息 | No |
| hypervisor | String | hypervisor 类型，当前支持 kvm 和 bm, 默认是 kvm | No |
| new_zone | String | 新的区域 | No |
| cluster_mode | String | 新的集群模式 | No |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 修改一个网络组件的一个或多个属性 job ID 号 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=ModifyNFVAttributes
&nfv=nfv-1234abcd
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"ModifyNFVAttributesResponse",
  "ret_code":0,
  "job_id":"j-1234abcd"
}
```
