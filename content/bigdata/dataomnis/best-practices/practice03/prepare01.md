---
title: "环境准备"
description:  
keywords: 
weight: 10
collapsible: false
draft: false
---

## 准备 Kafka 环境

本实践以 QingCloud Kafka 为例。

1. [创建 Kafka 集群](/middware/kafka/quick-start/create_cluster/)。
2. [创建 Topic](/middware/kafka/quick-start/create_resource/)。

## 准备 ClickHouse 环境

本实践以 QingCloud ClickHouse 为例。

1. [创建 ClickHouse 集群](/dwh_bi/clickhouse/quickstart/create_cluster/)。
2. [连接 ClickHouse](/dwh_bi/clickhouse/quickstart/access_clickhouse/)。
2. 连接成功后，执行以下命令，创建所需数据库表。

    ```sql
    create table visitor_stats
    (
        stt     DateTime,
        edt     DateTime,
        vc      String,
        ch      String,
        ar      String,
        is_new  String,
        uv_ct   UInt64,
        pv_ct   UInt64,
        sv_ct   UInt64,
        uj_ct   UInt64,
        dur_sum UInt64,
        ts      UInt64
    ) engine = ReplacingMergeTree(ts)
            PARTITION BY toYYYYMMDD(stt)
            ORDER BY (stt, edt, is_new, vc, ch, ar)
            SETTINGS index_granularity = 8192;
    ```