---
title: "ResizeNFV"
description: 调整网络组建规格类型
draft: false
weight: 8
keyword: 青云, QingCloud, 云计算, API, NFV, NAT 网关, 网络组件
---



扩容或缩容一个网络组件。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| nfv | String | 网络组件的 ID | Yes |
| nfv_spec | Integer | 网络组件的规则，可以是 1-3 | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 缩容或者扩容网络组件的 job ID 号 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=ResizeNFV
&nfvs.1=nfv-1234abcd
&nfv_spec=2
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"ResizeNFVResponse",
  "ret_code":0,
  "job_id":"j-0om6hgcokm5"
}
```
