---
title: "监控指标"
description: 本小节主要介绍 RocketMQ 主要支持哪些监控指标。 
keyword: 数据库,MySQL PLus,关系型数据库,MySQL,监控指标
weight: 10
collapsible: false
draft: false
---

RocketMQ 提供集群服务和资源性能监控指标和告警信息。

## 支持的服务监控指标

| <span style="display:inline-block;width:200px">监控项</span> | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> | <span style="display:inline-block;width:320px">指标含义</span> |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :-------------------------------------------------------- | :----------------------------------------------------------- |
| 每秒消息请求处理数（TPS）                                    | 5分钟                                                        | -                                                         | 统计每秒生产的消息数、每秒消费的消息数、每秒查到消息的请求数、每秒未查到消息的请求数、每秒查询消息的总请求数。 |
| 消息数                                                       | 5分钟                                                        | -                                                         | 统计当天生产和消费的消息总数。                               |
| 消息平均大小                                                 | 5分钟                                                        | 字节（byte）                                              | 统计当天消息平均大小。                                       |

## 支持的资源监控指标

| 监控项 | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> | 指标含义 |
|:--- |:--- |:--- |:--- |
| CPU | 5分钟 | % | 统计当前资源 CPU 使用率。 |
| 内存 | 5分钟 | % | 统计当前资源内存使用率。 |
| 硬盘使用率 | 5分钟 | % | 统计当前资源硬盘使用率。 |
| 硬盘 IOPS | 5分钟 | counts/s | 统计每秒资源硬盘 IOPS 读取或写入次数，可分别查看读取或写入监控指标。 |
| 硬盘吞吐量 | 5分钟 | KB/s | 统计每秒资源硬盘读取或写入速率，可分别查看读取或写入速率。 |
