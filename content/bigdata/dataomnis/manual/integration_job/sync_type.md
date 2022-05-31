---
title: "同步类型"
description: 本小节主要介绍数据集成离线同步类型。 
keywords: 大数据工作台,数据开发,数据集成,离线同步类型
weight: 2
collapsible: false
draft: false
---

数据集成离线同步支持全量同步和增量同步。

## 全量同步

全量同步常用于对**恒定的存量数据**进行**一次性全量同步**。

但全量同步也可以对**持续更新的数据**进行**周期性全量同步**，例如：每周全量同步数据到一个数据目的的新表里。

全量同步，默认调度类型是一次性定时调度。您可以根据实际情况修改为周期调度。

## 增量同步

增量同步常用于对**持续更新的数据**进行**周期性增量同步**。

但增量同步也可以对**恒定的存量数据**进行**周期性增量同步**（例如：每天同步一个模块的数据）或对数据进行**单次同步**（例如：测试时仅需同步部分数据）。

增量同步，默认调度类型是周期调度。您可以根据实际情况修改为一次性定时调度。

## 全量同步与增量同步支持的数据源类型

全量同步与增量同步支持的数据源类型如下：

| 数据源类型                                                   | 全量同步 Source | 全量同步 Sink | 增量同步 Source | 全量同步 Sink |
| :----------------------------------------------------------- | --------------- | :------------ | --------------- | ------------- |
| [MySQL](/bigdata/dataomnis/manual/source_data/add_data/mysql) | 支持            | 支持          | 支持            | 支持          |
| [SQLServer](/bigdata/dataomnis/manual/source_data/add_data/sqlserver) | 支持            | 支持          | 支持            | 支持          |
| [PostgreSQL](/bigdata/dataomnis/manual/source_data/add_data/postgresql) | 支持            | 支持          | 支持            | 支持          |
| [ClickHouse](/bigdata/dataomnis/manual/source_data/add_data/clickhouse) | 支持            | 支持          | 支持            | 支持          |
| [MongoDB](/bigdata/dataomnis/manual/source_data/add_data/mongodb) | 支持            | 支持          | 支持            | 支持          |
| [ElasticSearch](/bigdata/dataomnis/manual/source_data/add_data/elasticsearch) | 支持            | 支持          | 不支持          | 支持          |
| [HDFS](/bigdata/dataomnis/manual/source_data/add_data/hdfs)  | 支持            | 支持          | 不支持          | 支持          |
| [HBase](/bigdata/dataomnis/manual/source_data/add_data/hbase) | 支持            | 支持          | 不支持          | 支持          |
| [Kafka](/bigdata/dataomnis/manual/source_data/add_data/kafka) | 不支持          | 支持          | 不支持          | 支持          |

<!-- | 数据源类型                                                   | 全量同步 Source | 全量同步 Sink | 增量同步 Source | 全量同步 Sink |
| :----------------------------------------------------------- | --------------- | :------------ | --------------- | ------------- |
| [MySQL](/bigdata/dataomnis/manual/source_data/add_data/mysql) | 支持            | 支持          | 支持            | 支持          |
| [Oracle](/bigdata/dataomnis/manual/source_data/add_data/oracle) | 支持            | 支持          | 支持            | 支持          |
| [SQLServer](/bigdata/dataomnis/manual/source_data/add_data/sqlserver) | 支持            | 支持          | 支持            | 支持          |
| [PostgreSQL](/bigdata/dataomnis/manual/source_data/add_data/postgresql) | 支持            | 支持          | 支持            | 支持          |
| [DB2](/bigdata/dataomnis/manual/source_data/add_data/db2)    | 支持            | 支持          | 支持            | 支持          |
| [ClickHouse](/bigdata/dataomnis/manual/source_data/add_data/clickhouse) | 支持            | 支持          | 支持            | 支持          |
| [MongoDB](/bigdata/dataomnis/manual/source_data/add_data/mongodb) | 支持            | 支持          | 支持            | 支持          |
| [SAP HANA](/bigdata/dataomnis/manual/source_data/add_data/saphana) | 支持            | 支持          | 支持            | 支持          |
| [ElasticSearch](/bigdata/dataomnis/manual/source_data/add_data/elasticsearch) | 支持            | 支持          | 不支持          | 支持          |
| [FTP](/bigdata/dataomnis/manual/source_data/add_data/ftp)    | 支持            | 支持          | 不支持          | 支持          |
| [HDFS](/bigdata/dataomnis/manual/source_data/add_data/hdfs)  | 支持            | 支持          | 不支持          | 支持          |
| [Redis](/bigdata/dataomnis/manual/source_data/add_data/redis) | 不支持          | 支持          | 不支持          | 支持          |
| [Hive](/bigdata/dataomnis/manual/source_data/add_data/hive)  | 不支持          | 支持          | 不支持          | 支持          |
| [HBase](/bigdata/dataomnis/manual/source_data/add_data/hbase) | 支持            | 支持          | 不支持          | 支持          |
| [Kafka](/bigdata/dataomnis/manual/source_data/add_data/kafka) | 不支持          | 支持          | 不支持          | 支持          | -->
