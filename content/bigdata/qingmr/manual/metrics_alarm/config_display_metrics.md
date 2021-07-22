---
title: "监控指标"
description: 本小节主要介绍 QingMR 主要支持哪些监控指标。 
keywords: QingMR 监控指标
weight: 10
collapsible: false
draft: false
---

QingMR 集群提供资源性能监控指标和告警信息。

- 资源监控指标统计了云服务器的资源信息，如 CPU 使用率、硬盘 IOPS 情况等，可用于查看系统性能是否到达瓶颈。
- 服务监控指标统计了用于性能分析的常用的 Metrics 信息，可用于定位分析数据库的性能。

> 注意：
> 
> QingMR 集群 Agent 只用于监控集群的服务和资源指标，不会收除集除监控指标外的其它数据。

## 支持的服务监控指标

通过对接 Hadoop、Spark 和 Hive 原生的监控，可获取丰富的服务监控信息。详情参见[Hadoop、Spark 和 Hive 原生的服务监控](../view_monitor_metrics)

为了帮助用户更好的管理和维护 QingMR 集群，我们提供了部分针对 YARN、 HDFS 以及 Spark 服务级别分角色的监控。

- YARN 服务监控，包括 YARN 管理的各 NodeManager 节点状态、运行中的 YARN 应用、 YARN 应用状态、 YARN 集群总内存、 YARN 集群 virtual cores、YARN containers、NodeManger 节点内存等。

![YARN](../../../_images/cluster_detail.png)

![YARN](../../../_images/yarn-applications.png)

![YARN](../../../_images/yarn-resources.png)

![YARN](../../../_images/slave-yarn.png)

- HDFS 服务监控，包括 DFS 文件状态、 DFS 空间占比、 DFS 容量、各 DataNode 状态、 HDFS 存储空间、 DFS 块及垃圾回收信息等。

![HDFS](../../../_images/hdfs-master.png)

![HDFS](../../../_images/hdfs-master2.png)

![HDFS](../../../_images/slave-storage.png)

- Spark 服务监控，包括 Spark Standalone 模式下 worker 节点状态、 spark applications 状态、各 worker 节点计算及存储资源等。

![HDFS](../../../_images/spark-standalone.png)

![HDFS](../../../_images/slave-spark-standalone.png)

## 支持的资源监控指标

通过 QingCloud 云监控告警服务为集群服务器的资源和服务提供监控管理。当集群监控项超过阈值时触发告警，并通过短信、邮件等形式发送告警通知。

| 监控项 | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> | 指标含义 |
|:--- |:--- |:--- |:--- |
| CPU | 5分钟 | % | 统计当前资源 CPU 使用率。<br>以 % 为单位。 |
| 内存 | 5分钟 | % | 统计当前资源内存使用率。<br>以 % 为单位。 |
| 硬盘使用率 | 5分钟 | % | 统计当前资源硬盘使用率。<br>以 % 为单位。 |
| 硬盘 IOPS | 5分钟 | counts/s | 统计每秒资源硬盘 IOPS 读取或写入次数，可分别查看读取或写入监控指标。<br>以次每秒为单位。 |
| 硬盘吞吐量 | 5分钟 | MByte/s | 统计每秒资源硬盘读取或写入速率，可分表获取读取或写入速率。<br>以 MByte 每秒为单位。 |
