---
title: "DeleteSnapshots"
description: 
draft: false
---



删除备份。请注意，当删除一条备份链中某个增量备份点之后，该增量备份点后的所有备份点都会被自动删除， 并且该操作是不可逆的。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| snapshots.n | String | 待删除备份 ID 列表 | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeleteSnapshots
&snapshots.1=ss-qhnolmyt
&snapshots.2=ss-ibk50c1o
&zone=gd2
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteSnapshotsResponse",
  "job_id":"j-vijsvn8h",
  "ret_code":0
}
```
