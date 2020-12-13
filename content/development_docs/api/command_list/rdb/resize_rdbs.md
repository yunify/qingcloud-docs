---
title: "ResizeRDBs"
description: 
draft: false
---



扩容指定的数据库集群。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| rdbs.n | String | 数据库集群 ID | Yes |
| rdb_type | Integer | 数据库型号，1-2核4G，2-4核8G，3-8核16G，4-8核32G | No |
| storage_size | Integer | 数据库磁盘容量(GB)，用于存放数据和日志，最小50G，最大1000G，扩容时该值不能比原始容量小 | No |
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
https://api.qingcloud.com/iaas/?action=ResizeRDBs
&rdbs.1=rdb-y76ik96v
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ResizeRDBsResponse",
  "rdbs":[
    "rdb-y76ik96v"
  ],
  "job_id":"j-iox6lwlc",
  "ret_code":0
}
```
