---
title: "GetLoadBalancerMonitor"
description: 
draft: false
---



通过此 API 可获得负载均衡器的外网流量监控，以及每个监听器和后端服务的延迟时间，请求数和响应数。

因为负载均衡器可以绑定多个公网IP，所以每项监控数据都会按 IP 分组。

监听器和后端服务在不同协议下，监控数据含义不同，具体可见下面”监控数据集说明”

为减少数据传输，在保持数据结构清晰的前提下，我们对监控数据做了压缩， 在解析返回数据时要留意。详细说明参见 [_监控数据压缩说明_](../compress/) 。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource | String | 资源 ID | Yes |
| meters.n | String | 监控项，不同类型的资源支持的监控项不同：<br/>*   如果资源是负载均衡器，meters 只有 traffic<br/>*   如果资源是监听器或后端服务，meters 目前只有 request<br/>注解<br/>参数值请使用小写字母 | Yes |
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
| meter_set | Array | 监控数据集，可参见下面 [_监控数据集说明_](#lb-data-meaning) |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**监控数据集说明**

*   负载均衡器的流量监控数据单位是 **Bps** (如果要换做 bps，记得每个值都乘以8)，每组数据都包括两个值 [进, 出]。

*   监听器在不同协议下的监控数据不同

    1.HTTP 协议时数据含义为：

    > 
    > 
    > “请求数 \| LB 4xx \| LB 5xx \| 总 backend 1xx \| 总 backend 2xx \| 总 backend 3xx \| 总 backend 4xx \| 总 backend 5xx \| 最大延迟 \| 最小延迟 \| 平均延迟 \| 最大并发连接数 \| 平均并发连接数 \| 并发连接数上限”
    > 
    > 
    > 
    > 警告
    > 
    > 需要注意的是，请求数及响应数对应的数据值都是指在该段时间(即 step 指定的时间间隔)内的 **累计数** 。
    > 
    > 
    > 
    > 1xx, 2xx, 3xx, 4xx, 5xx 表示响应的 [HTTP status code](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).
    > 
    > 

    2.TCP 协议时数据含义为：

    > 
    > 
    > “该段时间内新建连接个数 \| 最大并发连接数 \| 平均并发连接数 \| 并发连接数上限”
    > 
    > 

*   后端服务在不同协议下的监控数据也不同

    1.HTTP 协议时数据含义为：

    > 
    > 
    > “backend 1xx \| backend 2xx \| backend 3xx \| backend 4xx \| backend 5xx \| 最大延迟 \| 最小延迟 \| 平均延迟”
    > 
    > 
    > 
    > 警告
    > 
    > 响应数也是指在该段时间(即 step 指定的时间间隔)内的 **累计数** 。
    > 
    > 
    > 
    > 

    2.TCP 协议时数据含义为：

    > 
    > 
    > “该段时间内新建连接个数”
    > 
    > 

**Example**

**1\. 当监听器的监听协议是 HTTP 时的监控数据**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=GetLoadBalancerMonitor
&resource=lbl-1234abcd
&meters.1=request
&start_time==2014-02-09T21%3A47%3A00.820Z
&end_time=2014-02-10T03%3A47%3A00.820Z
&step=5m
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"GetLoadBalancerMonitorResponse",
  "meter_set":[
    {
      "data_set":[
        {
          "eip_id":"eip-1234abcd",
          "data":[
            [
              1381816200,
              "3345|90|0|0|2925|330|0|0|0|0|0",
              "1204|70|0|0|2232|330|0|0|0|0|0"
            ]
          ]
        }
      ],
      "meter_id":"request"
    },
  ],
  "ret_code":0,
  "resource_id":"lbl-1234abcd"
}
```

**2\. 当监听器的监听协议是 TCP 时的监控数据**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=GetLoadBalancerMonitor
&resource=lbl-1234abcd
&meters.1=request
&start_time==2014-02-09T21%3A47%3A00.820Z
&end_time=2014-02-10T03%3A47%3A00.820Z
&step=5m
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"GetLoadBalancerMonitorResponse",
  "meter_set":[
    {
      "data_set":[
        {
          "eip_id":"eip-gliq0zh3",
          "data":[
            [1392244200,0],
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        }
      ],
      "meter_id":"request"
    }
  ],
  "ret_code":0,
  "resource_id":"lbl-1234abcd"
}
```
