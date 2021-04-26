---
title: "货车数据采集分析"
description: Test description
weight: 7
---

公路货物运输是现代运输主要方式之一，也是陆上货物运输的两个基本运输方式之一。在整个运输领域占有重要地位，并发挥着越来越重要的作用。巨大的机遇同时也带了挑战，如何实时了解货车情况防止运输的高成本，如何获悉货车运输损耗及时进行故障检查都成了运输领域需要面临和解决的问题。

如果我们将车载设备联网，实时记录并发送货车信息和货车的位置，油耗等数据，通过相关数据分析，可以轻松得到某辆货车的运输情况以及是否存在潜藏隐患。下面的示例展示了 ChronusDB 如何存储货车的行驶数据并对其进行分析。

![ChronusDB与物联网](../../_images/chronusdb_IoT.png)

## 数据库建模

```shell
# 建立运输数据库

echo "CREATE DATABASE freight" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-

# 建立货车信息表，包含货车车队、司机、型号、设备信息、负载能力、油耗能力、正常燃油消耗指标，和经度、维度、高度、年级、实际油耗这些监控项

echo "CREATE TABLE freight.truck_metrics_tags
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
ORDER BY (name, fleet, driver, model, device_version, load_capacity, fuel_capacity, nominal_fuel_consumption)" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-

# 建立分布式表(本示例使用物理一致分布)
echo "CREATE TABLE freight.truck_metrics_tags_physical_distributed
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
)ENGINE = Distributed(physical_consistency_cluster, freight, truck_metrics_tags, rand())"| curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-
```

## 查询模型

```bash
# 某辆货车的最新位置

echo "SELECT
    name,
    driver,
    latitude,
    latitude
FROM freight.truck_metrics_tags_physical_distributed
WHERE name IN ('truck_3', 'truck_5', 'truck_9')
ORDER BY time DESC
LIMIT 1" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-

# 每辆货车的最新位置

echo "SELECT
    name,
    driver,
    longitude,
    latitude
FROM freight.truck_metrics_tags_physical_distributed
WHERE isNotNull(name) AND (fleet = 'South')
ORDER BY time DESC
LIMIT 1" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-

# 耗油量最低的货车

echo "SELECT
    name,
    driver,
    fuel_state
FROM freight.truck_metrics_tags_physical_distributed
WHERE isNotNull(name) AND (fuel_state < 0.1) AND (fleet = 'South')
ORDER BY time DESC
LIMIT 1" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-

# 负荷超过90%的货车

echo "SELECT
    name,
    driver,
    current_load
FROM freight.truck_metrics_tags_physical_distributed
WHERE isNotNull(name) AND ((current_load / load_capacity) > 0.9) AND (fleet = 'South')" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-

# 10分钟内平均速度低的货车

echo "SELECT
    name,
    driver
FROM freight.truck_metrics_tags_physical_distributed
WHERE (time >= '2019-01-01 00:36:22') AND (time < '2019-01-01 00:46:22') AND isNotNull(name) AND (fleet = 'West')
GROUP BY
    name,
    driver
HAVING avg(velocity) < 1" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-

# 驾驶时间较长的货车:在4小时内驾驶时长超过20分钟

echo "SELECT
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
ORDER BY ten_minutes ASC" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-

# 驾驶时间较长的货车:在过去24小时内行驶超过1小时

echo "SELECT
    name,
    driver,
    toStartOfInterval(time, toIntervalMinute(10)) AS ten_minutes
FROM freight.truck_metrics_tags_physical_distributed
WHERE (time >= '2019-01-01 00:16:22') AND (time < '2019-01-02 00:16:22') AND isNotNull(name) AND (fleet = 'West')
GROUP BY
    name,
    driver,
    ten_minutes
HAVING (avg(velocity) > 1) AND (count(ten_minutes) >= 6)" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-


# 每支车队的平均油耗与预计油耗之比

echo "SELECT
    fleet,
    avg(fuel_consumption) AS avg_fuel_consumption,
    avg(nominal_fuel_consumption) AS projected_fuel_consumption
FROM freight.truck_metrics_tags_physical_distributed
WHERE isNotNull(fleet) AND isNotNull(nominal_fuel_consumption) AND isNotNull(name) AND (velocity > 1)
GROUP BY fleet" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-


# 每天驾驶时间的平均值

echo "SELECT
    fleet,
    name,
    driver,
    toStartOfInterval(time, toIntervalHour(24)) AS day
FROM freight.truck_metrics_tags_physical_distributed
GROUP BY
    day,
    fleet,
    name,
    driver
HAVING avg(velocity) > 1" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-

# 每辆货车每车队的平均负荷

echo "SELECT
    fleet,
    model,
    load_capacity,
    avg(current_load) / load_capacity AS load_percentage
FROM freight.truck_metrics_tags_physical_distributed
WHERE isNotNull(fleet) AND isNotNull(model) AND isNotNull(load_capacity)
GROUP BY
    fleet,
    model,
    load_capacity" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-

```

## 性能测试

数据量:10 亿行

* 写入性能测试结果

> 每次插入：100 万行
>
> | bulk rows | per bulk time | sum rows | sum time | partition disk used |
> |:--:|:--:|:--:|:--:|:--:|
> | 1 Millon | 5.48436 s | 1 Billon | 5484.36 s | 24GB |


* 查询性能测试结果

> * 物理一致分布查询耗时：
>
> | 查询模型 | 查询耗时 |
> |:--|--:|
> | 某辆货车的最新位置      | 5.249s |
> | 每辆货车的最新位置      | 10.496s |
> | 耗油量最低的货车        | 4.322s |
> | 负荷超过90%的货车       | 26.461s |
> | 10分钟内平均速度低的货车 | 0.013s |
> | 驾驶时间较长的货车:在4小时内驾驶时长超过20分钟 | 0.017s |
> | 驾驶时间较长的货车:在过去24小时内行驶超过1小时 | 0.022s |
> | 每支车队的平均油耗与预计油耗之比 | 7.057s |
> | 每天驾驶时间的平均值 | 5.156s |
> | 每辆货车每车队的平均负荷 | 2.999s |
>

