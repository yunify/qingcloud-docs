---
title: "PostGIS 插件"
description: 本小节主要介绍如何使用 PostGIS 插件。 
keywords: PostgreSQL 插件, PostGIS 插件
weight: 45
collapsible: false
---


PostGIS 是关系型数据库 PostgreSQL 的一种插件，PostGIS 提供空间信息服务功能，包括空间对象、空间索引、空间操作函数和空间操作符。且 PostGIS 遵循 OpenGIS 规范。

## 约束限制

- 启用 PostGIS 必须使用超级用户 **root** 才有权限执行。**root** 账号密码与初始账号默认密码一致。

## 新建 PostGIS 数据库

1. 通过 **root** 账号登录 PostgreSQL 数据库。

   登录数据库服务器上的 PostgreSQL 数据库，可以采用任意的 PostgreSQL 客户端登录到数据库服务器。

   ```shell
   psql -U root -h <数据库 IP 地址> -d postgres
   ```

   > **说明**
   > 
   > `-h` 参数值的 IP 地址为 PostgreSQL 数据库主节点服务器地址或高可用版本集群的 VIP 地址。

2. 查看 PostGIS 插件信息。

   执行以下命令，查看 PostGIS 插件信息。

   ```sql
   SELECT name, default_version,installed_version
   FROM pg_available_extensions WHERE name LIKE 'postgis%' or name LIKE 'address%';
   ```

   ![](../../_images/checkpostgis.png)

3. 创建 PostGIS 数据库。

   执行以下 `sql` 创建 PostGIS 数据库，数据库名为 `demo`。

   ```sql
   create database demo;
   \c demo
   CREATE EXTENSION postgis;
   CREATE EXTENSION postgis_topology;
   CREATE EXTENSION postgis_sfcgal;
   CREATE EXTENSION fuzzystrmatch;
   CREATE EXTENSION address_standardizer;
   CREATE EXTENSION address_standardizer_data_us;
   CREATE EXTENSION postgis_tiger_geocoder;
   CREATE  EXTENSION pgrouting;
   ```

## 查看 PostGIS 版本信息

1. 连接新建 PostGis 数据库 `demo`。
2. 执行以下 `sql` 命令，查看版本信息。

   ```sql
   select postgis_full_version();
   ```

![](../../_images/postgis_full_version.png)
