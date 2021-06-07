---
title: "网关过滤控制(ACL)"
linkTitle: "网关过滤控制(ACL)"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 70

---


在VPC 网络的详情页面，管理配置页签中，可以看到“网关过滤控制（ACL）”功能。 

网关过滤控制(ACL)用于配置 隧道/VPN/NAT 的 ACL 过滤规则，以完成VPC的网络流量在通过 隧道/VPN/NAT 与其他网络互通时的访问控制

以GRE隧道为例，假设现有两个VPC 网络的GRE隧道配置如下：

![](../_images/vpc_acl_example1.png)

添加网关过滤控制规则：

![](../_images/vpc_acl_detail.png)

通过上述配置，可实现拒绝192.168.2.2这个IP地址对192.168.5.0/24这个子网内IP，1000-10000端口范围的访问。

​    
