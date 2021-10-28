---
title: "货车数据采集分析"
description: 本小节主要介绍 QingCloud ChronusDB 采集和分析货车数据的应用。 
keywords: chronusdb 货车数据, 
weight: 30
collapsible: false
draft: false
---

公路货物运输是现代运输主要方式之一，也是陆上货物运输的两个基本运输方式之一。在整个运输领域占有重要地位，并发挥着越来越重要的作用。如何实时了解货车运输的成本情况，如何获悉货车运输损耗，及时如何了解货车故障检查等，成为运输领域亟需解决的问题。

通过将车载设备联网，实时记录并发送货车信息、货车的位置、油耗等数据，通过大数据数据分析，可以轻松了解货车的整体状态，察觉可能存在的隐患。

本小节主要示例介绍如何通过 ChronusDB 对货车的行驶数据采集和分析。

![ChronusDB与物联网](../../_images/chronusdb_IoT.png)

## 数据库建模

1. 建立运输数据库。

    ```shell
    $ echo "CREATE DATABASE freight" | curl 'http://ChronusDB 用户名:ChronusDB 密码@高可用 IP:8123/' --data-binary @-
    ```

2. 建立货车信息表，包含货车车队、司机、型号、设备信息、负载能力、油耗能力、正常燃油消耗指标，和经度、维度、高度、年级、实际油耗这些监控项。
    
    ```shell
     $ echo "CREATE TABLE freight.truck_metrics_tags
     (
       time Datetime,
       name LowCardinality(String),
       fleet LowCardinality(String),
       driver LowCardinality(String),
       model LowCardinality(String),
       device_version LowCardinality(String),
       load_capacity Float32,
       fuel_capacity Float32,
       nominal_fuel_consumption Float32,
       latitude Float32,
       longitude Float32,
       elevation Float32,
       velocity Float32,
       heading UInt8,
       grade UInt8,
       fuel_consumption Float32,
       fuel_state Float32,
       current_load Float32,
       status Float32
     )
     ENGINE =  ReplicatedMergeTree('{namespace}/freight/truck_metrics_tags', '{replica}')
     PARTITION BY toYYYYMM(time)
     ORDER BY (name, fleet, driver, model, device_version, load_capacity, fuel_capacity, nominal_fuel_consumption)" | curl 'http://<ChronusDB 用户名>:<ChronusDB 密码>@<高可用 IP>:8123/' --data-binary @-
     ```

3. 建立分布式表，以下通过创建使用物理一致分布式表为示例。

    ```shell
     $ echo "CREATE TABLE freight.truck_metrics_tags_physical_distributed
     (
       time Datetime,
       name LowCardinality(String),
       fleet LowCardinality(String),
       driver LowCardinality(String),
       model LowCardinality(String),
       device_version LowCardinality(String),
       load_capacity Float32,
       fuel_capacity Float32,
       nominal_fuel_consumption Float32,
       latitude Float32,
       longitude Float32,
       elevation Float32,
       velocity Float32,
       heading UInt8,
       grade UInt8,
       fuel_consumption Float32,
       fuel_state Float32,
       current_load Float32,
       status Float32
     )ENGINE = Distributed(physical_consistency_cluster, freight, truck_metrics_tags, rand())"| curl 'http://<ChronusDB 用户名>:<ChronusDB 密码>@<高可用 IP>:8123/' --data-binary @-
    ```

## 查询模型

1. 查询某辆货车的最新位置。

     ```bash 
     $ echo "SELECT
        name,
        driver,
        latitude,
        latitude
     FROM freight.truck_metrics_tags_physical_distributed
     WHERE name IN ('truck_3', 'truck_5', 'truck_9')
     ORDER BY time DESC
     LIMIT 1" | curl 'http://<ChronusDB 用户名>:<ChronusDB 密码>@<高可用 IP>:8123/' --data-binary @-
     ```

2. 查询每辆货车的最新位置。

     ```bash 
     $ echo "SELECT
         name,
         driver,
         longitude,
         latitude
     FROM freight.truck_metrics_tags_physical_distributed
     WHERE isNotNull(name) AND (fleet = 'South')
     ORDER BY time DESC
     LIMIT 1" | curl 'http://<ChronusDB 用户名>:<ChronusDB 密码>@<高可用 IP>:8123/' --data-binary @-
     ```

3. 查询耗油量最低的货车。

     ```bash 
     $ echo "SELECT
         name,
         driver,
         fuel_state
     FROM freight.truck_metrics_tags_physical_distributed
     WHERE isNotNull(name) AND (fuel_state < 0.1) AND (fleet = 'South')
     ORDER BY time DESC
     LIMIT 1" | curl 'http://<ChronusDB 用户名>:<ChronusDB 密码>@<高可用 IP>:8123/' --data-binary @-
     ```

4. 查询负荷超过90%的货车。
     
     ```bash 
     echo "SELECT
        name,
        driver,
        current_load
     FROM freight.truck_metrics_tags_physical_distributed
     WHERE isNotNull(name) AND ((current_load / load_capacity) > 0.9) AND (fleet = 'South')" | curl 'http://<ChronusDB 用户名>:<ChronusDB 密码>@<高可用 IP>:8123/' --data-binary @-
     ```

5. 查询10分钟内平均速度低的货车。

     ```bash 
     echo "SELECT
         name,
         driver
     FROM freight.truck_metrics_tags_physical_distributed
     WHERE (time >= '2019-01-01 00:36:22') AND (time < '2019-01-01 00:46:22') AND isNotNull(name) AND (fleet = 'West')
     GROUP BY
         name,
         driver
     HAVING avg(velocity) < 1" | curl 'http://<ChronusDB 用户名>:<ChronusDB 密码>@<高可用 IP>:8123/' --data-binary @-
     ```

6. 查询驾驶时间较长的货车：在4小时内驾驶时长超过20分钟的货车。

     ```bash 
     $ echo "SELECT
        name,
        driver,
        toStartOfInterval(time, toIntervalMinute(10)) AS ten_minutes
     FROM freight.truck_metrics_tags_physical_distributed
     WHERE (time >= '2019-01-01 00:16:22') AND (time < '2019-01-01 04:16:22') AND isNotNull(name) AND (fleet = 'West')
     GROUP BY
         name,
         driver,
         ten_minutes
     HAVING (avg(velocity) > 1) AND (count(ten_minutes) > 2)
     ORDER BY ten_minutes ASC" | curl 'http://<ChronusDB 用户名>:<ChronusDB 密码>@<高可用 IP>:8123/' --data-binary @-
     ```

7. 查询驾驶时间较长的货车:在过去24小时内行驶超过1小时的货车。

     ```bash 
     $ echo "SELECT
        name,
        driver,
        toStartOfInterval(time, toIntervalMinute(10)) AS ten_minutes
     FROM freight.truck_metrics_tags_physical_distributed
     WHERE (time >= '2019-01-01 00:16:22') AND (time < '2019-01-02 00:16:22') AND isNotNull(name) AND (fleet = 'West')
     GROUP BY
        name,
        driver,
        ten_minutes
     HAVING (avg(velocity) > 1) AND (count(ten_minutes) >= 6)" | curl 'http://<ChronusDB 用户名>:<ChronusDB 密码>@<高可用
     IP>:8123/' --data-binary @-
     ```

8. 查询每支车队的平均油耗与预计油耗之比。

     ```bash 
     $ echo "SELECT
        fleet,
        avg(fuel_consumption) AS avg_fuel_consumption,
        avg(nominal_fuel_consumption) AS projected_fuel_consumption
     FROM freight.truck_metrics_tags_physical_distributed
     WHERE isNotNull(fleet) AND isNotNull(nominal_fuel_consumption) AND isNotNull(name) AND (velocity > 1)
     GROUP BY fleet" | curl 'http://<ChronusDB 用户名>:<ChronusDB 密码>@<高可用 IP>:8123/' --data-binary @-
     ```

9. 查询每天驾驶时间的平均值。

     ```bash 
     $ echo "SELECT
        fleet,
        name,
        driver,
        toStartOfInterval(time, toIntervalHour(24)) AS day
     FROM freight.truck_metrics_tags_physical_distributed
     ROUP BY
        day,
        fleet,
        name,
        driver
     HAVING avg(velocity) > 1" | curl 'http://<ChronusDB 用户名>:<ChronusDB 密码>@<高可用 IP>:8123/' --data-binary @-
     ```

10. 查询每辆货车每车队的平均负荷。

     ```bash 
     $ echo "SELECT
        fleet,
        model,
        load_capacity,
        avg(current_load) / load_capacity AS load_percentage
     FROM freight.truck_metrics_tags_physical_distributed
     WHERE isNotNull(fleet) AND isNotNull(model) AND isNotNull(load_capacity)
     GROUP BY
        fleet,
        model,
        load_capacity" | curl 'http://<ChronusDB 用户名>:<ChronusDB 密码>@<高可用 IP>:8123/' --data-binary @-
     ```

## 性能调测

测试数据量 10 亿行。

### 写入性能测试结果

每次插入 100 万行，写入时间结果。

| bulk rows | per bulk time | sum rows | sum time | partition disk used |
|:--|:--|:--|:--|:--|
| 1 Millon | 5.48436 s | 1 Billon | 5484.36 s | 24GB |

### 查询性能测试结果

物理一致分布查询耗时结果。

| 查询模型 | 查询耗时 |
|:--|:--|
| 某辆货车的最新位置      | 5.249s |
| 每辆货车的最新位置      | 10.496s |
| 耗油量最低的货车        | 4.322s |
| 负荷超过90%的货车       | 26.461s |
| 10分钟内平均速度低的货车 | 0.013s |
| 驾驶时间较长的货车:在4小时内驾驶时长超过20分钟 | 0.017s |
| 驾驶时间较长的货车:在过去24小时内行驶超过1小时 | 0.022s |
| 每支车队的平均油耗与预计油耗之比 | 7.057s |
| 每天驾驶时间的平均值 | 5.156s |
| 每辆货车每车队的平均负荷 | 2.999s |
