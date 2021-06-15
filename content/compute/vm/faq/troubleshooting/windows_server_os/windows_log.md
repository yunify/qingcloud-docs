---
title: "查看Windows云服务器系统日志"
description:
draft: false
weight: 13
---

Windows日志路径：C:\Windows\System32\winevt\Logs

系统日志：System.evtx(记录操作系统组件产生的事件，主要包括驱动程序、系统组件和应用软件的崩溃以及数据丢失错误等。系统日志中记录的时间类型由Windows NT/2000操作系统预先定义。)

安全日志：Security.evtx(记录系统的安全审计事件，包含各种类型的登录日志、对象访问日志、进程追踪日志、特权使用、帐号管理、策略变更、系统事件。安全日志也是调查取证中最常用到的日志。默认设置下，安全性日志是关闭的，管理员可以使用组策略来启动安全性日志，或者在注册表中设置审核策略，以便当安全性日志满后使系统停止响应。)

应用程序日志: Application.evtx(包含由应用程序或系统程序记录的事件，主要记录程序运行方面的事件，例如数据库程序可以在应用程序日志中记录文件错误，程序开发人员可以自行决定监视哪些事件。如果某个应用程序出现崩溃情况，那么我们可以从程序事件日志中找到相应的记录，也许会有助于你解决问题。)

设置日志：Setup.evtx

1.开始-控制面板-系统和安全-查看事件日志

![windows_log_1](/compute/vm/_images/windows_log_1.png)

![windows_log_2](/compute/vm/_images/windows_log_2.png)

![windows_log_3](/compute/vm/_images/windows_log_3.png)

2.可以通过DOS命令来打开"事件查看器"：按下组合键win+r,然后输入"eventvwr.exe",然后回车就可以打开了。

![windows_log_4](/compute/vm/_images/windows_log_4.png)

![windows_log_3](/compute/vm/_images/windows_log_3.png)