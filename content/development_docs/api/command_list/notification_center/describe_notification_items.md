---
title: "DescribeNotificationItems"
description: 
draft: false
---



获取通知项列表。

可根据通知项 ID，通知列表 ID 或通知类型作过滤条件，来获取通知项的列表。 如果不指定任何过滤条件，默认返回你的所有通知项。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| notification_items | Array | 通知项 ID | No |
| notification_list | String | 通知列表 ID ，可返回指定通知列表中的通知项。 | No |
| notification_item_type | String | 通知项类型：email, phone, webhook | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| notification_items | Array | JSON 格式的列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的通知列表总数 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| notification_list_id | String | 通知列表 ID |
| notification_item_id | String | 通知列表名称 |
| content | String | 通知项内容，可以是邮箱地址，手机号或 webhook url |
| create_time | TimeStamp | 创建时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| verification_code | String | 验证码，可用于验证通知项 [_VerifyNotificationItem_](../verify_notification_item/) 。 如已完成验证，此码的值变成空字符串。 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeNotificationItems
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeNotificationItemsResponse",
  "notification_items":[
      {
          "verification_code":"xxxxxxxxxxxxxx",
          "verify_time":"2017-09-26T16:14:29Z",
          "content":"test@example.com",
          "create_time":"2017-09-26T16:14:29Z",
          "remarks":"tester1",
          "notification_item_id":"ni-xxxx",
          "notification_item_type":"email"
      }
  ],
  "total_count":1,
  "ret_code":0
}
```
