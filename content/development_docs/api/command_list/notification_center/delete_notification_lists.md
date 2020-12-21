---
title: "DeleteNotificationLists"
description: 
draft: false
---



删除通知列表。

注意，删除通知列表不会连带其中的通知项一起删除，这是为了将来可能会复用已创建过的通知项。

如果需要删通知项请调用 [_DeleteNotificationItems_](../delete_notification_items/)

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| notification_lists | Array | 要删除的通知列表 ID | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| notification_lists | Array | 被删除的通知列表 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeleteNotificationLists
&notification_lists.1=nl-xxxxx
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteNotificationListsResponse",
  "notification_lists":[
      "nl-xxxx"
  ],
  "ret_code":0
}
```
