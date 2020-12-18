---
title: "GetQueueMonitor"
description: 
draft: false
---



通过此 API 可获得消息队列服务每个节点的流量监控，以及与消息队列相关的监控项目。

因为消息队列服务包含多个节点，每个消息队列节点都有独立的监控数据。

为减少数据传输，在保持数据结构清晰的前提下，我们对监控数据做了压缩， 在解析返回数据时要留意。详细说明参见 [_监控数据压缩说明_](../compress/) 。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource | String | 消息队列节点 ID | Yes |
| meters.n | String | 监控项，有效值为 stats<br/>stats： 消息队列服务监控<br/>注解<br/>参数值请使用小写字母 | Yes |
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

> 
> 
> [*](#id1)消息队列服务的监控数据为：
> 
> > “JVM 堆内存使用率 \| 1分钟内平均流入消息速率(BytesPerSec) \| 1分钟内平均流出消息速率(BytesPerSec) \| 1分钟内平均流入消息速率(MessagesInPerSec) \| 副本消息最大滞后量 \| ISR 扩大速率 \| ISR 收缩速率 \| Leader 分区数量 \| 分区数量 \| 未复制的分区数量 \| 管理节点数 \| 离线分区数”
> 
> 

**Example**

**1\. 请求消息队列服务监控数据**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=GetQueueMonitor
&resource=qn-71sgden7
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
  "action":"GetQueueMonitorResponse",
  "meter_set":[
    {
      "data_set":[
        [
          1458551760,
          "41|0|0|0|0|0|0|0|0|0|1|0"
        ],
        "85|0|0|0|0|0|0|0|0|0|1|0",
        "110|0|0|0|0|0|0|0|0|0|1|0"
      ],
      "meter_id":"stats"
    }
  ],
  "ret_code":0,
  "resource_id":"qn-71sgden7"
}
```
