---
title: "环境准备"
description: 本小节主要介绍如何准备 Kafka 环境和 ClickHouse 环境。
keywords: 大数据工作台,最佳实践,JAR 作业
weight: 10
collapsible: false
draft: false
---

## 准备 Kafka 环境

本实践以 QingCloud Kafka 为例。

1. [创建 Kafka 集群](/middware/kafka/quickstart/create_cluster/)。
2. [创建 Topic](/middware/kafka/quickstart/create_resource/)。

## 准备 ClickHouse 环境

本实践以 QingCloud ClickHouse 为例。

1. [创建 ClickHouse 集群](/dwh_bi/clickhouse/quickstart/create_cluster/)。
2. [连接 ClickHouse](/dwh_bi/clickhouse/quickstart/access_clickhouse/)。
2. 连接成功后，执行以下命令，创建数据库 **pk**。

    ```sql
    create database if not exists pk;
    ```

3. 执行以下命令，在数据库 **pk** 中创建数据库表 **top_price**。

    ```sql
    create table if not exists top_price(
        price Float64,
        supplier String,
        start DateTime,
        end   DateTime
    ) engine TinyLog;
    ```