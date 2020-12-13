---
title: "CreateTempRDBInstanceFromSnapshot"
description: 
draft: false
---



从备份创建一个临时性数据库实例，并将之添加到指定的数据库集群。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| rdb | String | 数据库集群 ID | Yes |
| snapshot | String | 备份 ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateTempRDBInstanceFromSnapshot
&rdb=rdb-y76ik96v
&snapshot=ss-k2onax29
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateTempRDBInstanceFromSnapshotResponse",
  "rdb":"rdb-y76ik96v",
  "job_id":"j-y8afp7ba",
  "ret_code":0
}
```
