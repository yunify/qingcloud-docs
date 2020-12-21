---
title: "DescribeClusterEnvironment"
description: 
draft: false
---



获取集群某类角色节点的环境变量

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cluster | String | 集群ID | Yes |
| role | String | 将要获取环境变量的角色，可留空 | No |

[_公共参数_](../../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| config | Dict | JSON格式的集群环境变量信息，包含了环境变量的描述，类型，范围，其中 `default` 值为集群生效的环境变量值 |
| job_id | String | 执行任务的 Job ID，格式为`{"cln-ssdfawx":"j-kdlsafda"}` |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

以应用[Redis Cluster](https://appcenter.qingcloud.com/apps/app-jwq1fzqo/Tomcat%20Cluster%20on%20QingCloud)为例，获取应用部署集群的环境变量

_Example Request_:

```
https://api.qingcloud.com/iaas/?
&action=DescribeClusterEnvironment
&cluster_id=cl-2gi2b3oc
&zone=pek3b
&COMMON_PARAMS
```

_Example Response_:

```json
{
  "action":"DescribeClusterEnvironmentResponse",
  "config":{
    "type":"array",
    "description":"Redis service properties",
    "key":"env",
    "properties":[
      {
        "description":"Max memory percent Redis can make use of.",
        "min":0,
        "default":60,
        "max":95,
        "required":"no",
        "label":"maxmemory-percent",
        "key":"maxmemory-percent",
        "type":"integer"
      },
      {
        "description":"Require clients to issue AUTH <PASSWORD> before processing any other commands.",
        "default":"*********",
        "required":"no",
        "label":"requirepass",
        "key":"requirepass",
        "type":"password"
      },
      {
        "description":"Enable config and save commands(strongly not recommended to enable this)",
        "default":0,
        "required":"no",
        "label":"enable-config",
        "range":[
          0,
          1
        ],
        "key":"enable-config",
        "type":"integer"
      },
      {
        "description":"Active rehashing uses 1 millisecond every 100 milliseconds of CPU time in order to help rehashing the main Redis hash table",
        "default":"yes",
        "required":"no",
        "label":"activerehashing",
        "range":[
          "yes",
          "no"
        ],
        "key":"activerehashing",
        "type":"string"
      },
      {
        "description":"The Append Only File is an alternative persistence mode that provides much better durability.",
        "default":"yes",
        "required":"no",
        "label":"appendonly",
        "range":[
          "yes",
          "no"
        ],
        "key":"appendonly",
        "type":"string"
      },
      {
        "description":"It tells the Operating System to actually write data on disk instead of waiting for more data in the output buffer.",
        "default":"everysec",
        "required":"no",
        "label":"appendfsync",
        "range":[
          "everysec",
          "no",
          "always"
        ],
        "key":"appendfsync",
        "type":"string"
      },
      {
        "description":"Hashes are encoded using a memory efficient data structure when they have a small number of entries",
        "default":1024,
        "required":"no",
        "label":"hash-max-ziplist-entries",
        "key":"hash-max-ziplist-entries",
        "type":"integer"
      },
      {
        "description":"Hashes are encoded using a memory efficient data structure when they have a small number of entries, and the biggest entry does not exceed a given threshold",
        "default":64,
        "required":"no",
        "label":"hash-max-ziplist-value",
        "key":"hash-max-ziplist-value",
        "type":"integer"
      },
      {
        "description":"It samples different operations at runtime in order to collect data related to possible sources of latency of a Redis instance.",
        "default":0,
        "required":"no",
        "label":"latency-monitor-threshold",
        "key":"latency-monitor-threshold",
        "type":"integer"
      },
      {
        "description":"Small lists are encoded in a special way in order to save a lot of space.",
        "default":512,
        "required":"no",
        "label":"list-max-ziplist-entries",
        "key":"list-max-ziplist-entries",
        "type":"integer"
      },
      {
        "description":"Small lists are encoded in a special way in order to save a lot of space.",
        "default":64,
        "required":"no",
        "label":"list-max-ziplist-value",
        "key":"list-max-ziplist-value",
        "type":"integer"
      },
      {
        "description":"Set the max number of connected clients at the same time.",
        "default":65000,
        "required":"no",
        "label":"maxclients",
        "key":"maxclients",
        "type":"integer"
      },
      {
        "description":"The eviction policy to remove keys when the memory limit is reached.",
        "default":"volatile-lru",
        "required":"no",
        "label":"maxmemory-policy",
        "range":[
          "volatile-lru",
          "allkeys-lru",
          "volatile-random",
          "allkeys-random",
          "volatile-ttl",
          "noeviction"
        ],
        "key":"maxmemory-policy",
        "type":"string"
      },
      {
        "description":"LRU and minimal TTL algorithms are not precise algorithms but approximated algorithms (in order to save memory), using this to tune it for speed or accuracy.",
        "default":3,
        "required":"no",
        "label":"maxmemory-samples",
        "key":"maxmemory-samples",
        "type":"integer"
      },
      {
        "description":"A master stops accepting writes if there are less than N slaves connected, having a lag less or equal than M seconds.",
        "default":10,
        "required":"no",
        "label":"min-slaves-max-lag",
        "key":"min-slaves-max-lag",
        "type":"integer"
      },
      {
        "description":"A master stops accepting writes if there are less than N slaves connected, having a lag less or equal than M seconds.",
        "default":0,
        "required":"no",
        "label":"min-slaves-to-write",
        "key":"min-slaves-to-write",
        "type":"integer"
      },
      {
        "description":"It prevents fsync() from being called in the main process while a BGSAVE or BGREWRITEAOF is in progress.",
        "default":"yes",
        "required":"no",
        "label":"no-appendfsync-on-rewrite",
        "range":[
          "yes",
          "no"
        ],
        "key":"no-appendfsync-on-rewrite",
        "type":"string"
      },
      {
        "description":"It selects the events that Redis will notify among a set of classes.",
        "default":"",
        "required":"no",
        "label":"notify-keyspace-events",
        "key":"notify-keyspace-events",
        "type":"string"
      },
      {
        "description":"Set the replication backlog size.",
        "default":1048576,
        "required":"no",
        "label":"repl-backlog-size",
        "key":"repl-backlog-size",
        "type":"integer"
      },
      {
        "description":"It configures the amount of seconds that need to elapse, starting from the time the last slave disconnected, for the backlog buffer to be freed.",
        "default":3600,
        "required":"no",
        "label":"repl-backlog-ttl",
        "key":"repl-backlog-ttl",
        "type":"integer"
      },
      {
        "description":"It is the replication timeout.",
        "default":60,
        "required":"no",
        "label":"repl-timeout",
        "key":"repl-timeout",
        "type":"integer"
      },
      {
        "description":"It sets the limit in the size of the set in order to use this special memory saving encoding.",
        "default":512,
        "required":"no",
        "label":"set-max-intset-entries",
        "key":"set-max-intset-entries",
        "type":"integer"
      },
      {
        "description":"It logs queries that exceeded a specified execution time.",
        "default":-1,
        "required":"no",
        "label":"slowlog-log-slower-than",
        "key":"slowlog-log-slower-than",
        "type":"integer"
      },
      {
        "description":"It logs queries with the length of the slow log.",
        "default":128,
        "required":"no",
        "label":"slowlog-max-len",
        "key":"slowlog-max-len",
        "type":"integer"
      },
      {
        "description":"TCP keepalive between server and client.",
        "default":0,
        "required":"no",
        "label":"tcp-keepalive",
        "key":"tcp-keepalive",
        "type":"integer"
      },
      {
        "description":"Close the connection after a client is idle for N seconds (0 to disable).",
        "default":0,
        "required":"no",
        "label":"timeout",
        "key":"timeout",
        "type":"integer"
      },
      {
        "description":"Sorted sets are specially encoded in order to save a lot of space.",
        "default":128,
        "required":"no",
        "label":"zset-max-ziplist-entries",
        "key":"zset-max-ziplist-entries",
        "type":"integer"
      },
      {
        "description":"Sorted sets are specially encoded in order to save a lot of space.",
        "default":64,
        "required":"no",
        "label":"zset-max-ziplist-value",
        "key":"zset-max-ziplist-value",
        "type":"integer"
      },
      {
        "description":"Max execution time of a Lua script in milliseconds.",
        "default":5000,
        "required":"no",
        "label":"lua-time-limit",
        "key":"lua-time-limit",
        "type":"integer"
      }
    ]
  },
  "ret_code":0
}
```


