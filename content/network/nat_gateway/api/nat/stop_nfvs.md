---
title: "StopNFVs"
description: 关闭网络组件(NFV)
draft: false
weight: 11
keyword: 青云, QingCloud, 云计算, API, NFV, NAT 网关, 网络组件
---



关闭一个或多个网络组件(NFV)。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| nfvs.n | String | 网络组件的 ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 关闭一个或多个网络组件(NFV) job ID 号 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=StopNFVs
&nfvs.1=nfv-1234abcd
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"StopNFVsResponse",
  "ret_code":0,
  "job_id":"j-0om6hgcokm4"
}
```
