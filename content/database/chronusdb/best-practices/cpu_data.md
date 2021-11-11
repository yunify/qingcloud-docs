---
title: "基础设施 CPU 数据收集分析"
description: 本小节主要介绍 QingCloud ChronuDB 在基础设施 CPU 数据收集和分析的应用。 
keywords: chronusdb 数据收集,数据分析,cpu 数据 
weight: 20
collapsible: false
draft: false
---

随着业务稳定性和重要性的逐步提升，需要收集的基础设施监控项愈发精细，导致监控数据几何级暴增。为解决暴增数据的存储问题，监控数据的随时间变化的规律，ChronusDB 分布式时序数据库应运而生。

本小节主要介绍 ChronusDB 如何存储基础设施的 CPU 监控数据，以及如何对其进行分析。

## 数据库建模

1. 建立监控数据库。

   ```bash
   $ echo "CREATE DATABASE monitor" | curl 'http://ChronusDB用户名:ChronusDB密码@高可用IP:8123/' --data-binary @-
   ```

2. 建立CPU监控表，表中主要包含时间、云服务器名、CPU 型号等标签信息和 CPU 常见监控指标。

   ```bash
   $ echo "CREATE TABLE monitor.cpu_tags_metrics
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
   ```

3. 建立分布式表，以下示例用逻辑一致分布方式。
   
   ```bash
     $ echo "CREATE TABLE monitor.  
       cpu_tags_metrics_logical_distributed
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

1. 指定五个云服务器，查询八小时内所有CPU指标的最大值。

    ```bash
     $ echo "SELECT
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
     FROM monitor.   cpu_tags_metrics_logical_distributed
     WHERE (hostname IN ('host_9', 'host_5', 'host_1', 'host_7', 'host_2')) AND (time >= '2019-01-01 00:17:45') AND (time < '2019-01-01 08:17:45')
     GROUP BY hour
     ORDER BY hour ASC" | curl 'http://<ChronusDB用户名>:<ChronusDB密码>@<高可用IP>:8123/'  --data-binary @-
     ```

2. 查询12小时内，所有云服务器 5 个 CPU 指标的平均值。

     ```bash
     $ echo "SELECT
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
        hostname ASC" | curl 'http://<ChronusDB用户名>:<ChronusDB密码>@<高可用IP>:8123/' --data-binary @-
     ```

3. 查询某时刻前五分钟 CPU `usage_user` 的最大值。
    
     ```bash
     $ echo "SELECT
       toStartOfMinute(time) AS minute,
        max(usage_user)
     FROM monitor.cpu_tags_metrics_logical_distributed
     WHERE time < '2019-01-01 01:16:22'
     GROUP BY minute
     ORDER BY minute DESC
     LIMIT 5" | curl 'http://<ChronusDB用户名>:<ChronusDB密码>@<高可用IP>:8123/' --data-binary @-
     ```

4. 查询一定时段内，所有云服务器 CPU 过载情况。

    ```bash
     $ echo "SELECT *
     FROM monitor.cpu_tags_metrics_logical_distributed
     PREWHERE (usage_user > 90.) AND (time >= '2019-01-01 00:16:22') AND (time < '2019-01-01 12:16:22')" | curl 'http://<ChronusDB用户名>:<ChronusDB密码>@<高可用IP>:8123/' --data-binary @-
     ```

5. 查询一定时段内，某些云服务器 CPU 过载情况。

    ```bash
     $ echo "SELECT *
     FROM monitor.cpu_tags_metrics_logical_distributed
     PREWHERE (usage_user > 90.) AND (time >= '2019-01-01 00:08:59') AND (time < '2019-01-01 12:08:59') AND (hostname IN ('host_9', 'host_5', 'host_1', 'host_7', 'host_2'))" | curl 'http://<ChronusDB用户名>:<ChronusDB密码>@<高可用IP>:8123/' --data-binary @-
     ```

6. 查询每台云服务器最近的监控记录。

    ```bash
     $ echo "SELECT DISTINCT
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
     FROM monitor. cpu_tags_metrics_logical_distributed
     ORDER BY
        hostname ASC,
        time DESC" | curl 'http://<ChronusDB用户名>:<ChronusDB密码>@<高可用IP>:8123/' --data-binary @-
    ```

7. 查询某台云服务器 CPU 在指定时段内，每分钟 `usage_user` 的最大值。
    
    ```bash
     $ echo "SELECT
        toStartOfMinute(time) AS minute,
        max(usage_user) AS max_usage_user
     FROM monitor.cpu_tags_metrics_logical_distributed
     WHERE (hostname = 'host_9') AND (time >= '2019-01-01 01:09:26') AND (time < '2019-01-01 01:09:27')
     GROUP BY minute
     ORDER BY minute ASC" | curl 'http://<ChronusDB用户名>:<ChronusDB密码>@<高可用IP>:8123/' --data-binary @-
    ```

## 性能调试

测试数据量 10 亿行。

### 写入性能测试结果

每次插入 100 万行，写入时间结果。

| bulk rows | per bulk time | sum rows | sum time | partition disk used |
|:--|:--|:--|:--|:--|
| 1 Millon | 8.96519 s | 1 Billon | 8965.19 s | 33GB |

### 查询性能测试结果

逻辑一致分布式查询耗时结果。

| 查询模型 | 查询耗时 |
|:--|:--|
| 指定五个云服务器，查询八小时内所有CPU指标的最大值 | 0.06s |
| 12小时内，所有云服务器 5 个 CPU 指标的平均值 | 0.071s |
| 获取某时刻前五分钟 CPU `usage_user` 的最大值 | 0.017s |
| 一定时段内，所有云服务器 CPU 过载情况 | 9.315s |
| 一定时段内，某些云服务器 CPU 过载情况 | 0.06s |
| 每台云服务器最近的监控记录 | 36s |
| 某台云服务器 CPU 在指定时段内，每分钟 `usage_user` 的最大值 | 0.12s |
