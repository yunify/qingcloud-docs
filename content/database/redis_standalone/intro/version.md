---
title: "产品版本"
description: 本小节主要介绍 MongoDB Cluster 主要版本。 
keyword: 版本介绍,产品版本,键值数据库,Redis,Redis Standalone,数据库
weight: 40
collapsible: false
draft: false
---

Redis Standalone 基于 AppCenter 功能特点，提供更稳定更高性能 Redis 数据库缓存服务。

## 版本历程

### 6.2.5 - v1.0.0

Redis Standalone 6.2.5 - v1.0.0 内核版本升级，基于 Redis 6.2.5 版本构建，并新增更多数据库服务功能。

- 新增四种资源配置类型，适配研发测试及生产环境。支持 I/O 多线程，显著提升性能。
- 新增 [TLS 加密](../../manual/data_security/tls_config)传输功能，有效防止数据传输被监听。
- 新增 [ACL 管理](../../manual/mgt_user/user_info)功能，可针对不同用户授予不同的命令及数据权限。
- 新增 [Redis Exporter](../../manual/metrics_alarm/redis_exporter_service) 配置参数和组件，支持对接 Prometheus，提供基于 Exporter 的 Redis 服务状态监控功能。
- 新增 [Node Exporter](../../manual/metrics_alarm/node_exporter_service) 配置参数和组件，支持对接 Prometheus，提供基于 Exporter 的资源状态监控功能。

### Redis 5.0.11 - QingCloud 3.1.1

Redis 5.0.11 - QingCloud 3.1.1 基于 Redis 5.0.11 版本构建，集成 Zabbix 监控组件。

- Redis 内核版本升级到 5.0.11版本，增强了服务稳定性。
- 集成第三方监控，支持 Zabbix 5.x 监控服务。
- 修复部分情况下导致的主节点掉线、无法自动故障转移等问题。

### Redis 5.0.10 - QingCloud 3.0.1

Redis 5.0.10 - QingCloud 3.0.1 基于 Redis 5.0.10 版本构建。

- 升级到 Redis 5.0.10 版。
- 修复某些情况下切换私网后服务异常的问题。
- 修复某些情况下升级到 Redis 5.0.8 - QingCloud 3.0.0 版本后服务异常的问题。

### Redis 5.0.8 - QingCloud 2.3.0

Redis 5.0.8 - QingCloud 2.3.0 基于 Redis 5.0.8 版本构建。

- 增加“主从复制落后字节数”监控项。
- 增加“节点角色”告警项。

### Redis 5.0.5 - QingCloud 2.2.1

Redis 5.0.5 - QingCloud 2.2.1 基于 Redis 5.0.5 版本构建。

- 升级到 Redis 5.0.5。
- 新增支持自助查看和下载日志文件。
- 支持 Region 多可用区部署，同城多活。
- 关闭 OpenSSH Server 服务以提高安全性。
- 提升三节点集群主从切换稳定性。
- 优化日志轮转，节省硬盘空间。
- 负增加新主机类型供用户选择。
- 增加切换单双核 CPU 的选项。
