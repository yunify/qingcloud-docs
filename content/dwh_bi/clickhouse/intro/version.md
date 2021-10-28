---
title: "产品版本"
description: 本小节主要介绍 ClickHouse 版本规格。 
keywords: ClickHouse, QingCloud, 版本规格
weight: 40
collapsible: false
draft: false
---


QingCloud ClickHouse 根据 QingCloud AppCenter 功能特点，定制`基础版`、`企业版`两个功能系列。随版本迭代，功能不断提升。

## 版本历程

### v1.1.7

`企业版-1.1.7` 和 `基础版-1.1.7` 基于 ClickHouse-21.1.3.32 内核版本构建。

- 新增 MaterializeMySQL 引擎，支持实时从 MySQL 同步数据，可极大提升查询性能和数据同步的时效性；
- 新增[对象存储服务策略](../../manual/data_storage/storage_info)，支持数据多磁盘存储和冷热数据分层存储，降低数据存储成本；
- 新开放 max_concurrent_queries 参数，支持[修改最大连接数](../../manual/config_para/check_para)；
- 新增[日志服务功能](../../manual/mgt_log/enable_log_service)，支持查看数据库服务日志。

### v1.1.6

`企业版-1.1.6` 和 `基础版-1.1.6` 基于 ClickHouse-21.1.3.32 内核版本构建。

- 支持使用 SQL 管理用户。 
- 支持`query-log` 数据库查询日志。 
- 开放 system 库，可获取系统参数信息。

### v1.1.5

`企业版-1.1.5` 和 `基础版-1.1.5` 基于 ClickHouse-19.17.6.36 内核版本构建。

- 新增私网切换功能。

### v1.1.4

`企业版-1.1.4` 和 `基础版-1.1.4` 基于 ClickHouse 内核构建。

- 增强备份恢复功能。

### v1.1.2

`企业版-1.1.2` 和 `基础版-1.1.2` 基于 ClickHouse 内核构建。

- Distributed 引擎支持 currentDatabase 函数。
