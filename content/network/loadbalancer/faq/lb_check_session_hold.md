---
title: "如何检查负载均衡器会话保持是否生效？"
description: 介绍如何检查负载均衡器会话保持是否生效。
keyword: 负载均衡器, 会话保持
weight: 50
draft: false
---

您可以通过 curl 命令测试会话保持是否生效。

## 背景信息

负载均衡器支持源 IP 地址、负载均衡器 Cookie 、植入 Cookie 前缀、重写 Cookie 、后端 Cookie 实现会话保持，详见[会话保持](/network/loadbalancer/manual/monitor/lb_session_hold/)。

## 准备工作

在后端云服务器中创建测试页面，测试页面的名称需要一致，分别写入不同的内容，以此区分每个后端。

## 四层监听测试

> **说明**
>
> 四层监听基于源 IP 算法作为负载方式来实现会话保持。

运行以下命令，多次访问测试页面，查看返回结果是否一致，若返回结果一致说明会话保持已生效，反之则说明会话保持无效

```bash
 curl http://1.1.1.1/check.html
```

## 七层监听测试

> **说明**
>
> 如果会话保持默认模式是植入 Cookie ，而 curl 命令默认不保存和发送 Cookie。需要预先保存相应的 Cookie，再进行测试。否则，curl 测试结果将是随机的，影响测试结果的准确性。

1. 访问测试页面，保存 Cookie 值。

   ```
   curl -D test.cookie http://1.1.1.1/check.html
   ```

2. 使用保存的 Cookie 多次访问，查看返回结果。

   如果多次访问返回结果一致，说明会话保持已生效，反之则说明会话保持无效

   ```
   curl -b test.cookie http://1.1.1.1/check.html
   ```

## 相关问题

[如何排查负载均衡器会话保持不生效问题？](../resolve_check_session_hold/)