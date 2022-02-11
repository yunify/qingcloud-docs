---
title: "云监控指标"
description: 本小节主要介绍 Redis Standalone 主要支持的监控指标。 
keyword: 监控指标,键值数据库,Redis,Redis Standalone,数据库
weight: 10
collapsible: false
draft: false
---

Redis Standalone 提供集群服务和资源性能监控指标和告警信息。

- 服务监控指标统计了 Redis Standalone 中的相关信息，可用于定位分析数据库的性能。

- 资源监控指标统计了云服务器的资源信息，如 CPU 使用率、硬盘 IOPS 情况等，可用于查看系统性能是否到达瓶颈。

> **注意**
> 
> Redis Standalone 集群 Agent 只用于监控集群的服务和资源指标，不会收除集除监控指标外的其它数据。

## 支持的服务监控指标

|  <span style="display:inline-block;width:200px">监控项</span> | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> |  <span style="display:inline-block;width:320px">指标含义</span>  |
|:--- |:--- |:--- |:--- |
| 节点角色           | 5分钟    | -       | 统计节点实际角色变化情况。<li>`master` 表示主节点。<li>`slave` 表示从节点/副本。 |
| 副本节点状态       | 5分钟    | -       | 统计副本节点是否指向预期的主节点。<li>`true` 表示正确指向。<li>`flase` 表示未正确指向。<li>若当前节点为主节点，则统计值应永远为 `true`。 |
| 主从复制落后字节数 | 5分钟    | Byte    | 统计副本复制主节点数据过程中，比主节点落后的字节数。         |
| REDIS内存使用率    | 5分钟    | %       | 统计节点内存使用率，包括内存使用率最大值、内存使用率最小值和内存使用率平均值。 |
| 操作数             | 5分钟    | counts  | 使用 Get 操作、Set 操作、Key 类型及 String 类型相关命令的次数。 |
| 操作数 II          | 5分钟    | counts  | 使用 Set 类型 、Sorted Set 类型、List 类型和 Hash 类型相关命令的次数。 |
| 客户端连接数       | 5分钟    | counts  | 统计客户端连接数最大值、最小值及平均值。                     |
| 连接数             | 5分钟    | counts  | 统计总计连接数。                                             |
| 键的数量           | 5分钟    | counts  | 统计被拒绝的 Key 个数、过期的 Key 个数及 Key 的总数。        |
| 查询命中数         | 5分钟    | counts  | 统计查询命中次数及查询未命中次数。                           |
| 命中率             | 5分钟    | %       | 统计命中率最大值、最小值及平均值。                           |
| QPS                | 5分钟    | count/s | 每秒访问数。                                                     |
| KEYS 监控组        | 5分钟    | counts  | Keys 命令族各命令操作次数。  <li>仅 Redis 6.* 版本支持该监控项。|
| STRINGS 监控组     | 5分钟    | counts  | Strings 命令族各命令操作次数。 <li>仅 Redis 6.* 版本支持该监控项。|
| HASHES 监控组      | 5分钟    | counts  | Hashes 命令族各命令操作次数。  <li>仅 Redis 6.* 版本支持该监控项。|
| LISTS 监控组       | 5分钟    | counts  | Lists 命令族各命令操作次数。    <li>仅 Redis 6.* 版本支持该监控项。|
| SET 监控组         | 5分钟    | counts  | Sets 命令族各命令操作次数。      <li>仅 Redis 6.* 版本支持该监控项。|
| ZSET 监控组        | 5分钟    | counts  | Sorted Sets 命令族各命令操作次数。 <li>仅 Redis 6.* 版本支持该监控项。 |
| HYPERLOG 监控组    | 5分钟    | counts  | HyperLogLog 命令族各命令操作次数。 <li>仅 Redis 6.* 版本支持该监控项。 |
| PUBSUB 监控组      | 5分钟    | counts  | Pub 及 Sub 命令族各命令操作次数。   <li>仅 Redis 6.* 版本支持该监控项。 |
| TRANSACTION 监控组 | 5分钟    | counts  | Transaction 命令族各命令操作次数。  <li>仅 Redis 6.* 版本支持该监控项。|
| SCRIPT 监控组      | 5分钟    | counts  | Sripting 命令族各命令操作次数。      <li>仅 Redis 6.* 版本支持该监控项。 |

## 支持的资源监控指标

| 监控项 | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> | 指标含义 |
|:--- |:--- |:--- |:--- |
| CPU | 5分钟 | % | 统计当前资源 CPU 使用率。<br>以 % 为单位。 |
| 内存 | 5分钟 | % | 统计当前资源内存使用率。<br>以 % 为单位。 |
| 硬盘使用率 | 5分钟 | % | 统计当前资源硬盘使用率。<br>以 % 为单位。 |
| 硬盘 IOPS | 5分钟 | counts/s | 统计每秒资源硬盘 IOPS 读取或写入次数，可分别查看读取或写入监控指标。<br>以次每秒为单位。 |
| 硬盘吞吐量 | 5分钟 | MByte/s | 统计每秒资源硬盘读取或写入速率，可分表获取读取或写入速率。<br>以 MByte 每秒为单位。 |
