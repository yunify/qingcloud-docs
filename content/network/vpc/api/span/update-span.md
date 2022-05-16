---
title: "UpdateSpan"
description: SPAN 变更应用到所有云服务器。
keyword: SPAN, 网络流量镜像
weight: 10
draft: false
---

在修改 SPAN 属性后使用，应用变更到所有云服务器。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| span | String | SPAN ID | Yes |
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
https://api.qingcloud.com/iaas/?action=UpdateSpanMembers
&span=span-1234abcd
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"UpdateSpanResponse",
  "job_id":"j-1234abcd",
  "ret_code":0
}
```
