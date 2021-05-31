---
title: "版本介绍"
description: 本小节主要介绍 QingCloud MongoDB 主要版本功能。 
keywords: mongodb 版本介绍, 
data: 2021-05-14T00:38:25+09:00
weight: 4
collapsible: false
draft: false
---

QingCloud MongoDB 基于 MongoDB 稳定版本 v4.0.3、v3.6.8、v3.4.5 和 v3.0.15 构建，并根据QingCloud AppCenter 功能特点定制不同服务版本。

## 版本介绍

|<span style="display:inline-block;width:120px">版本</span> |<span style="display:inline-block;width:120px">MongoDB 版本</span>|<span style="display:inline-block;width:120px">升级</span>|<span style="display:inline-block;width:260px">版本说明</span>|
|:----|:----|:----|:----|
|MongoDB 4.0.3 - QingCloud 1.7.0|v4.0.3|支持从 MongoDB v3.6.8 滚动升级|<li>支持数据盘自动扩容<li> 支持实例主机和磁盘类型自定义<li>新增多个服务监控项选择<li>支持特性版本查看和修改<li>升级 Caddy 版本为 1.0.3|
|MongoDB 3.6.8 - QingCloud 1.6.1|v3.6.8|支持从 MongoDB v3.4.5 滚动升级|<li>支持特性版本查看和修改|
|MongoDB 3.6.8 - QingCloud 1.6.0|v3.6.8|支持从 MongoDB v3.4.5 滚动升级|<li>支持特性版本查看和修改|
|MongoDB 4.0.3 - QingCloud 1.5.0|v4.0.3|- |<li>支持数据盘自动扩容<li>支持实例主机和磁盘类型自定义<li>新增多个服务监控项选择<li>升级 Caddy 版本为 1.0.3|
|MongoDB 4.0.3 - QingCloud 1.3.0|v4.0.3|- |<li>最大支持7个节点<li>支持集群节点横向伸缩和纵向扩容<li>支持数据备份<li> 支持版本升级<li> 支持 NeonSAN <li>修改 FTP 服务为 Caddy 服务 <li>新增配置参数项<li>新增 zabbix-agent 服务监控|
|MongoDB 4.0.3 - QingCloud 1.2.0|v4.0.3|- |<li>最大支持7个节点<li>支持集群节点横向伸缩和纵向扩容<li>支持数据备份<li> 支持版本升级<li> 支持 NeonSAN <li>修改 FTP 服务为 Caddy 服务 <li>新增配置参数项|
|MongoDB v3.4.5 (WiredTiger)|v3.4.5 <br>基于 WiredTiger 引擎|- |<li>最大支持7个节点<li>支持集群节点横向伸缩和纵向扩容<li>支持数据备份|
|MongoDB v3.0.15 (MMAPv1)|v3.0.15 <br>基于 MMAPv1 引擎|- |<li>最大支持7个节点<li>支持集群节点横向伸缩和纵向扩容<li>支持数据备份|
