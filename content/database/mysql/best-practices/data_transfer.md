---
title: "数据迁移"
description: 本小节主要介绍 MySQL Plus 数据迁移。 
keywords: mysql plus 数据迁移,
data: 2021-05-14T00:38:25+09:00
weight: 1
collapsible: false
draft: false
---

QingCloud MySQL Plus 的 MySQL 版本为8.0.19 & 5.7.29 & 5.6.42，且开启了 GTID 复制模式。

从其他 MySQL 版本迁移数据时，需通过导数据或者 QingCloud MySQL Plus 支持的数据导入服务的方式。

## 数据导出

在源数据库使用 `mysqldump` 将数据导出到 `dump.sql` 文件.

> 导出数据需要排除 mysql.user 表，且不导出 GTID 标识。

以源数据库 IP 地址为 192.168.0.100 示例，导出数据库全部数据，导出语句如下。

```bash
mysqldump --all-databases --single-transaction --triggers --routines --events  --host=192.168.0.100 --port=3306 --user=mysql_dev -p --ignore-table=mysql.user --ignore-table=mysql.db --ignore-table=mysql.tables_priv --set-gtid-purged=OFF > dump.sql
```

也可选择导出数据库部分数据，详细使用方法请参考 [mysqldump](https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html)。

## 数据导入

将导出的 `dump.sql` 文件复制到 QingCloud MySQL Plus 的云服务器，并执行 `dump.sql` 文件。

以高可用的写 IP 地址为 192.168.0.250 示例，导入语句如下。

```bash
mysql -umysql_dev -p -h192.168.0.250 < dump.sql
```
 > 需要使用 QingCloud MySQL Plus 的高可用写 IP 连接云服务器。
