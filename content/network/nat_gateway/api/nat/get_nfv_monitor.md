---
title: "GetNFVMonitor"
description: 获取网络组件的监控数据
draft: false
weight: 21
keyword: 青云, QingCloud, 云计算, API, NFV, NAT 网关, 网络组件, 监控
---



获取一个网络组件的监控数据。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| resource | String | 监控数据的资源 ID | Yes |
| zone | String | 区域 ID，注意要小写。 | Yes |
| meters.n | String | 监控项类型，如 traffic、interface等 | Yes |
| step | String | 数据间隔时间，有效值为：5m, 15m, 2h, 1d 。<br/>(m 表示分钟，h 表示小时，d 表示天)<br/>注解<br/>若请求最近15天以内的数据，数据间隔最小可以到5m；若请求15天以上的数据，数据间隔可选2h 或 1d | Yes |
| start_time | String | 监控数据的起始 **UTC** 时间，格式为 2011-07-11T11:07:00Z 或 2011-07-11T11:07:00.520Z | Yes |
| end_time | String | 监控数据的结束 **UTC** 时间，格式为 2011-07-11T11:07:00Z 或 2011-07-11T11:07:00.520Z | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 获取一个网络组件的监控数据 job ID 号 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=GetNFVMonitor
&resource=nfv-1234abcd
&meters.1=traffic
&meters.2=interface
&start_time==2014-02-09T21:47:00.820Z
&end_time=2014-02-10T03:47:00.820Z
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"GetNFVMonitorResponse",
  "ret_code":0,
  "job_id":"j-1234abcd"
}
```
