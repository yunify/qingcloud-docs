---
title: "ChangeEipsBillingMode"
description: 变更公网 IP 计费模式。
draft: false
weight: 8
keyword: 公网 IP API, 公网 IP 计费模式
---

动态改变一个或多个公网 IP 的计费模式，改变后计费系统会及时更新。

> **警告**
>
> 计费模式不能频繁改动，每个 IP 24 小时内只能改动一次。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| eips.n | String | 公网 IP 的 ID | Yes |
| billing_mode | String | 公网 IP 计费模式：bandwidth 按带宽计费，traffic 按流量计费，默认是 bandwidth | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=ChangeEipsBillingMode
&eips.1=eip-r4jnbhui
&billing_mode=traffic
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"ChangeEipsBillingModeResponse",
  "job_id":"j-d123j12j",
  "ret_code":0
}
```
