---
title: "GetZooKeeperMonitor"
description: 
draft: false
---



通过此 API 可获得 ZooKeeper 服务每个节点的监控指标。

因为 ZooKeeper 服务包含多个节点，每个 ZooKeeper 节点都有独立的监控数据。

为减少数据传输，在保持数据结构清晰的前提下，我们对监控数据做了压缩， 在解析返回数据时要留意。详细说明参见 [_监控数据压缩说明_](../compress/) 。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource | String | ZooKeeper 节点 ID | Yes |
| meters.n | String | 监控项，有效值为 stats<br/>stats： ZooKeeper 服务监控<br/>注解<br/>参数值请使用小写字母 | Yes |
| step | String | 数据间隔时间，有效值为：5m, 15m, 2h, 1d 。<br/>(m 表示分钟，h 表示小时，d 表示天)<br/>注解<br/>若请求最近15天以内的数据，数据间隔最小可以到5m；若请求15天以上的数据，数据间隔可选2h 或 1d | Yes |
| start_time | String | 监控数据的起始 **UTC** 时间，格式为 2015-07-11T11:07:00Z 或 2015-07-11T11:07:00.520Z | Yes |
| end_time | String | 监控数据的结束 **UTC** 时间，格式为 2015-07-11T11:07:00Z 或 2016-07-11T11:07:00.520Z | Yes |
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

> “Latency min \| Latency avg \| Latency max \| Received \| Sent \| Connections \| Outstanding \| Mode \| Node count”

**Example**

**1\. 请求 ZooKeeper 服务监控数据**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=GetZookeeperMonitor
&resource=zkn-l32ku359
&meters.1=stats
&start_time==2016-03-01T10%3A39%3A40.091Z
&end_time=2016-05-01T16%3A39%3A40.091Z
&step=5m
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"GetZookeeperMonitorResponse",
  "meter_set":[
    {
      [
        1458547800,
        " 0|0|0|9|8|1|0|follower|4"
      ],
      " 0|0|0|33|32|1|0|follower|4",
      " 0|0|0|63|62|1|0|follower|4",
      " 0|0|0|93|92|1|0|follower|4",
      " 0|0|0|123|122|1|0|follower|4"
      ],
      "meter_id":"stats"
    }
  ],
  "ret_code":0,
  "resource_id":"zkn-l32ku359"
}
```
