---
title: "监控和告警"
description: 
draft: false
weight: 6
---

本小节主要介绍如何查看集群监控指标、绑定节点监控指标，以及如何设置通知策略。

## 监控指标

目前 ClickHouse on QingCloud支持如下监控指标。

| <span style="display:inline-block;width:200px">监控项</span> | <span style="display:inline-block;width:100px">间隔时间</span> | <span style="display:inline-block;width:100px">单位</span> | <span style="display:inline-block;width:200px">指标说明</span> |
|:--- |:--- |:--- |:--- |
| 查询数 | 5分钟 | number | 服务查询数。 |
| 数据同步 | 5分钟 | number | 服务数据同步数。 |
| HTTP 连接数 | 5分钟 | number| 服务 HTTP 连接数。 |
| 查询文件句柄数| 5分钟 | number | 服务查询文件句柄数。 |
| 写入文件句柄数 | 5分钟 | number | 服务写入文件句柄数。 |
| 读 IO 系统调用数| 5分钟 | number | 服务读 IO 系统调用数。 |
| 写 IO 系统调用数| 5分钟 | number | 服务写 IO 系统调用数。 |
| 查询线程数| 5分钟 | number | 服务查询线程数。 |
| 写入延迟数 | 5分钟 | number | 服务写入延迟数。 |
| 全局锁等待数 | 5分钟 | number | 服务全局锁等待数。 |
| 读锁等待数 | 5分钟 | number | 服务读锁等待数。 |
| 写锁等待数 | 5分钟 | number | 服务写锁等待数。 |
| 活跃读锁 | 5分钟 | number | 服务活跃读锁数。 |
| 活跃写锁 | 5分钟 | number | 服务活跃写锁数。 |
| CPULOAD | 5分钟 | number | 服务CPULOAD数。 |
| CPU | 5分钟 | % | 资源 CPU 使用率。 |
| 内存 | 5分钟 | % | 资源内存使用率。 |
| 硬盘使用率 | 5分钟 | % | 资源硬盘使用率。 |
| 硬盘 IOPS | 5分钟 | 次 | 资源硬盘 IOPS 次数。 |
| 硬盘吞吐量 | 5分钟 | MB/秒 | 资源硬盘吞吐量。 |

## 查看节点监控

每台云服务器的资源监控和服务监控。服务监控统计了一些用于性能分析的常用的 Metrics 信息，可用于定位分析数据库的性能。资源监控统计了云服务器的资源信息，包括 CPU 使用率、硬盘 IOPS 情况等。

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据仓库与 BI** > **ClickHouse**，进入 ClickHouse 集群列表页。
3. 点击集群 ID，进入集群详情页面。
4. 在节点对应**监控**列，选中监控按钮。
5. 在节点列表下方，通过切换**服务**和**资源**，可分别查看对应节点服务和资源监控指标。
6. 通过切换时间区段，可分别查看不通时间段内，集群性能状态。

   可选中最近6小时、最近一天、最近两周、最近一个月、最近6个月。

![查询数](../../_images/queries_monitor.png)

![TCP连接数](../../_images/tcp_connections_monitor.png)

![活跃读锁](../../_images/active_read_lock_monitor.png)

![CPU利用率](../../_images/cpu_monitor.png)

![硬盘 IOPS](../../_images/iops_monitor.png)

## 设置节点监控指标

1. 在集群详情页，选择**告警**页签。
2. 选择一个集群节点，点击**绑定指标告警策略**。
3. （可选）创建指标监控策略。

   点击**创建指标监控策略**，设置告警参数、告警规则、告警行为，添加一条告警策略。

   ![设置指标告警策略](../../_images/set_metr_rules.png)

4. 勾选一个策略，点击**提交**，完成设置。

## 设置通知策略

设置独立通知策略后，当集群产生告警，将统一发送至独立配置的通知列表，原告警策略所关联的通知列表将无法收到告警通知，请注意运维业务分配情况。

1. 在集群详情**告警**页签。
2. 在**通知策略**模块，点击**设置**。
3. 在设置窗口，选择通知，点击提交，设置完成。

   ![设置通知策略](../../_images/set_alarm_rules.png)
