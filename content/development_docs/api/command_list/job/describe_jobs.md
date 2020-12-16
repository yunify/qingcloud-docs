---
title: "DescribeJobs"
description: 
draft: false
---



获取一个或多个操作日志

可根据日志ID，动作，状态来获取日志列表。 如果不指定任何过滤条件，默认返回你触发的所有操作日志。 如果指定不存在的日志ID，或非法状态值，则会返回错误信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| jobs.n | String | 日志ID | No |
| status.n | String | 日志状态: pending, working, failed, successful | No |
| verbose | Integer | 是否返回冗长的信息，目前 verbose 只支持为 0。 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_set | Array | JSON 格式的日志数据列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的日志总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| job_id | String | 日志ID |
| job_action | String | 日志操作行为，对应着资源 API 文档中的 action 名 |
| create_time | TimeStamp | 日志创建时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| resource_ids | String | 此操作日志所涉及的资源信息，多个资源以空格分隔 |
| owner | String | 日志提供者ID |
| status | String | 日志状态，有效值为 pending, working, failed, successful<br/>pending：等待被执行<br/>working：执行中<br/>failed：执行失败<br/>successful：执行成功 |
| status_time | TimeStamp | 日志最近一次状态变更时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeJobs
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeJobsResponse",
  "total_count":1,
  "job_set":[
    {
      "job_id":"j-37amqany",
      "create_time":"2013-08-07T18:16:32Z",
      "resource_ids": "eip-1234abcd",
      "owner":"usr-1234abcd",
      "error_codes": "",
      "status":"successful",
      "status_time":"2013-08-17T08:16:33Z"
    }
  ],
  "ret_code":0
}
```
