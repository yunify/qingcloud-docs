---
title: "什么是PostgreSQL"
description: Test description
draft: false
weight: 3
enableToc: false
keyword: PostgreSQL, QingCloud, 数据库
---

[PostgreSQL](https://www.postgresql.org/) 是业界最先进的开源数据库系统。经过长达 15 年以上的积极开发和不断改进，PostgreSQL 已在可靠性、稳定性、数据一致性等获得了业内极高的声誉。作为一种企业级数据库，PostgreSQL 以它所具有的各种高级功能而自豪，像多版本并发控制 (MVCC)、按时间点恢复 (PITR)、表空间、异步复制、嵌套事务、在线热备、复杂查询的规划和优化以及为容错而进行的预写日志等。它支持国际字符集、多字节编码并支持使用当地语言进行排序、大小写处理和格式化等操作。它也在所能管理的大数据量和所允许的大用户量并发访问时间具有完全的高伸缩性。

## PostgreSQL 的特性

`PostgreSQL on QingCloud AppCenter` 将 PostgreSQL 通过云应用的形式在 QingCloud AppCenter 部署，具有如下特性：

- 目前提供基础版和高可用版服务，分别满足开发测试和生产环境下的数据库服务需求。

- 高可用版可在主实例主从架构的基础上创建读写分离实例和最多5个只读实例。

- 主实例的从节点以及只读实例都可以提供读服务，可以通过高可用读IP或者读写分离Proxy IP将读请求轮询负载到这些节点。

- 高可用版服务支持自动 Failover ，提供HA功能。

- 提供 PostgreSQL 大部分常用参数修改接口，方便调整参数。

- 支持 PostGIS 插件，为 PostgreSQL 提供了存储、查询和修改空间关系的能力。

- 提供实时监控、健康检查、日志自动清理等功能，方便用户运维。

- 一键部署，开箱即用。

## 版本描述

目前提供基础版和高可用版 2 个版本服务：

- 基础版：提供单节点数据库服务（PostgreSQL 11 不提供基础版）。
- 高可用版：采用一主一从的经典高可用架构，提供数据库高可用保障服务。主从节点可以通过修改配置参数设置同步流复制或者异步流复制模式。

适用场景：

- 基础版适用于个人研究学习、开发测试场景。
- 高可用版面向企业生产环境，适用于大中型企业核心生产库。

PostgreSQL on QingCloud AppCenter 支持如下版本:

- PostgreSQL 9.6.3 版本，PostGIS 插件的版本是 PostGIS 2.3
- PostgreSQL 10.1 版本，PostGIS 插件的版本是 PostGIS 2.4
- PostgreSQL 11.1 版本，PostGIS 插件的版本是 PostGIS 2.5