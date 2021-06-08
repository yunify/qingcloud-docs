---
title: "NAT 网关配合 VPC 使用"
descrIPtion: Test descrIPtion
weight: 40
draft: false
enableToc: false

---



# 概述

如果使用 NAT 网关访问公网，则具备更好的转发能力，但 NAT 不支持端口转发，隧道等功能，不方便维护，用户如需使用其他功能则需 NAT 配合 VPC 使用。

# 操作指南

## 1、打通隧道，确保隧道正常

以 IPSec 隧道为例, IPSec 隧道可参考文档：[隧道配置](/network/vpc/manual/tunnel/ipsec/)  
本端隧道配置如下：  
<img src="../_images/ipsec.png" width="800px" height="500px">  
隧道本地公网 IP 为：139.198.174.112，本地内外 IP 为：172.16.1.0/24，测试主机 IP 为：172.16.1.2  
隧道对端公网 IP 为：139.198.6.130，对端内网 IP 为：192.168.1.0/24，测试主机 IP 为：192.168.1.5  
双向测试结果如下：  
<img src="../_images/ping1.png" width="800px" height="500px">  

<img src="../_images/ping2.png" width="800px" height="500px">

## 2、加入 NAT，通过 NAT 网关具备公网能力
配置 NAT 网关可参考文档：[配置NAT网关](/network/nat_gateway/manual/nat_user_guide/)
配置完成后可访问公网，但隧道不通，无法通过 VPC 端口转发能力访问云服务器。  
<img src="../_images/ping3.png" width="800px" height="500px">  

<img src="../_images/vpctest.png" width="800px" height="500px">  
此现象符合预期，因默认路由均走 NAT 网关，不再走 VPC。

## 3、NAT 配合 VPC 使用
示例背景：  
NAT 网关公网：139.198.172.235，NAT 网关加入私有网络：vxnet-toqcg3c（172.16.1.0/24）  
VPC 公网：139.198.174.112，VPC 加入私有网络：vxnet-toqcg3c（172.16.1.0/24）。 

路由表可以配置策略路由实现源地址到目标地址的路由策略。

示例1、公网走 NAT，隧道走路由器

对端隧道内外 IP 为：192.168.1.0/24，添加策略路由如下：
<img src="../_images/route1.png" width="800px" height="500px">  
测试结果如下：  
<img src="../_images/ping4.png" width="800px" height="500px">  

<img src="../_images/ping5.png" width="800px" height="500px">

示例2、公网走 NAT，指定 IP 走路由器

此场景适用于平时维护，如通过 VPC 端口转发登录服务器  
本机 IP 为：106.84.199.46,添加策略路由如下：  
<img src="../_images/route2.png" width="800px" height="500px">  
测试结果如下：  
<img src="../_images/telnet.png" width="800px" height="500px"> 