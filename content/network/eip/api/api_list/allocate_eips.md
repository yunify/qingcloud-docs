---
title: "AllocateEips"
description: 申请公网 IP。
draft: false
weight: 1
keyword: 公网 IP API,申请公网 IP,创建公网 IP
---

从 IP 池中分配一个公网 IP，分配时可指定带宽、数量、IP 组、名称及是否需要备案。分配后的公网 IP 可跟云服务器或路由器绑定。

>**说明**
>
>无论公网 IP 是否与其他资源绑定，一旦分配成功，此 IP 的计费就会开始。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| bandwidth | Integer | 公网 IP 带宽上限，单位为 Mbps | Yes |
| billing_mode | String | 公网 IP 计费模式：bandwidth 按带宽计费，traffic 按流量计费，默认是 bandwidth | No |
| associate_mode | Integer | 公网 IP 绑定模式：0 为外部绑定，1 为内部绑定，默认是 0 | No |
| eip_name | String | 公网 IP 名称 | No |
| count | Integer | 创建公网 IP 的数量，默认是 1 | No |
| need_icp | Integer | 是否需要备案，1 为需要，0 为不需要，默认是 0 | No |
| target_user | String | 目标用户 ID ，可用于主账号为其子账号创建资源。 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| eips | Array | 分配成功的公网 IP 列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=AllocateEips
&bandwidth=2
&billing_mode=bandwidth
&eip_name=dev
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"AllocateEipsResponse",
  "eips":["eip-j38f2h3h"]
  "ret_code":0
}
```
