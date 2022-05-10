---
title: "DissociateEips"
description: 从云资源上解绑公网 IP。
draft: false
weight: 5
keyword: 公网 IP API,解绑公网 IP
---

将一个或多个“绑定中”（ associated ）状态的公网 IP 解绑， 解绑后会变回“可用”（ available ）状态。

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
https://api.qingcloud.com/iaas/?action=DissociateEips
&eips.1=eip-12djpg8q
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"DissociateEipsResponse",
  "owner":"usr-cT9nUFvT",
  "job_id":"j-bm6ym3r8",
  "ret_code":0
}
```
