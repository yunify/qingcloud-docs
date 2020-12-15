---
title: "CreateRDBFromSnapshot"
description: 
draft: false
---



从指定备份创建出一个全新的数据库集群。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| snapshot | String | Snapshot ID | Yes |
| vxnet | String | 私有网络 ID | Yes |
| rdb_type | Integer | 数据库型号，1 – 1核2G，2 – 2核4G，3 – 4核8G，4 – 8核16G，5 – 8核32G | Yes |
| rdb_username | String | 数据库用户名 | Yes |
| rdb_password | String | 数据库用户密码 | Yes |
| rdb_name | String | 数据库集群名称 | No |
| private_ips | Dict | 指定节点的IP，例如：[{“master”:”192.168.100.14”,”topslave”:”192.168.100.17”}] | No |
| description | String | 数据库集群描述 | No |
| auto_backup_time | Integer | 自动备份时间，有效值0-23，任何大于23的整型值均表示关闭自动备份，忽略的话会随机选择一个自动备份时间 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| rdb | String | 数据库集群 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateRDBFromSnapshot
&vxnet=vxnet-iwotxwf
&rdb_type=3
&rdb_username=foobar
&rdb_password=Passw0rd
&zone=pek3a
&snapshot=ss-gtyv25fc
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action": "CreateRDBFromSnapshotResponse",
  "ret_code": 0,
  "rdb": "rdb-rlfii5xm",
  "job_id": "j-dbbq0xeu"
}
```
