---
title: "DeleteNFVs"
description: 删除一个或多个网络组件(NFV)
weight: 20
draft: false
keyword: 青云, QingCloud, 云计算, API, NFV, NAT 网关, 网络组件
---



删除一个或多个网络组件(NFV)。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| nfvs.n | String | 网络组件的 ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |
| force | Integer | 是否强制删除0, 1 | No |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 删除网络组件的 job ID 号 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DeleteNFVs
&nfvs.1=nfv-1234abcd
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"DeleteNFVsResponse",
  "ret_code":0,
  "job_id":"j-0om6hgcokm5"
}
```
