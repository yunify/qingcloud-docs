---
title: "ModifyMongoAttributes"
description: 
draft: false
---



修改 Mongo 集群相关属性值。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| mongo | String | Mongo ID | Yes |
| mongo_name | String | 集群名字 | No |
| description | String | 集群描述 | No |
| auto_backup_time | Integer | 自动备份时间点(UTC 时间的 Hour 部分)，有效值 0-23，任何大于23的整型值均表示关闭自动备份。 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ModifyMongoAttributes
&mongo=mongo-yaz6hmu8
&auto_backup_time=16
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyMongoAttributesResponse",
  "mongo":"mongo-yaz6hmu8",
  "ret_code":0
}
```
