---
title: "产品版本"
description: 本小节主要介绍 时序数据库 ChronusDB 主要版本。 
keywords: chronusdb 版本介绍,系列介绍 
weight: 30
collapsible: false
draft: false
---

时序数据库 ChronusDB 基于 ClickHouse 定制，并根据QingCloud AppCenter 功能特点定制`基础版`和`企业版`两个功能系列。随版本迭代，功能不断提升。

## 版本历程

### v1.0.8

ChronusDB `企业版-1.0.8` 和 `基础版-1.0.8` 基于 RadonDB ClickHouse 21.1.3.32 内核开发。

- 新增 MaterializeMySQL 引擎，支持实时从 MySQL 同步数据，可极大提升查询性能和数据同步的时效性；
- 新增[对象存储服务策略](../../manual/data_storage/storage_info)，支持数据多磁盘存储和冷热数据分层存储，降低数据存储成本；
- 新开放 max_concurrent_queries 参数，支持[修改最大连接数](../../manual/config_para/check_para)；
- 新增[日志服务功能](../../manual/mgt_log/enable_log_service)，支持查看数据库服务日志。

### v1.0.7

ChronusDB `企业版-1.0.7` 和 `基础版-1.0.7` 基于 RadonDB ClickHouse 21.1.3.32 内核开发。

- 支持使用 SQL 管理用户。
- 支持`query-log` 数据库查询日志。
- 开放 system 库，可获取系统参数信息。

### v1.0.6

ChronusDB `企业版-1.0.6` 和 `基础版-1.0.6` 基于 RadonDB ClickHouse 19.17.6.36 内核开发。

- 新增私网切换功能。

### v1.0.5

ChronusDB `企业版-1.0.5` 和 `基础版-1.0.5` 基于 RadonDB ClickHouse 内核开发。

- 提升备份恢复功能。

### v1.0.4

ChronusDB `企业版-1.0.4` 和 `基础版-1.0.4` 基于 RadonDB ClickHouse 内核开发。

- Distributed 引擎新增支持 `currentDatabase` 函数。

### v1.0.3

ChronusDB `企业版-1.0.3` 和 `基础版-1.0.3` 基于 RadonDB ClickHouse 内核开发。

- 禁用交换空间。
- 选择数据库后，使用 DDL 和 DQL 语句无需指定数据库。

### v1.0.2

ChronusDB `企业版-1.0.2` 和 `基础版-1.0.2` 基于 RadonDB ClickHouse 内核开发。

- 优化集群内存自适应能力。
- 优化数据可排序查找功能。

### v1.0

ChronusDB `企业版-1.0` 和 `基础版-1.0` 基于 RadonDB ClickHouse 内核开发。

- 支持横向增加节点。
- 支持升降集群节点硬件资源配置。
- 支持数据的逻辑一致和物理一致两种分布方式。
- 集群无主协议，业务可连接集群任意 IP 或高可用 IP。
- 支持毫秒级查询千亿条结构化数据，并支持自定义图形化结果。
