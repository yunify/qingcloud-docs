---
title: "Windows Server 安装 AD 域服务报错：请求添加或删除指定服务器上的功能失败"
description: test
weight: 6
draft: false
---



## 问题背景
用户有多台云服务器，日常管理云服务器账户和权限较为繁琐，想要通过 Active Directory 服务来进行账户管理。但是云服务器安装时报错“请求添加或删除指定服务器上的功能失败。无法完成操作，因为指定的服务器需要重新启动。”
![](../../../_images/windows_install_ad_error1.png)

## 解决办法

### 1.网络连接
除了 IPV6和多路传送器协议其他都要勾选上（保证网卡属性中，“网络客户端”，“网络的文件和打印机共享”都勾上）
![](../../../_images/windows_install_ad_error2.png)
### 2.开启服务
有几个服务要设为自动启动，并更改后需要重启服务器生效。  
控制面板->管理工具-> 服务  
“Server” Window 共享的服务端依赖此服务，域相关组件依赖此服务。  
“Workstation”  
“Computer Browser”(Windows Server 2012开始没有这个服务)。  
“TCP/IP NetBIOS Helper”  
`例：Server 服务开启方式`  
![](../../../_images/windows_install_ad_error3.png)

### 3.修改 client 端虚机 sid (`非必须步骤，如出现以下文档类似的错误则需要操作此步`)
如果域 server 端和 client 端都在云平台上，或者多个 client 都在云上需要操作：
[https://www.heelpbook.net/2019/microsoft-changing-sid-of-cloned-vms/](https://www.heelpbook.net/2019/microsoft-changing-sid-of-cloned-vms/)

### 4.云服务器是否使用了防火墙
包括云平台安全组，云服务器系统防火墙，链路上经过的防火墙，如果使用了需要开通下面端口。建议打开所有端口，待连通后再关闭其他端口
需要开放的端口可以参考文档：[https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/dd772723(v=ws.10)](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/dd772723(v=ws.10))
|协议|端口|
|-----|----------------------|
|TCP|389、636、3268、3269、88、53、445、25、135、5722、464、9389、139|
|UDP|389、88、53、445、123、464、138、67、2535、137|

### 5、重启云服务器，再次安装进行验证
![](../../../_images/windows_install_ad_error4.png)