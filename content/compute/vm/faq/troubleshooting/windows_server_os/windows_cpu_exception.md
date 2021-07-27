---
title: "CPU使用率过高"
description: Test description
weight: 10


---

## 问题背景

**Windows 云服务器中CPU使用率高问题排除，可参考本文处理办法。**



## 问题排查

**1.在桌面底部点击 开始 菜单，选择 运行，打开运行框后，在框中输入`perfmon -res`，并点击 确定**

 ![ip_](../../../_images/windows_ip1.png)



**2.在资源监视器页面中，查看各进程是否有CPU使用率过高的现象。**

 ![ip_](../../../_images/windows_ip2.png)



**3.针对占用资源较高的进程，查看对应的进程ID和进程的程序名,定位进程ID后，在任务管理器服务中找到之前资源监视器查看到的异常进程。右键点击进程名称，选择打开文件位置，查看进程是不是恶意程序。**

​    ![ip_](../../../_images/windows_ip3.png)



## 问题处理

### CPU使用率异常

  **1.对于CPU异常使用率过高的情况，可能是被恶意病毒、木马入侵导致的。有时三方恶意程序可能会利用操作系统的svchost.exe或者Tcpsvcs.exe来伪装，引起高CPU的占用。您需要手动对异常进程进行查杀。**



 **2.若您无法判断进程是否为病毒或木马，建议将进程名称在网上进行搜索后确认。另外，建议您进行进程删除操作前，提前创建备份。**



**3.使用商业版杀毒软件，或使用微软免费安全工具Microsoft Safety Scanner，在安全模式下进行扫描杀毒。**

**Microsoft Safety Scanner下载链接如下：**

[https://docs.microsoft.com/zh-cn/windows/security/threat-protection/intelligence/safety-scanner-download?spm=a2c4g.11186623.2.22.232f52beJo7DUS](https://docs.microsoft.com/zh-cn/windows/security/threat-protection/intelligence/safety-scanner-download?spm=a2c4g.11186623.2.22.232f52beJo7DUS)

**4.运行Windows Update来安装最新的微软安全补丁。**

