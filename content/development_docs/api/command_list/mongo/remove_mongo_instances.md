---
title: "RemoveMongoInstances"
description: 
draft: false
---



添加新节点到指定 Mongo 集群。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| mongo | String | Mongo ID | Yes |
| mongo_instances | Array | 节点 ID 列表 | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=RemoveMongoInstances
&mongo=mongo-3eykbc5x
&mongo_instances.1=mi-ka2nbtxz
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"RemoveMongoInstancesResponse",
  "ret_code":0,
  "mongo":"mongo-3eykbc5x",
  "job_id":"j-oihgma6b"
}
```
