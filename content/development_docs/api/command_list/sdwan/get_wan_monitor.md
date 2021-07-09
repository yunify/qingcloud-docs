---
title: "GetWanMonitor"
description: 
draft: false
---



获取接入点监控数据。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource | String | 资源 ID<br/>如果接入点为光盒，使用接入点 ID，类似 wacc-fub9b1eo<br/>如果接入点为专线/网关，使用专线/网关接口 ID，类似 waif-6bm6mt85 | Yes |
| access_type | String | 接入点类型，有效值为：vpc, cpe, connect。 | Yes |
| meters.n | String | 监控项，有效值为：traffic, flow, pps。 | Yes |
| step | String | 数据间隔时间，有效值为：1m, 5m, 15m, 30m, 1h, 2h, 1d。 | Yes |
| start_time | TimeStamp | 监控数据的起始 UTC 时间，格式为 2011-07-11T11:07:00Z 或 2011-07-11T11:07:00.520Z | Yes |
| end_time | TimeStamp | 监控数据的结束 UTC 时间，格式为 2011-07-11T11:07:00Z 或 2011-07-11T11:07:00.520Z | Yes |
| interface_name | String | 光盒接口名称, 例如：eth0, eth1 | No |
| monitor_type | String | 监控类型, 有效值为：internet, pop<br/>internet: 表示需要获取访问互联网的监控数据<br/>pop: 表示需要获取访问接入点的监控数据 | No |
| ha_member_index | String | 光盒双机成员索引 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| meter_set | Dict | 监控数据集 |
| resource_id | String | 资源 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
接入点为光盒示例：
https://api.qingcloud.com/iaas/?action=GetWanMonitor
&resource=wacc-fub9b1eo
&access_type=cpe
&meters.1=traffic
&meters.2=flow
&meters.3=pps
&step=5m
&interface_name=eth0
&monitor_type=pop
&start_time=2020-05-09T02:04:32.200Z
&end_time=2020-05-09T08:04:32.200Z
&zone=pek3a
&COMMON_PARAMS

接入点为网关示例：
https://api.qingcloud.com/iaas/?action=GetWanMonitor
&resource=waif-6bm6mt85
&access_type=vpc
&meters.1=traffic
&meters.2=flow
&meters.3=pps
&step=5m
&start_time=2020-05-09T02:04:32.200Z
&end_time=2020-05-09T08:04:32.200Z
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"GetWanMonitorResponse",
  "meter_set":[
    {
      "data":[
        [1589001300,[300,291]],
        [125,147],
        [161,151],
        [178,189],
        [155,154]......
      ],
      "meter_id":"traffic"
    },
    {
      "data":[
        [1589001300,[90324,87444]],
        [37748,44228],
        [48718,45511],
        [53709,56850]......
      ],
      "meter_id":"flow"
    },
    {
      "data":[
        [1589001300,[5,5]],
        [2,2],
        [2,2],
        [3,3]......
      ],
      "meter_id":"pps"
    }
  ],
  "ret_code":0,
  "resource_id":"waif-6bm6mt85"
}
```
