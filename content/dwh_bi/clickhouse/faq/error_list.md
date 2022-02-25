---
title: "常见报错"
description: 本小节主要介绍 ClickHouse 常见报错解决。 
keyword: 常见报错,数据仓库,ClickHouse,数据库
weight: 05
draft: false
---

## 报 Too many parititions for single insert block (more than 100)错误，怎么办?

**问题现象**

写入数据到 ClickHouse 时，上报 `Too many parititions for single insert block (more than 100)`错误。

```plain
message: Too many partitions for single INSERT block (more than 100). 
The limit is controlled by 'max_partitions_per_insert_block' setting. 
Large number of partitions is a common misconception.
It will lead to severe negative performance impact, including slow server startup, 
slow INSERT queries and slow SELECT queries. Recommended total number of partitions 
for a table is under xx.x..xx.x. Please note, that partitioning is not intended to 
speed up SELECT queries (ORDER BY key is sufficient to make range queries fast).
Partitions are intended for data manipulation (DROP PARTITION, etc)
```

**可能原因**

ClickHouse 受 `max_partitions_per_insert_block` 参数限制，每次写入的数据不能跨越超过 100 个 partition。

**解决办法**

调整 `max_partitions_per_insert_block` 参数值大小。ClickHouse 支持在线修改 `max_partitions_per_insert_block` 参数值，请参见[修改配置参数](../../manual/config_para/check_para)。

> **注意**
> 
> `max_partitions_per_insert_block` 参数值不能设置过大，过大可能影响数据库性能。
