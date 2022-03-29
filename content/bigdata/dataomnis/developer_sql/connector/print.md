---
title: "标准输出 Print"
description: 本小节主要介绍标准输出 Print 内置 Connector。 
keywords: 大数据工作台,内置 Connector,标准输出 Print
weight: 80
collapsible: false
draft: false
---



## 版本说明

当前仅支持 Flink 1.12 版本。

## 使用范围

Print 连接器可以将数据输出到 stdout 或 stderr，多用在开发调试中。它可以将最终的结果数据写入 TaskManager 的日志文件中，后续可以通过 Flink UI 查看这些日志的输出。

## DDL 定义

```sql
CREATE TABLE print_table (
 f0 INT,
 f1 INT,
 f2 STRING,
 f3 DOUBLE
) WITH (
 'connector' = 'print'
)
 
-- 也可以基于 LIKE 子句定义
 
CREATE TABLE print_table WITH ('connector' = 'print')
LIKE source_table (EXCLUDING ALL)
```

## Print 结果表 WITH 参数

| 参数值           | 是否必填 | 默认值 | 数据类型 | 描述                                                         |
| :--------------- | :------- | :----- | :------- | :----------------------------------------------------------- |
| connector        | 是       | 无     | String   | 连接器，固定值为 `print`。                                   |
| print-identifier | 否       | 无     | String   | 配置一个标识符作为输出数据的前缀。                           |
| standard-error   | 否       | false  | Boolean  | <li>true：打印到 stderr 标准错误流。<li>false：打印到 stdout 标准输出流。 |

## 代码示例

```sql
-- 每秒 1000 行的速度生产数据
CREATE TABLE datagen_source_table (
  id INT,
  name STRING,
  dt STRING,
  hr STRING
) WITH (
  'connector' = 'datagen',
  'rows-per-second' = '1000'
);
  
-- print 连接器表
CREATE TABLE print_table (
 id INT,
 name STRING,
 dt STRING,
 hr STRING
) WITH (
 'connector' = 'print'
);
  
-- 将生成的数据通过 print 连接器输出，打印到标准输出。
INSERT INTO print_table SELECT * from datagen_source_table;
```
