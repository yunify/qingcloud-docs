---
title: "监控指标说明"
description: 本小节介绍如何 Redis 支持的监控指标。 
weight: 1
draft: false
keywords: QingCloud，Redis Cluster，监控，告警，指标
---

Redis Cluster 提供集群服务和资源性能监控数据。

## 服务监控指标

| 监控项             | 监控周期 | 单位    | 指标含义                                                     | 支持版本                              |
| ------------------ | -------- | ------- | ------------------------------------------------------------ | ------------------------------------- |
| 节点角色           | 5分钟    | -       | 统计节点实际角色变化情况。master 表示主节点，slave 表示从节点/副本。 | Redis 5.0.\*、Redis 6.*               |
| 副本节点状态       | 5分钟    | -       | 统计副本节点是否指向预期的主节点。true 表示正确指向，flase 表示未正确指向。若当前节点为主节点，则统计值应永远为 true。 | Redis 5.0.\*、Redis 6.*               |
| 主从复制落后字节数 | 5分钟    | Byte    | 统计副本复制主节点数据过程中，比主节点落后的字节数。         | Redis 5.0.\*、Redis 6.*               |
| REDIS内存使用率    | 5分钟    | %       | 统计节点内存使用率，包括内存使用率最大值、内存使用率最小值和内存使用率平均值。 | Redis 4.0.\*、Redis 5.0.\*、Redis 6.* |
| 操作数             | 5分钟    | counts  | 使用 Get 操作、Set 操作、Key 类型及 String 类型相关命令的次数。 | Redis 4.0.\*、Redis 5.0.\*、          |
| 操作数 II          | 5分钟    | counts  | 使用 Set 类型 、Sorted Set 类型、List 类型和 Hash 类型相关命令的次数。 | Redis 4.0.\*、Redis 5.0.\*、          |
| 客户端连接数       | 5分钟    | counts  | 统计客户端连接数最大值、最小值及平均值。                     | Redis 4.0.\*、Redis 5.0.\*、Redis 6.* |
| 连接数             | 5分钟    | counts  | 统计总计连接数。                                             | Redis 4.0.\*、Redis 5.0.\*、Redis 6.* |
| 键的数量           | 5分钟    | counts  | 统计被拒绝的 Key 个数、过期的 Key 个数及 Key 的总数。        | Redis 4.0.\*、Redis 5.0.\*、Redis 6.* |
| 查询命中数         | 5分钟    | counts  | 统计查询命中次数及查询未命中次数。                           | Redis 4.0.\*、Redis 5.0.\*、Redis 6.* |
| 命中率             | 5分钟    | %       | 统计命中率最大值、最小值及平均值。                           | Redis 4.0.\*、Redis 5.0.\*、Redis 6.* |
| QPS                | 5分钟    | count/s | 每秒访问                                                     | Redis 6.*                             |
| KEYS 监控组        | 5分钟    | counts  | Keys 命令族各命令操作次数。                                  | Redis 6.*                             |
| STRINGS 监控组     | 5分钟    | counts  | Strings 命令族各命令操作次数。                               | Redis 6.*                             |
| HASHES 监控组      | 5分钟    | counts  | Hashes 命令族各命令操作次数。                                | Redis 6.*                             |
| LISTS 监控组       | 5分钟    | counts  | Lists 命令族各命令操作次数。                                 | Redis 6.*                             |
| SET 监控组         | 5分钟    | counts  | Sets 命令族各命令操作次数。                                  | Redis 6.*                             |
| ZSET 监控组        | 5分钟    | counts  | Sorted Sets 命令族各命令操作次数。                           | Redis 6.*                             |
| HYPERLOG 监控组    | 5分钟    | counts  | HyperLogLog 命令族各命令操作次数。                           | Redis 6.*                             |
| PUBSUB 监控组      | 5分钟    | counts  | Pub 及 Sub 命令族各命令操作次数。                            | Redis 6.*                             |
| TRANSACTION 监控组 | 5分钟    | counts  | Transaction 命令族各命令操作次数。                           | Redis 6.*                             |
| SCRIPT 监控组      | 5分钟    | counts  | Sripting 命令族各命令操作次数。                              | Redis 6.*                             |



## 资源监控指标

| 监控项     | 监控周期 | 单位   | 指标含义                                                     |
| :--------- | :------- | :----- | :----------------------------------------------------------- |
| CPU        | 5分钟    | %      | 统计当前资源 CPU 使用率。                                    |
| 内存       | 5分钟    | %      | 统计当前资源内存使用率。                                     |
| 硬盘使用率 | 5分钟    | %      | 统计当前资源硬盘使用率。                                     |
| 硬盘 IOPS  | 5分钟    | counts | 统计每秒硬盘的读取或写入次数，可分别查看读取或写入监控指标。 |
| 硬盘吞吐量 | 5分钟    | KB/s   | 统计每秒资源硬盘读取或写入速率，可分表获取读取或写入速率。   |
