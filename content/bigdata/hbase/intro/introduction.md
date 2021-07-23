---
title: "什么是 HBase"
description: 本小节主要介绍 HBase 服务简介。 
keywords: HBase 产品简介, 
weight: 10
collapsible: false
draft: false
---



HBase 是一个开源的、分布式的、数据多版本的，列式存储的 NoSQL 数据库。依托 Hadoop 的分布式文件系统 HDFS 作为底层存储, 能够为数十亿行数百万列的海量数据表提供随机、实时的读写访问。

HBase on QingCloud AppCenter 集群服务包含 HBase 数据库服务、HDFS 分布式文件系统、Phoenix 查询引擎。压缩格式方面支持 GZIP、BZIP2、LZO、SNAPPY。

作为 Hadoop 生态圈的重要成员，HBase 是一个具有高可靠性、高性能、可伸缩性、列式存储的分布式 NoSQL 数据库。与关系型数据库相比，HBase 能够支持 PB 级的数据量和每秒百万次的吞吐量。

通常情况下，HBase 应用于建立互联网索引、推荐系统后台、浏览历史及监控数据的存储和查询等场景。依托Hadoop 的分布式文件系统 HDFS 作为底层存储，HBase 能够为数十亿行、数百万列的海量数据表提供随机、实时的读写访问。

## 系统部署架构

HBase 集群采用的是 Master/Slave 架构。HBase on QingCloud AppCenter 集群分三种节点类型：主节点 (HBase Master 和 HDFS NameNode)，从节点 (HBase RegionServer 和 HDFS DataNode) 和客户端节点 (HBase Client)。

用户在 HBase 客户端可通过 HBase Shell、Java API（本地或 MapReduce）、Rest API、Thrift API 或其他工具来访问 HBase。

![系统架构图](../../_images/hbase_architecture.png)
