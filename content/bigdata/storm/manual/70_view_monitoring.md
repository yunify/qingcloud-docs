---
title: "查看监控信息"
description: 本小节主要介绍查看监控信息。 
keywords: Storm,监控
weight: 60
collapsible: false
draft: false
---

- Storm 集群的每个节点提供了资源的监控和告警服务，包括 CPU 使用率、内存使用率、硬盘使用率等，以帮助用户更好的管理和维护 Storm 集群。 

- Storm 主节点上运行的 Storm UI 服务提供了丰富的集群监控信息，默认端口为 **8080**。 

- 青云提供的 Storm 集群还在各个节点上运行了 Logviewer 服务，该服务允许用户访问各个节点上的日志。拨入到 VPN 网络后，可以访问以下 URL 来浏览 Storm UI 及节点日志。

  - [http:/](http:/)/:8080
  - [http:/](http:/)/:8080/daemonlog?file=

  例如：

  - [http://stmn-9ss52hui-master:8080](http://stmn-9ss52hui-master:8080)
  - [http://stmn-9ss52hui-master:8000/daemonlog?file=nimbus.log](http://stmn-9ss52hui-master:8000/daemonlog?file=nimbus.log)
  - [http://stmn-2pfpy7bo-rpc:8000/daemonlog?file=drpc.log](http://stmn-2pfpy7bo-rpc:8000/daemonlog?file=drpc.log)

## 查看监控信息

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **大数据服务** > **Storm 服务**，进入 **Storm** 页面。

3. 点击待修改参数的 Storm ID，进入**集群管理**页面。

4. 选择查看监控信息的节点，查看监控信息。

   ![](../../_images/view_monitor.png)

5. 您可以查看最近 6 小时、最近一天、最近两周、最近一个月、最近 6 个月、自定时间段的节点的 CPU、内存、硬盘使用率、硬盘 IOPS、磁盘吞吐量。

