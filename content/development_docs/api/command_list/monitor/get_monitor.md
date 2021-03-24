---
title: "GetMonitor"
description: 
draft: false
---



获取资源监控数据。支持的资源包括云服务器、公网 IP 和路由器， 选定不同类型资源，可获取的监控项不同。

*   云服务器的监控项包括: CPU 使用率，内存使用率，系统盘数据(吞吐量， IOPS 和使用率)， 云服务器连接私有网络的网卡带宽，与云服务器绑定的各磁盘数据（吞吐量， IOPS 和使用率）。

    注解

    其中内存使用率和磁盘使用率暂不支持 Windows ，以及 kernel 版本过低的 Linux

*   公网 IP 资源可得到公网 “进/出” 的带宽、流量数据。

*   如果资源为路由器，可得到路由器在基础网络的带宽数据，以及与路由器连接的私有网络的带宽数据。

为减少数据传输，在保持数据结构清晰的前提下，我们对监控数据做了压缩， 在解析返回数据时要留意。详细说明参见 [_监控数据压缩说明_](../compress/) 。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource | String | 资源的ID，资源可以是云服务器，公网IP，路由器。 | Yes |
| meters.n | String | 监控项，不同类型的资源支持的监控项不同：<br/>*   若资源是云服务器，meters 可以是<br/>    *   “cpu”：云服务器 cpu 使用率<br/>    *   “memory”：云服务器内存使用率<br/>    *   “disk-os”, “disk-iops-os”, “disk-us-os”：云服务器系统盘吞吐量，IOPS，空间使用率<br/>    *   “disk-硬盘ID”, “disk-iops-硬盘ID”, “disk-us-硬盘ID”：与云服务器绑定的硬盘的吞吐量，IOPS，空间使用率<br/>    *   “if-网卡地址”：云服务器网卡带宽<br/>*   资源是公网IP，meters 支持：带宽 “traffic” 和流量 “flow”，数据单位分别是 Bps 和 Byte 。<br/>*   资源是路由器，meters 可以是 “vxnet-0” 和 “与路由器相连的私有网络ID”<br/>注解<br/>参数值请使用小写字母 | Yes |
| step | String | 数据间隔时间，有效值为：5m, 15m, 2h, 1d。<br/>(m 表示分钟，h 表示小时，d 表示天)<br/>注解<br/>若请求最近15天以内的数据，数据间隔最小可以到5m；若请求15天以上的数据，数据间隔可选2h 或 1d | Yes |
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

*   云服务器的 cpu，memory 监控值表示 “使用的千分比”，若要计算百分比请 **先将值除以10** 。比如 API 返回的 cpu 监控数据值是 56，表示资源使用百分比为5.6% 。
*   磁盘监控数据:
    *   磁盘吞吐量的监控数据单位是 **B/s**, 每组数据都包括两个值 [读, 写]。
    *   磁盘 IOPS 的监控数据单位就是 **IOPS**, 每组数据也包括两个值 [读, 写]。
    *   磁盘使用率的监控数据是类似这种格式 _/\|18\|3319\|15816_ ，以 \| 分隔表示 “mount 的路径”, “使用百分比”, “已使用空间（MB）”, “剩余可用空间（MB）”
*   网络带宽的监控数据单位是 **Bps** (如果要换做 bps，记得每个值都乘以8)，每组数据都包括两个值 [进, 出]。

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=GetMonitor
&resource=i-1234abcd
&meters.1=cpu
&meters.2=if-52%3A54%3Af4%3A98%3A5d%3Af3
&meters.3=disk-os
&start_time==2014-02-09T21%3A47%3A00.820Z
&end_time=2014-02-10T03%3A47%3A00.820Z
&step=5m
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"GetMonitorResponse",
  "meter_set":[
    {
      "data":[
        [1392072000,[12,12]],
        [12,12],
        [12,12],
        [11,11],
        [11,11],
        [11,12],
        [15,23],
        [15,29],
        [11,12]
      ],
      "vxnet_id":"vxnet-0",
      "meter_id":"52:54:f4:98:5d:f3",
      "sequence":0
    },
    {
      "data":[
        [1392072000,[0,14440]],
        [0,13762],
        [0,13901],
        [0,14546],
        [0,14710],
        [0,14730],
        [0,14655],
        [0,14898],
        [0,14772]],
      "meter_id":"disk-os"
    },
    {
      "data":[
        [1392072000,7],
        7,
        7,
        7,
        7,
        6,
        7,
        11,
        7
      ],
      "meter_id":"cpu"
    }
  ],
  "ret_code":0,
  "resource_id":"i-1234abcd"}
```
