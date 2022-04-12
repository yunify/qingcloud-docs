---
title: "入门概述"
description: 本小节主要介绍大数据工作台快速入门流程。 
keywords: 大数据工作台,快速入门
weight: 1
collapsible: false
draft: false
---

快速入门模块将指引您完成一个完整的数据开发和运维操作，从而快速了解并使用大数据工作台。

## 前提条件

已完成[准备工作](../../prepare/create_account)，准备好账号和工作空间。

## 入门流程

在大数据工作台的工作空间实现数据开发和运维，主要包含以下步骤：

<img src="/bigdata/dataomnis/_images/process_qs.png" alt="入门流程" style="zoom:30%;" />

1. [创建网络](../create_net)：创建计算集群需要的网络资源。
2. [创建计算集群](../create_flink_cluster)：大数据工作台通过**计算集群**进行数据集成和数据开发工作。
3. [创建并开发作业](../create_job)：大数据工作台通过作业实现数据处理的业务逻辑。
4. [配置作业依赖/调度](../scheduling_job)：作业开发完成后，需要配置作业依赖的计算集群、作业的调度周期等才可以发布。
5. [作业运维](../released)：发布作业后，通过运维中心可查看和管理已发布作业及作业实例。
