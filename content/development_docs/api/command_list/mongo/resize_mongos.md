---
title: "ResizeMongos"
description: 
draft: false
---



扩容指定的 Mongo 集群。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| mongos.n | String | Mongo ID | Yes |
| mongo_type | Integer | Mongo 配置型号，1-2核4G，2-4核8G，3-8核16G，4-8核32G | No |
| storage_size | Integer | Mongo 磁盘容量(GB)，用于存放数据和日志，最小10G，最大1000G，扩容时该值不能比原始容量小 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ResizeMongos
&mongos.1=mongo-9ues6uda
&mongo_type=2
&storage_size=20
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ResizeMongosResponse",
  "ret_code":0,
  "mongos":[
    "mongo-9ues6uda"
  ],
  "job_id":"j-tya0r88r"
}
```
