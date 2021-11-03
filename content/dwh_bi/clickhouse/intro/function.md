---
title: "功能特性"
description: 本小节主要介绍 Clickhouse 功能特性。 
keywords: Clickhouse 功能特性,
weight: 15
collapsible: false
draft: false
---

## 原生 ClickHouse

ClickHouse（简称 CH 或 CK）是面向联机分析处理的列式数据库，具备高查询性能，特别在基于大宽表的聚合分析查询性能上尤为突出。主要包括如下功能特点：

- 列式存储，数据压缩比高。

- 基于 Shared nothing 架构，支持分布式方案。

- 支持向量计算，且支持多核 CPU 并行计算，SQL 执行充分利用 CPU 性能。

- 支持主从复制架构。

- 兼容大部分 SQL 语法，其语法与 MySQL 相近。

- 数据实时更新。

## ClickHouse on QingCloud

ClickHouse on QingCloud 完美继承 ClickHouse 优良特性，主要功能特点如下：

- 兼容目前 ClickHouse 所有支持的数据引擎；

- 一键安装部署
  
  免去复杂的手动安装、部署运维，一键部署，开箱即用。

- 监控告警
  
  免去复杂的手动安装、部署运维，一键部署，开箱即用。

- 弹性扩容伸缩
  
  提供对集群CPU、内存弹性扩容收缩，扩容磁盘的功能。

- 自由扩展
  
  提供对集群CPU、内存弹性扩容收缩，扩容磁盘的功能。

- 备份恢复
  
  提供自动备份功能，可快速从备份中恢复出一个新集群。

- 账户管理
  
  集群无主协议，业务可连接集群任意 IP 或高可用 IP，使用更加灵活。

- 可视化查询
  
  查询结果支持自定义图形化展现。

- 日志管理
  
   提供日志服务，支持 HTTP 在线查看数据库服务日志。
