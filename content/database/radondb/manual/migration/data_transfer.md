---
title: "mysqldump 方式"
description: 本小节主要介绍 RadonDB 数据迁移。 
keywords: RadonDB 数据迁移,
weight: 30
collapsible: false
draft: false
---

QingCloud RadonDB 的 MySQL 版本为 5.7.29 ，且开启了 GTID 复制模式。若远端 MySQL 内核低于 5.7 版本，可导出数据，通过 RadonDB 支持的数据导入方式，实现 RadonDB 跨版本的数据迁移。

> **注意**
> 
> 数据迁移过程，请暂停数据写操作，避免数据不一致，建议在业务低峰期执行。

本小节主要介绍如何通过 `mysqldump` 导出远端数据库数据，以及如何将数据导入 RadonDB 集群。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。
- RadonDB 集群状态为**活跃**。
- 已获取远端 MySQL 数据库信息。

## 步骤一：数据导出

在源数据库使用 `mysqldump` 将数据导出到 `dump.sql` 文件.

> **注意**
> 
> 导出数据需要排除 ``mysql.user`` 表，且不导出 GTID 标识。

以远端数据库 IP 地址为 192.168.0.100 为例，导出远端数据库全部数据。

```bash
mysqldump --all-databases --single-transaction --triggers --routines --events  --host=192.168.0.100 --port=3306 --user=mysql_dev -p --ignore-table=mysql.user --ignore-table=mysql.db --ignore-table=mysql.tables_priv --set-gtid-purged=OFF > dump.sql
```

也可选择导出数据库部分数据，详细命令说明请参考 [mysqldump](https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html)。

## 步骤二：数据导入

将导出的 `dump.sql` 文件复制到 RadonDB 的云服务器，并执行 `dump.sql` 文件。

以 RadonDB 集群**高可用的写 IP** 地址为 192.168.0.250 示例，导入并执行`dump.sql` 文件。

```bash
mysql -umysql_dev -p -h192.168.0.250 < dump.sql
```

 > **说明**
 > 
 > 为确保连接稳定性，请使用 RadonDB 集群的**高可用写 IP** 连接云服务器。

## 步骤三：业务切换

1. 数据迁移完成后，需手动将远端 MySQL 数据库账号信息添加到当前集群。
2. 校验当前集群与远端数据库数据是否一致。
3. 将业务连接地址修改为当前集群的**高可用 IP**，则业务迁移完毕。
