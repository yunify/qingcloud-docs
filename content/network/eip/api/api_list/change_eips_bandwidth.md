---
title: "ChangeEipsBandwidth"
description: 变更公网 IP 带宽。
draft: false
weight: 7
keyword: 公网 IP API, 公网带宽
---

动态改变一个或多个公网 IP 的带宽，改变后计费系统会同步更新。

无论公网 IP 当前处于“可用”（ available ）还是“绑定中” （ associated ）状态，都可以随时改变带宽，并实时生效。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| eips.n | String | 公网IP的ID | Yes |
| bandwidth | Integer | 公网IP带宽，单位是 Mbps | Yes |
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
https://api.qingcloud.com/iaas/?action=ChangeEipsBandwidth
&eips.1=eip-r4jnbhui
&bandwidth=5
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"ChangeEipsBandwidthResponse",
  "job_id":"j-d123j12j",
  "ret_code":0
}
```
