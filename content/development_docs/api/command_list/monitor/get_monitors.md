---
title: "GetMonitors"
description: 
draft: false
---



批量获取多个资源的多个监控数据，一次请求总数不能超过 100 个资源。
支持的资源类型和监控项可参考 [_GetMonitor_](./get_monitor.html)


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource_meters_pairs.n.resource | String | 资源 ID | Yes |
| resource_meters_pairs.n.meters | String | 多个监控项，如 `["cpu", "disk_rd-<volume id>"]` | Yes |
| step | String | 数据间隔时间，有效值为：5m, 15m, 2h, 1d。<br/>(m 表示分钟，h 表示小时，d 表示天)<br/>注解<br/>若请求最近15天以内的数据，数据间隔最小可以到5m；若请求15天以上的数据，数据间隔可选2h 或 1d | Yes |
| start_time | String | 监控数据的起始 **UTC** 时间，格式为 2011-07-11T11:07:00Z | Yes |
| end_time | String | 监控数据的结束 **UTC** 时间，格式为 2011-07-11T11:07:00Z | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| monitors | Array | 监控数据集，可参见下面 [_监控数据集说明_](#data-meaning) 和 Example |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**监控数据集说明**
*   云服务器的 cpu，memory 监控值表示 “使用的千分比”，若要计算百分比请 **先将值除以10** 。比如 API 返回的 cpu 监控数据值是 56，表示资源使用百分比为5.6% 。
*   磁盘监控数据:
    *   磁盘吞吐量的监控数据单位是 **B/s**, 每组数据都包括两个值 [读, 写]。
    *   磁盘 IOPS 的监控数据单位就是 **IOPS**, 每组数据也包括两个值 [读, 写]。
    *   磁盘使用率的监控数据是类似这种格式 _/\|18\|3319\|15816_ ，以 \| 分隔表示 “mount 的路径”, “使用百分比”, “已使用空间（MB）”, “剩余可用空间（MB）”
*   网络带宽的监控数据单位是 **Bps** (如果要换做 bps，记得每个值都乘以8)，每组数据都包括两个值 [进, 出]。


**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=GetMonitors
&resource_meters_pairs.1.resource=i-hpqfipia
&resource_meters_pairs.1.meters=%5B%22cpu%22%2C%22memory%22%5D
&resource_meters_pairs.2.resource=i-m39k0aoy
&resource_meters_pairs.2.meters=%5B%22cpu%22%2C%22memory%22%5D
&start_time==2014-02-09T21%3A47%3A00.820Z
&end_time=2014-02-10T03%3A47%3A00.820Z
&step=5m
&zone=pek3
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"GetMonitorsResponse",
  "monitors":[
    {
      "meter_set":[
        {
          "data":[
            [
              1543827000,
              327
            ],
            6,
            5
          ],
          "meter_id":"cpu"
        },
        {
          "data":[
            [
              1543827000,
              367
            ],
            330,
            330
          ],
          "meter_id":"memory"
        }
      ],
      "resource_id":"i-hpqfipia"
    },
    {
      "meter_set":[
        {
          "data":[
            [
              1543827000,
              106
            ],
            34,
            5
          ],
          "meter_id":"cpu"
        },
        {
          "data":[
            [
              1543827000,
              139
            ],
            140,
            143
          ],
          "meter_id":"memory"
        }
      ],
      "resource_id":"i-m39k0aoy"
    }
  ],
  "ret_code":0
}
```
