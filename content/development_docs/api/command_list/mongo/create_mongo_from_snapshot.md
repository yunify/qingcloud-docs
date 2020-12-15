---
title: "CreateMongoFromSnapshot"
description: 
draft: false
---



从指定备份创建一个新的 Mongo 集群。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| vxnet | String | 私有网络 ID | Yes |
| mongo_type | Integer | Mongo 配置型号，1-2核4G，2-4核8G，3-8核16G，4-8核32G | Yes |
| mongo_name | String | Mongo 名称 | No |
| description | String | Mongo 描述 | No |
| auto_backup_time | Integer | 自动备份时间(UTC 时间的 Hour 部分)，有效值0-23，任何大于23的整型值均表示关闭自动备份，默认值 99 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| mongo | String | 数据库集群 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateMongoFromSnapshot
&vxnet=vxnet-dls87x2
&mongo_type=1
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateMongoFromSnapshotResponse",
  "ret_code":0,
  "mongo":"mongo-1kor888f",
  "job_id":"j-xt1dim5i"
}
```
