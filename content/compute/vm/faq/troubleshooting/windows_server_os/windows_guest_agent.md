---
title: "Windows 云服务器监控服务异常"
weight: 18
draft: false
enableToc: false
---

## 问题现象

部分用户反馈在 Windows 云服务器详情页面查询监控信息时，无法获取到硬盘的数据，显示为“没有数据”。排查发现大部分为云服务器内部服务 QingCloud Guest Agent 服务没有运行或异常导致。

![](../../../_images/windows_guest_agent_1.png)

## 处理方法

### 检查 QingCloud Guest Agent 服务

在**开始** > **运行** > **services.msc**，打开服务管理，可以看到 QingCloud Guest Agent 服务，可以重启该服务。

![](../../../_images/windows_guest_agent_2.png)

![](../../../_images/windows_guest_agent_3.png)


### 拷贝文件并运行服务

如果重启后无法恢复，或是未查询到该服务，可以通过远程桌面的方式在其他该服务正常运行的 Windows 云服务器中拷贝相应的文件，并运行服务。

服务目录为 C:\Program Files (x86)\QingCloud\Guest Agent\GuestAgent.exe 。



