---
title: "配置 TTL 存储策略"
description: 本小节主要介绍如何配置 TTL 存储策略。 
keywords: ChronusDB TTL 存储策略，TTL
weight: 20
collapsible: false
draft: false
---


在默认对象存储策略的基础上，添加 TTL 语句，可将指定时间前冷数据全部转移到对象磁盘存储。

本小节主要介绍设置和修改 TTL 存储策略。

## 前提条件

- 已开启对象存储策略。

## 设置 TTL 存储策略

参考如下语法，添加 TTL 语句。

```bash
$ echo TTL <time_column> + INTERVAL <number> TO DISK '<disk_name>' |TO VOLUME '<volume_name>'
```

|  <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:480px">说明</span>  |
|:--- |:--- |
| time_column |  日期或日期时间类型的列。<li>只能包含字母、数字、下划线。 |
| number  | 间隔时间和单位。<li>常用单位包括 Day、Week、Month、Year。|
| disk_name | 将数据片段移动到该磁盘`。|
| volume_name | 将数据片段移动到该卷。|

> **说明**
> 
> 更多 TTL 语句说明，请参见 [TTL](https://clickhouse.com/docs/zh/engines/table-engines/mergetree-family/mergetree/?spm=a2c4g.11186623.0.0.39c34190hHLmew#table_engine-mergetree-ttl)。

以下示例简表语句，以 date 为时间列，将180之前所有数据转移到冷数据盘。

```bash
$ echo  CREATE TABLE ttl_test_tbl
(
    `f1` String,
    `f2` String,
    `f3` Int64,
    `f4` Float64,
    `date` Date
)
ENGINE = MergeTree()
PARTITION BY date
ORDER BY f1
TTL date + INTERVAL 180 DAY TO DISK 's3'
SETTINGS storage_policy = 'test_s3';
```

## 修改 TTL 存储策略

添加 TTL 语句后，可修改 `TABLE`、`TTL`、`INTERVAL` 等参数。可参考如下语法，修改 TTL 存储策略。

> **说明**
> 
> -更改 TTL 存储策略后，存量数据和新增数据将全部按照新策略进行存储。
> 
> -若仅需修改新增数据的存储策略，无需修改存量数据存储策略，可在修改 TTL 之前执行` set materialize_ttl_after_modify=0;` 语句。
> 
> -修改 TTL 存储策略后，已存入冷数据盘中的数据，将不能自动移动到热数据盘。如果需要移动，请参见移动冷热数据盘的数据。

```bash
$ echo ALTER TABLE <table_name> MODIFY TTL <time_column> + INTERVAL <number> TO DISK '<disk_name>';
```

|  <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:480px">说明</span>  |
|:--- |:--- |
| table_name |  表名称。 |
| time_column |  日期或日期时间类型的列。<li>只能包含字母、数字、下划线。 |
| number  | 间隔时间和单位。<li>常用单位包括 Day、Week、Month、Year。|
| disk_name | 将数据片段移动该磁盘。|
