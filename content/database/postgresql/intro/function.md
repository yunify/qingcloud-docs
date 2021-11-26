---
title: "功能特性"
description: 本小节主要介绍 PostgreSQL 功能特性。 
keywords: PostgreSQL, QingCloud, 功能特性
weight: 20
collapsible: false
draft: false
---



QingCloud PostgreSQL 提供如下功能特性。 

- 高可用版可在主实例主从架构的基础上，创建读写分离实例和最多5个只读实例。

- 主实例的从节点以及只读实例都可以提供读服务，可以通过高可用读IP或者读写分离Proxy IP将读请求轮询负载到这些节点。

- 高可用版服务支持自动 Failover ，提供HA功能。

- 提供 PostgreSQL 大部分常用参数修改接口，方便调整参数。

- 支持 PostGIS 插件，为 PostgreSQL 提供了存储、查询和修改空间关系的能力。

- 提供实时监控、健康检查、日志自动清理等功能，方便用户运维。

- 一键部署，开箱即用。
