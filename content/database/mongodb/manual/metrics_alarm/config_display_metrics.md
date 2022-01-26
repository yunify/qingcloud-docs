---
title: "监控指标"
description: 本小节主要介绍 MongoDB 主要支持的监控指标。 
keyword: 监控指标,MongoDB,文档数据库,数据库
weight: 10
collapsible: false
draft: false
---

MongoDB 提供集群服务和资源性能监控指标和告警信息。

- 服务监控指标统计了集群和服务的健康状态信息，可用于定位分析服务的性能。
- 资源监控指标统计了云服务器的资源信息，如 CPU 使用率、硬盘 IOPS 情况等，可用于查看系统性能是否到达瓶颈。

> **注意**
> 
> MongoDB 集群 Agent 只用于监控集群的服务和资源指标，不会收除集除监控指标外的其它数据。

## 支持的服务监控指标

|  <span style="display:inline-block;width:200px">监控项</span> | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> |  <span style="display:inline-block;width:320px">指标含义</span>  |
|:--- |:--- |:--- |:--- |
| 操作数 | 5分钟 | counts | 统计 OPCOUNTERS 命令操作次数。<li>`op.insert` 表示 insert 操作次数。<li>`op.query` 表示 query 操作次数。 <li>`op.update` 表示 update 操作次数。<li>`op.delete` 表示 delete 操作次数。<li>`op.getmore` 表示 getmore 操作次数。|
| 复制操作数 | 5分钟 | counts | 统计副本集环境 OPCOUNTERSREPL 命令操作次数。<li>`opRepl.insert` 表示副本集环境 insert 操作次数。<li>`opRepl.query` 表示副本集环境 query 操作次数。 <li>`opRepl.update` 表示副本集环境 update 操作次数。<li>`opRepl.delete` 表示副本集环境 delete 操作次数。<li>`opRepl.getmore` 表示副本集环境 getmore 操作次数。|
| 连接数| 5分钟 | counts | 统计数据库连接数。<li>`当前连接数` 表示当前连接数量。<li>`可用连接数` 表示可用的连接数。 <li>`总共连接数变化值` 表示创建的总连接数量。|
| METRICS-CURSOR | 5分钟 | counts | 统计数据库游标数量。<li>`cursor-timedOut ` 表示超时游标数量。<li>`cursor-open-noTimeout` 表示防止超时打开的游标数量。 <li>`cursor-open-pinned` 表示打开的游标数量。<li>`cursor-open-total` 表示打开游标的总数量。|
| 流量进出状态 | 5分钟 | MB | 统计数据库网卡接/发数据量。<li>`进口流量` 表示网卡接收的数据量。<li>`出口流量` 表示网卡发送的数据量。|
| WIREDTIGER TRANSACTIONS 状态 | 5分钟 | counts | 统计数据库并发事物数量。<li>`WT-write-out` 表示当前并发写操作数。<li>`WT-write-available` 表示当前可用并发写操作数。<li>`WT-read-out` 表示当前并发读操作数。<li>`WT-read-available` 表示当前可用并发读操作数。|
| 主备延迟 REPL-LAG| 5分钟 | 分钟 | 统计备库与主库执行同一事务完成时间的差值。|
| 连接数使用率 CONN-USAGE| 5分钟 | % | 统计当前数据库活跃连接数与总连接数的比值。 |
| 操作详情 METRICS-OPERATION | 5分钟 | counts | 统计数据库详细查询和写操作次数。<li>`scanAndOrder` 表示无法使用索引排序的查询总次数。<li>`writeConflicts ` 表示写冲突数。|
| WIREDTIGER 内存状态 | 5分钟 | % | 统计 wiredTiger 缓存使用率。<li>`wiredTiger-cache-usage` 表示 wiredTiger 缓存使用率。<li>`wiredTiger-cache-dirty-usage` 表示 wiredTiger 缓存中脏数据率。|
| 影响文档数量 METRICS-DOCUMENT | 5分钟 | counts| 统计数据库文档数量。<li>`doc-deleted` 表示删除的文档数量。<li>`doc-inserted` 表示新插入的文档数量。<li>`doc-returned` 表示回退的文档数量。<li>`doc-updated` 表示更新的文档数量。|
| 扫描文档和索引数量 METRICS-QUERYEXECUTOR | 5分钟 | counts| 统计数据库扫描文档和索引数量。<li>`scannedKeys` 表示查询和查询计划评估期间扫描的索引项的总数。<li>`scannedDocs` 表示扫描的文档总数。|
| TTL   | 5分钟 | counts | 统计执行 TTL 操作的次数 。<li>`deletedDocuments` 表示使用 TTL 索引从集合中删除的文档总数。<li>`passes` 表示后台进程从具有 TTL 索引的集合中删除文档的次数。 |
| 全局锁-活跃客户端 GLOBALLOCK 请求状态   | 5分钟 | counts | 统计活跃客户端操作的次数。<li>`clients-total ` 表示活跃的客户端总数量。<li>`clients-readers` 表示活跃的读客户端数量。 <li>`clients-writers` 表示活跃的写客户端数量。|
| 全局锁-当前列队 GLOBALLOCK 队列状态   | 5分钟 | counts | 统计当前队列由于锁排队的操作数。<li>`queue-total` 表示由于锁定而排队的操作数。<li>`queue-readers` 表示由于读锁定而排队的操作数。<li>`queue-writers` 表示由于写锁定而排队的操作数。 |

## 支持的资源监控指标

| 监控项 | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> | 指标含义 |
|:--- |:--- |:--- |:--- |
| CPU | 5分钟 | % | 统计当前资源 CPU 使用率。<br>以 % 为单位。 |
| 内存 | 5分钟 | % | 统计当前资源内存使用率。<br>以 % 为单位。 |
| 硬盘使用率 | 5分钟 | % | 统计当前资源硬盘使用率。<br>以 % 为单位。 |
| 硬盘 IOPS | 5分钟 | counts/s | 统计每秒资源硬盘 IOPS 读取或写入次数，可分别查看读取或写入监控指标。<br>以次每秒为单位。 |
| 硬盘吞吐量 | 5分钟 | MByte/s | 统计每秒资源硬盘读取或写入速率，可分表获取读取或写入速率。<br>以 MByte 每秒为单位。 |
