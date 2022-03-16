---
title: "支持的上下游存储"
description: 本小节主要介绍大数据工作台支持的 Flink 内置 Connector。 
keywords: 大数据工作台,内置 Connector
weight: 1
collapsible: false
draft: false
---

数据源（Source）指输入流计算系统的数据来源。在当前 SQL 模式作业中，数据源可以是消息队列 Kafka、数据库 MySQL 等。

数据目的（Sink）指流计算系统输出处理结果的目的地。在当前的 SQL 模式作业中，数据目的可以是消息队列 Kafka、数据库 MySQL、数据分析引擎 Elasticsearch Service 等。

您也可以上传自定义的 Connector 程序包，以支持更多的数据源和数据目的。

| 数据源名称           | 作为流数据源              | 作为数据目的                                       | 作为维表                                 |
| :------------- | ------------------------------ | ------------------------------ | ------------------------------ |
| [Kafka](../kafka) | 支持 | 支持 | - |
| [Upsert Kafka](../upsert_kafka) | 支持 | 支持 | - |
| [MySQL](../mysql) | 支持 | 支持 | 支持 |
| [MySQL CDC](../mysql_cdc) | 支持 | - | - |
| [PostgreSQL](../postgresql) | - | 支持 | 支持 |
| [HBase](../hbase) | - | 支持 | 支持 |
| [ClickHouse](../clickhouse) | - | 支持 | 支持 |
| [Elasticsearch](../elasticsearch) | - | 支持 | - |

