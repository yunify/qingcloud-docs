---
title: "监控指标说明"
keywords: 
weight: 1
draft: false
---

通过查看 TiDB 监控信息，可以帮助您掌握 TiDB 的运行健康及性能状态。

TiDB 支持的监控指标如下表。

| 监控项               | 监控周期 | 单位   | 指标含义                                                     |
| -------------------- | -------- | ------ | ------------------------------------------------------------ |
| QPS                  | 5分钟    | 次/秒  | 分别统计每秒的响应请求数中正确的响应数及错误的响应数。<br/><li>QPS-OK：正确的响应数</li><li>QPS-ERROR：错误的响应数</li> |
| 存储用量             | 5分钟    | %      | 分别统计 TiKV 及 TiFlash 角色已使用存储容量占总存储容量的比例。 |
| CPU 使用率           | 5分钟    | %      | 分别统计 TiDB、PD、TiKV、TiFlash 角色的 CPU 使用率。         |
| 可用内存             | 5分钟    | GB     | 分别统计 TiDB、PD、TiKV、TiFlash 的剩余可用内存。            |
| 延迟                 | 5分钟    | ms     | 分别统计 99.9%、99% 及 90% 的 SQL 延迟时间。                 |
| TiDB 总连接数        | 5分钟    | counts | TiDB 的总连接数。                                            |
| Region Health        | 5分钟    | -      | 统计 Region 的健康状态。<br/><li></li><li></li><li></li><li></li> |
| TiKV 平均 Leder 数   | 5分钟    | counts | 统计每个 TiKV 上平均有多少个 Leader                          |
| TiKV 平均  Region 数 | 5分钟    | counts | 统计每个 TiKV 上平均有多少个 Region                          |



