---
title: "VerifyNotificationItem"
description: 
draft: false
---



验证通知项。所有通知项都需要经过验证才能接收通知。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| notification_item_content | String | 要验证的通知项内容 | Yes |
| verification_code | String | 验证码 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=VerifyNotificationItem
&notification_item_content=test@example.com
&verification_code=xxxxxxxxxxxxxxx
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"VerifyNotificationItemResponse",
  "ret_code":0
}
```
