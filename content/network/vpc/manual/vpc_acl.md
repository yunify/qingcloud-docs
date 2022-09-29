---
title: "网关过滤控制"
keyword: VPC, 网关过滤控制, ACL
description: 介绍如何使用网关过滤控制功能。
draft: false
weight: 70

---

网关过滤控制（ACL）用于配置隧道、VPN、NAT 网关的 ACL 过滤规则，实现 VPC 的网络流量在通过隧道、VPN 或 NAT 网关与其他网络互通时的访问控制。

以 GRE 隧道为例，假设现有两个 VPC 网络的 GRE 隧道配置如下：

![](../_images/vpc_acl_example1.png)

若需要实现拒绝 192.168.2.2 这个 IP 地址对 192.168.5.0/24 子网内所有 IP，1000~10000 端口范围的访问，则可以添加以下网关过滤控制规则进行：

![](../_images/vpc_acl_detail.png)

​    
