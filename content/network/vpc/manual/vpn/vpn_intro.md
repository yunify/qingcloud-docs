---
title: "VPN 服务概述"
keyword: VPC, VPN, OpenVPN, PPTP, L2TP
description: VPN 服务简介
draft: false
weight: 5
aliases: /network/vpc/manual/vpn/
---

VPC 网络提供的 VPN 服务使得您可以在本地客户端远程拨入公有云中的 VPC 网络，使客户端可以安全地访问 VPC 中部署的应用或服务。

## 适用场景

您可以通过 VPN 服务将客户端和 VPC 连接起来，客户端通过互联网可随时随地安全地连接 VPC，满足远程办公的需要。

VPN 支持 Windows、Linux、Mac 操作系统类型的客户端接入。

<img src="/network/vpc/_images/vpn_struc.png" style="zoom:80%;" />

如果您希望将您自己的数据中心或办公、家庭网络与公有云中您的私有网络连接在一起，则建议您使用 [GRE 隧道](/network/vpc/manual/tunnel/gre/)形成公私兼顾的混合云网。

## VPN 协议

VPN 服务支持 OpenVPN 、PPTP 及 L2TP-IPsec 三种协议实现客户端与 VPC 的连接。使用不同协议，配置方式略有差别，您可以根据需求选用其中一种。

- 如果您追求更好的安全稳定性，建议您使用 OpenVPN。
- 如果您希望配置简单、易使用，建议您使用 PPTP/L2TP。
- 由于苹果的系统 Mac OS 已不再支持 PPTP 隧道服务和客户端等配置项，若您使用的设备系统是 Mac OS，则只能使用 OpenVPN/L2TP。

## 使用限制


| VPN 类型                     | OpenVPN | PPTP | L2TP |
| :--------------------------- | :------ | :--- | :--- |
| 单 VPC 可添加的 VPN 账户数量 | 63      | 254  | 254  |

