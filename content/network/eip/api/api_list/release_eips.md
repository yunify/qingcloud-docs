---
title: "ReleaseEips"
description: 释放公网 IP。
draft: false
weight: 15
keyword: 公网 IP API,
---

将一个或多个公网 IP 释放回 IP 池，同时相关 IP 的计费也会停止。

被释放的 IP 处于须处于“可用”（ available ）状态。如果公网 IP 正与其他资源绑定，则需要先解绑才能释放。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| eips.n | String | 公网 IP 的 ID | Yes |
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
https://api.qingcloud.com/iaas/?action=ReleaseEips
&eips.1=eip-uydrnlax
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"ReleaseEipsResponse",
  "job_id":"j-bm6ym3r8",
  "ret_code":0
}
```
