---
title: "环境准备"
description:  
keywords: 
weight: 10
collapsible: false
draft: false
---

## 准备 Kafka 环境

详细操作请参见：[创建 Kafka 集群](/middware/kafka/quick-start/create_cluster/)。

## 准备 ClickHouse 环境

1. [创建 ClickHouse 集群](/dwh_bi/clickhouse/quickstart/create_cluster/)。
2. [连接 ClickHouse](/dwh_bi/clickhouse/quickstart/access_clickhouse/)。
3. 连接成功后，执行以下命令，创建所需数据库表。

  ```sql
  create table output_uv
  (
      `userids`     String,
      `uv`          UInt64,
      `create_time` DateTime
  ) engine = SummingMergeTree(uv)
        primary key (userids)
        order by (userids);
  
  create table output_pv
  (
      `pagevisits` String,
      `product_id` String,
      `pv`         UInt64,
      `stt`        DateTime,
      `edt`        DateTime
  ) engine = Memory;
  
  CREATE TABLE `output_conversion_rate`
  (
      `conversion_rate` String,
      `rate`            String,
      `create_time`     DateTime
  ) engine = ReplacingMergeTree(create_time)
        partition by toYYYYMMDD(create_time)
        primary key (conversion_rate)
        order by (conversion_rate,create_time);
  ```