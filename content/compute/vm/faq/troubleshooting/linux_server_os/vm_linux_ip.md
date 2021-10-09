---
title: "如何为 Linux 云服务器配置静态 IP 地址？ "
date: 2020-01-30T00:38:25+09:00
description: Test description
draft: false
enableToc: false
weight: 80
---

请注意，只有当云服务器位于自管私有网络之中，或者受管私有网络的路由器关闭了 DHCP 时，您才需要自行配置 IP 地址。

>**注意**
>
>请勿手动配置基础网络中云服务器的 IP，否则会造成网络无法连接。

## 操作步骤

青云官方提供的 Linux 镜像使用 NetworkManager 来自动化云服务器的网络配置，其默认配置是通过 DHCP 方式来获取 IP 地址。以下步骤描述了如何配置静态地址。

1. 用指令 ``ip link`` 或者 ``ifconfig -a`` 找到网卡在云服务器中的设备名， 通常名为 ``eth0``、``eth1`` 等，以下以 ``eth0`` 名字为例。

2. 配置网卡

   **RHEL/CentOS/Fedora**

   ```
   # vi /etc/sysconfig/network-scripts/ifcfg-eth0
   DEVICE=eth0
   BOOTPROTO=static
   ONBOOT=yes
   TYPE=Ethernet
   NM_CONTROLLED=no
   IPADDR=192.168.100.11
   NETMASK=255.255.255.0
   GATEWAY=192.168.100.1
   NETWORK=192.168.100.0
   BROADCAST=192.168.100.255
   ```

   对于 CentoOS 系统，手动配置网卡可能会和 NetworkManager 的管理有冲突，所以我们建议在手动配置网卡前先将 NetworkManager 禁用，禁用方法为：

   ```
   # service NetworkManager stop
   # chkconfig NetworkManager off
   ```

   **Debian/Ubuntu**

   ```
   # vi /etc/network/interfaces
   auto eth0
   iface eth0 inet static
   address 192.168.100.11
   netmask 255.255.255.0
   gateway 192.168.100.1
   network 192.168.100.0
   broadcast 192.168.100.255
   ```


3. 重启 NetworkManager 使之生效

   如果之前已经将 NetworkManager 禁用，那么请忽略此步操作。

   **RHEL/CentOS**

   ```
   # service NetworkManager restart
   ```

   **Fedora**

   ```
   # systemctl restart NetworkManager
   ```

   **Debian**

   ```
   # service network-manager restart
   ```

   **Ubuntu**

   ```
   # restart network-manager
   ```

   
