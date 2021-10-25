---
title: "查看资源和服务监控"
description: 本小节主要介绍如何查看 QingMR 监控信息。 
keywords: QingMR 监控告警
weight: 40
collapsible: false
draft: false
---


QingMR 监控告警可通过 QingCloud 云监控告警服务为集群服务器的资源和服务提供监控管理。当集群监控项超过阈值时触发告警，并通过短信、邮件等形式发送告警通知。

此外，通过对接 QingMR 和 HDFS 官方平台，您还可以获取服务监控信息，帮助您更好的管理和维护 QingMR 集群。

> **注意**
> 
> 由于云监控 CloudSat 默认监控扫描周期为5分钟，则当前显示5～10分钟前的集群状态。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群查看权限。
- 已创建 QingMR 集群，集群状态为**活跃**，且服务状态为**正常**。 
  
  > **说明**
  >
  > AppCenter 更新中、异常、删除状态的集群，无法获取其监控指标。当集群重启或恢复后，即可正常查看。
  
- 集群服务已正常运行一段时间。
  
  > **说明**
  >
  > AppCenter 监控扫描周期默认为5分钟，新增节点暂无法查看监控信息。

## 查看服务监控指标

YARN、HDFS、Spark 和 Hive 提供了丰富的监控信息。如果需要通过公网访问这些信息您需要先申请一个公网 IP 绑定在路由器上，在路由器上设置端口转发，同时打开防火墙相应的下行端口。

- `主节点` 中 Resource Manager 默认端口 `8088` .
- `HDFS 主节点` 默认端口是 `50070`.
- Spark 主节点 和主节点是同一个，其默认端口是 `8080`.
- HiveServer2 WEB UI 默认端口 `10002`。 (其中 HiveServer2 WEB UI 从 QingMR 1.3.0 开始支持)

为方便查看 QingMR UI，请参考**VPN 隧道指南** 配置 VPN，VPN 建立后可监控服务状态。

- http://< 主节点IP >:8088

![YARN](../../../_images/yarn_monitoring.png)

- http://< 主节点IP >:8088/ui2  ( yarn 新版 UI，从 QingMR 2.0.0 开始支持)

![YARN](../../../_images/yarn_monitoring_ui2.png)

- http://< HDFS-MASTER-IP >:50070

![YARN](../../../_images/hdfs_monitoring.png)

- http://< 主节点IP >:8080

![YARN](../../../_images/spark_monitoring.png)

- http://< 主节点IP >:10002 (从 QingMR 1.3.0 开始支持)

![HIVE_SERVER2](../../../_images/hive_server2_monitoring.png)
> HiveServer2 WEB UI 展示的 sessions 和 queries 仅包含以 beeline 远程模式或其他方式提交到 HiveServer2 服务的任务

- http://< JobManager-Web-Interface > (从 QingMR 2.5.0 开始支持)

![Flink session WEB UI](../../../_images/flink_session_dashboard.png)

> 说明
>
> Flink YARN Session WEB UI 展示的是此 Session 正在运行的 job 和 1 小时内的已完成 job，可以通过此 WEB UI 向 Flink YARN Session 提交 job。 `JobManager-Web-Interface` 为 JobManager 地址，详见 [创建 Flink YARN Session](../../../developer_manual/flink)。

- http://< HDFS-MASTER-IP >:8082 (从 QingMR 2.5.0 开始支持)

![Flink historyserver WEB UI](../../../_images/flink_dashboard.png)

> Flink historyserver WEB UI 展示的是已完成 job 信息，包括向 Flink YARN Session 提交的 job，和 Standalone Flink job。

## 查看资源监控指标

1. 在集群管理页面，点击目标集群 ID，进入集群详情页面。
2. 在**节点**页签，选中目标节点**监控**。

   - 通过切换时间区段，可分别查看不同时间段内集群性能状态。
     
     可选中`最近6小时`、`最近一天`、`最近两周`、`最近一个月`、`最近6个月`。
     
   - 您也可以通过自定义连续7天的起止时间，查看目标时间段内指标状态。
   
     但最多仅能查询近90天内数据。
   
   <img src="../../../_images/manual_node_monitor.png" alt="节点监控" style="zoom:50%;" />

## 查看实时资源监控

1. 在集群管理页面，点击目标集群 ID，进入集群详情页面。

2. 在**节点**页签，选中目标节点**监控**。
   
3. 查看实时资源指标状态。

   切换到**资源**指标，点击**关闭**状态按钮，开启实时监控。

   > **说明**
   >
   > 每一个资源指标实时监控，需单独开启。

   **实时监控为关闭时**

   <img src="../../../_images/manual_resource_monitor.png" style="zoom:50%;" />

   **实时监控为开启时**

   <img src="../../../_images/manual_resource_monitor_realtime.png" style="zoom:50%;" />
