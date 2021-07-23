---
title: "监控指标"
description: 本小节主要介绍 HBase 主要支持哪些监控指标。 
keywords: HBase 监控指标
weight: 10
collapsible: false
draft: false
---

HBase 集群提供资源性能监控指标和告警信息。

- 资源监控指标统计了云服务器的资源信息，如 CPU 使用率、硬盘 IOPS 情况等，可用于查看系统性能是否到达瓶颈。
- 服务监控指标统计了用于性能分析的常用的 Metrics 信息，可用于定位分析数据库的性能。

> 注意：
> 
> HBase 集群 Agent 只用于监控集群的服务和资源指标，不会收除集除监控指标外的其它数据。

## 支持的服务监控指标

通过对接 HBase 和 HDFS 官方平台，可获取丰富的服务监控信息。

|  <span style="display:inline-block;width:200px">监控项</span> | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> |  <span style="display:inline-block;width:320px">指标含义</span>  |
|:--- |:--- |:--- |:--- |
| 集群 Region 迁移监控 | - | counts | 统计集群中 Region 处于迁移状态的数量。 |
| RegionServer 读、写 QPS 监控 | - | counts | 统计 RegionServer 每秒读、写操作数。|
| RegionServer BlockCache 命中数监控 | - | counts | 统计 RegionServer BlockCache 命中数。 |
| RegionServer BlockCache 命中率监控 | - | % | 统计 RegionServer BlockCache 命中率。 |
| RegionServer 慢操作数监控 | - | counts | 统计 RegionSever 慢 Delete，Increment，Get，Append，Put 数量。|
| RegionServer CMS GC 时间监控| - | ms | 统计 RegionSever CMS GC 消耗时间。 |

## 支持的资源监控指标

通过 QingCloud 云监控告警服务为集群服务器的资源和服务提供监控管理。当集群监控项超过阈值时触发告警，并通过短信、邮件等形式发送告警通知。

| 监控项 | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> | 指标含义 |
|:--- |:--- |:--- |:--- |
| CPU | 5分钟 | % | 统计当前资源 CPU 使用率。<br>以 % 为单位。 |
| 内存 | 5分钟 | % | 统计当前资源内存使用率。<br>以 % 为单位。 |
| 硬盘使用率 | 5分钟 | % | 统计当前资源硬盘使用率。<br>以 % 为单位。 |
| 硬盘 IOPS | 5分钟 | counts/s | 统计每秒资源硬盘 IOPS 读取或写入次数，可分别查看读取或写入监控指标。<br>以次每秒为单位。 |
| 硬盘吞吐量 | 5分钟 | MByte/s | 统计每秒资源硬盘读取或写入速率，可分表获取读取或写入速率。<br>以 MByte 每秒为单位。 |
