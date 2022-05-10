---
title: "监控指标"
description: 本小节主要介绍 OpenSearch 主要支持哪些监控指标。 
keyword: 监控指标,OpenSearch,搜索引擎
weight: 10
collapsible: false
draft: false
---

OpenSearch 提供集群服务和资源性能监控指标和告警信息。

- 服务监控指标统计了集群和服务的健康状态信息，可用于定位分析服务的性能。
- 资源监控指标统计了云服务器的资源信息，如 CPU 使用率、硬盘 IOPS 情况等，可用于查看系统性能是否到达瓶颈。

> **注意**
> 
> OpenSearch 集群只用于监控集群的服务和资源指标，不会收除集除监控指标外的其它数据。

## 支持的服务监控指标

|  <span style="display:inline-block;width:200px">监控项</span> | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> |  <span style="display:inline-block;width:320px">指标含义</span>  |
|:--- |:--- |:--- |:--- |
| 集群健康状态| 5分钟 | - | 统计集群索引数据的健康状态。<li>`green` 表示健康。<li>`yellow` 表示告警，有索引的分片数据不可用，但由于冗余配置，索引数据仍能访问。<li>`red` 表示异常，有索引的主分片数据和副本分片数据都不可用，索引的部分数据不可访问。 |
| 节点数 | 5分钟 | counts | 统计 OpenSearch 数据节点和 Master 节点总数。<br>以个为单位。 |
| 集群索引数 | 5分钟 | counts| 统计集群中存放的索引数量。<br>以次为单位。 |
| 集群 JVM 堆内存使用百分比| 5分钟 | % | 统计 JVM 堆内存使用的百分比。<br>如果长期处于90%以上，则需考虑扩容，增加数据节点或者提高节点配置。<br>以 % 为单位 |
| 集群 JVM 线程数 | 5分钟 | counts | 统计在 JVM 中运行的线程数量。<br>以个为单位。 |
| 集群文档监控组 | 5分钟 | counts | 统计集群中的文档数量。<li>`cluster_docs_count`集群中正在运行的文档数量；<li>`cluster_docs_deleted_count`集群中已被删除的文档数量。<br>以个为单位。 |
| 集群分片监控组 | 5分钟 | counts | 统计集群中的分片数量。<li>`cluster_shards_primaries_count`集群中主分片数量；<li>`cluster_shards_replication_count`集群中副本分片数量；<li>`relocating_shards`集群中正在迁移的分片数量；<li>`initializing_shards`集群中正在初始化的分片数量；<li>`unassigned_shards`集群中还未分配存储空间分片数量。<br>以个为单位。|
| 等待中的任务数| 5分钟 | counts | 统计还未执行的集群级的任务。<br>以个为单位。 |
| 执行中的 FETCH 数| 5分钟 | counts | 统计还未完成的 FETCH 数。<br>以个为单位。 |
| 任务在队列中的最大等待时间 | 5分钟 | ms | 统计队列中未被执行的任务的最大等待时间。<br>以毫秒为单位。 |
| 活跃分片百分比 | 5分钟 | % | 统计队列中未被执行的任务的最大等待时间。<br>以%为单位。 |
| 索引压力 | 5分钟 | MByte | 统计索引操作消耗的 JVM 内存大小。<br>- `node_indexing_pr_coordinating` 表示 coordinating 操作消耗的 JVM 内存大小。<br>- `node_indexing_pr_primary` 表示 primary 操作消耗的 JVM 内存大小。<br>- `node_indexing_pr_replica` 表示 replica 操作消耗的 JVM 内存大小。<br>-  `node_indexing_pr_all` 表示所有索引操作消耗的 JVM 内存大小。<br>- `node_indexing_pr_limit` 表示执行索引操作的 JVM 内存限制。|
| 索引压力百分比 | 5分钟 | % | 统计索引操作消耗的 JVM 内存百分比。<br>- `索引压力百分比（coordinating, primary）`，表示 coordinating 与 primary 操作消耗 JVM 内存百分比（以“执行索引操作的 JVM 内存限制”为总量计算）。<br>- `索引压力百分比（all）`表示所有索引操作消耗 JVM 内存百分比（以“执行索引操作的jvm内存限制”为总量计算）。 |

## 支持的资源监控指标

| 监控项 | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> | 指标含义 |
|:--- |:--- |:--- |:--- |
| CPU | 5分钟 | % | 统计资源 CPU 使用率。<br>以 % 为单位。 |
| 内存 | 5分钟 | % | 统计资源内存使用率。<br>以 % 为单位。 |
| 硬盘使用率 | 5分钟 | % | 统计资源硬盘使用率。<br>以 % 为单位。 |
| 硬盘 IOPS | 5分钟 | counts/s | 统计每秒资源硬盘 IOPS 读取或写入次数，可分别查看读取或写入监控指标。<br>以次每秒为单位。 |
| 硬盘吞吐量 | 5分钟 | MByte/s | 统计每秒资源硬盘读取或写入速率，可分表获取读取或写入速率。<br>以 MByte 每秒为单位。 |
