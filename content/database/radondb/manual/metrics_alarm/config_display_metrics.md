---
title: "监控指标"
description: 本小节主要介绍 RadonDB 主要支持哪些监控指标。 
keywords: RadonDB 监控指标
weight: 10
collapsible: false
draft: false
---

RadonDB 提供集群服务和资源性能监控指标和告警信息。

- 服务监控指标统计了中的信息，可用于定位分析数据库的性能。
  
   SQL 节点的服务监控统计了当前连接数、慢查询数、查询数量和写入查询；存储节点的服务监控统计了 `SHOW GLOBAL STATUS` 中的信息。

- 资源监控指标统计了云服务器的资源信息，如 CPU 使用率、硬盘 IOPS 情况等，可用于查看系统性能是否到达瓶颈。

> **注意**
> 
> RadonDB 集群 Agent 只用于监控集群的服务和资源指标，不会收除集除监控指标外的其它数据。

## 支持的服务监控指标

| 监控项 | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> | <span style="display:inline-block;width:320px">指标含义</span>  |
|:--- |:--- |:--- |:--- |
| 当前线程连接数 | 5分钟 | counts | 统计当前线程总连接数。<br>以个为单位。 |
| 慢查询 | 5分钟 | counts | 统计当前慢查询操作的次数。<br>以次为单位。 |
| 查询数量| 5分钟 | counts | 统计当前执行查询操作的次数 。<br>以次为单位 |
| 写入查询 | 5分钟 | counts | 统计当前 DML 操作的次数。<br>以次为单位。 |

> **说明**
>
> 以上为 QingCloud 控制台在线可监控的服务指标。更多服务监控指标通过采集，可在第三方 Grafana 平台可视化面板查看。

## 支持的资源监控指标

| 监控项 | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> | <span style="display:inline-block;width:320px">指标含义</span>  |
|:--- |:--- |:--- |:--- |
| CPU | 5分钟 | % | 统计当前资源 CPU 使用率。<br>以 % 为单位。 |
| 内存 | 5分钟 | % | 统计当前资源内存使用率。<br>以 % 为单位。 |
| 硬盘使用率 | 5分钟 | % | 统计当前资源硬盘使用率。<br>以 % 为单位。 |
| 硬盘 IOPS | 5分钟 | counts/s | 统计每秒资源硬盘 IOPS 读取或写入次数，可分别查看读取或写入监控指标。<br>以次每秒为单位。 |
| 硬盘吞吐量 | 5分钟 | MByte/s | 统计每秒资源硬盘读取或写入速率，可分表获取读取或写入速率。<br>以 MByte 每秒为单位。 |
