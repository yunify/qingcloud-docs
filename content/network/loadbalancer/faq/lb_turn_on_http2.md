---
title: "如何开启 HTTP2"
description: Test description
weight: 50
draft: false
enableToc: false
---

## 背景介绍

目前 HTTP2 的使用越来越广泛，相对来说，HTTP2 会比 HTTP1.1 更加地高效。HTTP2 最大的特点是使用多路复用，对同一个域的服务器只建立一次 TCP 连接，加载多个资源，使用二进制帧传输，同时会对 HTTP 头部进行压缩。HTTP2 在实现上基本上只支持 HTTPS 。在青云的 LB 上支持开启 HTTP2，由于 LB 节点和后端在一个内网中，速度很快，后端业务无需支持 HTTP2。

## LB 开启 HTTP2

创建 HTTPS 的监听器，点击下方的显示高级选项，在附加选项中勾选上“启用HTTP2.0”。

![](../../_images/lb_turn_on_http2_1.png)

![](../../_images/lb_turn_on_http2_2.png)