---
title: "DescribeSnapshots"
description: 
draft: false
---



获取指定资源的所有备份。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| snapshots.n | String | 待获取的备份 ID 列表 | No |
| resource_id | String | 按资源 ID 进行过滤 | No |
| snapshot_type | Integer | 按备份类型过滤，0表示获取增量备份，1表示获取全量备份 | No |
| status.n | String | 备份状态: pending, available, suspended, deleted, ceased | No |
| search_word | String | 搜索关键词 | No |
| tags.n | String | 按照标签ID过滤, 只返回已绑定某标签的资源 | No |
| verbose | Integer | verbose level, 1表示返回备份的详细信息 | No |
| offset | Integer | 结果集偏移量，默认为0 | No |
| limit | Integer | 结果集长度，默认为20 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| snapshot_set | Array | JSON 格式的备份列表, 每项参数可见下面 [Response Item](#response-item) |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| snapshot_id | String | 备份ID |
| snapshot_name | String | 备份名称 |
| description | String | 备份描述 |
| snapshot_type | String | 备份类型, 0 为增量备份点，1 为全量备份点。 |
| status | String | 备份状态, 有效值为pending, available, suspended, deleted, ceased。<br/>pending： 等待被创建<br/>available： 可用<br/>suspended： 由于欠费, 已被暂停使用<br/>deleted： 已被删除, 但处于此状态的全量备份点在2小时之内仍可以被恢复为 available 状态。注意增量备份点删除之后无法恢复。<br/>ceased： 已被彻底删除, 处于此状态的备份无法恢复 |
| transition_status | String | 备份过渡状态, 有效值为creating, suspending, resuming, deleting, recovering。<br/>creating： 创建中, 由 pending 状态变成 available 状态<br/>suspending： 欠费暂停中, 由 available 状态变成 suspended 状态<br/>resuming： 恢复中, 由 suspended 状态变成 available 状态<br/>deleting： 删除中, 由 available/suspended 状态变成 deleted 状态<br/>recovering： 恢复中, 由 deleted 状态变成 available 状态 |
| create_time | TimeStamp | 备份创建时间, 为UTC时间, 格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| status_time | TimeStamp | 备份最近一次状态变更时间, 为UTC时间, 格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| snapshot_time | TimeStamp | 备份点的时间, 当同时为多个资源创建备份时，他们的备份点时间是相同的。为UTC时间, 格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| is_taken | Integer | 备份是否已经完成捕获动作，0 为正在捕获中，1 为已经完成捕获。当对运行的磁盘进行备份操作时，为了保证磁盘数据的一致性，在完成捕获前，不要对磁盘进行写操作。 |
| is_head | Integer | 是否为当前备份点，0 为不是当前备份点，1 为是当前备份点。 |
| root_id | String | 所在备份链的全量备份点 ID。 |
| parent_id | String | 所在备份链的父备份点 ID。 |
| size | Integer | 该备份点占用的存储空间，单位为 MB |
| total_size | Integer | 该备份链所占用的总存储空间，单位为 MB。只有全量备份点才有这个字段。 |
| total_count | Integer | 该备份链的备份点个数。只有全量备份点才有这个字段。 |
| lastest_snapshot_time | TimeStamp | 该备份链的最近一次备份时间, 只有全量备份点才有这个字段。为UTC时间, 格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeSnapshots
&zone=gd2
&limit=2
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeSnapshotsResponse",
  "snapshot_set":[
    {
      "status":"available",
      "resource":{
        "resource_name":"",
        "resource_type":"volume",
        "resource_id":"vom-s1hnvwyh"
      },
      "snapshot_time":"2014-03-11T15:36:15Z",
      "is_head":1,
      "root_id":"ss-mtlngntb",
      "sub_code":0,
      "snapshot_type":0,
      "parent_id":"ss-mtlngntb",
      "snapshot_name":"",
      "create_time":"2014-03-11T15:47:34Z",
      "snapshot_id":"ss-z9y03ggk",
      "status_time":"2014-03-11T15:47:34Z",
      "size":1,
      "description":null
    },
    {
      "status":"deleted",
      "resource":{
        "resource_name":"",
        "resource_type":"volume",
        "resource_id":"vom-2cwmmo5t"
      },
      "snapshot_time":"2014-03-11T14:52:10Z",
      "is_head":1,
      "root_id":"ss-69wldt5b",
      "total_size":5242880,
      "total_count":1,
      "sub_code":0,
      "snapshot_type":1,
      "parent_id":"self",
      "snapshot_name":"",
      "create_time":"2014-03-11T15:04:45Z",
      "head_chain":1,
      "snapshot_id":"ss-69wldt5b",
      "status_time":"2014-03-11T15:58:09Z",
      "size":5242880,
      "lastest_snapshot_time":"2014-03-11T14:52:10Z",
      "description":null
    }
  ],
  "ret_code":0,
  "total_count":25
}
```
