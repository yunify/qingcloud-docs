---
title: "ApplySnapshots"
description: 
draft: false
---



回滚到指定备份点。请注意，为了保证回滚的安全性，当回滚的资源为运行的云服务器，或者为绑定在运行云服务器上的硬盘时，该操作会导致云服务器重启。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| snapshots.n | String | 待回滚的备份 ID 列表 | Yes |
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
https://api.qingcloud.com/iaas/?action=ApplySnapshots
&snapshots.1=ss-wtthl1qq
&zone=gd2
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ApplySnapshotsResponse",
  "job_id":"j-mra6js1z",
  "ret_code":0
}
```
