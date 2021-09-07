---
title: "Windows 查看本地登录日志"
weight: 17
draft: false
enableToc: false
---
## 问题描述
Windows 云服务器登录异常，排查登录日志可参考本操作。

## 操作步骤

本示例以操作系统版本为 Windows Server 2019 。

1.登录云服务器进入桌面。


2.选择 开始 > 管理工具 > 事件查看器  

![windows_log](/compute/vm/_images/Windows_log2.png)

3.打开  Windows 日志 > 安全 > 筛选当前日志 

![windows_log](/compute/vm/_images/Windows_log3.png)

4.点击事件查看事件属性，可看到该时间的登录用户、进程、时间等信息。

.![windows_log](/compute/vm/_images/Windows_log4.png)
