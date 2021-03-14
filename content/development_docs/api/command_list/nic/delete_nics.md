---
title: "DeleteNics"
description: 
draft: false
---



删除一个或多个网卡

删除网卡的前提是没有云服务器挂载这个网卡。请在删除网卡之前，先从云服务器卸载。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| Nics.n | String | 网卡 ID | Yes |
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
https://api.qingcloud.com/iaas/?action=DeleteNics
&nics.1="52:54:00:00:12:34",
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteNicsResponse",
  "ret_code":0
}
```
