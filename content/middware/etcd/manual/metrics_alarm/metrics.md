---
title: "监控指标"
description: 本小节主要介绍 Etcd 主要支持哪些监控指标。 
keyword: 云计算,消息队列,中间件,Etcd,监控指标
weight: 10
collapsible: false
draft: false
---

Etcd 提供集群服务和资源性能监控指标和告警信息。

## 支持的服务监控指标

| <span style="display:inline-block;width:200px">监控项</span> | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> | <span style="display:inline-block;width:320px">指标含义</span> |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :-------------------------------------------------------- | :----------------------------------------------------------- |
| 状态                                                         | 5分钟                                                        | -                                                         | <li>**集群 leader 数**（etcd_server_has_leader）：etcd member 是否有 Leader。`1` 表示有主节点；`0` 表示没有主节点。集群只能有一个 leader，也不能没有 leader。</li><li>**是否是leader（1：是，0：否）**（etcd_server_is_leader）：查看当前节点是否是 leader。</li><li>**此节点看到的 leader 切换次数**（etcd_server_leader_changes_seen_total）：etcd member 过去一段时间切主次数。可以看 leader 切换频率，在网络不稳情况下，会切换频繁，展示的是历史切换次数，只要是水平直线就代表稳定的 leader。</li> |
| 数据                                                         | 5分钟                                                        | 千                                                        | **发给其他节点的字节数**（etcd_network_peer_sent_bytes_total）：发送给对等方的总字节数。 |
| 内存                                                         | 5分钟                                                        | 百万                                                      | <li>**驻留内存（RSS）字节数**（process_resident_memory_bytes）：进程实际占用的内存数。</li><li>**虚拟内存字节数**（process_virtual_memory_bytes）：虚拟内存大小（以字节为单位）。</li> |
| HTTP 请求数（http_requests_total）                           | 5分钟                                                        | -                                                         | 节点的 HTTP 请求数。                                         |

## 支持的资源监控指标

| 监控项 | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> | 指标含义 |
|:--- |:--- |:--- |:--- |
| CPU | 5分钟 | % | 统计当前资源 CPU 使用率。 |
| 内存 | 5分钟 | % | 统计当前资源内存使用率。 |
| 硬盘使用率 | 5分钟 | % | 统计当前资源硬盘使用率。 |
| 硬盘 IOPS | 5分钟 | counts/s | 统计每秒资源硬盘 IOPS 读取或写入次数，可分别查看读取或写入监控指标。 |
| 硬盘吞吐量 | 5分钟 | KB/s | 统计每秒资源硬盘读取或写入速率，可分别查看读取或写入速率。 |
