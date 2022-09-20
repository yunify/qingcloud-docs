---
title: "产品版本"
description: 本小节主要介绍 PostgreSQL 版本规格。 
keyword: 版本规格,PostgreSQL,关系型数据库,数据库
weight: 30
collapsible: false
draft: false
---


PostgreSQL 定制`基础版`、`高可用版`两个功能系列。

## 版本介绍

| <span style="display:inline-block;width:140px">版本</span> | <span style="display:inline-block;width:260px">PostgreSQL 11 及以下版本</span> | <span style="display:inline-block;width:260px">PostgreSQL V2.0.0 及以上版本</span> |
| :--------------------------------------------------------- | :----------------------------------------------------------- | ------------------------------------------------------------ |
| 高可用版                                                   | 采用一主一从的经典高可用架构，提供数据库高可用保障服务。主从节点可以通过修改配置参数设置同步流复制或者异步流复制模式。<br>适用于企业生产环境，电商、游戏、金融、政企等核心数据库场景。 | 采用一主多从的主实例架构。<ul><li>当使用2个主实例时，采用半同步模式，即当备机出现问题时，不会影响主机的业务，同时健康检查会报告集群出现错误。</li><li>当采用3个主实例时，只允许1个备机出现错误，当两个备机都出现故障时，将影响主节点的写入，因此拥有更高的安全性。</li></ul> |
| 基础版                                                     | 提供单节点数据库服务。<br>适用于个人学习、小型网站、开发测试等场景。 | 提供单节点数据库服务。<br/>适用于个人学习、小型网站、开发测试等场景。 |

## 应用版本

基于 PG 12.12、PG 13.8、以及 PG 14.5 内核版本分别构建了 PostgreSQL V2.0.0 高可用版和基础版。

| <span style="display:inline-block;width:140px">版本</span> | <span style="display:inline-block;width:300px">内核版本</span> | <span style="display:inline-block;width:240px">应用版本</span> |
| :--------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 高可用版                                                   | <ul><li>PostgreSQL 12.12</li><li>PostgreSQL 13.8</li>  <li>PostgreSQL 14.5</li></ul> | PostgreSQL 高可用版 -V2.0.0                                  |
| 基础版                                                     | <ul><li>PostgreSQL 12.12</li><li>PostgreSQL 13.8</li>  <li>PostgreSQL 14.5</li></ul> | PostgreSQL 基础版 -V2.0.0                                    |

基于 PostgreSQL 11.1 、10.1、9.6.3内核版本分别构建了 PG11 高可用版，PG10 高可用版和基础版、PG9.6 高可用版和基础版。

| <span style="display:inline-block;width:140px">版本</span> | <span style="display:inline-block;width:300px">内核版本</span> | <span style="display:inline-block;width:240px">应用版本</span> |
| :--------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 高可用版                                                   | <li>PostgreSQL 9.6.3 ，PostGIS 2.3 <li>PostgreSQL 10.1 ，PostGIS 2.4  <li>PostgreSQL 11.1 ，PostGIS 2.5 | <li>PG11-高可用版-V1.0.9<li>PG11-高可用版-V1.0.8 <li>PG10-高可用版-V1.1.6<li> PG9.6-高可用版-V1.1.6 <li>PG11-高可用版-V1.0.7 <li>PG10-高可用版-V1.1.5<li> PG9.6-高可用版-V1.1.5 <li>PG11-高可用版-V1.0.6 <li>PG10-高可用版-V1.1.4<li> PG9.6-高可用版-V1.1.4 <li>PG10-高可用版-V1.1.1<li> PG9.6-高可用版-V1.1.1 |
| 基础版                                                     | <li>PostgreSQL 9.6.3 ，PostGIS 2.3 <li>PostgreSQL 10.1 ，PostGIS 2.4 | <li>PG10-基础版-V1.1.0 <li> PG9.6-基础版-V1.1.0              |

## 应用版本历程

### PostgreSQL 高可用版/基础版 -V2.0.0

基于 PostgreSQL 12.12 、13.8、14.5内核版本分别构建的高可用版和基础版。

- 全新升级操作界面。
- 优化配置参数项。

### PG11-高可用版-V1.0.9

基于 PostgreSQL 11.1 内核版本分别构建的高可用版。

- [更新 timescaleDB 插件](/database/postgresql/manual/plugin_mgt/plugin_upgrade/)版本到 1.7.3。
- 优化[监控项字段](../../manual/metrics_alarm/config_display_metrics)，提升用户体验。

### PG11-高可用版-V1.0.8

基于 PostgreSQL 11.1 内核版本分别构建的高可用版。

- 新增[灾备管理](../../manual/disaster_recovery/dr_info)功能，支持集群异地灾备。
- 新增[账号管理](../../manual/mgt_account/user_account)功能，支持在线创建、修改、查看和删除数据库用户账号。
- 优化[监控项字段](../../manual/metrics_alarm/config_display_metrics)，提升用户体验。

### PG9.6/PG10-高可用版-V1.1.6

基于 PostgreSQL 10.1、9.6.3内核版本分别构建的高可用版。

- 新增[灾备管理](../../manual/disaster_recovery/dr_info)功能，支持集群异地灾备。
- 新增[账号管理](../../manual/mgt_account/user_account)功能，支持在线创建、修改、查看和删除数据库用户账号。
- 优化[监控项字段](../../manual/metrics_alarm/config_display_metrics)，提升用户体验。

### PG11-高可用版-V1.0.7

基于 PostgreSQL 11.1 内核版本分别构建的高可用版。

- 新增**是否开启半同步模式**[配置参数](../../manual/config_para/config_para_info)，支持自动切换主从节点数据同步流模式。
- 优化从库重建方式，从根据**节点IP**修改为根据**节点ID**方式。
- 修复不合理的 CPU 内存组合问题。
- 修复**节点详情**页面，角色描述异常问题。
### PG9.6/PG10-高可用版-V1.1.5

基于 PostgreSQL 10.1、9.6.3内核版本分别构建的高可用版。

- 新增**是否开启半同步模式**[配置参数](../../manual/config_para/config_para_info)，支持自动切换主从节点数据同步流模式。
- 优化从库重建方式，从根据**节点IP**修改为根据**节点ID**方式。
- 修复不合理的 CPU 内存组合问题。
- 修复**节点详情**页面，角色描述异常问题。
