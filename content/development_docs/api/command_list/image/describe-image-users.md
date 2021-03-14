---
title: "DescribeImageUsers"
description: 
draft: false
---



可根据镜像ID, 查询该镜像分享给的用户的列表

如果指定不存在的镜像ID，或非法状态值，则会返回错误信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| image_id | String | 镜像ID | Yes |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| image_user_set | Array | JSON 格式的镜像数据列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| image_id | String | 镜像ID |
| user | Dict |用户的信息<br/>email: 用户的邮箱<br/>user_id: 用户的ID |
| create_time | TimeStamp | 创建时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeImageUsers&image_id=img-c5hx2ay5
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeImageUsersResponse",
  "image_user_set":[
    {
      "image_id":"img-c5hx2ay5",
      "create_time":"2015-12-10T07:02:52Z",
      "user":{
        "user_id":"usr-kXg2pqJb",
        "email":"steven@gmail.com"
      }
    },
    {
      "image_id":"img-c5hx2ay5",
      "create_time":"2015-12-10T07:14:12Z",
      "user":{
        "user_id":"usr-V9iGGGQB",
        "email":"steven@foxmail.com"
      }
    }
  ],
  "ret_code":0,
  "total_count":2
}
```
