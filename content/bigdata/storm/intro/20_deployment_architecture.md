---
title: "部署架构"
description: 本小节主要介绍 Storm 部署架构。 
keywords: Storm 产品简介
weight: 20
collapsible: false
draft: false
---

Storm 将实时计算逻辑包装成计算拓扑（Topology），类似 Hadoop 中的 Job，是一组由 Spouts 和 Bolts 通过 Stream Grouping 连接而成的图形结构，被部署到 Storm 集群中持续运行。

Storm 集群采用的是 master/slave 架构，青云提供的 Storm 集群服务还包括在线伸缩、监控和告警等功能，帮助您更好地管理集群。如下图所示，青云的 Storm 集群包括如下五种节点类型。

![](../../_images/storm_architecture.png)

各节点说明，如下表所示。

| 节点                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 主节点                                                       | 运行了 Nimbus、DRPC、UI 和 Logviewer 服务，负责接收客户端提交的计算拓扑，并协调分派计算任务。 |
| 从节点                                                       | 运行了 Supervisor 和 Logviewer 服务。其中，Supervisor 服务主要用于接收计算任务并弹性启动或停止工作进程（Worker），而 Logviewer 服务方便用户查看运行日志。 |
| RPC 节点                                                     | 运行了 DRPC 和 Logviewer 服务，用于接收 RPC 请求，并将计算拓扑的处理结果返回给客户端。 |
| 客户端节点                                                   | 安装了 Python、JRE/JDK 和 Storm 软件，用于提交计算拓扑。     |
| [ZooKeeper on QingCloud AppCenter](https://appcenter.qingcloud.com/apps/app-tg3lbp0a) 集群 | 用于协调 Storm 集群。                                        |

