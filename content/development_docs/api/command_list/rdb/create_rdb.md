---
title: "CreateRDB"
description: 
draft: false
---



创建一个数据库集群。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| vxnet | String | 私有网络 ID | Yes |
| rdb_engine | String | 数据库类型，支持 mysql 和 psql，注意该值是大小写敏感的；默认值为 mysql | No |
| engine_version | String | 对应数据的版本，mysql 支持 5.5，psql 支持 9.4；默认值为 5.5 | No |
| rdb_username | String | 数据库用户名 | Yes |
| rdb_password | String | 数据库用户密码 | Yes |
| rdb_type | Integer | 数据库型号，1 – 1核2G，2 – 2核4G，3 – 4核8G，4 – 8核16G，5 – 8核32G | Yes |
| storage_size | Integer | 数据库磁盘容量(GB)，用于存放数据和日志，最小10G，最大1000G | Yes |
| rdb_name | String | 数据库集群名称 | No |
| private_ips | Dict | 指定节点的IP，例如：[{“master”:”192.168.100.14”,”topslave”:”192.168.100.17”}] | No |
| description | String | 数据库集群描述 | No |
| auto_backup_time | Integer | 自动备份时间，有效值0-23，任何大于23的整型值均表示关闭自动备份，忽略的话会随机选择一个自动备份时间 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| rdb | String | 数据库集群 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateRDB
&vxnet=vxnet-iwotxwf
&rdb_username=foobar
&rdb_password=Passw0rd
&rdb_type=3
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action": "CreateRDBResponse",
  "ret_code": 0,
  "rdb": "rdb-rlfii5xm",
  "job_id": "j-dbbq0xeu"
}
```
