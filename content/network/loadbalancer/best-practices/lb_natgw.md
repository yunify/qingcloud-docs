---
title: "搭建跨越公网的负载均衡"
description: test
draft: false
---

本节描述了如何灵活运用VPC、NAT网关、路由表、负载均衡器，搭建具备负载均衡能力跨越公网的网络架构，从而实现多地域的高可用网络服务。

## 借助 NAT 网关及路由表

NAT 网关为私有网络的云服务器提供了复用公网 IP 的能力，目前支持 SNAT 功能，云服务器可以共用 NAT 网关绑定的公网 IP 地址访问互联网。查看[详情](https://docs.qingcloud.com/product/network/nat_gateway)


### 创建一个vpc网络以及私有网络并完成绑定

比如私有网络的地址范围为192.168.10.0/24

![](../_images/lb+natgw1.png)

### 创建一个私有网络的路由表


控制台---网络与CDN---路由表---创建---选择私有网络类型

![](../_images/lb+natgw2.png)

![](../_images/lb+natgw3.png)

### 路由表与私有网络完成绑定


![](../_images/lb+natgw4.png)

![](../_images/lb+natgw5.png)


### 创建nat网关与私有网络完成绑定，并绑定公网ip

![](../_images/lb+natgw6.png)

然后可以在路由表中添加默认路由指向natgw以后，私有网络的云服务器可以主动通过 NAT 网关访问互联网

![](../_images/lb+natgw13.png)


### 创建负载均衡器并配置公网后端

这样负载均衡器就具备访问公网的能力

![](../_images/lb+natgw7.png)


创建http类型监听器，并添加一个后端，后端直接填写公网ip+端口

![](../_images/lb+natgw8.png)

![](../_images/lb+natgw9.png)


### 放行nat网关及负载均衡器防火墙

![](../_images/lb+natgw10.png)


观察后端的状态变为活跃，就可以用了

![](../_images/lb+natgw12.png)


## 借助 VPC 的 SNAT 能力

VPC自带SNAT功能，VPC内部的网络可以借助 VPC 绑定的公网 IP 访问到公网。负载均衡借助 VPC 的 SNAT，将公网 IP 作为后端。

网络架构如图所示：

![](../_images/lb+vpc1.png)


### 创建 VPC 和 vxnet，创建公网 IP 绑定 vpc


![](../_images/lb+vpc2.png)

### 创建LB，创建公网 IP 绑定 LB

![](../_images/lb+vpc3.png)

### 创建路由表，并绑定到vxnet

路由表添加默认路由指向路由器

![](../_images/lb+vpc4.png)



### LB 加入vxnet，并新加监听器后端为外部公网eip

![](../_images/lb+vpc5.png)
