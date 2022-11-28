---
title: "功能特性"
description: 本小节主要介绍 ChronusDB 简要主要功能特性。 
keyword: 功能特性,时序数据库,ChronusDB,数据库
weight: 15
collapsible: false
draft: false
---



ChronusDB 时序数据库具备超强的查询分析功能、高性能并发读写、低成本存储、丰富的时序数据处理能力、稳定可扩展等特性。

## 强查询分析能力

ChronusDB 会尽可能的使用全部计算资源并行去处理外部请求，提高查找和写入能力。

## 完全兼容 ClickHouse

ChronusDB SQL 表达式基本符合标准 SQL，完全兼容 ClickHouse 协议，具备强大的函数支持和聚合分析能力；并且支持通过 HTTP 协议进行访问。

- 兼容 ClickHouse 提供的算数函数，比较函数，类型转换函数等上百种函数。

- 兼容 ClickHouse Min，Max，Sum，Avg 等常用的基本聚合分析能力。

- 兼容 ClickHouse 提供的更加复杂的 groupArray 等聚合函数。

## 数据多样存储

- 冷热数据分层存储

   ChronusDB 内核使用 MergeTree 系列表引擎，支持将数据存储到多个对象存储中，提供数据冷热分层存储的功能，可大大降低冷数据存储的成本。

- 数据多磁盘存储

   ChronusDB 内核使用 MergeTree 系列表引擎，支持根据磁盘容量和存储时间配置存储策略，将数据存储到多个对象存储中，提供数据多磁盘存储功能，可大大降低海量数据存储的成本。

- 数据压缩算法

   ChronusDB 针对不同类型的数据采用不同的压缩算法，从而达到极致的压缩，并借此减少存储成本。

## 一键安装部署
  
ChronusDB 提供一键部署，开箱即用服务，免去复杂的手动安装、部署运维。

## 实时监控告警
  
ChronusDB 提供集群节点的 CPU、内存、I/O 等丰富的监控指标。

ChronusDB 提供分钟级别的集群异常资源告警并支持设置告警指标和告警线。

## 弹性扩容伸缩

ChronusDB 支持纵向伸缩，提供对集群 CPU、内存弹性扩容收缩，扩容磁盘的功能。

ChronusDB 支持横向添加节点，并支持分片权重自动均衡。

## 备份恢复
  
ChronusDB 提供自动备份功能，可快速从备份中恢复出一个新集群。

## 账户管理
  
ChronusDB 集群无主协议，业务可连接集群任意 IP 或高可用 IP，使用更加灵活。

## 可视化查询
  
ChronusDB 查询结果支持自定义图形化展现。

## 日志管理
  
ChronusDB 提供日志服务，支持 HTTP 在线查看数据库服务日志。
