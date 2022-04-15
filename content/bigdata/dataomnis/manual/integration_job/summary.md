---
title: "概述"
description: 本小节主要介绍数据集成功能。 
keywords: 大数据工作台,数据开发,数据集成
weight: 1
collapsible: false
draft: false
---

数据集成提供在复杂网络环境下、丰富的异构数据源之间进行数据同步的功能。

## 离线同步



### 离线同步支持的数据源类型

| 数据源类型                                                   | 数据来源（Source）                                           | 数据目的（Sink）                                             | 增量同步Source |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | -------------- |
| [MySQL](/bigdata/dataomnis/manual/source_data/add_data/mysql) | [配置 MySQL 数据来源](/bigdata/dataomnis/manual/integration_job/cfg_source/mysql) | [配置 MySQL 数据目的](/bigdata/dataomnis/manual/integration_job/cfg_sink/mysql) |                |
| [TiDB](/bigdata/dataomnis/manual/source_data/add_data/tidb)  | 不支持                                                       | [配置 TiDB 数据目的](/bigdata/dataomnis/manual/integration_job/cfg_sink/tidb) | 不支持         |
| [Oracle](/bigdata/dataomnis/manual/source_data/add_data/oracle) | [配置 Oracle 数据来源](/bigdata/dataomnis/manual/integration_job/cfg_source/oracle) | [配置 Oracle 数据目的](/bigdata/dataomnis/manual/integration_job/cfg_sink/oracle) |                |
| [SQLServer](/bigdata/dataomnis/manual/source_data/add_data/sqlserver) | [配置 SQLServer 数据来源](/bigdata/dataomnis/manual/integration_job/cfg_source/sqlserver) | [配置 SQLServer 数据目的](/bigdata/dataomnis/manual/integration_job/cfg_sink/sqlserver) |                |
| [PostgreSQL](/bigdata/dataomnis/manual/source_data/add_data/postgresql) | [配置 PostgreSQL 数据来源](/bigdata/dataomnis/manual/integration_job/cfg_source/postgresql) | [配置 PostgreSQL 数据目的](/bigdata/dataomnis/manual/integration_job/cfg_sink/postgresql) |                |
| [DB2](/bigdata/dataomnis/manual/source_data/add_data/db2)    | [配置 DB2 数据来源](/bigdata/dataomnis/manual/integration_job/cfg_source/db2) | [配置 DB2 数据目的](/bigdata/dataomnis/manual/integration_job/cfg_sink/db2) |                |
| [ClickHouse](/bigdata/dataomnis/manual/source_data/add_data/clickhouse) | [配置 ClickHouse 数据来源](/bigdata/dataomnis/manual/integration_job/cfg_source/clickhouse) | [配置 ClickHouse 数据目的](/bigdata/dataomnis/manual/integration_job/cfg_sink/clickhouse) |                |
| [MongoDB](/bigdata/dataomnis/manual/source_data/add_data/mongodb) | [配置 MongoDB 数据来源](/bigdata/dataomnis/manual/integration_job/cfg_source/mongodb) | [配置 MongoDB 数据目的](/bigdata/dataomnis/manual/integration_job/cfg_sink/mongodb) |                |
| [SAP HANA](/bigdata/dataomnis/manual/source_data/add_data/saphana) | [配置 SAP HANA 数据来源](/bigdata/dataomnis/manual/integration_job/cfg_source/saphana) | [配置 SAP HANA 数据目的](/bigdata/dataomnis/manual/integration_job/cfg_sink/saphana) |                |
| [ElasticSearch](/bigdata/dataomnis/manual/source_data/add_data/elasticsearch) | [配置 ElasticSearch 数据来源](/bigdata/dataomnis/manual/integration_job/cfg_source/elasticsearch) | [配置 ElasticSearch 数据目的](/bigdata/dataomnis/manual/integration_job/cfg_sink/elasticsearch) | 不支持         |
| [FTP](/bigdata/dataomnis/manual/source_data/add_data/ftp)    | [配置 FTP 数据来源](/bigdata/dataomnis/manual/integration_job/cfg_source/ftp) | [配置 FTP 数据目的](/bigdata/dataomnis/manual/integration_job/cfg_sink/ftp) | 不支持         |
| [HDFS](/bigdata/dataomnis/manual/source_data/add_data/hdfs)  | [配置 HDFS 数据来源](/bigdata/dataomnis/manual/integration_job/cfg_source/hdfs) | [配置 HDFS 数据目的](/bigdata/dataomnis/manual/integration_job/cfg_sink/hdfs) | 不支持         |
| [Redis](/bigdata/dataomnis/manual/source_data/add_data/redis) | 不支持                                                       | [配置 Redis 数据目的](/bigdata/dataomnis/manual/integration_job/cfg_sink/redis) | 不支持         |
| [Hive](/bigdata/dataomnis/manual/source_data/add_data/hive)  | 不支持                                                       | [配置 Hive 数据目的](/bigdata/dataomnis/manual/integration_job/cfg_sink/hive) | 不支持         |
| [HBase](/bigdata/dataomnis/manual/source_data/add_data/hbase) | [配置 HBase 数据来源](/bigdata/dataomnis/manual/integration_job/cfg_source/hbase) | [配置 HBase 数据目的](/bigdata/dataomnis/manual/integration_job/cfg_sink/hbase) | 不支持         |
| [Kafka](/bigdata/dataomnis/manual/source_data/add_data/kafka) | 不支持                                                       | [配置 Kafka 数据目的](/bigdata/dataomnis/manual/integration_job/cfg_sink/kafka) | 不支持         |

