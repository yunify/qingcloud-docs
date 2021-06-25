---
title: "常见问题"
date: 2020-01-30T00:38:25+09:00
description: Test description
draft: false
enableToc: false

---



## 如何获取来访者的真实IP

HTTP/HTTPs协议的监听器，可以通过HTTP 的头字段为 X-Forwarded-For来获取客户端真实IP; 对于只暴露公网服务的TCP协议的监听器，还能够开启透明代理来获取客户端真实IP

## 健康检查异常如何排查

1. 检查云服务器的防火墙是否放行服务对应的端口规则

2. 检查云服务器的服务的对应端口是否正常监听

3. 如果是 HTTP 健康检查，请您在后端服务器上执行以下命令查看回显中返回的状态码。
   curl 后端服务器的私有IP:健康检查端口/健康检查路径 -iv

4. 看下返回的状态码

5. HTTP健康检查是 SLB向后端服务器发起GET请求，当获取到以下所列的响应状态码，认为服务器是正常状态。

6. 对于 TCP 的监听器，HTTP健康检查正常返回状态码是 200。

7. 对于HTTP监听器，HTTP健康检查正常返回状态码是 2xx 或者 3xx。


## 使用UDP协议健康检查有什么注意事项

UDP 方式会结合ICMP Echo Request 和 UDP port probe 两种方式来检查。

* ICMP Echo Request: 参考上述 ICMP 方式。
* UDP port probe: 发送一些UDP包。如果后端响应ICMP Destination Port Unreachable的包，则认为后端UDP端口没被监听；没有收到回包，认为端口是被监听着的。

>说明：
>对于监听器为 UDP 端口组，且健康检查为 UDP 时，健康检查只会检测端口组的第一个端口。

>说明：
>当使用UDP的健康检查方式时，要保证后端能够正确响应ICMP Echo Request（即返回ICMP Echo Reply包，ICMP code: 0/0），并且能返回ICMP Destination Port Unreachable包，ICMP code: 3/3）。
>如果后端有加载防火墙或者有其它防火墙策略，要保证其上行中相应的策略是放行的。

## SLB支持什么类型的会话保持

负载均衡器支持源IP、HTTP cookie两种会话类型。

## 如何启用WebSocket支持

负载均衡器详情界面，设置监听器的界面开启Keep-Alive，可以通过 Connection 字段配置 Keep-Alive ，保持 TCP 连接不中断
