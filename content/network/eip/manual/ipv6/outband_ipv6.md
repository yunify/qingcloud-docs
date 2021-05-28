---
title: "外部绑定公网 IP"
description: test
date: 2021-05-26T15:08:56+09:00
weight: 10
draft: false
---

## 操作场景

云服务器通过 VPC的 DHCP 获取 IPv6 地址，然后接入公网，使云服务器同时具备公网和 VPC 内网的访问能力。

## 前提条件

- 已创建开启 IPv6 的VPC网络及私有网络。具体操作可参见[创建支持 IPv4/ IPv6 双栈的网络](/network/eip/quickstart/ipv6_quick_start/#创建支持-ipv4-ipv6-双栈的网络)。

- 已在IPV6 私有网络中创建支持 IPv6 自动化配置的云服务器。具体操作可参见[创建云服务器并加入到启用IPv6的私有网络](/network/eip/quickstart/ipv6_quick_start/#创建云服务器并加入到启用-ipv6-的私有网络)。

## 操作步骤

1. 右键点击云服务器，在弹出菜单中依次选择**公网 IPv6** > I**Pv6 接入公网**。

2. 在弹出的对话框中，为 IPv6 公网 IP 选择计费模式，点击**提交**。

   <img src="../../../_images/log-ipv6-connect.png" style="zoom:80%;" />

   接入公网后，可以在 **公网IP** >**公网IPv6** 页面中看到接入公网的 IPv6 地址详情，点击ID号，可进一步查看公网 IP 的计费及监控信息。

   

