---
title: "功能特性"
description: 本小节主要介绍 QingMR  简要主要功能特性。 
keywords: QingMR  功能特性, 
weight: 15
collapsible: false
draft: false
---


QingMR 适用于流式数据处理、批量数据处理、极速数据查询与分析、机器学习等应用场景，能够满足企业用户实时数据计算、海量数据极速查询及分析处理的需求。

- QingMR 通过 QingCloud AppCenter 交付部署，3 分钟之内即可完成一个集群部署，并且能够通过可视化的方式完成服务的个性化定制，并提供完善的服务监控，真正实现一键部署、即刻使用。基于 AppCenter 框架内原生的应用感知机制，实现与其他大数据分析组件如 ZooKeeper 之间自动化的无缝集成。

- QingMR 与 QingStor™ 对象存储平台也提供预置集成，用户通过简单的配置即可开启对 QingStor™ 对象存储的支持，以应对海量大规模数据的存储问题。

- QingMR 中的 Hadoop MapReduce ，Spark 和 Hive 都与 QingStor 对象存储服务进行了有效的集成，使得用户可以高效地进行海量数据的低成本存储。

## Hadoop 服务简介

提供 Hadoop  的 MapReduce、YARN、HDFS 等服务。

- 支持用户自定义 Hadoop 代理用户及其能够代理 hosts 及其 groups。

- 支持上传自定义的 YARN 调度器 CapacityScheduler 和 FairScheduler，并支持在 CapacityScheduler 和 FairScheduler 之间进行切换。

## Spark 服务简介

提供 Spark 的 Spark streaming、Spark SQL、DataFrame and DataSet、Structed Streaming、MLlib、GraphX、SparkR 等服务。

- 同时支持 Spark Standalone 和 Spark on YARN 两种模式。

- 为了方便用户提交 Python Spark 应用，提供了 Anaconda 发行版的 Python 2.7.13 和 Python 3.6.1 。用户可以选择 Python Spark 应用的运行环境，支持在 Python2 和 Python3 之间进行切换。

- 为了方便用户开发 Python Spark 机器学习类的应用， 分别在 Anaconda 发行版的 Python2 和 Python3 内提供了 Anaconda 发行版的数据科学包 numpy, scikit-learn, scipy, Pandas, NLTK and Matplotlib。

- 为了方便用户开发 Spark R 应用，提供了R语言运行时。

- 支持上传自定义的 Spark 应用内调度器 Fair Schudeler，并支持 spark 应用内调度模式在 FIFO 和 FAIR 切换。

- 支持基于 Spark 的分布式深度学习框架 BigDL （从 QingMR 2.0.0 开始支持）。

## Hive 服务简介

提供 Hive  的以 SQL 语法读、写和管理分布式大规模数据集的 SQL on Hadoop 数据仓库服务。

- 同时支持 Hive on MapReduce 和 Hive on Spark 两种模式并可进行切换 (其中 Hive on Spark 从 QingMR 1.3.0 开始支持)。

## Flink 服务简介

提供 Flink 的 DataStream and DataSet、CEP、Table、FlinkML、Gelly 等服务。

- 支持 Flink on YARN 模式。

## Ranger 服务简介

Ranger 提供集中式权限管理框架，可以对 HDFS、HBase、Hive、Yarn 等组件进行细粒度的权限访问控制；Ranger 提供 Web 界面，方便开发管理员操作。

- Ranger Admin

   支持创建和更新安全访问策略，这些策略被存储在数据库中。各个组件的 Plugin 定期对这些策略进行轮询。

- Ranger Plugins

   Plugin 嵌入在各个集群组件的进程里，是一个轻量级的Java程序。

- Ranger UserSync
  
   Ranger 提供了一个用户同步工具。这些用户和用户组的信息被存储在 Ranger Admin 的数据库中，可以在定义策略时使用。

## 各组件公共服务简介

- 配置参数增加到 80 多个，定制服务更方便。

- 针对 HDFS, YARN, Spark 和 Flink 服务级别的监控告警、健康检查与服务自动恢复。

- Hadoop, Spark 和 Hive 均可通过 S3 协议与 QingStor 对象存储集成。

- 支持水平与垂直扩容。

- 可选 Client 节点（为了使用上述全部功能，建议 Client 节点为必选），全自动配置无需任何手动操作。

- 指定依赖服务，自动添加依赖服务中的所有节点到 QingMR 所有节点的 hosts 文件中。
