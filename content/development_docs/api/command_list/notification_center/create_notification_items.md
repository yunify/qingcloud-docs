---
title: "CreateNotificationItems"
description: 
draft: false
---



创建新的通知项。

注意，如果通知项的内容（content）是第一次创建，需要经过验证才能接收通知。 可参考 [_VerifyNotificationItem_](../verify_notification_item/) 。 如果已创建并验证过相同的内容，那么不需要再次验证。

创建通知项后，就可将其加入到通知列表中。可参考 [_CreateNotificationList_](../create_notification_list/) 和 [_ModifyNotificationListAttributes_](../modify_notification_list_attributes/)

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| notification_items | Array | 通知项信息，数组中每一项都是一个 Object ，包括：<br/>*   content: 通知项内容，可以是 邮箱地址、手机号、webhook url ，需对应下面的类型。<br/>*   notification_item_type: 通知项类型，可以是 email，phone, webhook<br/>*   remarks: 此通知项的备注<br/>如:<br/>{<br/>  "content":"test@example.com",<br/>  "notification_item_type":"email",<br/>  "remarks":"tester1"<br/>} | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| notification_items | Array | 新建的通知项列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateNotificationItems
&notification_items.1.content=test@example.com
&notification_items.1.notification_item_type=email
&notification_items.1.remarks=sysadmin1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateNotificationItemsResponse",
  "ret_code":0,
  "notification_items":[
    {
      "verified":0,
      "content":"test@example.com",
      "create_time":"2017-09-27T00:14:29",
      "remarks":"sysadmin1",
      "notification_item_id":"ni-xxxx",
      "notification_item_type":"email"
    }
  ]
}
```
