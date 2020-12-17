---
title: "DeleteNotificationItems"
description: 
draft: false
---



彻底删除通知项。

注意如果删除了通知项，下次再创建时需要重新做验证。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| notification_items | Array | 要删除的通知项 ID | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| notification_items | Array | 被删除的通知项 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeleteNotificationItems
&notification_items.1=ni-xxxxx
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteNotificationItemsResponse",
  "notification_items":[
      "ni-xxxx"
  ],
  "ret_code":0
}
```
