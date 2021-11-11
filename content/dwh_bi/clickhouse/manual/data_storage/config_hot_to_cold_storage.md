---
title: "配置冷热存储策略"
description: 本小节主要介绍如何配置冷热存储策略。 
keywords: ClickHouse TTL 存储策略，TTL，冷热存储策略
weight: 20
collapsible: false
draft: false
---



创建对象存储策略后，若需使用冷热分离存储数据，将冷热数据分离存储，可在建表时添加语句指定冷热存储策略。

本小节主要介绍配置冷热存储策略，包括配置基于磁盘容量和基于 TTL 时间规则的存储。

## 约束限制

- 添加 TTL 语句后，将优先基于 TTL 时间规则存储，再基于磁盘容量规则存储。
- 不支持修改冷热存储策略参数值。

## 前提条件

- 已创建对象存储策略。

## 基于磁盘容量规则

添加冷热存储策略语句如下：

```sql
 SETTINGS storage_policy = '<策略名称_hot_to_cold>'
```

以下示例建表语句，在 `ossp_hot_to_cold`冷热存储策略上，将数据将先存储在热数据盘 `default`，当热数据盘达到存储阈值，更早的数据将转移到 `ossp` 对象存储磁盘。

```bash
$ echo "CREATE TABLE test.t_local
(
   EventDate DateTime,
   CounterID UInt32,
   UserID UInt32,
)
ENGINE = MergeTree()
PARTITION BY toYYYYMM(EventDate) 
ORDER BY (CounterID, EventDate)
SETTINGS storage_policy = 'ossp_hot_to_cold'"
| curl 'http://<ClickHouse 用户名>:<ClickHouse 密码>@<高可用 IP>:8123/' --data-binary @-
```

## 基于 TTL 时间规则

在基于磁盘容量规则存储基础上，添加 TTL 语句，可将指定时间前冷数据全部迁移。

添加 TTL 语句后，将优先基于 TTL 时间规则存储，再基于磁盘容量规则存储。

### 添加 TTL 存储语句

参考如下语法，添加 TTL 语句。

```sql
TTL <time_column> + INTERVAL <number> TO DISK '<disk_name>' |TO VOLUME '<volume_name>'
SETTINGS storage_policy = '<策略名称_hot_to_cold>'
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

以下示例简表语句，以 date 为时间列，在 `ossp_hot_to_cold`策略上，将180之前所有数据转移到 `ossp` 冷数据盘。

```bash
$ echo "CREATE TABLE test.t_local
(
    `date` EventDate DateTime,
    `f1` CounterID UInt32,
    `f2` UserID UInt32,
)
ENGINE = MergeTree()
PARTITION BY toYYYYMM(EventDate) 
ORDER BY (CounterID, EventDate)
TTL EventDate + INTERVAL 180 DAY TO DISK 'ossp' 
SETTINGS storage_policy = 'ossp_hot_to_cold'"
| curl 'http://<ClickHouse 用户名>:<ClickHouse 密码>@<高可用 IP>:8123/' --data-binary @-
```

### 修改 TTL 存储语句

添加 TTL 语句后，可修改 `TABLE`、`TTL`、`INTERVAL` 等参数。可参考如下语法，修改 TTL 存储规则。

> **说明**
> 
> -更改 TTL 存储策略后，存量数据和新增数据将全部按照新策略进行存储。
> 
> -修改 TTL 存储策略后，已存入冷数据盘中的数据，将不能自动移动到热数据盘。如果需要移动，请参见移动冷热数据盘的数据。

```sql
ALTER TABLE <table_name> ON CLUSTER default MODIFY TTL <time_column> + INTERVAL <number> TO DISK '<disk_name>'
SETTINGS storage_policy = '<策略名称_hot_to_cold>'
```

|  <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:480px">说明</span>  |
|:--- |:--- |
| table_name |  表名称。 |
| time_column |  日期或日期时间类型的列。<li>只能包含字母、数字、下划线。 |
| number  | 间隔时间和单位。<li>常用单位包括 Day、Week、Month、Year。|
| disk_name | 将数据片段移动该磁盘。|
