---
title: "监控指标和告警"
description: 本小节主要介绍如何管理 QingCloud ChronuDB 监控指标。 
keywords: chronusdb 监控指标
data: 2021-05-14T00:38:25+09:00
weight: 60
collapsible: false
draft: false
---



## 监控指标

这里提供了每台云服务器的资源监控和服务监控。服务监控统计了一些用于性能分析的常用的 Metrics 信息，可用于定位分析数据库的性能。

资源监控统计了云服务器的资源信息，例如 CPU 使用率、硬盘 IOPS 情况等，可用于查看系统性能是否到达瓶颈。

![查询数](../../_images/queries_monitor.png)

![HTTP连接数](../../_images/http_connections_monitor.png)

![活跃读锁](../../_images/active_read_lock_monitor.png)

![CPU利用率](../../_images/cpu_monitor.png)

![硬盘 IOPS](../../_images/iops_monitor.png)

## 监控告警

可以对集群节点配置告警策略，及时掌握集群的资源和服务状况。

![监控告警](../../_images/alarm.png)

