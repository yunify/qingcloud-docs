---
title: "监控指标"
description: 本小节主要介绍 Kafka 主要支持哪些监控指标。 
keyword: 云计算,大数据,消息队列,中间件,Kafka 监控指标,Kafka
weight: 10
collapsible: false
draft: true
---

Kafka 提供集群服务和资源性能监控指标和告警信息。
- 服务监控指标可用于定位分析 Kafka 的性能。
- 资源监控指标统计了云服务器的资源信息，如 CPU 使用率、硬盘 IOPS 情况等，可用于查看系统性能是否到达瓶颈。

> 说明
> 
> 只会监控集群的服务和资源指标，不会收除集除监控指标外的其它数据。

## 支持的服务监控指标

|  <span style="display:inline-block;width:200px">监控项</span> | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> |  <span style="display:inline-block;width:320px">指标含义</span>  |
|:--- |:--- |:--- |:--- |
| JVM HEAP 内存使用率| 5分钟 |  |  |
| 消息吞吐率 | 5分钟 |  |  |
| 数据吞吐率 | 5分钟 | counts|  |
| 副本消息滞后量| 5分钟 |  |  |
| ISR 伸缩速率| 5分钟 | 个/秒 |  |
| 管理统计| 5分钟 | counts |  |


## 支持的资源监控指标

| 监控项 | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> | 指标含义 |
|:--- |:--- |:--- |:--- |
| CPU | 5分钟 | % | 统计当前资源 CPU 使用率。<br>以 % 为单位。 |
| 内存 | 5分钟 | % | 统计当前资源内存使用率。<br>以 % 为单位。 |
| 硬盘使用率 | 5分钟 | % | 统计当前资源硬盘使用率。<br>以 % 为单位。 |
| 硬盘 IOPS | 5分钟 | counts/s | 统计每秒资源硬盘 IOPS 读取或写入次数，可分别查看读取或写入监控指标。<br>以次每秒为单位。 |
| 硬盘吞吐量 | 5分钟 | KB/秒 | 统计每秒资源硬盘读取或写入速率，可分表获取读取或写入速率。<br>以 KB 每秒为单位。 |

