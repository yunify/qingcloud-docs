---
title: "DescribeSubUsers"
description: 
draft: false
---



获取符合条件的子帐户信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| users.n | String | 子帐户的 ID 列表 | No |
| status | String | 子帐户的状态：active - 活跃的；disabled - 禁用的；deleted - 删除的 | No |
| offset | Integer | 结果集偏移量，默认为0 | No |
| limit | Integer | 结果集长度，默认为20 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| user_set | Array | 返回的子帐户列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 符合指定过滤条件的子帐户总数量 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| user_id | String | 帐户 ID |
| user_name | String | 帐户名 |
| create_time | TimeStamp | 帐户创建时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| email | String | 登录邮箱 |
| zones | String | 帐户可访问的区域列表 |
| status | String | 帐户状态<br/>active： 帐户可正常访问服务<br/>disabled： 帐户被禁止访问服务 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeSubUsers
&limit=20
&offset=0
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeSubUsersResponse",
  "total_count":2,
  "user_set":[
    {
      "status":"active",
      "user_id":"usr-EttbFmBc",
      "nologin":0,
      "zones":[
        "gd2"
      ],
      "create_time":"2014-03-23T18:08:43Z",
      "user_name":"guest2@guest",
      "email":"guest@test.com#guest2",
    },
    {
      "status":"active",
      "user_id":"usr-K3c2gpjq",
      "nologin":1,
      "zones":[
        "gd2"
      ],
      "create_time":"2014-03-23T17:51:18Z",
      "user_name":"guest1",
      "email":"guest@test.com#guest1",
    }
  ],
  "ret_code":0
}
```
