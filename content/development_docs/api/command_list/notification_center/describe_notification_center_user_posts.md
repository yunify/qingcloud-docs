---
title: "DescribeNotificationCenterUserPosts"
description: 
draft: false
---



获取消息中心的消息列表，包括产品发布消息，余额不足提醒，故障通知等。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| post_type.n | Array | 消息类型，产品消息 - products ，故障通知 - failures，默认返回所有消息。 | No |
| status.n | Array | 消息状态，未读 - new ， 已读 - read | No |
| offset | Integer | 数据偏移量，默认为 0 | No |
| limit | Integer | 返回数据长度，默认为 20 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| notification_center_post_set | Array | JSON 格式的数据列表，每项数据可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的数据总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| notification_center_post_id | String | 消息 ID |
| status | String | 消息状态 |
| create_time | String | 消息创建时间 |
| post_type | String | 消息类型 |
| title | String | 消息标题 |
| content | String | 消息内容 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeNotificationCenterUserPosts
&post_type.1=failures
&status.1=new
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeNotificationCenterUserPostsResponse",
  "total_count":1,
  "notification_center_post_set":[
    {
      "notification_center_post_id": "nfp-rjrh06un",
      "create_time":"2016-07-31T02:53:46Z",
      "status":"new",
      "post_type":"failures",
      "title":"网络故障通知",
      "content":"某运营商线路因设备割接会有短时抖动，…… "
    }
  ],
  "ret_code":0
}
```
