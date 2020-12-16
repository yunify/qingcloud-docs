---
title: "CreateMongo"
description: 
draft: false
---



创建 Mongo 集群。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| vxnet | String | 私有网络 ID | Yes |
| mongo_version | String | MongoDB 版本，目前仅支持 3.0 | No |
| mongo_type | Integer | Mongo 配置型号，1 – 1核2G，2 – 2核4G，3 – 4核8G，4 – 8核16G，5 – 8核32G | Yes |
| storage_size | Integer | Mongo 存储容量(GB)，用于存放数据和日志，最小10G，最大1000G | Yes |
| mongo_name | String | Mongo 名称 | No |
| description | String | Mongo 描述 | No |
| auto_backup_time | Integer | 自动备份时间(UTC 的 Hour 部分)，有效值0-23，任何大于23的整型值均表示关闭自动备份，默认值 99 | No |
| private_ips | List of Dictionary | 私有网络 IP 地址；例如 [{“replica”: “192.168.100.2”, “priority0”: “192.168.100.3”}] | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| mongo | String | Mongo ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateMongo
&vxnet=vxnet-dls87x2
&mongo_type=1
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateMongoResponse",
  "ret_code":0,
  "mongo":"mongo-9ues6uda",
  "job_id":"j-8s3w969r"
}
```
