---
title: "开启 HTTP2 不生效怎么办？"
description: 介绍如何处理负载均衡器开启 HTTP2 不生效
keyword: 负载均衡器, HTTP2 
weight: 50
draft: false
---

## 问题现象

在 HTTPS 监听器中勾选了 **启用HTTP2.0**，但通过 curl 命令发现还是使用的 HTTP1.1 协议。

```shell
curl -v --http2 https://test.com

***
***
> GET / HTTP/1.1
***
```



## 解决办法

查看 curl 返回信息中关于 ALPN 的日志，该日志为 HTTPS 上协商 HTTP 版本的过程。

1. 重启负载均衡器。

   部分用户使用的 LB 为较早之前创建的，镜像版本不支持开启 HTTP2.0 ，此时可以重启下 LB，会自动更新到最新的镜像版本，并支持开启 HTTP2.0。

2. 启用 TCP 监听器。

   部分用户在后端开启了 HTTP2 ，LB 不支持在 LB 及后端同时开启 HTTP2。此时需要使用 TCP 监听器，端口为后端服务监听的端口。

   ![](../../_images/http2_enabled_does_not_take_effect_1.png)

   

