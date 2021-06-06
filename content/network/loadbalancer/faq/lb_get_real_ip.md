---
title: "获取来访者的真实 IP"
description: Test description
draft: false
enableToc: falshu
---

## 方法一

通过 HTTP 的头字段为 X-Forwarded-For，如图

![image-2021051716362309](../../_images/lb_get_real_ip_01.png)

![image-20210517163729044](../../_images/lb_get_real_ip_02.png)

![image-20210517163753374](../../_images/lb_get_real_ip_03.png)

这个功能没有开启时，通过 access.log 查看到客户端的 IP 地址实际上是负载均衡器节点 IP ，一般为198.19.x.x，如图

![image-20210517181448847](../../_images/lb_get_real_ip_04.png)

开启之后，通过访问 access.log 查看的日志如下

![image-20210517181544091](../../_images/lb_get_real_ip_05.png)

## 方法二

通过开启透明代理（可能会导致内网请求失败），请在只提供公网服务（绑定了公网 IP）时开启，一般用于 TCP 协议的监听器。建议使用 tcpdump 命令抓包来获取真实 IP。

