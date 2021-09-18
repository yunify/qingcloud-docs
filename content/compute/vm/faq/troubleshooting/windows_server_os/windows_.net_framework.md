---
title: "无法安装.NET Framework 3.5"
date: 2021-04-09T21:37:25+09:00
description: Test description
weight: 10
draft: false
enableToc: false

---

## 问题背景

安装 .NET Framework 3.5 服务出现找不到源文件报错提示，本示例为 Windows Server 2016系统 版本。

 ![.net_](../../../_images/windows_.net1.png)

## 解决办法

1. 登录到云服务器，开始菜单中找到PowerShell，右键单击选择 以**管理员身份运行**。

2. 修改注册表，将更新源设置为Windows Update，执行如下命令

   ```
   Set-ItemProperty -Path 'HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU' -Name UseWUServer -Value 0
   
   Restart-Service -Name wuauserv
   ```

3. 如果执行命令时出现 无法启动服务 Windows Update 报错，需在服务中开启Windows Update服务，再次执行`Restart-Service -Name wuauserv` 命令。

    ![.net_](../../../_images/windows_.net2.png)

    ![.net_](../../../_images/windows_.net3.png)

    ![.net_](../../../_images/windows_.net3.png)

    ![.net_](../../../_images/windows_.net4.png)

3. 通过 PowerShell 安装 .NET Framework ，执行`Install-WindowsFeature Net-Framework-Core`命令，并检查安装服务。

    ![.net_](../../../_images/windows_.net5.png)

    ![.net_](../../../_images/windows_.net6.png)