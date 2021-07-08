---
title: "监控指标"
description: 本小节主要介绍 ChronusDB 主要支持哪些监控指标。 
keywords: chronusdb 监控指标
weight: 10
collapsible: false
draft: false
---

ChronusDB 提供集群服务和资源性能监控指标和告警信息。

- 服务监控统计了用于性能分析的常用的 Metrics 信息，可用于定位分析数据库的性能
- 资源监控指标统计了云服务器的资源信息，如 CPU 使用率、硬盘 IOPS 情况等，可用于查看系统性能是否到达瓶颈。

> 注意：
> 
> ChronusDB 集群 Agent 只用于监控集群的服务和资源指标，不会收除集除监控指标外的其它数据。

## 支持的服务监控指标

|  <span style="display:inline-block;width:200px">监控项</span> | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> |  <span style="display:inline-block;width:320px">指标含义</span>  |
|:--- |:--- |:--- |:--- |
| 查询数 | 5分钟 | counts | 统计当前执行查询操作的次数 。 |
| 数据同步 | 5分钟 | counts | 统计当前数据同步的次数 。<br>标识：DistributedSend|
| HTTP 连接数 | 5分钟 | number | 统计当前 HTTP 连接个数 。<br>标识：HTTPConnection |
| 查询文件句柄数 | 5分钟 | number | 统计当前查询文件句柄数量 。<br>标识：OpenFileForRead  |
| 写入文件句柄数 | 5分钟 | number | 统计当前写入文件句柄数量 。<br>标识：OpenFileForWrite |
| 读 IO 系统调用数| 5分钟 | counts | 统计当前读 IO 系统调用次数 。<br>标识：Read |
| 写 IO 系统调用数| 5分钟 | counts | 统计当前写 IO 系统调用次数 。<br>标识：Write |
| 查询线程数 | 5分钟 | number | 统计当前查询线程数量 。<br>标识：QueryThread |
| 写入延迟数 | 5分钟 | number | 统计当前写入延迟数量 。<br>标识：DelayedInserts|
| 全局锁等待数 | 5分钟 | number | 统计当前全局锁等待数量 。<br>标识：ContextLockWait  |
| 读锁等待数 | 5分钟 | number | 统计当前读锁等待数量 。<br>标识：RWLockWaitingReaders  |
| 写锁等待数 | 5分钟 | number | 统计当前写锁等待数量 。<br>标识：RWLockWaitingWriters  |
| 活跃读锁 | 5分钟 | number | 统计当前活跃读锁数量 。<br>标识：RWLockActiveReaders  |
| 活跃写锁 | 5分钟 | number | 统计当前活跃写锁数量 。<br>标识：RWLockActiveWriters |
| CPULOAD | 5分钟 | % | 统计当前 CPU 负载状态。<br> 标识 ：CPUload |

## 支持的资源监控指标

| 监控项 | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> | 指标含义 |
|:--- |:--- |:--- |:--- |
| CPU | 5分钟 | % | 统计当前资源 CPU 使用率。<br>以 % 为单位。 |
| 内存 | 5分钟 | % | 统计当前资源内存使用率。<br>以 % 为单位。 |
| 硬盘使用率 | 5分钟 | % | 统计当前资源硬盘使用率。<br>以 % 为单位。 |
| 硬盘 IOPS | 5分钟 | counts/s | 统计每秒资源硬盘 IOPS 读取或写入次数，可分别查看读取或写入监控指标。<br>以次每秒为单位。 |
| 硬盘吞吐量 | 5分钟 | MByte/s | 统计每秒资源硬盘读取或写入速率，可分表获取读取或写入速率。<br>以 MByte 每秒为单位。 |
