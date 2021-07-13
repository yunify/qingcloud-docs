---
title: "产品版本"
description: 本小节主要介绍 MySQL Plus 主要版本。 
keywords: mysql plus 版本介绍， 
weight: 25
collapsible: false
draft: false
---

分布式数据库 MySQL Plus 基于 QingCloud AppCenter 功能特点，已切换至新形态版本，具备高可用、高性能数据库服务能力，提供更稳定更高性能 MySQL 数据库服务。

## 新形态版本

### 1.0.9版本

兼容 MySQL 8.0、5.7、5.6内核，其中**金融版**产品系列仅支持 MySQL 8.0、5.7内核。

|<span style="display:inline-block;width:140px">版本</span> |<span style="display:inline-block;width:520px">版本说明</span>|
|:----|:----|
|   金融版-1.0.9    | <li>新增**分析实例**节点，支持从主节点同步并分析数据；<li>新增**重启节点**功能，支持重启单个节点服务；<li>新增指定 Master 节点功能； <li>新增**服务地址**模块，支持一键查询节点日志服务地址。  |
|   高可用版-1.0.9   |  <li>新增**分析实例**节点，支持从主节点同步并分析数据；<li>新增**重启节点**功能，支持重启单个节点服务； <li>新增**服务地址**模块，支持一键查询节点日志服务地址。   |
|   基础版-1.0.9      |   <li>新增**服务地址**模块，支持一键查询节点日志服务地址。   |

### 1.0.8版本

兼容 MySQL 8.0、5.7、5.6内核，其中**金融版**产品系列仅支持 MySQL 8.0、5.7内核。

|<span style="display:inline-block;width:140px">版本</span> |<span style="display:inline-block;width:520px">版本说明</span>|
|:----|:----|
|   金融版-1.0.8     |  <li>支持自动重建复制异常从库或只读实例；<li>新增 `innodb_adaptive_hash_index`、`performance_schema`、`innodb_autoinc_lock_mode` 配置参数管理。  |
|   高可用版-1.0.8   |  <li>支持自动重建复制异常从库或只读实例；<li>新增 `innodb_adaptive_hash_index`、`performance_schema`、`innodb_autoinc_lock_mode` 配置参数管理；<li>优化 `max_allowed_packet`、`slave_pending_jobs_size_max`、`innodb_log_file_size` 配置参数默认值。   |
|   基础版-1.0.8      |   <li>新增 `innodb_adaptive_hash_index`、`performance_schema`、`innodb_autoinc_lock_mode` 配置参数管理；<li>优化 `innodb_log_file_size` 配置参数默认值。   |

### 1.0.7版本

兼容 MySQL 8.0、5.7、5.6内核，其中**金融版**产品系列仅支持 MySQL 8.0、5.7内核。

|<span style="display:inline-block;width:140px">版本</span> |<span style="display:inline-block;width:520px">版本说明</span>|
|:----|:----|
|   金融版-1.0.7     |  <li>支持从旧形态升级到新形态；<li>支持创建五节点主实例；<li>支持灾备功能和 zabbix_agent 功能；<li>支持连接控制插件；<li>新增 `election-timeout`、`semi-sync timeout` 配置参数管理；<li>新增 `Innodb_row_lock_waits`、`Innodb_row_lock_time_avg` 监控项；<li>**sql_mode** 支持 `PIPES_AS_CONCAT`， `IGNORE_SPACE`；<li>取消高级权限用户个数限制，支持创建多个高级权限账号；<li>高可用读 IP 支持指定分发请求的角色；<li>修复集群自动化运维问题，加强集群高可用稳定性。  |
|   高可用版-1.0.7   |  <li>支持创建三节点主实例；<li>支持灾备功能和 zabbix_agent 功能；<li>支持连接控制插件；<li>新增 `election-timeout`、`semi-sync timeout` 配置参数管理；<li>新增 `Innodb_row_lock_waits`、`Innodb_row_lock_time_avg` 监控项；<li>**sql_mode** 支持 `PIPES_AS_CONCAT`， `IGNORE_SPACE`；<li>取消高级权限用户个数限制，支持创建多个高级权限账号；<li>高可用读 IP 支持指定分发请求的角色；<li>修复集群自动化运维问题，加强集群高可用稳定性。   |

### 1.0.6版本

兼容 MySQL 8.0、5.7、5.6内核，其中**金融版**产品系列仅支持 MySQL 8.0、5.7内核。

|<span style="display:inline-block;width:140px">版本</span> |<span style="display:inline-block;width:520px">版本说明</span>|
|:----|:----|
|   金融版-1.0.6     | <li>新增兼容 MySQL 8.0内核；<li>支持 xtrabackup 在线迁移服务；<li>支持关闭 SSL 传输加密时，自动清空 FTP 目录下 SSL 配置文件；<li>支持通过 HTTP 服务预览、下载日志；<li>支持在管理控制台重建只读实例；<li>支持磁盘大小最小默认为 30GB；<li>优化 `audit_log_rotations` 配置参数最高可配置48个文件；<li>修复集群自动化运维问题。  |
|   高可用版-1.0.6   |  < <li>新增兼容 MySQL 8.0内核；<li>支持 xtrabackup 在线迁移服务；<li>支持关闭 SSL 传输加密时，自动清空 FTP 目录下 SSL 配置文件；<li>支持通过 HTTP 服务预览、下载日志；<li>支持在管理控制台重建只读实例；<li>支持磁盘大小最小默认为 20GB；<li>优化 `audit_log_rotations` 配置参数最高可配置48个文件；<li>修复集群自动化运维问题。|

### 1.0.3版本

兼容 MySQL 5.7、5.6内核。

|<span style="display:inline-block;width:140px">版本</span> |<span style="display:inline-block;width:520px">版本说明</span>|
|:----|:----|
|   金融版-1.0.8     |  <li>支持在线迁移后交换预留 IP 功能；<li>优化集群扩容流程，并缩小主丢失时间窗口；<li>支持自动订正 **Proxy 实例** 节点账号；<li>支持自动检测处于 `RECOVERING` 状态的节点；<li>支持在线迁移期间禁用部分干扰指令；<li>新增 `innodb_flush_method` 和 `innodb_use_native_aio` 配置参数管理；<li>修复集群自动化运维问题。  |
|   高可用版-1.0.8   |  <li>支持在线迁移后交换预留 IP 功能；<li>支持选用`企业型e2` 主机；<li>优化集群扩容流程，并缩小主丢失时间窗口；<li>默认关闭并行复制；<li>支持自动订正 **Proxy 实例** 节点账号；<li>支持在线迁移期间禁用部分干扰指令；<li>新增 `innodb_flush_method` 和 `innodb_use_native_aio` 配置参数管理；<li>修复集群自动化运维问题。    |
|   基础版-1.0.8      |   <li>支持自动订正 **root** 账号；<li>支持在线迁移期间禁用部分干扰指令；<li>新增 `innodb_flush_method` 和 `innodb_use_native_aio` 配置参数管理；<li>修复集群自动化运维问题。   |

### 1.0.1版本

兼容 MySQL 5.7、5.6内核。

|<span style="display:inline-block;width:140px">版本</span> |<span style="display:inline-block;width:520px">版本说明</span>|
|:----|:----|
|   金融版-1.0.8     |  <li>新增云服务器 64核256G 规格；<li>新增 MySQL 审计功能；<li>新增 `lidate_password_policy` 配置参数，支持密码强度验证；<li>新增 `Innodb_row_lock_time_avg` 监控项；<li>新增自动订正运维账号功能；<li>新增主节点只读状态的自动检测和订正功能；<li>修复集群自动化运维问题。  |
|   高可用版-1.0.8   |  <li>新增 MySQL 审计功能；<li>新增 `lidate_password_policy` 配置参数，支持密码强度验证；<li>新增 `Innodb_row_lock_time_avg` 监控项；<li>新增自动订正运维账号功能；<li>新增主节点只读状态的自动检测和订正功能；<li>修复集群自动化运维问题。    |
|   基础版-1.0.8      |   <li>新增 MySQL 审计功能；<li>新增 `lidate_password_policy` 配置参数，支持密码强度验证；<li>新增 `Innodb_row_lock_time_avg` 监控项；<li>新增主节点只读状态的自动检测和订正功能；<li>修复集群自动化运维问题。   |
