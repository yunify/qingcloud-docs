---
title: "ScheduleKeyDeletion"
description: 
draft: false
weight: 80
---

计划删除密钥。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| key_id         | string | 密钥ID                      | Yes      |
| pending_days   | int    | 等待时间。最小7天，最长30天 | No       |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| ret_code | int    | 返回码      |
| message  | string | 响应消息    |

**Example**

_Example Request_:

```
https://kms.api.qingcloud.com/?action=ScheduleKeyDeletion
&key_id=
&COMMON_PARAMS
```

_Example Response_:

```
{"message":"",
"ret_code":0}
```
