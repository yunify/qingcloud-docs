---
title: "Ranger 概述"
description: 本小节主要介绍如 Ranger 插件简要说明。 
keywords: qingmr  Ranger
weight: 10
collapsible: false
draft: false
---



Apache Ranger 提供集中式权限管理框架，可以对 HDFS、HBase、Hive、Yarn 等组件进行细粒度的权限访问控制；Ranger 提供 Web 界面，方便开发管理员操作。

通过插件的方式，Ranger 与集群中的开源组件进行集成。通过 Ranger 可以对组件进行细粒度的访问权限控制。

Ranger 主要由三个组件组成：

- Ranger Admin

   支持创建和更新安全访问策略，这些策略被存储在数据库中。各个组件的 Plugin 定期对这些策略进行轮询。

- Ranger Plugins

   Plugin 嵌入在各个集群组件的进程里，是一个轻量级的Java程序。

- Ranger UserSync
  
   Ranger 提供了一个用户同步工具。这些用户和用户组的信息被存储在 Ranger Admin 的数据库中，可以在定义策略时使用。

QingMR 支持将集群中的 Hive 组件集成到 Ranger，以控制相关权限，
