---
title: "vpc端口转发至非自身私有网络主机"
linkTitle: "vpc端口转发至非自身私有网络主机"
date: 2021-02-16T10:08:56+09:00
description:
draft: false
weight: 1
---

## **项目介绍**

通过专线打通vpc和本地网段，现需求通过vpc的端口转发来实现对本地服务端口的访问

## 场景介绍

在上海1区部署了一个http服务，通过北京3区vpc的ip来访问该服务

>  sh1:
>
>  公网ip：139.198.179.62
>
>  私有网段：172.16.0.0/24
>
>  主机ip：172.16.0.2

>  pek3：
>
>  公网ip：139.198.19.98
>
>  私有网段：192.168.0.0/24	
>
>  主机ip：192.168.0.4

## 操作步骤

### 1、两vpc之间通过ipsec隧道打通

​	可以参考文档配置：[搭建ipsec隧道](https://docs.qingcloud.com/product/network/ipsec)

![](../_images/private_network_1.png)

### 2、在 192.168.0.4 中设置dnat规则

```shell
echo 1 > /proc/sys/net/ipv4/ip_forward
iptables -t nat -A PREROUTING -d 192.168.0.4 -p tcp --dport 80 -j DNAT --to-destination 172.16.0.2:8080
iptables -t nat -A POSTROUTING -d 172.16.0.2 -p tcp --dport 8080 -j SNAT --to 192.168.0.4
```

![](../_images/private_network_2.png)

### 3、在pek3区的vpc上配置端口转发，需要在安全组上放行相应下行规则，并点击应用修改

![](../_images/private_network_3.png)

![](../_images/private_network_4.png)

### 4、通过ip+端口访问验证

![](../_images/private_network_5.png)