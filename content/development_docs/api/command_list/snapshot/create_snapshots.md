---
title: "CreateSnapshots"
description: 
draft: false
---



为指定的资源创建备份。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resources.n | String | 需要创建备份的资源 ID 列表 | Yes |
| snapshot_name | String | 备份点名称 | No |
| is_full | Integer | 是否创建全量备份，1表示创建新的全量备份点，0表示由系统决定创建全量备份点还是增量备份点 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | Job ID |
| snapshots | Array | 新创建的备份 ID 列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateSnapshots
&resources.1=i-15ka7z7i
&resources.2=vol-k9015e6r
&zone=gd2
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateSnapshotsResponse",
  "job_id":"j-aj3b6pjl",
  "snapshots":[
    "ss-qhnolmyt",
    "ss-ibk50c1o"
  ],
  "ret_code":0
}
```
