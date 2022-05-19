---
title: "配置 MySQL 数据目的"
description: 本小节主要介绍如何配置 MySQL 数据目的。 
keywords: 
weight: 1
collapsible: false
draft: false
---

本文为您介绍 MySQL 作为数据目的时，需要配置的参数及配置示例。

## 前提条件

开始配置 MySQL 数据源前，请先添加数据源，详细操作请参见[新增 MySQL 数据源](/bigdata/dataomnis/manual/source_data/add_data/mysql)。

## 参数说明

| 参数      | 名称              | 类型   | 默认值        | 范围                              | 是否必填 | 描述                                                         |
| :-------- | :---------------- | :----- | :------------ | :-------------------------------- | :------- | :----------------------------------------------------------- |
| table     | 表                | string | -             | 长度 2~300                        | 是       | 请选择表名。                                                 |
| preSql    | 写入前 SQL 语句组 | list   | -             | 长度 0~1000                       | 否       | 请输入写入数据到目的表前执行的一组标准 SQL 语句。            |
| postSql   | 写入后 SQL 语句组 | list   | -             | 长度 0~1000                       | 否       | 请输入写入数据到目的表后执行的一组标准 SQL 语句。            |
| writeMode | 写入模式          | string | insert        | <li>insert<li>replace<li>update   | 是       | 选择写入模式：<li>insert：insert into，当主键/唯一性索引冲突时会写不进去冲突的行，以脏数据的形式体现。<li>update：on duplicate key update，没有遇到主键/唯一性索引冲突时，与`insert into` 行为一致。冲突时会用新行替换已经指定的字段的语句。<li>replace：replace into：没有遇到主键/唯一性索引冲突时，与`insert into`行为一致。冲突时会先删除原有行，再插入新行。即新行会替换原有行的所有字段。 |
| semantic  | 写入一致性语义    | string | at-least-once | <li>exactly-once<li>at-least-once | 是       | <li>exacly-once 意味着写入数据确保正好一次，是需要开启两阶段提交后能达到的效果。<li>默认值是 at-least-once，也就是数据至少写入一次，意味着不开启两阶段提交。 |
| batchSize | 批量写入条数      | int    | 1024          | 1~65535                           | 是       | 批量写入的条数，该值可减少网络交互次数，过大会造成 OOM。     |
| column    | 字段列表          | list   | -             | 长度 0~65535                      | 是       | 详细请参见 [column参数说明](#column参数说明)。               |

### column 参数说明

| 参数       | 名称     | 类型   | 范围                                                     | 是否必填 | 描述                                                         |
| :--------- | :--------- | :------- | :--------- | :----------------------------------------------------------- | :------------------ |
| columnName | 列名       | string   | 长度 0~300 |                                                              | 自动加载，不可修改。 |
| columnType | 列类型   | string | 支持类型：SMALLINT、SMALLSERIAL、INT2、INT、INTEGER、SERIAL、INT4、BIGINT、BIGSERIAL、OID、INT8、REAL、FLOAT4、FLOAT、DOUBLE PRECISION、FLOAT8、DECIMAL、NUMERIC、 CHARACTER VARYING、VARCHAR、CHARACTER、CHAR、TEXT、NAME、BPCHAR、BYTEA、TIMESTAMP、TIMESTAMPTZ、DATE、TIME、TIMETZ、 BOOLEAN、BOOL |          | 自动加载，可以修改。                       |

## 向导模式开发介绍

打开已创建的离线-批量同步作业，即可进行同步任务的配置。详细操作请参见[创建离线-批量同步作业（向导模式）](/bigdata/dataomnis/manual/integration_job/create_job_offline_1)。

您需要在作业的开发页面进行以下数据源配置：

| 参数         | 说明                                                         |
| :----------- | :----------------------------------------------------------- |
| **数据源**   | 选择已添加的数据源。 |
| **数据源表**       | 即上述参数说明中的 **table**。                                |
| **写入模式** | 即上述参数说明中的 **writeMode**。 |
| **写入一致性语义**   | 即上述参数说明中的 **semantic**。 |
| **批量写入条数**   | 即上述参数说明中的 **semantic**。 |

