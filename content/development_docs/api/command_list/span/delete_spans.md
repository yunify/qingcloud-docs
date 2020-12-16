---
title: "DeleteSpans"
description: 
draft: false
---



删除一个或多个SPAN

删除SPAN的前提是没有资源依赖这个SPAN。请在删除SPAN之前，先删除所有SPAN成员。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| spans.n | String | SPAN ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DeleteSpans
&spans.1=span-1234abcd
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteSpansResponse",
  "ret_code":0
}
```
