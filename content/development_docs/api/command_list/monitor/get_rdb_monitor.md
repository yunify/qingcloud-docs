---
title: "GetRDBMonitor"
description: 
draft: false
---



获取指定数据库实例的监控信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource | String | 针对不同的监控项，该值可以设置为数据库集群 ID，或数据库实例 ID | Yes |
| meters.n | String | 监控项，数据库的监控项包括：<br/>*   若 resource 是数据库实例 ID，那么 meters 可以是：<br/>    *   “cpu”：数据库节点的 CPU 使用率<br/>    *   “memory”：数据库节点内存使用率<br/>    *   “disk-us-volume”：数据库节点磁盘空间使用率<br/>*   若 resource 是数据库集群 ID，那么 meters 可以是：<br/>    *   <br/>        “status”: MySQL 数据库基础状态数据，返回值是由”\|”分隔的多项状态值：<br/>        Slow_queries: 慢查询次数<br/>        Opened_tables: 当前打开的数据库表数量<br/>        Select_scan: 全表扫描次数<br/>        Threads_connected: 当前连接线程数<br/>        Threads_running: 当前活跃连接线程数<br/>        Max_used_connections: 最大并发连接数<br/>        Innodb_buffer_pool_pages_free: InnoDB 缓冲池可用空间（单位：页）<br/>        Com_commit: 提交事务数<br/>        Com_rollback: 回滚事务数<br/>        Innodb_buffer_pool_reads: 穿透 InnoDB 缓冲池的查询数量<br/>        Innodb_buffer_pool_read_requests: 从 InnoDB 缓冲池返回的查询数量<br/>        Qcache_hits: 从查询缓存返回的查询数量<br/>        Qcache_inserts: 穿透查询缓存的查询数量<br/>        Threads_created: 已创建连接线程数<br/>        Connections: 全部连接数（包括连接失败的连接数量）<br/>        Questions: 查询数量<br/>        Seconds_Behind_Master: 从节点落后主节点的秒数<br/>    *   <br/>        “status”: PostgreSQL 数据库基础状态数据，返回值是由”\|”分隔的多项状态值：<br/>        blks_read: 未命中中缓存的查询数量 \| blks_hit: 命中缓存的查询数量 \| connections: 当前连接数<br/>注解<br/>参数值请使用小写字母 | Yes |
| step | String | 数据间隔时间，有效值为：5m, 15m, 2h, 1d<br/>(m 表示分钟，h 表示小时，d 表示天)<br/>注解<br/>若请求最近15天以内的数据，数据间隔最小可以到5m；若请求15天以上的数据，数据间隔可选2h 或 1d | Yes |
| start_time | String | 监控数据的起始 **UTC** 时间，格式为 2011-07-11T11:07:00Z 或 2011-07-11T11:07:00.520Z | Yes |
| end_time | String | 监控数据的结束 **UTC** 时间，格式为 2011-07-11T11:07:00Z 或 2011-07-11T11:07:00.520Z | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| resource_id | String | 资源 ID |
| meter_set | Array | 监控数据集 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=GetRDBMonitor
&resource=rdb-5s127ypr
&meters.1=status
&meters.2=slave
&start_time==2014-02-09T21%3A47%3A00.820Z
&end_time=2014-02-10T03%3A47%3A00.820Z
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"GetRDBMonitorResponse",
  "meter_set":[
    {
      "data_set":[
        {
          "role":"master",
          "data":[
            [
              1411035000,
              "0|0|0|2|2|2|196457|0|0|145|1274|0|0|2|66|2"
            ],
            "0|0|0|2|2|2|172057|0|0|147|8607444|0|1|2|167|2",
            "0|0|0|2|2|2|131453|0|0|147|29669767|0|1|2|317|2",
            "0|0|0|2|2|2|123781|0|0|147|36040006|0|2|2|460|2",
            "0|0|0|2|2|2|123781|0|0|147|36040006|0|2|2|595|2",
            "0|0|0|1|1|2|195870|0|0|734|5638|0|0|2|72|2"
          ]
        },
        {
          "role":"topslave",
          "data":[
            [
              1411035000,
              "0|0|0|2|2|2|196457|0|0|145|1309|0|1|2|67|2"
            ],
            "0|0|0|2|2|3|170479|0|0|147|9061862|0|1|3|178|2",
            "0|0|0|2|2|3|131271|0|0|147|30458416|0|2|3|332|2",
            "0|0|0|2|2|3|126196|0|0|147|35483687|0|3|3|461|2",
            "0|0|0|1|1|3|126196|0|0|147|35483687|0|3|3|575|2",
            "0|0|0|1|1|2|195862|0|0|739|5822|0|0|2|70|2"
          ]
        }
      ],
      "meter_id":"status"
    },
  ],
  "ret_code":0,
  "resource_id":"rdb-5s127ypr"
}
```
