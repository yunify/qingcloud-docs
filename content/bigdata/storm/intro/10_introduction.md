---
title: "什么是 Storm"
description: 本小节主要介绍 Storm 服务简介。 
keywords: Storm 产品简介
weight: 10
collapsible: false
draft: false
---

Storm 是一个开源的分布式实时计算系统，通常被比作＂实时的 Hadoop＂。Storm 为实时计算提供了一些简单优美的原语，支持多种编程语言，并内建流式窗口 API 及分布式缓存 API，极大简化了流式数据处理过程。Storm 不仅高可靠、易扩展，而且处理速度极快，每个计算节点每秒能处理上百万条元组信息（Tuple），因此常被用于实时分析、在线机器学习、连续计算、分布式 RPC、ETL 等。 关于 Storm 更多的详细信息，请参阅 [Storm 官方网站](http://storm.apache.org) 。

## 系统部署架构

Storm 将实时计算逻辑包装成计算拓扑（Topology）。它类似 Hadoop 中的 Job，是一组由 Spouts 和 Bolts 通过 Stream Grouping 连接而成的图形结构，被部署到 Storm 集群中持续运行。Storm 集群采用的是 master/slave 架构，青云提供的 Storm 集群服务还包括在线伸缩、监控和告警等功能，帮助您更好地管理集群。如下图所示，青云的 Storm 集群包括如下五种节点类型：

*   **主节点**：运行了 Nimbus、DRPC、UI 和 Logviewer 服务，负责接收客户端提交的计算拓扑，并协调分派计算任务。
*   **从节点**：运行了 Supervisor 和 Logviewer 服务。其中，Supervisor 服务主要用于接收计算任务并弹性启动或停止工作进程（Worker），而 Logviewer 服务方便用户查看运行日志。
*   **RPC 节点**：运行了 DRPC 和 Logviewer 服务，用于接收 RPC 请求，并将计算拓扑的处理结果返回给客户端。
*   **客户端节点**：安装了 Python、JRE/JDK 和 Storm 软件，用于提交计算拓扑。
*   **Zookeeper 集群**：用于协调 Storm 集群。

![](../../_images/storm_architecture.png)
