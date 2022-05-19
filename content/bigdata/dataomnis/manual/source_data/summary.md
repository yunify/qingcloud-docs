---
title: "概述"
description: 本小节主要介绍大数据工作台支持的数据源。 
keywords: 大数据工作台,操作指南,数据源
weight: 10
collapsible: false
draft: false
aliases:
    - /bigdata/dataomnis/manual/data_up_cloud/source_data/data_summary/
---


数据源定义结构化数据库、非结构化数据库、半结构化数据库以及消息队列等多种数据类型，主要用于数据集成。

您可以在数据源列表页面添加数据源，对数据源进行管理。

数据源需要在网络连通的前提下进行数据同步，详情请参见[网络连通方案](../../connect/)。

支持的数据源如下：

| 数据源类型                                                   | 描述                                                         |
| :----------------------------------------------------------- | ------------------------------------------------------------ |
| [MySQL](/bigdata/dataomnis/manual/source_data/add_data/mysql) | MySQL 是一个关系型数据库管理系统，由瑞典 MySQL AB 公司开发，目前属于 Oracle 公司。<br>MySQL 使用的 SQL 语言是用于访问数据库的最常用的标准化语言。 |
| [PostgreSQL](/bigdata/dataomnis/manual/source_data/add_data/postgresql) | PostgreSQL 是一种非常先进的对象-关系型数据库管理系统（ORDBMS），目前功能最强大，特性最丰富和最先进的自由软件数据库系统。有些特性甚至连商业数据库都不具备。<br/>这个起源于伯克利（BSD）的数据库研究计划目前已经衍生成一项国际开发项目，并且有非常广泛的用户。 |
| [SQLServer](/bigdata/dataomnis/manual/source_data/add_data/sqlserver) | SQL Server 数据库是 Microsoft 开发设计的一个关系数据库智能管理系统（RDBMS），现在是全世界主流数据库之一。<br/>SQL Server 数据库具备方便使用、可伸缩性好、相关软件集成程度高等优势。 |
| [Oracle](/bigdata/dataomnis/manual/source_data/add_data/oracle) | Oracle 是甲骨文公司的一款关系数据库管理系统。它是在数据库领域一直处于领先地位的产品。可以说 Oracle 数据库系统是目前世界上流行的关系数据库管理系统，系统可移植性好、使用方便、功能强，适用于各类大、中、小、微机环境。 |
| [DB2](/bigdata/dataomnis/manual/source_data/add_data/db2)    | DB2 是 IBM 公司开发的一套关系型数据库管理系统，主要的运行环境为 UNIX、Linux 以及 Windows 服务器版本。DB2主要应用于大型应用系统，具有较好的可伸缩性，可支持从大型机到单用户环境，应用于所有常见的服务器操作系统平台下。 |
| [SAP HANA](/bigdata/dataomnis/manual/source_data/add_data/saphana) | SAP HANA 是 SAP 公司于 2011年6月推出的基于内存计算技术的高性能实时数据计算平台，用户可以基于 SAP HANA 提供的内存计算技术，直接对大量实时业务数据进行查询和分析。SAP HANA 的数据存储在内存数据库中，访问速度极快。 |
| [ClickHouse](/bigdata/dataomnis/manual/source_data/add_data/clickhouse) | ClickHouse 是 Yandex 于 2016 年开源的用于在线分析处理查询（OLAP :Online Analytical Processing）MPP架构的列式存储数据库（DBMS：Database Management System），能够使用 SQL 查询实时生成分析数据报告。 |
| [Hive](/bigdata/dataomnis/manual/source_data/add_data/hive)  | Apache Hive 是一个构建于 Hadoop 顶层的数据仓库，可以将结构化的数据文件映射为一张数据库表，并提供简单的 SQL 查询功能，可以将 SQL 语句转换为 MapReduce 任务进行运行。 |
| [FTP](/bigdata/dataomnis/manual/source_data/add_data/ftp)    | FTP 是 File Transfer Protocol（文件传输协议）的英文简称，而中文简称为“文传协议”。用于 Internet 上控制文件的双向传输。 |
| [HDFS](/bigdata/dataomnis/manual/source_data/add_data/hdfs)  | HDFS（Hadoop Distributed File System）被设计成适合运行在通用硬件（commodity hardware）上的分布式文件系统。它和现有的分布式文件系统有很多共同点。但同时，它和其他的分布式文件系统的区别也是很明显的。<br/>HDFS 是一个高度容错性的系统，适合部署在廉价的机器上。 |
| [HBase](/bigdata/dataomnis/manual/source_data/add_data/hbase) | HBase 是一种构建在 HDFS 之上的分布式、面向列（但不是列存储）的存储系统。在需要实时读写、随机访问超大规模数据集时，可以使用HBase。HBase 可以通过线性方式增加节点来进行扩展。<br/>HBase 不是关系型数据库，自身不支持 SQL 查询引擎，HBase 适合将大而稀疏的表放在分布式集群上。 |
| [ElasticSearch](/bigdata/dataomnis/manual/source_data/add_data/elasticsearch) | Elasticsearch 是一个分布式的免费开源搜索和分析引擎，适用于包括文本、数字、地理空间、结构化和非结构化数据等在内的所有类型的数据。 |
| [MongoDB](/bigdata/dataomnis/manual/source_data/add_data/mongodb) | MongoDB 由 C++ 语言编写的，是一个基于分布式文件存储的开源数据库系统。在高负载的情况下，添加更多的节点，可以保证服务器性能。MongoDB 旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。MongoDB 将数据存储为一个文档，数据结构由键值（key=>value）对组成。 |
| [Redis](/bigdata/dataomnis/manual/source_data/add_data/redis) | Redis 是现在最受欢迎的 NoSQL 数据库之一，Redis 是一个使用 ANSI C 编写的开源、包含多种数据结构、支持网络、基于内存、可选持久性的键值对存储数据库，其具备如下特性：基于内存运行，性能高效，支持分布式，理论上可以无限扩展 key/value 存储系统。 |
| [Kafka](/bigdata/dataomnis/manual/source_data/add_data/kafka) | Kafka 是由 Apache 软件基金会开发的一个开源流处理平台，由 Scala 和 Java 编写。该项目的目标是为处理实时数据提供一个统一、高吞吐、低延迟的平台。其持久化层本质上是一个“按照分布式事务日志架构的大规模发布/订阅消息队列”。 |