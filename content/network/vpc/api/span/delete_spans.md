---
title: "DeleteSpans"
description: 删除一个或多个SPAN
keyword: SPAN, 网络流量镜像
weight: 12
draft: false
---

删除一个或多个 SPAN。

删除 SPAN 的前提是没有资源依赖这个 SPAN。请在删除 SPAN 之前，先删除所有 SPAN成 员。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| spans.n | String | SPAN ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DeleteSpans
&spans.1=span-1234abcd
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"DeleteSpansResponse",
  "ret_code":0
}
```
