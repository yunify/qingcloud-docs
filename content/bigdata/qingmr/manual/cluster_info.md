---
title: "集群信息"
description: 本小节主要介绍如何查看 QingCloud QingMR 集群信息。 
keywords: QingMR 集群信息
weight: 10
collapsible: false
draft: false
---



## 查看集群详情

![查看服务详情](../../_images/cluster_detail.png)

创建成功后，点击集群列表页面相应集群可查看集群详情。

可以看到集群分为 HDFS 主节点、主节点、从节点和 Client 节点四种角色。

- 主节点上运行着诸多服务如 YARN Resource Manager ，Spark Standalone 模式下的 Spark Master（从1.1.0开始默认关闭），Hive Metastore（默认关闭），HiveServer2（默认关闭）。
- 可以直接访问 client 节点，并通过该节点与集群交互如提交 Hadoop/Spark/Hive job 、查看/上传/下载 HDFS 文件、运行 Hive 查询等。

## 查看服务详情

进入集群详情页面后，点击**服务详情**，即可查看各节点的运行服务。

![查看服务详情](../../_images/service_detail.png)
