---
title: "GetMongoMonitor"
description: 
draft: false
---



获取指定 Mongo 节点的监控信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource | String | Mongo 节点 ID | Yes |
| meters.n | String | 监控项，Mongo 的监控项包括：<br/>*   若要查询节点云服务器相关的信息，meters 可以是：<br/>    *   “cpu”: 节点的 CPU 使用率<br/>    *   “memory”: 节点内存使用率<br/>    *   “disk-us-volume”: 节点磁盘空间使用率<br/>    *   “disk-iops-volume”: 节点磁盘 IOPS 监控<br/>    *   “disk-volume”: 节点磁盘吞<br/>*   若要查询 MongoDB 相关的信息，meters 可以是：<br/>    *   <br/>        “status”: MongoDB 状态数据，返回值是由”\|”分隔的多项状态值：<br/>        opcounters insert<br/>        opcounters query<br/>        opcounters update<br/>        opcounters delete<br/>        opcounters getmore<br/>        opcounters command<br/>        opcountersRepl insert<br/>        opcountersRepl query<br/>        opcountersRepl update<br/>        opcountersRepl delete<br/>        opcountersRepl getmore<br/>        opcountersRepl command \| connections: 当前连接数<br/>注解<br/>参数值请使用小写字母 | Yes |
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
https://api.qingcloud.com/iaas/?action=GetMongoMonitor
&resource=mi-ole0pgn1
&meters.1=status
&start_time=2015-06-21T01:10:10Z
&end_time=2015-06-22T01:10:10Z
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"GetMongoMonitorResponse",
  "ret_code":0,
  "resource":"mongo-uja5twny",
  "meter_set":[
    {
      "data_set":[
        {
          "role":"replica",
          "data":[
            [
              1434876300,
              "0|0|0|0|0|193|0|0|0|0|0|0|2"
            ],
            "0|0|0|0|0|419|200|0|0|0|0|0|2",
            "0|0|0|0|0|420|2300|0|0|0|0|0|1",
            "0|0|0|0|0|420|0|0|0|0|0|0|1",
            "0|0|0|0|0|420|700|0|0|0|0|0|1",
            "0|0|0|0|0|420|0|0|0|0|0|0|1",
            "0|0|0|0|0|420|0|0|0|0|0|0|1"
          ]
        }
      ],
      "meter":"status"
    }
  ]
}
```
