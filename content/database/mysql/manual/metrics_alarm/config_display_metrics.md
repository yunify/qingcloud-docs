---
title: "监控指标"
description: 本小节主要介绍 MySQL Plus 主要支持哪些监控指标。 
keyword: 数据库,MySQL PLus,关系型数据库,MySQL,监控指标
weight: 10
collapsible: false
draft: false
---

MySQL Plus 提供集群服务和资源性能监控指标和告警信息。
- 服务监控指标统计了 `SHOW GLOBAL STATUS` 中的信息，可用于定位分析数据库的性能。
- 资源监控指标统计了云服务器的资源信息，如 CPU 使用率、硬盘 IOPS 情况等，可用于查看系统性能是否到达瓶颈。

> 注意：
> 
> MySQL Plus 集群 Agent 只用于监控集群的服务和资源指标，不会收除集除监控指标外的其它数据。

## 支持的服务监控指标

| <span style="display:inline-block;width:200px">监控项</span> | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> | <span style="display:inline-block;width:320px">指标含义</span> |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :-------------------------------------------------------- | :----------------------------------------------------------- |
| 提交事务数                                                   | 5分钟                                                        | counts                                                    | 统计当前提交事务操作的次数。<br>以次为单位。                 |
| 慢查询                                                       | 5分钟                                                        | counts                                                    | 统计当前慢查询操作的次数。<br>以次为单位。                   |
| 全表扫描                                                     | 5分钟                                                        | counts                                                    | 统计当前全盘扫描操作的次数。<br>以次为单位。                 |
| 查询数量                                                     | 5分钟                                                        | counts                                                    | 统计当前执行查询操作的次数 。<br>以次为单位                  |
| 全部连接数                                                   | 5分钟                                                        | counts                                                    | 统计当前连接到 MySQL Plus 服务器的总连接数。<br>以个为单位。 |
| 写入查询                                                     | 5分钟                                                        | counts                                                    | 统计当前 DML 操作的次数。<br>以次为单位。                    |
| INNODB 缓冲池可用空间                                        | 5分钟                                                        | MB                                                        | 统计当前 Innodb 缓冲池可用空间 。<br>以 MByte 为单位。       |
| INNODB 等待行锁次数                                          | 5分钟                                                        | counts                                                    | 统计当前 Innodb 等待行锁的次数。<br>以次每秒为单位。         |
| INNODB 平均获取行锁时间                                      | 5分钟                                                        | ms                                                        | 统计当前 Innodb 平均获取行锁的时间。<br>以毫秒为单位。       |
| 当前线程连接数                                               | 5分钟                                                        | counts                                                    | 统计当前线程总连接数。<br>以个为单位。                       |
| 活跃线程连接数                                               | 5分钟                                                        | counts                                                    | 统计当前活跃线程数，即非 Sleep 状态的线程数。<br>以个为单位。 |
| 线程命中率                                                   | 5分钟                                                        | %                                                         | 统计服务启动后使用缓存中的线程建立的连接数占总连接数的比例。<br>以 % 为单位。 |
| 启动秒数                                                     | 5分钟                                                        | s                                                         | 统计 MySQL 服务已启动的秒数。<br/>以秒为单位。               |
| 客户端未正确关闭连接次数                                     | 5分钟                                                        | counts                                                    | 统计客户端在未正确关闭连接的情况下死亡而中止的连接数。<br/>以次每秒为单位。 |
| 尝试连接MYSQL失败次数                                        | 5分钟                                                        | counts                                                    | 统计连接到 MySQL 服务器的失败尝试次数。<br/>以次每秒为单位。 |
| JOIN查询中被驱动表使用全表扫描(被驱动表不能使用索引)查询数量 | 5分钟                                                        | counts                                                    | 统计因未使用索引而执行表扫描的连接数。<br/>以个为单位。      |
| 排序算法必须合并次数                                         | 5分钟                                                        | counts                                                    | 统计排序算法必须执行的合并通道数。<br/>以次每秒为单位。      |
| 发送给所有客户端的网络流量字节数                             | 5分钟                                                        | byte                                                      | 统计发送给所有客户端的网络流量字节数。<br/>以Byte为单位。    |
| 从所有客户端接收的网络流量字节数                             | 5分钟                                                        | byte                                                      | 统计从所有客户端接收的网络流量字节数。<br/>以Byte为单位。    |
| 挂起 IO 操作数量                                             | 5分钟                                                        | counts                                                    | 统计当前挂起的IO操作次数。<br/>以个为单位。                  |
| 连接数使用率                                                 | 5分钟                                                        | %                                                         | 统计当前使用连接数占最大连接数的比例。<br/>以%为单位。       |
| 表缓存使用率                                                 | 5分钟                                                        | %                                                         | 统计当前缓存表打开使用数占总缓存表数的比例。<br/>以%为单位。 |
| 死锁数量                                                     | 5分钟                                                        | counts                                                    | 统计死锁个数。<br/>以个为单位。                              |
| INNODB BUFFER POOL 命中率                                    | 5分钟                                                        | %                                                         | 统计当前 INNODB BUFFER POOL 缓存命中率。<br/>以%为单位。     |
| 落后主节点的秒数                                             | 5分钟                                                        | s                                                         | 统计数据同步延迟秒数。<br>以秒为单位。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>:<li>仅适用于**高可用版**和**金融版** MySQL Plus。</li><li>**高可用版**统计主从数据同步延迟秒数。</li><li>**金融版**统计只读实例数据同步延迟秒数。</li></span> |
| 落后主节点事务数                                             | 5分钟                                                        | counts                                                    | 统计主从数据同步延迟事务数。<br>以个为单位。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>:<li>仅适用于**金融版** MySQL Plus。</li><li>统计**金融版**主实例中主从数据同步延迟事务数。</li></span> |

## 支持的资源监控指标

| <span style="display:inline-block;width:200px">监控项</span> | <span style="display:inline-block;width:80px"><span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> | <span style="display:inline-block;width:320px">指标含义</span> |
|:--- |:--- |:--- |:--- |
| CPU | 5分钟 | % | 统计当前资源 CPU 使用率。<br>以 % 为单位。 |
| 内存 | 5分钟 | % | 统计当前资源内存使用率。<br>以 % 为单位。 |
| 硬盘使用率 | 5分钟 | % | 统计当前资源硬盘使用率。<br>以 % 为单位。 |
| 硬盘 IOPS | 5分钟 | counts/s | 统计每秒资源硬盘 IOPS 读取或写入次数，可分别查看读取或写入监控指标。<br>以次每秒为单位。 |
| 硬盘吞吐量 | 5分钟 | MByte/s | 统计每秒资源硬盘读取或写入速率，可分表获取读取或写入速率。<br>以 MByte 每秒为单位。 |

## 支持的服务状态

| <span style="display:inline-block;width:200px">监控项</span> | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">参数值</span> | <span style="display:inline-block;width:320px">指标含义</span> |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :---------------------------------------------------------- | :----------------------------------------------------------- |
| 集群切换状态                                                 | 5分钟                                                        | 0~                                                          | 集群所有节点都绑定该告警策略，当节点主从状态切换时，上报监控数据为大于0的任意值，产生告警。当状态无变化时，上报监控数据为0，不产生告警。<br>若只绑定单个节点，主节点变为从节点产生告警，从节点更换为主节点时不会产生告警。告警策略无效。<br>建议集群所有节点都绑定该告警策略。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>:<li>仅适用于**高可用版** MySQL Plus 。</li></span> |
| 节点服务状态                                                 | 5分钟                                                        | 异常                                                        | 当节点状态为异常时，产生告警。                               |
