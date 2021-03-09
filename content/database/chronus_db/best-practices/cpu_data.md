---
title: "基础设施 CPU 数据收集分析"
description: Test description
weight: 5
---

随着业务稳定性和重要性的逐步提升，需要收集的基础设施监控项愈发精细，导致监控数据几何级暴增。如何存储这些暴增的数据成为了运维人员最头疼的问题。

幸运的是，监控数据是有规律的，是随着时间不断变化的。因此，这些庞大数据同样可以通过 ChronusDB 分布式时序数据库进行存储。下面的示例展示了 ChronusDB 如何存储基础设施的 CPU 监控数据并对其进行分析。

## 数据库建模

```bash
# 建立监控数据库

echo "CREATE DATABASE monitor" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-

# 建立CPU监控表，表中主要包含时间，主机名，CPU 型号等标签信息和 CPU 常见监控指标

echo "CREATE TABLE monitor.cpu_tags_metrics
(
    time DateTime DEFAULT now(),
    hostname LowCardinality(String),
    region LowCardinality(String),
    datacenter LowCardinality(String),
    rack LowCardinality(String),
    os LowCardinality(String),
    arch LowCardinality(String),
    team LowCardinality(String),
    service LowCardinality(String),
    service_version LowCardinality(String),
    service_environment LowCardinality(String),
    usage_user Nullable(Float64),
    usage_system Nullable(Float64),
    usage_idle Nullable(Float64),
    usage_nice Nullable(Float64),
    usage_iowait Nullable(Float64),
    usage_irq Nullable(Float64),
    usage_softirq Nullable(Float64),
    usage_steal Nullable(Float64),
    usage_guest Nullable(Float64),
    usage_guest_nice Nullable(Float64)
)
ENGINE = MergeTree()
PARTITION BY toYYYYMM(time)
ORDER BY (hostname, region, datacenter, rack, os, arch, team, service, service_version, service_environment)" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-

# 建立分布式表(本示例使用逻辑一致分布)
echo "CREATE TABLE monitor.cpu_tags_metrics_logical_distributed
(
    time DateTime DEFAULT now(),
    hostname LowCardinality(String),
    region LowCardinality(String),
    datacenter LowCardinality(String),
    rack LowCardinality(String),
    os LowCardinality(String),
    arch LowCardinality(String),
    team LowCardinality(String),
    service LowCardinality(String),
    service_version LowCardinality(String),
    service_environment LowCardinality(String),
    usage_user Nullable(Float64),
    usage_system Nullable(Float64),
    usage_idle Nullable(Float64),
    usage_nice Nullable(Float64),
    usage_iowait Nullable(Float64),
    usage_irq Nullable(Float64),
    usage_softirq Nullable(Float64),
    usage_steal Nullable(Float64),
    usage_guest Nullable(Float64),
    usage_guest_nice Nullable(Float64)
)
ENGINE = Distributed(logical_consistency_cluster, monitor, cpu_tags_metrics, rand())"| curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-
```

## 查询模型

```bash
# 指定五个主机，查询八小时内所有CPU指标的最大值

echo "SELECT
    toStartOfHour(time) AS hour,
    max(usage_user) AS max_usage_user,
    max(usage_system) AS max_usage_system,
    max(usage_idle) AS max_usage_idle,
    max(usage_nice) AS max_usage_nice,
    max(usage_iowait) AS max_usage_iowait,
    max(usage_irq) AS max_usage_irq,
    max(usage_softirq) AS max_usage_softirq,
    max(usage_steal) AS max_usage_steal,
    max(usage_guest) AS max_usage_guest,
    max(usage_guest_nice) AS max_usage_guest_nice
FROM monitor.cpu_tags_metrics_logical_distributed
WHERE (hostname IN ('host_9', 'host_5', 'host_1', 'host_7', 'host_2')) AND (time >= '2019-01-01 00:17:45') AND (time < '2019-01-01 08:17:45')
GROUP BY hour
ORDER BY hour ASC" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-

# 12小时内，所有主机 5 个 CPU 指标的平均值

echo "SELECT
    toStartOfHour(time) AS hour,
    avg(usage_user) AS mean_usage_user,
    avg(usage_system) AS mean_usage_system,
    avg(usage_idle) AS mean_usage_idle,
    avg(usage_nice) AS mean_usage_nice,
    avg(usage_iowait) AS mean_usage_iowait
FROM monitor.cpu_tags_metrics_logical_distributed
WHERE (time >= '1970-01-01 00:54:10') AND (time < '1970-01-01 12:54:10')
GROUP BY
    hour,
    hostname
ORDER BY
    hour ASC,
    hostname ASC" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-

# 获取某时刻（2019-01-01T01:16:22）前五分钟 CPU usage_user 的最大值

echo "SELECT
    toStartOfMinute(time) AS minute,
    max(usage_user)
FROM monitor.cpu_tags_metrics_logical_distributed
WHERE time < '2019-01-01 01:16:22'
GROUP BY minute
ORDER BY minute DESC
LIMIT 5" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-

# 一定时段内，所有主机 CPU 过载情况

echo "SELECT *
FROM monitor.cpu_tags_metrics_logical_distributed
PREWHERE (usage_user > 90.) AND (time >= '2019-01-01 00:16:22') AND (time < '2019-01-01 12:16:22')" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-

# 一定时段内，某些主机 CPU 过载情况

echo "SELECT *
FROM monitor.cpu_tags_metrics_logical_distributed
PREWHERE (usage_user > 90.) AND (time >= '2019-01-01 00:08:59') AND (time < '2019-01-01 12:08:59') AND (hostname IN ('host_9', 'host_5', 'host_1', 'host_7', 'host_2'))" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-

# 每台主机最近的监控记录

echo "SELECT DISTINCT
    hostname,
    usage_user,
    usage_system,
    usage_idle,
    usage_nice,
    usage_iowait,
    usage_irq,
    usage_softirq,
    usage_steal,
    usage_guest,
    usage_guest_nice
FROM monitor.cpu_tags_metrics_logical_distributed
ORDER BY
    hostname ASC,
    time DESC" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-

# 某台主机 CPU 在指定时段内，每分钟 usage_user 的最大值

echo "SELECT
    toStartOfMinute(time) AS minute,
    max(usage_user) AS max_usage_user
FROM monitor.cpu_tags_metrics_logical_distributed
WHERE (hostname = 'host_9') AND (time >= '2019-01-01 01:09:26') AND (time < '2019-01-01 01:09:27')
GROUP BY minute
ORDER BY minute ASC" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-

```

## 性能测试

数据量:10 亿行

* 写入性能测试结果

> 每次插入：100 万行
>
> | bulk rows | per bulk time | sum rows | sum time | partition disk used |
> |:--:|:--:|:--:|:--:|:--:|
> | 1 Millon | 8.96519 s | 1 Billon | 8965.19 s | 33GB |

* 查询性能测试结果

> * 逻辑一致分布查询耗时：
>
> | 查询模型 | 查询耗时 |
> |:--|--:|
> | 指定五个主机，查询八小时内所有CPU指标的最大值 | 0.06s |
> | 12小时内，所有主机 5 个 CPU 指标的平均值 | 0.071s |
> | 获取某时刻前五分钟 CPU usage_user 的最大值 | 0.017s |
> | 一定时段内，所有主机 CPU 过载情况 | 9.315s |
> | 一定时段内，某些主机 CPU 过载情况 | 0.06s |
> | 每台主机最近的监控记录 | 36s |
> | 某台主机 CPU 在指定时段内，每分钟 usage_user 的最大值 | 0.12s |
