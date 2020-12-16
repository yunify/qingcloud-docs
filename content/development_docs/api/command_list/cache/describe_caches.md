---
title: "DescribeCaches"
description: 
draft: false
---



获取一个或多个缓存服务。

可根据缓存服务ID，状态，缓存服务名称作过滤条件，来获取缓存服务列表。 如果不指定任何过滤条件，默认返回你的所有缓存服务。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| caches.n | String | 缓存服务ID | No |
| status.n | String | 缓存服务状态: pending, active, deleted, suspended, ceased | No |
| cache_type.n | String | 缓存服务类型: 目前只支持redis2.8.17, memcached1.4.13 | No |
| search_word | String | 搜索关键词，支持缓存服务ID，缓存服务名称 | No |
| tags.n | String | 按照标签ID过滤, 只返回已绑定某标签的资源 | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则返回缓存服务相关其他资源的详细数据。 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| cache_set | Array | JSON 格式的缓存服务数据列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的缓存服务总数 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| cache_id | String | 缓存服务ID |
| cache_name | String | 缓存服务名称 |
| cache_type | String | 缓存服务类型, 目前支持 “Redis2.8.17” 和 “Memcached1.4.13” |
| cache_port | Integer | 缓存服务端口 |
| cache_size | Integer | 缓存服务节点内存大小，单位GB |
| node_count | Integer | 缓存服务节点个数 |
| description | String | 缓存服务描述 |
| nodes | Array |

缓存服务的节点列表，每项数据格式为:

```
{
  "status":"active",
  "cache_type":"redis2.8.17",
  "transition_status":"",
  "cache_id":"c-bhkx8e8p",
  "cache_node_id":"cn-raia8uf8",
  "cache_role":"master",
  "create_time":"2015-04-29T12:01:29Z",
  "cache_node_name":"",
  "status_time":"2015-04-29T12:02:45Z",
  "alarm_status":"",
  "private_ip":"192.168.100.2"
}
```

只有在请求参数 verbose=1 时才会返回此信息。

 |
| auto_backup_time | Integer | 自动备份时间，取值范围为0-23，例如 0 表示UTC时间 0 - 1 点，-1 为禁用自动备份。 |
| is_applied | Integer | 是否已更新配置，1为已更新，0为还未更新。 |
| status | String | 缓存服务状态, 有效值为pending, active, stopped, suspended, deleted, ceased。<br/>pending： 等待被创建<br/>active： 运行中<br/>stopped： 已关机<br/>suspended： 由于欠费, 已被暂停使用<br/>deleted： 已被删除, 但处于此状态的缓存服务在2小时之内仍可以被恢复为 active 状态<br/>ceased： 已被彻底删除, 处于此状态的缓存服务无法恢复 |
| transition_status | String | 缓存服务过渡状态, 有效值为creating, starting, stopping, updating, suspending, resuming, deleting。<br/>creating： 创建中, 由 pending 状态变成 active 状态<br/>starting： 启动中, 由 stopped 状态变成 active 状态<br/>stopping： 关闭中, 由 active 状态变成 stopped 状态<br/>updating： 更新中<br/>suspending： 欠费暂停中, 由 active/stopped 状态变成 suspended 状态<br/>resuming： 恢复中, 由 suspended 状态变成 active 状态<br/>deleting： 删除中, 由 active/stopped/suspended 状态变成 deleted 状态 |
| vxnet | Dict | 

与缓存服务加入的私有网络信息，数据格式为:

```
{
  "vxnet_name":"test",
  "vxnet_id":"vxnet-fbmcjfa"
}
```

 |
| create_time | TimeStamp | 缓存服务创建时间, 为UTC时间, 格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| status_time | TimeStamp | 缓存服务最近一次状态变更时间, 为UTC时间, 格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| security_group_id | String | 缓存服务所用的防火墙ID。 |
| cache_parameter_group_id | String | 缓存服务所用的缓存配置组ID。 |
| max_memory | Integer | 缓存服务节点可用的最大内存，单位为Bytes。 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeCaches
&caches.1=c-3kxcqnif
&status.1=active
&verbose=1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeCachesResponse",
  "total_count":1,
  "cache_set":[
    {
      "status":"active",
      "cache_port":6379,
      "is_applied":1,
      "description":"",
      "auto_backup_time":17,
      "cache_type":"redis2.8.17",
      "lastest_snapshot_time":"2015-05-01T07:55:31Z",
      "cache_parameter_group_id":"cpg-vbqdarr2",
      "sub_code":0,
      "transition_status":"",
      "max_memory":644245094,
      "security_group_id":"",
      "cache_size":1,
      "create_time":"2015-05-01T07:07:06Z",
      "cache_id":"c-3kxcqnif",
      "status_time":"2015-05-01T07:08:34Z",
      "nodes":[
        {
          "status":"active",
          "cache_type":"redis2.8.17",
          "transition_status":"",
          "cache_id":"c-3kxcqnif",
          "cache_node_id":"cn-rpcd8zwk",
          "cache_role":"master",
          "create_time":"2015-05-01T07:07:06Z",
          "cache_node_name":"node 1",
          "status_time":"2015-05-01T07:08:33Z",
          "alarm_status":"",
          "private_ip":"192.168.100.3"
        },
        {
          "status":"active",
          "cache_type":"redis2.8.17",
          "transition_status":"",
          "cache_id":"c-3kxcqnif",
          "cache_node_id":"cn-5ry0ma0j",
          "cache_role":"slave",
          "create_time":"2015-05-01T07:07:06Z",
          "cache_node_name":"node 2",
          "status_time":"2015-05-01T07:08:28Z",
          "alarm_status":"",
          "private_ip":"192.168.100.2"
        }
      ],
      "cache_name":"Cache Service",
      "node_count":2,
      "vxnet":{
        "vxnet_name":"test",
        "vxnet_id":"vxnet-fbmcjfa"
      }
    }
  ],
  "ret_code":0
}
```
