---
title: "产品功能"
description: 介绍 VPC 网络支持的功能。
keyword: VPC, VPC 网络, 私有网络
draft: false
weight: 20
---

VPC 网络拥有众多的二层三层网络功能，以及隧道、VPN 等高级功能。

## VPC 网络

云平台提供了管理 VPC 网络的功能，包括：创建 VPC 网络、修改 VPC 网络基本信息、删除 VPC 网络、VPC 健康探测、为 VPC 网络绑定告警策略和将 VPC 网络添加到项目等。

## 私有网络

私有网络是 VPC 网络中的子网，在 VPC 网络中的所有云资源都必须部署在私有网络内。云平台提供了管理私有网络的功能：为 VPC 网络创建新的私有网络、绑定网络 ACL、绑定路由表、 修改私有网络信息和删除私有网络等。

## 路由表

创建 VPC 网络的同时，会自动创建一个一定规格（支持免费型/小型/中型/大型/超大型）的虚拟路由器，路由器具备一个私有的 B 段（例如192.168.0.0/24）网络地址空间。在路由器中有默认的直联路由表，以保证同一个私有网络下的所有子网互通。

用户可也可以自定义路由表，并且选择应用到私有网络中。云平台提供了管理路由表的功能：添加自定义路由、查询路由、修改路由和删除路由等。

## IPv4/IPv6 双栈网络

IPv4/IPv6 双栈可为您的网络实例提供两个不同版本的 IP 地址：IPv4 地址和 IPv6 地址，这两个 IP 地址都可以进行内网/公网访问。

云平台支持新建 IPv4/IPv6 双栈网络，或在已有 VPC 网络下添加IPv6 子网形成双栈网络。

## 端口转发

支持添加端口转发规则，允许来自 Internet 或者基础网络对私有网络内部服务的访问。

## 隧道服务

网络隧道通过加密/非加密通道将多地或者多个网络安全连接起来，例如连接企业数据中心、企业办公网络、 Internet 终端以及 VPC 和 VPC互通。

云平台支持 2 种网络隧道：IPsec 隧道和 GRE 隧道。IPsec 是一种加密的隧道技术，通过使用加密的安全服务在不同的网络之间建立保密而安全的通讯隧道。GRE 隧道是 L3 over L3 的技术，不对传输数据加密，但是使用起来更加简单灵活，可以用来组建各种网络拓扑，常见的树型、星型、总线型(串型)、环型和混合型均可实现。

## VPN 服务

VPN 服务是基于 Internet 的传输加密方式，在单台机器而非整个网络连接到 VPC 网络时可以通过密码或者证书的方式简单实现。

云平台支持 OpenVPN、PPTP、 L2TP 三种不同的 VPN 服务，用户可以根据自身的使用习惯进行选择。

## 虚拟 IP

虚拟 IP 通常用于不同云服务器之间的切换，例如主从切换，是业务连续性的重要基础。VPC 内所有 IP 地址均可以作为虚拟 IP 使用，并且支持对虚拟 IP 的预留申请及查看功能。

## DNS 服务

VPC 网络为用户提供内网 DNS 和公网 DNS 转发服务。内网DNS可以为私有网络中的资源绑定域名，支持一个域名绑定多个私网IP。在 VPC 绑定公网IP后，可以为其中的私有网络提供公网 DNS 转发服务，未指定公网 DNS 转发时将采用云平台的默认配置。

## 路由推送

VPC 还可以为其中的每个云服务器推送静态/默认路由，云服务器路由在所有的路由中优先级最高，用户在自定义云服务器路由时应确保设定正确，以免网络不通。

## 组播广播

在 VPC 中创建的私有网络是一个二层网络，私有网络中的云服务器可以通过“广播”功能和全网内的其他云服务器通信，或以广播的方式组建组播。

## 网关过滤控制

网关过滤控制仅对虚拟路由器中的流量进行控制，包含 NAT、隧道、VPN 流量会经过虚拟路由器。虚拟网络内部，或者虚拟网络与虚拟网络间的流量均不经过虚拟路由器。虚拟网络内部的流量可以通过安全组进行访问控制，虚拟网络之间的流量通过网络 ACL 来进行访问控制。

## 内网域名别名

针对 VPC 网络的默认内网域名，自定义一个内网域名别名。内网域名别名具有更好的可读性，同时可以作为内网服务的统一域名来访问。

## DHCP 服务

DHCP 服务为私有网络提供 IP 地址分配，分配的地址都是固定地址，即一个主机在其生命周期内获得的地址是保持不变的。

## 边界路由器

边界路由器可用于高速连通同一 VPC 下的物理主机网络和云服务器网络，也可以用于高速连通不同的 VPC。 通过内网路由策略，可实现流量经边界路由器转发到达指定目标网络。例如，通过边界路由器走专线到达用户数据中心，从而提高网络性能及稳定性。

## 监控与告警

用户创建  VPC 网络后，无需额外安装其他插件，即可在使用 VPC 网络的监控功能查看带宽、PPS、节点、网卡等监控数据，也可以创建和设置告警规则，自定义监控目标与通知策略，及时了解 VPC 网络的状况，从而起到预警作用。

## 图形化操作

支持图形化查看和编辑网络拓扑，可让用户对整体网络一目了然，形成形象认知。

