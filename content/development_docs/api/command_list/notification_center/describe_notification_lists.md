---
title: "DescribeNotificationLists"
description: 
draft: false
---



获取通知列表。

可根据 ID，名称作过滤条件，来获取通知列表。 如果不指定任何过滤条件，默认返回你的所有通知列表。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| notification_lists | Array | 通知列表 ID | No |
| search_word | String | 通知列表名称关键字 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| notification_list_set | Array | JSON 格式的列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的通知列表总数 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| notification_list_id | String | 通知列表 ID |
| notification_list_name | String | 通知列表名称 |
| items | Array | 通知列表中的通知项 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeNotificationLists
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeNotificationListsResponse",
  "notification_list_set":[
      {
          "notification_list_id":"nl-xxxxx",
          "notification_list_name":"sysadmins",
          "owner":"usr-xxxx",
          "create_time":"2017-09-01 12:22:25",
          "items":[{
              "notification_item_id":"ni-3yfxba5m",
              "notification_item_name":"sysadmins",
              "content":"demo@example.com",
              "remarks":"demo",
              "create_time":"2017-09-01 12:22:23"
          }]
      }
  ],
  "total_count":1,
  "ret_code":0
}
```
