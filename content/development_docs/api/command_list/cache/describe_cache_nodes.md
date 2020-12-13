---
title: "DescribeCacheNodes"
description: 
draft: false
---



获取一个或多个缓存服务节点信息。

可根据缓存服务ID，缓存服务节点ID，状态，缓存服务节点名称作过滤条件，来获取缓存服务节点列表。 如果不指定任何过滤条件，默认返回你的所有缓存服务节点。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cache | String | 缓存服务ID | No |
| cache_nodes.n | String | 缓存服务节点ID | No |
| status.n | String | 缓存服务状态: pending, active, deleted, suspended, ceased | No |
| search_word | String | 搜索关键词，支持缓存服务ID，缓存服务名称 | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则返回缓存服务相关其他资源的详细数据。 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| cache_node_set | Array | JSON 格式的缓存服务节点数据列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的缓存服务节点总数 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| cache_node_id | String | 缓存服务节点ID |
| cache_id | String | 缓存服务ID |
| cache_node_name | String | 缓存服务节点名称 |
| cache_role | String | 缓存服务节点角色，目前有 “master” 和 “slave” 两种。<br/>master： 主节点。目前 Redis 集群只拥有一个主节点，Memcached 集群节点都是主节点。<br/>slave： 从节点。目前只有 Redis 集群才有从节点。 |
| cache_type | String | 缓存服务类型 |
| private_ip | String | 缓存服务节点IP |
| status | String | 缓存服务状态, 有效值为pending, active, down，suspended。<br/>pending： 等待被创建<br/>active： 正常运行中<br/>down： 同步中断<br/>suspended : 由于欠费, 已被暂停使用 |
| transition_status | String | 缓存服务过渡状态, 有效值为creating, starting, stopping, updating, suspending, resuming, deleting。<br/>creating： 创建中, 由 pending 状态变成 active 状态<br/>starting： 启动中, 由 stopped 状态变成 active 状态<br/>stopping： 关闭中, 由 active 状态变成 stopped 状态<br/>updating： 更新中<br/>suspending： 欠费暂停中, 由 active/stopped 状态变成 suspended 状态<br/>resuming： 恢复中, 由 suspended 状态变成 active 状态<br/>deleting： 删除中, 由 active/stopped/suspended 状态变成 deleted 状态 |
| create_time | TimeStamp | 缓存服务节点创建时间, 为UTC时间, 格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| status_time | TimeStamp | 缓存服务节点最近一次状态变更时间, 为UTC时间, 格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeCacheNodes
&caches.1=c-55dwkqew
&status.1=active
&verbose=1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeCacheNodesResponse",
  "total_count":4,
  "cache_node_set":[
    {
      "status":"active",
      "cache_type":"memcached1.4.13",
      "transition_status":"",
      "cache_id":"c-55dwkqew",
      "cache_node_id":"cn-kcoh9zui",
      "cache_role":"master",
      "create_time":"2015-05-01T08:16:46Z",
      "cache_node_name":"",
      "status_time":"2015-05-01T08:17:26Z",
      "alarm_status":"",
      "private_ip":"192.168.100.4"
    },
    {
      "status":"active",
      "cache_type":"memcached1.4.13",
      "transition_status":"",
      "cache_id":"c-55dwkqew",
      "cache_node_id":"cn-btn18rwt",
      "cache_role":"master",
      "create_time":"2015-05-01T08:16:46Z",
      "cache_node_name":"",
      "status_time":"2015-05-01T08:17:44Z",
      "alarm_status":"",
      "private_ip":"192.168.100.5"
    }
  ],
  "ret_code":0
}
```
