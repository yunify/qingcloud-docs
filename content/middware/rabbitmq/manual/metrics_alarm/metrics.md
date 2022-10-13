---
title: "监控指标"
description: 本小节主要介绍 RabbitMQ 主要支持哪些监控指标。 
keyword: 云计算,消息队列,中间件,RabbitMQ,监控指标
weight: 10
collapsible: false
draft: false
---

RabbitMQ 提供集群服务和资源性能监控指标和告警信息。

## 支持的服务监控指标

| <span style="display:inline-block;width:200px">监控项</span> | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> | <span style="display:inline-block;width:320px">指标含义</span> |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :-------------------------------------------------------- | :----------------------------------------------------------- |
| RabbitMQ 内存占用 (MB)                                       | 5分钟                                                        | MB                                                        | mem_used：统计 RabbitMQ 内存占用量。                         |
| 文件句柄数                                                   | 5分钟                                                        | 个                                                        | fd_used：统计文件句柄数。                                    |
| Sockets 句柄数                                               | 5分钟                                                        | 个                                                        | sockets_used：统计 Sockets 句柄数。                          |
| Broker 子进程数                                              | 5分钟                                                        | 个                                                        | proc_used：统计 Broker 子进程数。                            |
| 正在等待的 Erlang 进程数                                     | 5分钟                                                        | 个                                                        | run_queue：统计正在等待的 Erlang 进程数。                    |

## 支持的资源监控指标

| 监控项 | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> | 指标含义 |
|:--- |:--- |:--- |:--- |
| CPU | 5分钟 | % | 统计当前资源 CPU 使用率。 |
| 内存 | 5分钟 | % | 统计当前资源内存使用率。 |
| 硬盘使用率 | 5分钟 | % | 统计当前资源硬盘使用率。 |
| 硬盘 IOPS | 5分钟 | counts/s | 统计每秒资源硬盘 IOPS 读取或写入次数，可分别查看读取或写入监控指标。 |
| 硬盘吞吐量 | 5分钟 | KB/s | 统计每秒资源硬盘读取或写入速率，可分别查看读取或写入速率。 |
