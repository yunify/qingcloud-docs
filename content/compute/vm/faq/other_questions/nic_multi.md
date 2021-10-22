---
title: "网卡多队列 Nic Multi Queue 功能如何使用"
description: Test description
draft: false
enableToc: false
weight: 210
---

## 背景介绍

青云的云服务器支持开启网卡多队列功能。您可以在创建云服务器的基本信息展开高级选项，选择启用网卡多队列。对于已经创建的云服务器，您可以在详情页 - 配置，找到网卡多队列的当前设置。如果想要启用或禁用该服务，可以关机之后点击相应的操作按钮。

网卡多队列是利用 hash 算法，将网络流量分散到多个网卡队列中，交由多个 CPU 同时处理请求，利用CPU多核特性提高网络处理能力。 开启这个功能后，虚拟机挂载的网卡会有多队列功能，但是 Linux 系统还需要做相关配置，才能使用到这一特性，包括：

*  设置网卡队列数，数值应等于 cpu 数量
*  给网卡接收队列绑定 cpu
*  给网卡发送队列绑定 cpu

## 操作方法

为了方便使用，我们提供了 [网卡队列配置脚本](/content/nic_mq.sh) 配置这些参数，请把脚本放到/etc/rc.local中，开机自动配置。 详情请参考 [linux network scaling](https://www.kernel.org/doc/Documentation/networking/scaling.txt)

## 系统要求

### Linux

*   kernel >= 3.8
*   安装了 ethtool 工具

### Windows Server

*   版本>= 2012
