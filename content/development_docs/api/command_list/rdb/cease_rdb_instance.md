---
title: "CeaseRDBInstance"
description: 
draft: false
---



销毁指定的数据库实例，目前只能销毁临时性数据库实例。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| rdb | String | 数据库集群 ID | Yes |
| rdb_instance | String | 数据库实例 ID | Yes |
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
https://api.qingcloud.com/iaas/?action=CeaseRDBInstance
&rdb=rdb-y76ik96v
&rdb_instance=rmi-5v9hz8h9
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CeaseRDBInstanceResponse",
  "rdb":"rdb-y76ik96v",
  "rdb_instance":"rmi-5v9hz8h9",
  "job_id":"j-y8afp7ba",
  "ret_code":0
}
```
