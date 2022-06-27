---
title: "如何开启长连接？"
description: 介绍如何开启监听长连接。
keyword: 负载均衡器, 长连接
draft: false
---

## HTTP 监听开启长连接

如图，在 HTTP 监听器设置中，勾选上 `keep-alive` 即可。

<img src="../../_images/lb_long_connection01.png" alt="image" style="zoom:80%;" />

## TCP 监听开启长连接

TCP 监听默认开启长连接。

负载方式推荐使用`最少连接`：优先将请求发给拥有最少连接数的后端服务器，常用于长连接服务，例如数据库连接等服务。





