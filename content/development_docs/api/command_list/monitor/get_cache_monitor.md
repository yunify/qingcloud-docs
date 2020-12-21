---
title: "GetCacheMonitor"
description: 
draft: false
---



通过此 API 可获得缓存服务每个节点的流量监控，以及与缓存相关的监控项目。

因为缓存服务包含多个缓存节点，每个缓存节点都有独立的监控数据。

不同的缓存类型，监控数据含义不同，具体可见下面”监控数据集说明”

为减少数据传输，在保持数据结构清晰的前提下，我们对监控数据做了压缩， 在解析返回数据时要留意。详细说明参见 [_监控数据压缩说明_](../compress/) 。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource | String | 缓存节点 ID | Yes |
| meters.n | String | 监控项的类型<br/>`traffic`： 流量监控<br/>`cpu` : 节点的 CPU 使用率<br/>`memory` : 节点内存使用率 <br/>`disk-us-volume` : 节点磁盘空间使用率<br/>`disk-iops-volume` : 节点磁盘 IOPS 监控<br/>`disk-volume` : 节点磁盘吞吐<br/>`stats` ： 缓存服务监控<br/>注解<br/>参数值请使用小写字母 | Yes |
| step | String | 数据间隔时间，有效值为：5m, 15m, 2h, 1d 。<br/>(m 表示分钟，h 表示小时，d 表示天)<br/>注解<br/>若请求最近15天以内的数据，数据间隔最小可以到5m；若请求15天以上的数据，数据间隔可选2h 或 1d | Yes |
| start_time | String | 监控数据的起始 **UTC** 时间，格式为 2011-07-11T11:07:00Z 或 2011-07-11T11:07:00.520Z | Yes |
| end_time | String | 监控数据的结束 **UTC** 时间，格式为 2011-07-11T11:07:00Z 或 2011-07-11T11:07:00.520Z | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| resource_id | String | 资源 ID |
| meter_set | Array | 监控数据集，可参见下面的监控数据集说明 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**监控数据集说明**

*   缓存节点的流量监控数据单位是 **Bps** (如果要换做 bps，记得每个值都乘以8)，每组数据都包括两个值 [进, 出]。

*   不同缓存类型的缓存节点服务监控数据不同

    1.Redis 缓存服务的监控数据为：

    > 
    > 
    > “平均已占用内存 \| 最大已占用内存 \| 最小已占用内存 \| 总连接个数 \| 平均连接客户端个数 \| 最大连接客户端个数 \| 最小连接客户端个数 \| 过期的 key 个数 \| 因为内存满被拒绝的 key 个数 \| 命中个数 \| 未命中个数 \| 平均 key 总数 \| 最大 key 总数 \| 最小 key 总数 \| 和 Get 相关的操作总数 \| 和 Set 相关的操作总数 \| 和Key相关的操作总数 \| 和String类型相关的操作总数 \| 和 List 类型相关的操作总数 \| 和 Hash 类型相关的操作总数 \| 和 Set 类型相关的操作总数 \| 和 Sorted Set 类型相关的操作总数 \| 缓存命中率平均值 \| 缓存命中率最大值 \| 缓存命中率最小值”
    > 
    > 

    2.Memcached 缓存服务的监控数据为：

    > 
    > 
    > “该段时间内连接个数 \| 总连接个数 \| 平均连接客户端个数 \| 被拒绝 Key 个数 \| 使用召回内存的 Key 个数 \| 查询命中数 \| 查询未命中数 \| 查询命中率 \| Get 操作总数 \| Delete 操作总数 \| Incr 操作总数 \| Decr 操作总数 \| touch 操作总数 \| Cas 操作总数 \| Set 操作总数 \| Flush 操作总数 \| 平均 key 总数”
    > 
    > 

**Example**

**1\. 请求缓存服务监控数据**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=GetCacheMonitor
&resource=cn-5ry0ma0j
&meters.1=stats
&start_time==2015-05-01T10%3A39%3A40.091Z
&end_time=2015-05-01T16%3A39%3A40.091Z
&step=5m
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"GetCacheMonitorResponse",
  "meter_set":[
    {
      "data_set":[
        [
          1430496300,
          "6|6|6|30|2|2|2|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0"
        ],
        "6|6|6|30|2|2|2|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0",
        "6|6|6|30|2|2|2|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0",
        "6|6|6|30|2|2|2|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0",
        "6|6|6|30|2|2|2|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0",
        "6|6|6|30|2|2|2|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0",
        "6|6|6|30|2|2|2|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0"
      ],
      "meter_id":"stats"
    }
  ],
  "ret_code":0,
  "resource_id":"cn-5ry0ma0j"
}
```

**2\. 请求缓存服务流量监控**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=GetCacheMonitor
&resource=cn-5ry0ma0j
&meters.1=traffic
&start_time==2015-05-01T16%3A00%3A40.091Z
&end_time=2015-05-01T16%3A39%3A40.091Z
&step=5m
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"GetCacheMonitorResponse",
  "meter_set":[
    {
      "data_set":[
        [
          1430496300,
          [
            81,
            111
          ]
        ],
        [
          110,
          109
        ],
        [
          98,
          109
        ],
        [
          87,
          110
        ],
        [
          110,
          108
        ],
        [
          88,
          107
        ],
        [
          96,
          111
        ]
      ],
      "meter_id":"traffic"
    }
  ],
  "ret_code":0,
  "resource_id":"cn-5ry0ma0j"
}
```
