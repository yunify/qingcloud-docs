---
title: "监控指标"
description: 本小节主要介绍 Memcached 主要支持的监控指标。 
keyword: 监控指标,Memcached,键值数据库
weight: 10
collapsible: false
draft: false
---

Memcached 提供集群服务和资源性能监控指标和告警信息。

- 服务监控指标统计了集群和服务的健康状态信息，可用于定位分析服务的性能。
- 资源监控指标统计了云服务器的资源信息，如 CPU 使用率、硬盘 IOPS 情况等，可用于查看系统性能是否到达瓶颈。

> **注意**
> 
> Memcached 集群 Agent 只用于监控集群的服务和资源指标，不会收除集除监控指标外的其它数据。

## 支持的服务监控指标

|  <span style="display:inline-block;width:200px">监控项</span> | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> |  <span style="display:inline-block;width:320px">指标含义</span>  |
|:--- |:--- |:--- |:--- |
| 操作数 | 5分钟 | counts | 统计命令操作次数。包括 `get 操作`、`Set 操作`、`Delete 操作`、`Incr 操作`。|
| 操作数 | 5分钟 | counts | 统计副本集命令操作次数。包括 `Decr 操作`、`Touch 操作`、`Cas 操作`、`Flush 操作`。|
| 命中率 | 5分钟 | counts | 统计数据库查询命中率，对应 get_hits / ( get_hits + get_misses )。|
| 命中数量 | 5分钟 | counts | 统计数据库查询命中数量。包括`查询命中数`、`查询未命中数`。 |
| Key 数量 | 5分钟 | counts | 统计数据库 KEY 数量。包括`过期的 Key 个数`、`重用内存的 Key 个数`。|
| 连接数量 | 5分钟 | counts | 统计数据库当前连接数量，对应 curr_connections 字段。|

## 支持的资源监控指标

| 监控项 | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> | 指标含义 |
|:--- |:--- |:--- |:--- |
| CPU | 5分钟 | % | 统计当前资源 CPU 使用率。<br>以 % 为单位。 |
| 内存 | 5分钟 | % | 统计当前资源内存使用率。<br>以 % 为单位。 |
| 硬盘使用率 | 5分钟 | % | 统计当前资源硬盘使用率。<br>以 % 为单位。 |
| 硬盘 IOPS | 5分钟 | counts/s | 统计每秒资源硬盘 IOPS 读取或写入次数，可分别查看读取或写入监控指标。<br>以次每秒为单位。 |
| 硬盘吞吐量 | 5分钟 | MByte/s | 统计每秒资源硬盘读取或写入速率，可分表获取读取或写入速率。<br>以 MByte 每秒为单位。 |
