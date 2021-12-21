---
title: "场景介绍"
description:  
keywords: 
weight: 5
collapsible: false
draft: false
---

本实践为您介绍如何将 MySQL 数据实时（upsert 或 append）同步到 Elasticsearch。

操作流程如下：

<img src="/bigdata/databench/_images/process_practice.png" alt="实践流程" style="zoom:30%;" />

1. [环境准备](../prepare01)：准备操作过程中需要的数据源环境。
2. [服务准备](../prepare02)：准备操作过程中需要的大数据工作台环境。包括如何创建工作空间、如何创建网络、如何创建计算集群。
3. [数据开发](../data_process)：包括如何创建并开发 SQL 作业、如何配置作业的环境参数、如何配置作业的调度属性。
4. [验证结果](../verify)：验证作业执行结果。