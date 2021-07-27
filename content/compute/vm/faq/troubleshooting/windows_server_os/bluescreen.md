---
title: "Windows云服务器蓝屏"
description: test
weight: 16
draft: false
---

现象：Windows云服务器使用过程中出现蓝屏

影响范围：Windows 10 1903包括这个之前的系统都有这个漏洞

1、蓝屏代码：0x0000007e

![bluescreen_1](/compute/vm/_images/bluescreen_1.png)

![bluescreen_2](/compute/vm/_images/bluescreen_2.png)

2.查看系统事件查看器有频繁的登陆审核日志，且系统错误日志附近可能会有temdd相关的日志。

![bluescreen_3](/compute/vm/_images/bluescreen_3.png)

3、Windows日志路径：C:\Windows\System32\winevt\Logs
系统日志：System.evtx
安全日志：Security.evtx
应用程序日志: Application.evtx
设置日志：Setup.evtx

蓝屏信息简略文件：C:\Windows\Minidump\ 根据文件生成日期排序，准备最近生成的1-2个文件即可。
蓝屏详细文件：C:\Windows\MEMORY.DMP 此文件通常很大且信息更丰富，深入分析时需要提供此文件（可暂不提供），操作系统每次蓝屏会用新的文件覆盖此文件，如果蓝屏次数频繁，建议重命名备份一次此文件，便于对比蓝屏原因。

4、辅助信息
系统版本：如Windows Server 2008 R2
蓝屏是否频繁：如一个星期前出现过一次
系统运行时间以及最近做过什么修改或最近安装过什么软件：如 系统运行了3个月，最近一个月都没修改过或装过其他软件。

将四种日志以及最近1-2个简略蓝屏文件打包，附带辅助信息提供出来。

5.处理方式：

针对最近出现较多的远程登录漏洞利用导致的蓝屏，用户可以先自行在Windows日志管理器查看安全日志，如果频繁出现非法登录日志，基本可以判断是远程登录漏洞导致的。

综合以上现象，基本可以判定系统遭受了CVE-2019-0708 漏洞攻击。

修复方法：https://cert.360.cn/warning/detail?id=0f64023e053a5753816ac129b5362607

补救措施：先按照文档里面打补丁，修复漏洞，另外，远程端口进行安全加固。

补救措施无效，可以重置系统，重置之后，将系统更新打上补丁。并针对远程端口做加固。