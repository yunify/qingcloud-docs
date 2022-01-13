---
title: "数据仓库 ClickHouse"
description: 本小节主要介绍如何。 
keywords: 
weight: 60
collapsible: false
draft: false
---



## 版本说明

当前仅支持 Flink 1.12 版本。

## 使用范围

读取写入 ClickHouse，ClickHouse 支持作为数据源表（Source）,也可以作为目的表（Sink）。

## DDL 定义

```sql
CREATE TABLE clickhouse_table(
    id String,
    name String,
    age String,
    create_date Date
) WITH (
    'connector' = 'clickhouse',
    'url' = 'jdbc:clickhouse://localhost:8123/detail',
    'table-name' = 'students',
    'username' = 'default',
    'password' = "",
    'format' = 'json'
)
```

## ClickHouse 参数

| 参数值     | 必填 | 默认值 | 数据类型 | 描述                                                |
| :--------- | :--- | :----- | :------- | :-------------------------------------------------- |
| connector  | 是   | 无     | String   | 固定值为 `clickhouse`。                             |
| url        | 是   | 无     | String   | ClickHouse 服务的URL地址。                          |
| username   | 是   | 无     | String   | ClickHouse 服务的用户名。                           |
| password   | 是   | 无     | String   | ClickHouse 服务的密码。                             |
| table-name | 是   | 无     | String   | ClickHouse 服务的表名。                             |
| format     | 是   | 无     | String   | 消息的反序列化格式，支持如下格式：csv、json、avro。 |

## 代码示例

```sql
SELECT id,name FROM clickhouse_table
 
INSERT INTO clickhouse_table SELECT '8' AS id,'tom' AS name,'20' AS age,cast('2020-01-03' as DATE) as create_date
```