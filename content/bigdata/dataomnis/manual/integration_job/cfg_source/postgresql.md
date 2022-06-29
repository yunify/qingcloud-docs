---
title: "配置 PostgreSQL 数据来源"
description: 本小节主要介绍如何配置 PostgreSQL 数据来源。 
keywords: 
weight: 5
collapsible: false
draft: false
---

本文为您介绍 PostgreSQL 作为数据来源时，需要配置的参数及配置示例。

## 前提条件

开始配置 PostgreSQL 数据源前，请先添加数据源，详细操作请参见[新增 PostgreSQL 数据源](/bigdata/dataomnis/manual/source_data/add_data/postgresql)。

## 类型转换列表

| 分类    | 支持的 PostgreSQL 数据类型   |
| :------ | :----- |
| 整数类    | SMALLINT、INT2、INT、INTEGER、INT4、BIGINT、INT8、SMALLSERIAL、SERIAL、BIGSERIAL、OID |
| 浮点类    | REAL、FLOAT4、FLOAT、DOUBLE、PRECISION、FLOAT8、NUMERIC、DECIMAL |
| 字符串类    | CHARACTER VARYING、VARCHAR、CHARACTER、CHAR、TEXT、NAME、BPCHAR |
| 日期时间类    | TIMESTAMP、TIMESTAMPTZ、DATE、TIME、TIMETZ |
| 布尔型    | BOOLEAN、BOOL |
| 二进制类    | BYTEA |

## 参数说明

| 参数    | 类型   | 是否必填 | 描述                                                         |
| :------ | :----- | :------- | :----------------------------------------------------------- |
| table   | string | 是       | 选择需要同步的表名称。一个数据集成作业只能同步数据到一个目标表。<br><span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b><br>如果配置的表不存在，会导致作业运行失败。</span> |
| where   | string | 否       | where 过滤语句。<br/><span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b><br/>需填写 SQL 合法 where 子句。不需要填写 where 关键字。</span> |
| splitPk | string | 否       | 如果指定 **splitPk**，表示您希望使用 **splitPk** 代表的字段进行数据分片，数据同步会启动并发任务进行数据同步，提高数据同步的效能。<br/><span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b><br/>推荐使用表主键进行切分，仅支持整型数据切分。<br>如果通道设置中 channel 大于 1，必须配置此参数。</span> |
| column  | list   | 是       | 配置所选表中需要同步的列名。<br/><span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b><br/>如果读取的列不存在，会导致作业运行失败。</span> |

## 向导模式开发介绍

打开已创建的离线-批量同步作业，即可进行同步任务的配置。详细操作请参见[创建离线-批量同步作业（向导模式）](/bigdata/dataomnis/manual/integration_job/create_job_offline_1)。

您需要在作业的开发页面进行以下配置：

<img src="/bigdata/dataomnis/_images/cfg_source_postgresql01.png" alt="配置 PostgreSQL 数据来源" style="zoom:50%;" />

| 参数         | 说明                                                         |
| :----------- | :----------------------------------------------------------- |
| **数据源**   | 选择已添加的数据源。 |
| **数据源表**       | 即上述参数说明中的 `table`。                          |
| **过滤条件**       | 即上述参数说明中的 `where`。仅全量同步时需要配置该参数。                          |
| **条件参数配置** | 配置需要同步数据的过滤条件。仅增量同步时需要配置该参数。 |
| **切分键**   | 即上述参数说明中的 splitPk。建议使用主键作为切分键，仅支持类型为整型的字段。<br>读取数据时，根据配置的字段进行数据分片，实现并发读取，可以提升数据同步效率。<br>**说明** 切分键与数据同步中的选择来源有关，配置数据来源时才显示切分键配置项。 |

### 条件参数配置

仅离线增量同步需要进行条件参数配置。

<img src="/bigdata/dataomnis/_images/cfg_source_postgresql.png" alt="配置 PostgreSQL 数据来源-增量" style="zoom:50%;" />

**可视化方式**

| 参数         | 说明                                                         |
| :----------- | :----------------------------------------------------------- |
| **列名**   | 选择需要过滤的列名。 |
| **开始条件**       | 配置过滤的开始条件。                          |
| **结束条件** | 配置过滤的结束条件。 |
| **生成条件参数**   | 根据上述配置信息自动生成条件参数表达式。 |

<img src="/bigdata/dataomnis/_images/cfg_source_condition_01.png" alt="可视化方式" style="zoom:50%;" />

**表达式方式**

条件参数配置默认使用可视化方式，您可以根据使用习惯切换为表达式方式。

<img src="/bigdata/dataomnis/_images/cfg_source_condition_02.png" alt="表达式方式" style="zoom:50%;" />