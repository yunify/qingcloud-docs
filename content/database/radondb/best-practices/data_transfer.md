---
title: "数据迁移"
description: Test description
weight: 5
---

「QingCloud MySQL Plus」的MySQL版本为8.0.19 & 5.7.29 & 5.6.42，且开启了 GTID 复制模式，因此从其他MySQL迁移数据时，需要通过导数据或者 QingCloud MySQL Plus 支持的数据导入服务的方式来进行。


### 数据导出

在源数据库端使用 mysqldump 将需要的内容导出到 dump.sql 文件，导出数据需要排除 mysql.user 表，且不导出 GTID 标识。
这里假设源数据库的IP地址为 192.168.0.100，导出语句为：

```bash
mysqldump --all-databases --single-transaction --triggers --routines --events  --host=192.168.0.100 --port=3306 --user=mysql_dev -p --ignore-table=mysql.user --ignore-table=mysql.db --ignore-table=mysql.tables_priv --set-gtid-purged=OFF > dump.sql
```

这里是导出了全部的数据，也可以选择导出部分数据库，更多详细使用方法请参考 [mysqldump](https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html)。

### 数据导入

将上一步导出的 dump.sql 文件复制到一台能连接「QingCloud MySQL Plus」的云服务器后执行该 .sql 文件。
需要使用「QingCloud MySQL Plus」的高可用写IP来进行链接。假设高可用的写IP地址为 192.168.0.250，导入语句为：

```bash
mysql -umysql_dev -p -h192.168.0.250 < dump.sql
```
