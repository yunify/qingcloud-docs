---
title: "开启长连接"
description: Test description
draft: false
enableToc: falshu
---

## HTTP 监听开启长连接

如图，勾选上 keep-alive 即可

![image-20210517204706481](../../_images/lb_long_connection01.png)

## TCP 监听开启长连接

TCP 监听默认开启长连接

负载方式推荐使用最少连接：优先将请求发给拥有最少连接数的后端服务器，常用于长连接服务，例如数据库连接等服务。





