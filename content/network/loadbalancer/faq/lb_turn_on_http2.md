---
title: "如何开启HTTP2 ？"
description: 如何开启负载均衡器的 HTTP2 支持。
keyword: 负载均衡器, HTTP2
weight: 50
draft: false
---

## 背景信息

目前 HTTP2 的使用越来越广泛，相对来说，HTTP2 会比 HTTP1.1 更加地高效。HTTP2 最大的特点是使用多路复用，对同一个域的服务器只建立一次 TCP 连接，加载多个资源，使用二进制帧传输，同时会对 HTTP 头部进行压缩。HTTP2 在实现上基本上只支持 HTTPS 。

青云支持在负载均衡器上开启 HTTP2，由于负载均衡器节点和后端在一个内网中，速度很快，故后端业务无需支持 HTTP2。

## 操作步骤

1. 创建或修改 HTTPS 监听器时，点击下方的**显示高级选项**。

   ![](../../_images/lb_turn_on_http2_1.png)

2. 在附加选项中勾选**启用HTTP2.0**。

   ![](../../_images/lb_turn_on_http2_2.png)