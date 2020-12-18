---
title: "CreateNotificationList"
description: 
draft: false
---



创建新的通知列表。

在创建通知列表前，需先创建通知项，请参见 [_CreateNotificationItems_](../create_notification_items/)

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| notification_list_name | String | 通知列表名称 | Yes |
| notification_items | Array | 通知列表中的通知项 ID | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| notification_list_id | String | 新建的通知列表 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateNotificationList
&notification_list_name=sysadmins
&notification_items.1=ni-xxxxx
&notification_items.2=ni-xxxxx
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateNotificationListResponse",
  "ret_code":0,
  "notification_list_id":"nl-xxxx"
}
```
