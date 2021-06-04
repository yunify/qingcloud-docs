---
title: "监控指标与告警"
description: 本小节主要介绍管理 QingCloud MongoDB 监控指标与告警。 
keywords: mongodb 监控指标,监控告警 
data: 2021-05-14T00:38:25+09:00
weight: 60
collapsible: false
draft: false
---



## 监控粒度

QingCloud MongoDB 支持自定义监控粒度，监控自适应策略如下。

> 自定义监控粒度可根据需求选择时间跨度，选择时间跨度后系统自适应监控粒度。时间跨度最大90天。

| <span style="display:inline-block;width:180px">时间跨度</span> | <span style="display:inline-block;width:180px">监控粒度</span> |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 最近6小时                                                    | 5分钟                                                        |
| 最近一天                                                     | 15分钟                                                       |
| 最近两周                                                     | 2小时                                                        |
| 最新一个月                                                   | 1天                                                          |
| 最近6个月                                                    | 1天                                                          |



## 监控指标

QingCloud MongoDB 实例支持以下监控指标。

| <span style="display:inline-block;width:150px">指标名称</span> | <span style="display:inline-block;width:120px">指标类型</span> | <span style="display:inline-block;width:120px">单位</span> | <span style="display:inline-block;width:120px">维度</span> |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---------------------------------------------------------- | ---------------------------------------------------------- |
| CPU                                                          | 资源                                                         | %                                                          | 节点                                                       |
| 内存                                                         | 资源                                                         | %                                                          | 节点                                                       |
| 硬盘使用率                                                   | 资源                                                         | %                                                          | 节点                                                       |
| 硬盘 IOPS                                                    | 资源                                                         | 次                                                         | 节点                                                       |
| 硬盘吞吐量                                                   | 资源                                                         | KB/s                                                       | 节点                                                       |
| 操作数                                                       | 服务                                                         | 次                                                         | 节点                                                       |
| 复制操作数                                                   | 服务                                                         | 次                                                         | 节点                                                       |
| 连接数                                                       | 服务                                                         | 次                                                         | 节点                                                       |
| WIREDTIGER 内存使用率                                        | 服务                                                         | %                                                          | 节点                                                       |
| WIREDTIGER 内存状态                                          | 服务                                                         | MB                                                         | 节点                                                       |
| WIREDTIGER TRANSACTIONS 状态                                 | 服务                                                         | 次                                                         | 节点                                                       |
| GLOBALLOCK 请求状态                                          | 服务                                                         | 次                                                         | 节点                                                       |
| GLOBALLOCK 队列状态                                          | 服务                                                         | 次                                                         | 节点                                                       |
| 流量进出状态                                                 | 服务                                                         | MB                                                         | 节点                                                       |



## 告警指标

目前提供的告警项包含：

- CPU 利用率
- 内存利用率
- 磁盘使用量
- MongoDB 节点服务状态
- MongoDB 连接数
- MongoDB 可用连接数
- wiredTiger 内存使用率
