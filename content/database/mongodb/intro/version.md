---
title: "版本介绍"
description: 本小节主要介绍 MongoDB 主要版本及更新。 
keyword: 数据库,文档数据库,MongoDB,mongodb 版本介绍, 版本更新点,版本内核,版本功能
weight: 40
collapsible: false
draft: false
---

 文档数据库 MongoDB 基于 MongoDB 稳定版本 v4.0.3、v3.6.8、v3.4.5 和 v3.0.15 构建，并根据 AppCenter 功能特点定制不同服务版本。

## 版本历程

### MongoDB 3.6.8 - v1.0.1

MongoDB 3.6.8 - v1.0.1 基于 MongoDB 3.6.8 内核版本构建，操作系统升级为 Ubuntu 20.04。  
集成 mongo-shake v2.6.5、mongodb_exporter v0.20.9、node_exporter v1.2.2、zabbix_agent2 v5.4.8、caddy v2.4.6 组件。

- 新增 MongoShake 配置参数，支持 MongoDB 集群间数据迁移和同步，提供集群灾备和多活功能。
- 新增 Mongodb Exporter 配置参数，支持对接 Prometheus ，提供基于 Exporter 方式的 MongoDB 服务运行状态监控功能。
- 新增 Node Exporter 配置参数，支持对接 Prometheus，提供基于 Exporter 方式的资源状态监控功能。
- 新增 “Replica Node” 配置参数，支持副本节点性能参数管理。
- 新增“游标数量”、“网络流量”、“事务”等 15 项服务监控指标，丰富服务监控信息。
- 新增集群续费功能，支持手动设置续费时长。
- 更新 Zabbix 和 Caddy 组件版本。
- 更多功能优化，包括底层健康检查逻辑等。

### MongoDB 4.0.3 - v1.0.0

MongoDB 4.0.3 - v1.0.0 基于 MongoDB 4.0.3 内核版本构建，操作系统升级为 Ubuntu 20.04。  
集成 mongo-shake v2.6.5、mongodb_exporter v0.20.9、node_exporter v1.2.2、zabbix_agent2 v5.4.8、caddy v2.4.6 组件。

- 新增 MongoShake 配置参数，支持 MongoDB 集群间数据迁移和同步，提供集群灾备和多活功能。
- 新增 Mongodb Exporter 配置参数，支持对接 Prometheus ，提供基于 Exporter 方式的 MongoDB 服务运行状态监控功能。
- 新增 Node Exporter 配置参数，支持对接 Prometheus，提供基于 Exporter 方式的资源状态监控功能。
- 新增 “Replica Node” 配置参数，支持副本节点性能参数管理。
- 新增“游标数量”、“网络流量”、“事务”等 15 项服务监控指标，丰富服务监控信息。
- 新增集群续费功能，支持手动设置续费时长。
- 更新 Zabbix 和 Caddy 组件版本。
- 更多功能优化，包括底层健康检查逻辑等。

## 历史版本

### MongoDB 4.0.3

|<span style="display:inline-block;width:120px">版本</span> |<span style="display:inline-block;width:120px">MongoDB 版本</span>|<span style="display:inline-block;width:120px">升级</span>|<span style="display:inline-block;width:260px">版本说明</span>|
|:----|:----|:----|:----|
|MongoDB 4.0.3 - QingCloud 1.7.0|v4.0.3|支持从 MongoDB v3.6.8 滚动升级|<li>支持数据盘自动扩容<li> 支持实例主机和磁盘类型自定义<li>新增多个服务监控项选择<li>支持特性版本查看和修改<li>升级 Caddy 版本为 1.0.3|
|MongoDB 4.0.3 - QingCloud 1.5.0|v4.0.3|- |<li>支持数据盘自动扩容<li>支持实例主机和磁盘类型自定义<li>新增多个服务监控项选择<li>升级 Caddy 版本为 1.0.3|
|MongoDB 4.0.3 - QingCloud 1.3.0|v4.0.3|- |<li>最大支持7个节点<li>支持集群节点横向伸缩和纵向扩容<li>支持数据备份<li> 支持版本升级<li> 支持 NeonSAN <li>修改 FTP 服务为 Caddy 服务 <li>新增配置参数项<li>新增 zabbix-agent 服务监控|
|MongoDB 4.0.3 - QingCloud 1.2.0|v4.0.3|- |<li>最大支持7个节点<li>支持集群节点横向伸缩和纵向扩容<li>支持数据备份<li> 支持版本升级<li> 支持 NeonSAN <li>修改 FTP 服务为 Caddy 服务 <li>新增配置参数项|

### MongoDB 3.6.8 

|<span style="display:inline-block;width:120px">版本</span> |<span style="display:inline-block;width:120px">MongoDB 版本</span>|<span style="display:inline-block;width:120px">升级</span>|<span style="display:inline-block;width:260px">版本说明</span>|
|:----|:----|:----|:----|
|MongoDB 3.6.8 - QingCloud 1.6.1|v3.6.8|支持从 MongoDB v3.4.5 滚动升级|<li>支持特性版本查看和修改|
|MongoDB 3.6.8 - QingCloud 1.6.0|v3.6.8|支持从 MongoDB v3.4.5 滚动升级|<li>支持特性版本查看和修改|

### MongoDB 3.4.5 (WiredTiger)

|<span style="display:inline-block;width:120px">版本</span> |<span style="display:inline-block;width:120px">MongoDB 版本</span>|<span style="display:inline-block;width:120px">升级</span>|<span style="display:inline-block;width:260px">版本说明</span>|
|:----|:----|:----|:----|
|MongoDB v3.4.5 (WiredTiger)|v3.4.5 <br>基于 WiredTiger 引擎|- |<li>最大支持7个节点<li>支持集群节点横向伸缩和纵向扩容<li>支持数据备份|

### MongoDB 3.0.15（已下线）

|<span style="display:inline-block;width:120px">版本</span> |<span style="display:inline-block;width:120px">MongoDB 版本</span>|<span style="display:inline-block;width:120px">升级</span>|<span style="display:inline-block;width:260px">版本说明</span>|
|:----|:----|:----|:----|
|MongoDB v3.0.15 (MMAPv1)|v3.0.15 <br>基于 MMAPv1 引擎|- |<li>最大支持7个节点<li>支持集群节点横向伸缩和纵向扩容<li>支持数据备份|
