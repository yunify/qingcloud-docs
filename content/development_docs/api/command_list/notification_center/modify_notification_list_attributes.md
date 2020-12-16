---
title: "ModifyNotificationListAttributes"
description: 
draft: false
---



修改通知列表基本属性。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| notification_list_id | String | 通知列表 ID | Yes |
| notification_list_name | String | 通知列表要修改的新名称 | No |
| notification_items | Array | 通知列表要修改的新通知项 ID 列表 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| notification_list_id | String | 通知列表 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ModifyNotificationListAttributes
&notification_list_id=nl-xxxxx
&notification_list_name=new_sysadmins
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyNotificationListAttributesResponse",
  "ret_code":0,
  "notification_list_id":"nl-xxxx"
}
```
