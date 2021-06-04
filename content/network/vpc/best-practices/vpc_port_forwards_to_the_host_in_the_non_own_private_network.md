---
title: "青云VPC端口转发至非青云云服务器"
linkTitle: "青云VPC端口转发至非青云云服务器"
date: 2021-02-16T10:08:56+09:00
description:
draft: false
weight: 15
---

## **背景介绍**

客户通过专线打通青云的vpc和数据中心的网段，需求是数据中心内网的TCP服务，从外网也可以访问，即从青云的vpc的公网ip直接访问数据中心的服务。本文通过vpc的端口转发的功能来实现该需求。

## 测试场景

在上海1区部署了一个http服务，通过北京3区vpc的公网ip来访问该服务。

>  sh1:
>
>  公网ip：139.198.179.62
>
>  私有网段：172.16.0.0/24
>
>  云服务器ip：172.16.0.2

>  pek3：
>
>  公网ip：139.198.19.98
>
>  私有网段：192.168.0.0/24	
>
>  云服务器ip：192.168.0.4

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