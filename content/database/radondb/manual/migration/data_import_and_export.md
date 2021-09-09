---
title: "go-mydumper 方式"
description: 本小节主要介绍如何使用 RadonDB 数据导出和导入。 
keywords: RadonDB, QingCloud, 数据导入,数据导出
weight: 10
collapsible: false
draft: false
---


RadonDB 目前只支持 `go-mydumper` 方式的数据导入和导出。

[XeLabs/go-mydumper](https://github.com/XeLabs/go-mydumper) 是一个使用 Go 语言开发的开源工具，与 [maxbube/mydumper](https://github.com/maxbube/mydumper) 格式完全兼容，但是对并行处理进行了优化，性能更加卓越。该工具同时支持 RadonDB 和 MySQL 使用。

- 导入数据至 RadonDB 时，`go-mydumper` 会批量并行式导入，非常快捷。

- 从 RadonDB 导出数据时，`go-mydumper` 会批量并行流式导出，资源占用率较低。

## 安装 go-mydumper

``` plain
$ git clone https://github.com/XeLabs/go-mydumper
$ cd go-mydumper
$ make

$ ./bin/mydumper --help
Usage: ./bin/mydumper -h [HOST] -P [PORT] -u [USER] -p [PASSWORD] -db [DATABASE] -o [OUTDIR]
  -F int
        Split tables into chunks of this output file size. This value is in MB (default 128)
  -P int
        TCP/IP port to connect to (default 3306)
  -db string
        Database to dump
  -h string
        The host to connect to
  -o string
        Directory to output files to
  -p string
        User password
  -s int
        Attempted size of INSERT statement in bytes (default 1000000)
  -t int
        Number of threads to use (default 16)
  -table string
        Table to dump
  -u string
        Username with privileges to run the dump

$ ./bin/myloader --help
Usage: ./bin/myloader -h [HOST] -P [PORT] -u [USER] -p [PASSWORD] -d  [DIR]
  -P int
        TCP/IP port to connect to (default 3306)
  -d string
        Directory of the dump to import
  -h string
        The host to connect to
  -p string
        User password
  -t int
        Number of threads to use (default 16)
  -u string
        Username with privileges to run the loader
```

## 导入数据到 RadonDB

### 步骤一：导出远端数据

使用 `mydumper` 从远端 MySQL 数据源导出数据。

``` plain
$ ./bin/mydumper -h 192.168.0.2 -P 3306 -u test -p test -db sbtest  -o sbtest.sql
 2017/10/25 13:12:52.933391 dumper.go:35:         [INFO]        dumping.database[sbtest].schema...
 2017/10/25 13:12:52.937743 dumper.go:45:         [INFO]        dumping.table[sbtest.benchyou0].schema...
 2017/10/25 13:12:52.937791 dumper.go:168:        [INFO]        dumping.table[sbtest.benchyou0].datas.thread[1]...
 2017/10/25 13:12:52.939008 dumper.go:45:         [INFO]        dumping.table[sbtest.benchyou1].schema...
 2017/10/25 13:12:52.939055 dumper.go:168:        [INFO]        dumping.table[sbtest.benchyou1].datas.thread[2]...
 2017/10/25 13:12:55.611905 dumper.go:105:        [INFO]        dumping.table[sbtest.benchyou0].rows[633987].bytes[128MB].part[1].thread[1]
 2017/10/25 13:12:55.765127 dumper.go:105:        [INFO]        dumping.table[sbtest.benchyou1].rows[633987].bytes[128MB].part[1].thread[2]
 2017/10/25 13:12:58.146093 dumper.go:105:        [INFO]        dumping.table[sbtest.benchyou0].rows[1266050].bytes[256MB].part[2].thread[1]

 ...snip...

 2017/10/25 13:13:37.627178 dumper.go:105:        [INFO]        dumping.table[sbtest.benchyou0].rows[11974624].bytes[2432MB].part[19].thread[1]
 2017/10/25 13:13:37.753966 dumper.go:105:        [INFO]        dumping.table[sbtest.benchyou1].rows[11974630].bytes[2432MB].part[19].thread[2]
 2017/10/25 13:13:39.453430 dumper.go:122:        [INFO]        dumping.table[sbtest.benchyou0].done.allrows[12486842].allbytes[2536MB].thread[1]...
 2017/10/25 13:13:39.453462 dumper.go:170:        [INFO]        dumping.table[sbtest.benchyou0].datas.thread[1].done...
 2017/10/25 13:13:39.622390 dumper.go:122:        [INFO]        dumping.table[sbtest.benchyou1].done.allrows[12484135].allbytes[2535MB].thread[2]...
 2017/10/25 13:13:39.622423 dumper.go:170:        [INFO]        dumping.table[sbtest.benchyou1].datas.thread[2].done...
 2017/10/25 13:13:39.622454 dumper.go:188:        [INFO]        dumping.all.done.cost[46.69sec].allrows[24970977].allbytes[5318557708].rate[108.63MB/s]
```

### 步骤二：修改 schema

在导出目录里找到 `\*-schema.sql` ，比如在 `sbtest.sql` 里 `sbtest.benchyou0-scehma.sql`。

若表没有主键或者需要手动指定分区键，则对原语句最后增加 `PARTITION BY HASH` 分区键的语法。

``` sql
CREATE TABLE `benchyou0` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `k` bigint(20) unsigned NOT NULL DEFAULT '0',
  `c` char(120) NOT NULL DEFAULT '',
  `pad` char(60) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `k_1` (`k`)
) ENGINE=InnoDB;
```

以 ID 为分区键为例增加语法。

```sql
CREATE TABLE `benchyou0` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `k` bigint(20) unsigned NOT NULL DEFAULT '0',
  `c` char(120) NOT NULL DEFAULT '',
  `pad` char(60) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `k_1` (`k`)
) ENGINE=InnoDB PARTITION BY HASH(id);
```

### 步骤三：导入数据至 RadonDB

```plain
$ ./bin/myloader -h 192.168.0.2 -P 3306 -u radondb -p radondb -d sbtest.sql
 2017/10/25 13:04:17.396002 loader.go:75:         [INFO]        restoring.database[sbtest]
 2017/10/25 13:04:17.458076 loader.go:99:         [INFO]        restoring.schema[sbtest.benchyou0]
 2017/10/25 13:04:17.516236 loader.go:99:         [INFO]        restoring.schema[sbtest.benchyou1]
 2017/10/25 13:04:17.516389 loader.go:115:        [INFO]        restoring.tables[benchyou0].parts[00015].thread[1]
 2017/10/25 13:04:17.516456 loader.go:115:        [INFO]        restoring.tables[benchyou0].parts[00005].thread[2]
 2017/10/25 13:04:17.516486 loader.go:115:        [INFO]        restoring.tables[benchyou0].parts[00020].thread[3]
 2017/10/25 13:04:17.516523 loader.go:115:        [INFO]        restoring.tables[benchyou1].parts[00009].thread[4]
 2017/10/25 13:04:17.516550 loader.go:115:        [INFO]        restoring.tables[benchyou1].parts[00018].thread[5]
 2017/10/25 13:04:17.516572 loader.go:115:        [INFO]        restoring.tables[benchyou1].parts[00020].thread[6]
 2017/10/25 13:04:17.516606 loader.go:115:        [INFO]        restoring.tables[benchyou1].parts[00019].thread[7]
 2017/10/25 13:04:17.516655 loader.go:115:        [INFO]        restoring.tables[benchyou0].parts[00002].thread[8]
 2017/10/25 13:04:17.516692 loader.go:115:        [INFO]        restoring.tables[benchyou1].parts[00011].thread[9]
 2017/10/25 13:04:17.516718 loader.go:115:        [INFO]        restoring.tables[benchyou0].parts[00009].thread[10]
 2017/10/25 13:04:17.516739 loader.go:115:        [INFO]        restoring.tables[benchyou1].parts[00017].thread[11]
 2017/10/25 13:04:17.516772 loader.go:115:        [INFO]        restoring.tables[benchyou1].parts[00010].thread[12]
 2017/10/25 13:04:17.516797 loader.go:115:        [INFO]        restoring.tables[benchyou1].parts[00008].thread[13]
 2017/10/25 13:04:17.516818 loader.go:115:        [INFO]        restoring.tables[benchyou1].parts[00002].thread[14]
 2017/10/25 13:04:50.476413 loader.go:131:        [INFO]        restoring.tables[benchyou1].parts[00013].thread[0].done...

 ...snip...

 2017/10/25 13:05:52.602444 loader.go:131:        [INFO]        restoring.tables[benchyou0].parts[00019].thread[8].done...
 2017/10/25 13:05:52.602573 loader.go:187:        [INFO]        restoring.all.done.cost[95.09sec].allbytes[5120.00MB].rate[53.85MB/s]
```

## 导出 RadonDB 数据

使用 `mydumper` 导出 RadonDB 数据，以流式获取并导出为例，即 select 语句加 `/*+ streaming */` hint 语法。

```plain
$ ./bin/mydumper -h 192.168.0.2 -P 3306 -u radondb -p radondb -db sbtest  -o sbtest.sql
 2017/10/25 13:12:52.933391 dumper.go:35:         [INFO]        dumping.database[sbtest].schema...
 2017/10/25 13:12:52.937743 dumper.go:45:         [INFO]        dumping.table[sbtest.benchyou0].schema...
 2017/10/25 13:12:52.937791 dumper.go:168:        [INFO]        dumping.table[sbtest.benchyou0].datas.thread[1]...
 2017/10/25 13:12:52.939008 dumper.go:45:         [INFO]        dumping.table[sbtest.benchyou1].schema...
 2017/10/25 13:12:52.939055 dumper.go:168:        [INFO]        dumping.table[sbtest.benchyou1].datas.thread[2]...
 2017/10/25 13:12:55.611905 dumper.go:105:        [INFO]        dumping.table[sbtest.benchyou0].rows[633987].bytes[128MB].part[1].thread[1]
 2017/10/25 13:12:55.765127 dumper.go:105:        [INFO]        dumping.table[sbtest.benchyou1].rows[633987].bytes[128MB].part[1].thread[2]

 ... ...

 2017/10/25 13:13:39.622423 dumper.go:170:        [INFO]        dumping.table[sbtest.benchyou1].datas.thread[2].done...
 2017/10/25 13:13:39.622454 dumper.go:188:        [INFO]        dumping.all.done.cost[46.69sec].allrows[24970977].allbytes[5318557708].rate[108.63MB/s]
```
