---
title: "CreateCacheFromSnapshot"
description: 
draft: false
---



由备份节点创建一个新的缓存服务。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| snapshot | String | 备份ID | Yes |
| vxnet | String | 要加入的私网ID | Yes |
| node_count | Integer | 缓存服务节点个数，默认为1. | No |
| cache_name | String | 缓存服务名称 | No |
| cache_parameter_group | String | 缓存服务配置组ID，如果不指定则为默认配置组。 | No |
| auto_backup_time | Integer | 自动备份时间(UTC 的 Hour 部分)，有效值0-23，任何大于23的整型值均表示关闭自动备份，默认值 99 | No |
| private_ips.n.cache_role | String | 缓存节点的角色，有效值为 “master” 和 “slave”。 | No |
| private_ips.n.private_ips | String | 为该角色缓存节点指定的IP列表, 如果该角色存在多个节点，IP之间”,” 号分隔，例如 “192.168.1.21,192.168.1.22”。 | No |
| cache_class | Integer | 性能型和高性能型缓存服务，性能型：0，高性能型：1 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| cache_id | String | 创建的缓存服务ID |
| cache_nodes | Array | 创建的缓存服务的节点ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateCacheFromSnapshot
&snapshot=ss-6pzcu9cc
&vxnet=vxnet-fbmcjfa
&node_count=2
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateCacheFromSnapshotResponse",
  "ret_code":0,
  "job_id":"j-bu6rb9sk",
  "cache_id":"c-55dwkqew",
  "cache_nodes":[
    "cn-kcoh9zui",
    "cn-btn18rwt"
  ]
}
```
