---
title: "CreateCache"
description: 
draft: false
---



创建一个缓存服务。目前缓存服务只能运行于私有网络中，在创建缓存之前，您需要有一个已连接到路由器的私有网络。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| vxnet | String | 缓存服务运行的私有网络ID | Yes |
| cache_size | Integer | 缓存服务节点内存大小，单位 GB. | Yes |
| cache_type | String | 缓存服务类型，目前支持 Redis 2.8.17 和 Memcached 1.4.13. | Yes |
| node_count | Integer | 缓存服务节点个数，默认为1. | No |
| cache_name | String | 缓存服务名称 | No |
| cache_parameter_group | String | 缓存服务配置组ID，如果不指定则为默认配置组。 | No |
| private_ips.n.cache_role | String | 缓存节点的角色，有效值为 “master” 和 “slave”。 | No |
| auto_backup_time | Integer | 自动备份时间(UTC 的 Hour 部分)，有效值0-23，任何大于23的整型值均表示关闭自动备份，默认值 99 | No |
| private_ips.n.private_ips | String | 为该角色缓存节点指定的IP列表, 如果该角色存在多个节点，IP之间”,” 号分隔，例如 “192.168.1.21,192.168.1.22”。 | No |
| cache_class | Integer | 性能型和高性能型缓存服务，性能型：0，高性能型：1 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters)

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
https://api.qingcloud.com/iaas/?action=CreateCache
&vxnet=vxnet-fbmcjfa
&cache_type=memcached1.4.13
&cache_size=1
&node_count=2
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateCacheResponse",
  "ret_code":0,
  "job_id":"j-bu6rb9sk",
  "cache_id":"c-55dwkqew",
  "cache_nodes":[
    "cn-kcoh9zui",
    "cn-btn18rwt"
  ]
}
```
