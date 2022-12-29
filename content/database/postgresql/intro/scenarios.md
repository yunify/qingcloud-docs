---
title: "应用场景"
description: 本小节主要介绍 PostgreSQL 应用场景。 
keyword: 应用场景,PostgreSQL,关系型数据库,数据库
weight: 25
collapsible: false
draft: false
---



## GIS 地理信息系统

PostgreSQL 以其独特的优势占据着此领域，内置 GIS 插件，可以轻松支持 2D、3D 地址信息模型，更支持地球不规则球体的偏移量，实现达到国际 OpenGIS 标准的精确定位。

## 企业级商用数据库

PostgreSQL 支持事务处理，以稳定而出色的性能著称，保障多表关联 JOIN 时的系统性能。大表支持、无限空间扩展。

## HTAP 业务系统

PostgreSQL 内置的 Citus 插件可以轻松地将单机数据库扩展成 HTAP 分布式数据库。

## 海量数据存储

PostgreSQL 内置的 Citus 插件提供在线线性扩容能力，能够按需扩充集群，保证集群可以支撑到 PB 级别的存储。

## 实时高并发事务系统

PostgreSQL 内置 Citus 插件，Citus 的 share nothing 架构可以在线平滑地扩展实例规模，从容应对实时高并发场景；同时，Citus 提供的分布式事务一致性能力能保证高并发场景下的分布式系统事务一致性。 