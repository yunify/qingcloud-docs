---
title: "GetClusterMonitor"
description: 
draft: false
---



获取集群节点的监控数据

> 为减少数据传输，在保持数据结构清晰的前提下，我们对监控数据做了压缩， 在解析返回数据时要留意。详细说明参见 [监控数据压缩说明](../../../monitor/compress/)

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| version_id | String | 集群应用版本ID | No |
| app_id | String | 集群应用ID | No |
| resource | String | 集群节点ID | Yes |
| role | String | 节点角色 | No |
| step | String | 监控数据时间间隔，例如 1m, 5m, 15m, 30m, 1h, 2h, 1d | Yes |
| start_time | TimeStamp | 监控数据的开始 UTC 时间，格式为 2011-07-11T11:07:00Z 或 2011-07-11T11:07:00.520Z | Yes |
| end_time | TimeStamp | 监控数据的结束 UTC 时间，格式为 2011-07-11T11:07:00Z 或 2011-07-11T11:07:00.520Z | Yes |
| meters.n | String | 监控数据的类型，<br> stats 表示获取开发者定义的监控数据 <br> cpu 表示节点CPU使用率 <br> memory 表示节点内存使用率 <br> disk-us-volume 表示节点硬盘使用率 <br> disk-iops-volume 表示节点硬盘IOPS <br> disk-volume 表示节点硬盘吞吐量  | Yes |

[_公共参数_](../../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| meter_set | Dict | 监控数据集合 |
| resource_id | String | 节点ID |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 监控数据集说明

- 节点的 cpu，memory 监控值表示 "使用的千分比"，若要计算百分比请**先将值除以10** 。比如 API 返回的 cpu 监控数据值是 56，表示资源使用百分比为5.6% 。
- 磁盘监控数据
  - 盘吞吐量的监控数据单位是 B/s, 每组数据都包括两个值 [读, 写]。
  - 磁盘 IOPS 的监控数据单位就是 IOPS, 每组数据也包括两个值 [读, 写]。
  - 磁盘使用率的监控数据是类似这种格式 `/|18|3319|15816` ，以 `|` 分隔表示 "mount 的路径", "使用百分比", "已使用空间（MB）", "剩余可用空间（MB）"

**Example**

以应用[ZooKeeper](https://appcenter.qingcloud.com/apps/app-tg3lbp0a/ZooKeeper%20on%20QingCloud)为例

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=GetClusterMonitor
&end_time=2018-03-04T07%3A44%3A06.159Z
&meters.1=stats
&resource=cln-veb7g8nx
&start_time=2018-03-03T07%3A44%3A06.159Z
&step=5m
&zone=pek3b
&COMMON_PARAMS
```

_Example Response_:

```json
{
  "action":"GetClusterMonitorResponse",
  "meter_set":[
    {
      "data_set":[
        [
          1520145900,
          "healthy|1|0|0|0|follower|0|22|21|4"
        ],
        "healthy|1|0|0|0|follower|0|13|12|4",
        "healthy|1|0|0|0|follower|0|8|7|4",
        "healthy|1|0|0|0|follower|0|44|43|4",
        "healthy|1|0|0|0|follower|0|89|88|4",
        "healthy|1|0|0|0|follower|0|134|133|4",
        "healthy|1|0|0|0|follower|0|179|178|4",
        "healthy|1|0|0|0|follower|0|224|223|4",
        "healthy|1|0|0|0|follower|0|269|268|4",
        "healthy|1|0|0|0|follower|0|314|313|4",
        "healthy|1|0|0|0|follower|0|359|358|4",
        "healthy|1|0|0|0|follower|0|404|403|4"
      ],
      "meter_info":{
        "items":{
          "received":{
            "scale_factor_when_display":1,
            "value_type":"int",
            "unit":"count"
          },
          "avg":{
            "scale_factor_when_display":1,
            "value_type":"int",
            "unit":"ms"
          },
          "outstanding":{
            "scale_factor_when_display":1,
            "value_type":"int",
            "unit":"count"
          },
          "max":{
            "scale_factor_when_display":1,
            "value_type":"int",
            "unit":"ms"
          },
          "min":{
            "scale_factor_when_display":1,
            "value_type":"int",
            "unit":"ms"
          },
          "mode":{
            "enums":[
              "L",
              "F",
              "S"
            ],
            "value_type":"str",
            "unit":""
          },
          "active":{
            "scale_factor_when_display":1,
            "value_type":"int",
            "unit":"count"
          },
          "znode":{
            "scale_factor_when_display":1,
            "value_type":"int",
            "unit":"znode_count"
          },
          "sent":{
            "scale_factor_when_display":1,
            "value_type":"int",
            "unit":"count"
          }
        },
        "alarm":[
          "avg"
        ],
        "cmd":"/opt/zookeeper/bin/get-monitor.sh",
        "display":[
          "mode",
          "latency",
          "throughput",
          "connections",
          "znode"
        ],
        "groups":{
          "connections":[
            "active",
            "outstanding"
          ],
          "latency":[
            "min",
            "avg",
            "max"
          ],
          "throughput":[
            "received",
            "sent"
          ]
        }
      },
      "meter_id":"stats"
    }
  ],
  "ret_code":0,
  "resource_id":"cln-veb7g8nx"
}
```


