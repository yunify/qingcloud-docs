---
title: "数据生成器 DataGen"
description: 本小节主要介绍数据生成器 DataGen 内置 Connector。 
keywords: 大数据工作台,内置 Connector,DataGen
weight: 76
collapsible: false
draft: false
---



## 版本说明

当前仅支持 Flink 1.12 版本。

## 使用范围

Datagen 是 Flink 自带的随机数据生成器，它可以作为数据源(Source)直接使用，支持有界和无界数据源。

## DDL 定义

```sql
CREATE TABLE Orders (
    order_number BIGINT,
    price        DECIMAL(32,2),
    buyer        ROW<first_name STRING, last_name STRING>,
    order_time   TIMESTAMP(3)
) WITH (
  'connector' = 'datagen',
  'number-of-rows' = '100'
)
```

> **注意**
>
> 默认情况下，DataGen 表将创建无界表，每列具有随机值。对于可变类型 char/varchar/string/array/map/multiset，可以指定长度。   
>
> 设置 `number-of-rows` 总行数，可以创建有界表。   
>
> sequence 类型(fields.#.kind)的字段，可以定义起始值(fields.#.start)和结束值(fields.#.end) ，如果表中的任何列是 sequence 类型，则是有界表，并在任意一个序列达到结束值时结束。



## Datagen 源表 WITH 参数

| 参数值          | 是否必填 | 默认值                  | 数据类型        | 描述                                                         |
| :-------------- | :------- | :---------------------- | :-------------- | :----------------------------------------------------------- |
| connector       | 是       | 无                      | String          | 连接器，固定值为 `datagen`。                                 |
| rows-per-second | 否       | 10000                   | Long            | 每秒生成的行数，控制发出数据速率。                           |
| number-of-rows  | 否       | 无                      | Long            | 总发出数据行数，默认无界。                                   |
| fields.#.kind   | 否       | random                  | String          | 指定 `#` 字段的生成器。可以是 `sequence` 或 `random`。       |
| fields.#.min    | 否       | (Minimum value of type) | (Type of field) | 'random' 生成器的最小值，适用于**数字**类型。                |
| fields.#.max    | 否       | (Maximum value of type) | (Type of field) | 'random' 生成器的的最大值，适用于**数字**类型。              |
| fields.#.length | 否       | 100                     | Integer         | 'random' 生成器生成字符的长度，适用于 char/varchar/string/array/map/multiset 类型。 |
| fields.#.start  | 否       | 无                      | (Type of field) | 'sequence' 生成器的起始值。                                  |
| fields.#.end    | 否       | 无                      | (Type of field) | 'sequence' 生成器的结束值。                                  |

## Datagen 数据类型

| 数据类型                      | 支持的生成器      | 描述                          |
| :---------------------------- | :---------------- | :---------------------------- |
| BOOLEAN                       | random            | -                              |
| CHAR                          | random / sequence | -                              |
| VARCHAR                       | random / sequence | -                              |
| STRING                        | random / sequence | -                              |
| DECIMAL                       | random / sequence | -                              |
| TINYINT                       | random / sequence | -                              |
| SMALLINT                      | random / sequence | -                              |
| INT                           | random / sequence | -                              |
| BIGINT                        | random / sequence | -                              |
| FLOAT                         | random / sequence | -                              |
| DOUBLE                        | random / sequence | -                              |
| DATE                          | random            | 当前日期。                    |
| TIME                          | random            | 当前时间。                    |
| TIMESTAMP                     | random            | 当前时间戳。                  |
| TIMESTAMP WITH LOCAL TIMEZONE | random            | 当前时间戳。                  |
| INTERVAL YEAR TO MONTH        | random            | -                              |
| INTERVAL DAY TO MONTH         | random            | -                             |
| ROW                           | random            | 生成带有随机子字段的行。      |
| ARRAY                         | random            | 生成带有随机元素的 array。    |
| MAP                           | random            | 生成带有随机元素的 map。      |
| MULTISET                      | random            | 生成带有随机元素的 multiset。 |

