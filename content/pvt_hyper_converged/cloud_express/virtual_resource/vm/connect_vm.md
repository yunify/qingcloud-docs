---
title: "连接虚拟机"
description: 本小节主要介绍青立方® 超融合易捷版 连接虚拟机。 
keywords: 青立方® 超融合易捷版，连接虚拟机
weight: 20
collapsible: false
draft: false
---



连接虚拟机的方式根据不同的系统类型 (Linux、Windows) 有不同的连接方法。

## 浏览器 Web 连接

1. 登录 青立方® 超融合易捷版。
2. 选择 **虚拟资源**，进入虚拟机管理列表。
3. 点击 **连接远程桌面**图标，弹出远程连接 ( VNC ) 的会话窗口。
   
   ![浏览器 Web 连接](../../../_images/web_connect.png)

4. 输入设置的用户名和密码即可。

   > **注意**
   >
   > 若主机不接受您的密码，您可以先关闭主机，再修改主机密码。
   
   ![浏览器 Web 连接](../../../_images/web_connect2.png)

## Linux 主机连接

### 通过 SSH Terminal 终端连接

若 Linux 主机网络与终端设备在同一内网环境中，可直接通过命令 `ssh root@IP -p 22` 和 root 用户密码来登录虚拟机。

> **注意**
>
> ubuntu 主机的默认登录用户为 ubuntu 而非 root 用户。

### 通过 SSH 密钥连接

相对于用户名密码方式，密钥方式拥有更强的安全性，也可以很大程度阻止暴力破解的发生。

目前常用的密钥都是非对称性的加密方式，主机内置公钥，而用户则拥有私钥。由于采用非对称加密，入侵者试图通过公钥去破解私钥难度会远远超出密码的破解。

### 通过第三方软件连接

除了通过 VNC 连接外，您也可以通过第三方软件连接至虚拟机，常见的软件有 PuTTY 、Xshell。

例如使用 Putty，在 Session 页面输入 IP 地址，点击 **Open**。输入用户名和密码即可登录。

![Linux 主机连接](../../../_images/linux_connect.png)

## Windows 主机连接

从安全考虑，平台上的 Windows 主机默认关闭了远程登录。

您首先需要通过浏览器 Web 方式登录到主机，并开启远程登录功能。

### 第一步：Windows Server 开启远程登录

1. 浏览器打开 VNC，连接 Windows Server。
2. 在 Web 登录页面，点击左上角 `Ctrl-Alt-Del` ，并输入设置的密码。

   ![Windows 主机连接](../../../_images/win_connect.png)

3. 同意内部网络共享。

4. 登录后会弹出网络共享的界面，点击 **是**，允许VPC内部的网络。

   ![Windows 主机连接](../../../_images/win_connect2.png)

5. 打开系统属性。
   
   在 Windows 主机中，点击下方文件管理器，依次点击 此电脑 - 计算机 - 系统属性。

   ![Windows 主机连接](../../../_images/win_connect3.png)

6. 允许远程桌面连接。
   
   点击**远程设置** ，在远程桌面处选择 允许远程桌面连接。

   ![Windows 主机连接](../../../_images/win_connect4.png)

### 第二步：Windows 远程桌面连接

通过 Windows 系统自带的 远程桌面连接 连接 Windows Server ，然后输入用户名密码即可。

![Windows 主机连接](../../../_images/win_connect5.png)
