---
title: "使用 UDP 协议健康检查有什么注意事项？"
keyword: 负载均衡器, 常见问题
description: 介绍负载均衡器的常见问题解决办法。
draft: false
---

UDP 方式会结合 ICMP Echo Request 和 UDP port probe 两种方式来检查，需注意：

- 对于监听器为 UDP 端口组，且健康检查为 UDP 时，健康检查只会检测端口组的第一个端口。
- 需保证后端能够正确响应 ICMP Echo Request（即返回 ICMP Echo Reply包，ICMP code: 0/0），并且能返回 ICMP Destination Port Unreachable 包，ICMP code: 3/3）。如果后端有加载安全组或者有其安全组策略，要保证其上行中相应的策略是放行的。
