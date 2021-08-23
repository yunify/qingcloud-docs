---
title: "数据迁移"
description: 本小节主要介绍 PostgreSQL 离线数据迁移。 
keywords: PostgreSQL 离线数据迁移,
weight: 01
collapsible: false
---


QingCloud PostgreSQL 可通过离线导出数据，再通过 PostgreSQL 支持的方式导入数据，实现 PostgreSQL 的数据迁移。

> **注意**
> 
> 数据迁移过程，请暂停数据写操作。为避免数据丢失，建议在业务低峰期执行。

本小节主要介绍如何导出远端数据库数据和如何将数据导入 PostgreSQL 集群。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。
- PostgreSQL 集群状态为**活跃**。
- 已获取远端 PostgreSQL 数据库信息。

## 步骤一：数据导出

在源数据库使用 `pg_dump` 将数据导出到 `xxx.sql` 文件。

```shell
pg_dump -U <远端数据库账号> -h <远端数据库 IP> -t <表名> <数据库名> > <路径/文件名.sql>
```
> **说明**
> 
> 数据库名缺省为数据库用户账号名。

导出远端数据库全部数据示例：远端数据库 IP 地址为 `192.168.100.246` ，数据库名为 `qingcloud`，目标文件及路径为`/tmp/pgdatabk.sql`。

```shell
pg_dump -U qingcloud -h 192.168.100.246 qingcloud  > /tmp/pgdatabk.sql
```

![数据导出](../../_images/pg_datadump.png)

## 步骤二：数据导入

### 从文件导入数据

为确保导入数据权限不受限，建议使用 **root** 账号登录数据库。**root** 账号密码与初始账号默认密码一致。  

1. 创建数据库。

   `createdb newdatabase;`

2. 通过`psql`命令，导入数据。

   ```shell
   psql -d <目标数据库名> -U <目标数据库账号> -h <目标数据库 IP > -f < <路径/文件名.sql>
   ```

数据库名称默认为 `qingcloud`，可直接作为导入用户账号。示例如下：

```shell
psql -d qingcloud -U root -h 192.168.100.6 -f /tmp/pgdatabk.sql
```

![数据导入](../../_images/pg_dataimport.png)

### 在线导入数据

根据`pg_dump` 和 `psql` 读写管道的能力，可将数据直接从一个服务器转储数据库到另一个服务器。
  
```shell
pg_dump -U <远端数据库账号> -h <远端数据库 IP> <远端数据库名> -w | psql -d <目标数据库名> -U <目标数据库账号> -h <目标数据库 IP > -W
```

示例如下：

```bash
export PGPASSWORD=qingcloud1234
#PGPASSWORD为数据库初始账号默认密码
pg_dump -U qingcloud -h 192.168.100.246 qingcloud -w | psql -d qingcloud -U root -h 192.168.100.6 -W
```

![数据导入](../../_images/pg_importdataonline.png)

## 步骤三：数据检查

数据迁移完成后，可以使用 `select` 语句检查。

`select * from t_user; `

![数据check](../../_images/datacheck.png)
