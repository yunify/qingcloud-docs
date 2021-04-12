---
title: "OpenVPN添加虚拟网卡"
description: test
draft: false
weight: 20
---

## 问题背景

用户在安装openvpn时，默认会创建一块虚拟网卡，若需要同时访问多个OpenVPN server，会有相应报错 “All TAP-Windows adapters on this system are currently in use.”，此时需要创建多块虚拟网卡来访问。

![](../openvpn_add_virtual_network_adapter/openvpn_add_virtual_network_adapter_1.png)

## 操作步骤

进入 C:\Program Files\TAP-Windows\bin 目录，以管理员身份运行 addtop.bat 文件

![](../openvpn_add_virtual_network_adapter/openvpn_add_virtual_network_adapter_2.png)

显示如下界面则已创建成功，可以在适配器中查看创建的网卡 TAP-Windows Adapter V9 #2。

![](../openvpn_add_virtual_network_adapter/openvpn_add_virtual_network_adapter_3.png)

![](../openvpn_add_virtual_network_adapter/openvpn_add_virtual_network_adapter_4.png)

此时，可以连接多个 VPN Server。

![](../openvpn_add_virtual_network_adapter/openvpn_add_virtual_network_adapter_5.png)

