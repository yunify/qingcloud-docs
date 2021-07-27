---
title: "配置云服务器为网关服务器(外部绑定公网 IP)"
description: Test description
weight: 50
draft: false
enableToc: false
---
## 项目概览
在本项目中，您将了解如何使用云服务器外部绑定公网 IP 作为网关服务器，让其他云服务器可以使用网关服务访问互联网。

## 环境准备

* 创建一个 VPC 网络
* 创建一个私有网络并加入到 VPC 网络
* 创建两台云服务器加入到上面创建的私有网络
* 创建一个公网 IP，外部绑定到网关服务器

### 网络拓扑

![image-20210601153545414](../../_images/configure_the_gateway_server.assets/image-20210601153545414.png)

## 配置步骤

### 网关服务器配置

1、测试网络连通性

```bash
ping www.baidu.com
```

2、开启路由功能

临时更改

```bash
echo 1 > /proc/sys/net/ipv4/ip_forward
```

永久生效

```bash
vim /etc/sysctl.conf
net.ipv4.ip_forward = 1


sysctl -p /etc/sysctl.conf
```

3、配置SNAT

```
iptables -t nat -A POSTROUTING -s 172.16.0.0/16 -o eth0 -j MASQUERADE
```

### 客户端及 DNS 配置

#### 路由配置

* 方案一：

```bash
route add default gw 172.16.0.200
```

>云服务器中添加网关路由，云服务器重启会失效

* 方案二：

网络=>VPC 网络=>管理配置=>路由推送

![路由推送](../../_images/configure_the_gateway_server.assets/路由推送.gif)

> VPC 中添加路由推送，云服务器需要重启网络

* 方案三：

网络=>路由表

![路由表](../../_images/configure_the_gateway_server.assets/路由表.gif)

> 私有网络绑定路由表，需要熟悉网络基础知识

网络连通性测试：

```bash
ping 114.114.114.114
```

> 私有网络的云服务器绑定了公网 IP 默认会加一层防火墙，需要手动在安全组中放行一下 DNS 服务的 UDP 53端口，否则无法实现域名解析

#### DNS 配置

![安全组](../../_images/configure_the_gateway_server.assets/安全组.gif)

测试域名解析：

```bash
ping www.qingcloud.com
```

