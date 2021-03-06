---
title: "PostGIS 插件的使用"
description: Test description
weight: 7
---

## 查看 PostGIS 插件信息

登录 PostgreSQL DB后，输入以下命令即可查看 PostGIS 插件信息。

```sql
SELECT name, default_version,installed_version
FROM pg_available_extensions WHERE name LIKE 'postgis%' or name LIKE 'address%';
```

![](../../_images/checkpostgis.png)

## 新建 PostGIS Database

以数据库的 root 用户和新建 PostgreSQL DB 时设置的密码登录数据库服务器上的 PostgreSQL 数据库，可以采用任意的 PostgreSQL 客户端登录到数据库服务器。
之后，根据以下脚本创建属于自己的 PostGIS database 。

例如：登录数据库
`psql -U root -h 192.168.100.246 -d postgres`
其中-h参数值的 ip 地址为 PostgreSQL DB 主节点服务器地址或者是高可用版本集群的 VIP 地址。
连接 DB 之后，执行以下 sql 创建自己的 PostGIS Database，数据库名为 demo 。

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

>注意：
>启用 PostGIS 必须使用超级用户 root 才有权限执行。

## 查看 PostGIS 的版本信息

连接到新建好的PostGis数据库demo之后，执行以下sql查看版本信息。

```sql
select postgis_full_version();
```

![](../../_images/postgis_full_version.png)