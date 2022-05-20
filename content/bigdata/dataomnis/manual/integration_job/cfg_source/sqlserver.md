---
title: "配置 SQLServer 数据来源"
description: 本小节主要介绍如何配置 SQLServer 数据来源。 
keywords: 
weight: 10
collapsible: false
draft: false
---

本文为您介绍 SQLServer 作为数据来源时，需要配置的参数及配置示例。

## 前提条件

开始配置 SQLServer 数据源前，请先添加数据源，详细操作请参见[新增 SQLServer 数据源](/bigdata/dataomnis/manual/source_data/add_data/sqlserver)。

## 参数说明

| 参数    | 名称     | 类型   | 默认值 | 范围         | 是否必填 | 描述                                                         |
| :------ | :------- | :----- | ------ | :----------- | :------- | :----------------------------------------------------------- |
| table   | 表       | string | 无     | 长度 2~300   | 是       | 选择需要同步的表名称。一个数据集成作业只能同步数据到一个目标表。说明：如果配置的表不存在，或者读取的列不存在，会导致作业运行失败。 |
| where   | 过滤条件 | string | 无     | 长度 0~1000  | 否       | where 过滤语句（不要填写 where 关键字）。注：需填写 SQL 合法 where 子句。 |
| splitPk | 切分键   | string | 无     | 长度 2~300   | 否       | 如果指定 **splitPk**，表示您希望使用 **splitPk** 代表的字段进行数据分片，数据同步因此会启动并发任务进行数据同步，提高数据同步的效能。<br>推荐使用表主键，仅支持整型数据切分。注：如果通道设置中 channel 大于 1 时必须配置此参数。 |
| column  | 字段列表 | list   | 无     | 长度 0~65535 | 是       | 配置所选表中需要同步的列名。                                 |

### column 参数说明

| 参数       | 名称     | 类型   | 范围                                                         | 是否必填 | 描述                                                         |
| :--------- | :------- | :----- | :----------------------------------------------------------- | :------- | :----------------------------------------------------------- |
| columnName | 列名     | string | 长度 0~300                                                   |          | 自动加载，不可修改。                                         |
| columnType | 列类型   | string | 支持类型：BIT、INT、SMALLINT、TINYINT、BIGINT、INT IDENTITY、REAL、FLOAT、DECIMAL、NUMERIC、CHAR、VARCHAR、VARCHAR(MAX)、TEXT、XML、NCHAR、NVARCHAR、NVARCHAR(MAX)、NTEXT、TIME、DATE、DATETIME、DATETIME2、SMALLDATETIME、DATETIMEOFFSET、TIMESTAMP、BINARY、VARBINARY、IMAGE、MONEY、SMALLMONEY、UNIQUEIDENTIFIER |          | 自动加载，可以修改，会自动做类型转换。                       |
| format     | 时间转换 | string | 长度 0~300                                                   | 否       | 页面交互：如果列类型是时间字符串（TIMESTAMP），增加“时间转换” 按钮，弹框中输入指定时间的格式，将字段类型转为日期格式返回。 |
| value      | 常量列   | string | 长度 0~300                                                   |          | 页面交互：<li>新增列，自定义 columnName、columnType，并输入自定义 value<li>存在列，输入自定义 value，并提示：当字段值为 null 时，会返回此 value 值。 |

## 向导模式开发介绍

打开已创建的离线-批量同步作业，即可进行同步任务的配置。详细操作请参见[创建离线-批量同步作业（向导模式）](/bigdata/dataomnis/manual/integration_job/create_job_offline_1)。

您需要在作业的开发页面进行以下配置：

<img src="/bigdata/dataomnis/_images/cfg_source_sqlserver.png" alt="配置 SQLServer 数据来源" style="zoom:50%;" />

| 参数         | 说明                                                         |
| :----------- | :----------------------------------------------------------- |
| **数据源**   | 选择已添加的数据源。 |
| **数据源表**       | 即上述参数说明中的 **table**。                                |
| **条件参数配置** | 配置需要同步数据的过滤条件。 |
| **切分键**   | 建议使用主键作为切分键，仅支持类型为整型的字段。读取数据时，根据配置的字段进行数据分片，实现并发读取，可以提升数据同步效率。**说明** 切分键与数据同步中的选择来源有关，配置数据来源时才显示切分键配置项。 |