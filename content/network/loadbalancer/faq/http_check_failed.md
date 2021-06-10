---
title: "七层（HTTP/HTTPS）健康检查异常	"
description: test
draft: false
---

## 问题描述

本文主要针对于负载均衡器七层健康检查出现异常的解决方法。

## 问题现象

负载均衡器上配置了如下图的基于七层方式的健康检查，但是健康检查结果显示为`不活跃`。

![http_check_faild](../../_images/http_check_faild.png)

## 排查方法

### 1、定位健康检查失败问题出现在第七层还是第四层

通过点击监听器的【操作】----->【修改】---->【显示高级选项】，将健康检查修改为TCP，然后观察后端服务器的状态是否为活跃状态，如果仍旧是`不活跃`状态则说明，健康检查问题出在第四层，可以参考文章

[[四层（TCP/UDP）健康检查出现异常 | QingCloud 文档](http://localhost:1313/network/loadbalancer/faq/tcp_check_fialed/)]: 《四层（TCP/UDP）健康检查出现异常》

如果是活跃状态，则说明是后端服务本身配置有问题。后文主要针对后端服务本身配置有问题进行分析。

### 2、登录后端服务器，检查健康检查url是否正常

登录到后端服务器上使用curl命令访问健康检查接口，根据返回的http状态码排查问题。

如果返回的http状态码为4xx或者5xx，那么lb去检查时遇到4xx或者5xx就会判断为服务不可用，所以此时则需要检查后端服务，根据服务日志来排查错误。以下排查方法供您参考：

```
root@web:~# curl http://172.16.6.20/health   #检查命令 curl http://<ip>:<port>/<url>
<html>
<head><title>404 Not Found</title></head>
<body bgcolor="white">
<center><h1>404 Not Found</h1></center>
<hr><center>nginx/1.14.0 (Ubuntu)</center>
</body>
</html>
root@web:~# cat /var/www/html/health #配置健康检查接口
i am ok
root@web:~# curl http://172.16.6.20/health #此时本地调用是成功的，控制台也可以看到健康检查成功了
i am ok
```

如果返回的 HTTP 状态码小于400，此时则需要判断是否为健康检查超时所导致的。

### 3、健康检查超时

因为健康检查是有超时时间的，如果过短的话也可能会引起健康检查失败，遇到此类情况，可以尝试适当调长超时时间。并检查后端服务器的资源使用情况，LB 节点到后端服务器的网络情况，也可以在后端服务器上使用 curl 命令来健康检查接口的检测访问时长。

![](../../_images/time_out.png)

## 总结

七层（HTTP/HTTPS）健康检查是基于第七层的 HTTP 协议进行的，会和业务进行交互，所以首先应该定位问题，然后才是排查问题。所以主要是分为以下几步：
- 1、定位健康检查失败问题出现在第七层还是第四层。

- 2、登录后端服务器，检查健康检查 URL 是否正常。

- 3、检查健康检查 URL 是否存在超时情况。