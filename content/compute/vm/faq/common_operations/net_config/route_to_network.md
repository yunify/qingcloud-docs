---
title: "自定义路由表配置网关服务器"
date: 2020-06-05T00:38:25+09:00
description: Test description
weight: 40
draft: false
enableToc: false
---

## 概述

在本项目中，您将了解如何使用云服务器自建一个网关服务器，让其他云服务器可以使用网关服务器访问互联网。

## 配置步骤

一、创建两台云服务器加入 VPC 的同一私有网络中

![route_to_network01](../../../_images/route_to_network01.jpg)

二、此案例中使用 192.168.2.2 这台主机配置网关服务器，因此给这台云服务器绑定一个公网 IP

![route_to_network02](../../../_images/route_to_network02.jpg)

三、创建一个路由表，并在 VPC 的私有网络中绑定

![route_to_network03](../../../_images/route_to_network03.jpg)

四、配置路由规则如下：下一跳为 192.168.2.2 

![route_to_network04](../../../_images/route_to_network04.jpg)

五、进入192.168.2.2 主机内部配置开启云服务器的路由功能

```
vim /etc/sysctl.conf

net.ipv4.ip_forward = 1
sysctl -p /etc/sysctl.conf
```

六、进入192.168.2.2 主机内部配置 iptables 策略

```
iptables -t nat -A POSTROUTING -s 192.168.2.0/24 -o eth0 -j SNAT --to-source 192.168.2.2
```

七、由于192.168.2.2 云服务器绑定了安全组，需要在安全组中放行 UDP 53端口放行 DNS ，否则解析不了域名

![route_to_network05](../../../_images/route_to_network05.jpg)

八、进入其它未绑定公网 IP 的主机 ping www.baidu.com 试验配置是否成功

![route_to_network06](../../../_images/route_to_network06.jpg)