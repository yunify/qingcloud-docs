---
title: "使用 PostGIS 插件"
description: 本小节主要介绍如何使用 PostGIS 插件。 
keywords: PostgreSQL 插件, PostGIS 插件
data: 2021-05-14T00:38:25+09:00
weight: 2
collapsible: false
draft: false
---

数据库的 **root** 用户和新建 PostgreSQL DB 时，设置的密码登录数据库服务器上的 PostgreSQL 数据库，可以采用任意的 PostgreSQL 客户端登录到数据库服务器。

## 查看 PostGIS 插件信息

登录 PostgreSQL DB后，输入以下命令即可查看 PostGIS 插件信息。

```sql
SELECT name, default_version,installed_version
FROM pg_available_extensions WHERE name LIKE 'postgis%' or name LIKE 'address%';
```

![](../../_images/checkpostgis.png)

## 新建 PostGIS Database

根据以下脚本创建属于自己的 PostGIS 数据库。

例如：登录数据库

`psql -U root -h 192.168.100.246 -d postgres`

> 其中：
> 
> -h参数值的 IP 地址为 PostgreSQL DB 主节点服务器地址或高可用版本集群的 VIP 地址。

连接 DB 之后，执行以下 `sql` 创建 PostGIS Database，数据库名为 `demo` 。

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

>启用 PostGIS 必须使用超级用户 **root** 才有权限执行。

## 查看 PostGIS 的版本信息

连接到新建好的PostGis数据库demo之后，执行以下sql查看版本信息。

```sql
select postgis_full_version();
```

![](../../_images/postgis_full_version.png)
