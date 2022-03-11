---
title: "网卡 MAC/IP 绑定"
description: 本章节介绍如何使用网卡 MAC/IP 绑定功能
keyword: 云服务器,网卡,MAC/IP
draft: false
weight: 30
---

为了防止从主机系统里修改 MAC 或 IP地址，您可以使用网卡 MAC/IP 绑定功能。网卡 MAC/IP 绑定后，若在主机系统里修改了网卡的 MAC 或者 IP 地址，则主机与网卡不通。

网卡 MAC/IP 绑定功能依赖于安全组，虚拟机在绑定安全组后方可生效，否则不生效。

## 前提条件

已获取管理控制台的账号和密码。

## 操作步骤

1. 登录管理控制台。

2. 选择**产品与服务** > **计算** > **云服务器**，进入云服务器页面。

3. 在左侧导航栏中，点击**网卡**，进入**网卡**页面。

4. 点击**鼠标右键**，弹出菜单窗口。

   <img src="/compute/vm/_images/vm_nic_vm_mac.png" style="zoom:50%;" />

5. 点击**网卡 MAC/IP 绑定** > **绑定**，弹出提示信息窗口。

   <img src="/compute/vm/_images/vm_nic_vm_mac_prompt.png" style="zoom:50%;" />

6. 点击**确认**，完成网卡 MAC/IP 绑定的操作。

   
