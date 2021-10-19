---
title: "Linux 云服务器中毒排查思路"
date: 2021-05-28T00:38:25+09:00
description: Test description
weight: 40
draft: false
enableToc: false
---

当我们在控制台监控中发现，CPU 或者内存跑满了的现象时，我们需要进入主机内部排查一下

## 排查方法

1. 使用 top 命令查看是否有特别吃 CPU 和内存的进程

2. 如果使用 top 命令找不到占用 CPU 或者内存较多的进程，可使用 busybox 找出隐藏的进程

   ```
   wget https://oc-storage.pek3a.qingstor.com/busybox   #下载busybox
   chmod +x busybox                                     #给busybox增加运行权限
   ./busybox top -b -n 1                                #使用busybox查看进程占用资源情况
   ```

3. 使用 ps aux | grep “进程名” 命令查看对应进程的信息以及进程文件所处位置

4. 查看 /etc/passwd 是否有异常或隐藏用户，usermod -L xxx 禁用该用户

5. 查看系统日志  

| 日志路径 | 含义 |
|----------|----------------------------------------------------------------------------|
| /var/log/messages | 记录 Linux 内核消息及各种应用程序的公共日志信息，包括启动、IO 错误、网络错误、程序故障等。对于未使用独立日志文件的应用程序或服务，一般都可以从该文件获得相关的事件记录信息|
| /var/log/cron | 记录 crond 计划任务产生的事件消息 |
| /varlog/dmesg | 记录 Linux 系统在引导过程中的各种事件信息 |
| /var/log/maillog | 记录进入或发出系统的电子邮件活动 |
| /var/log/lastlog | 最近几次成功登录事件和最后一次不成功登录事件 |
| /var/log/rpmpkgs | 记录系统中安装各 rpm 包列表信息 |
| /var/log/secure | 记录用户登录认证过程中的事件信息。有可能是  /var/log/auth.log |
| /var/log/wtmp | 记录每个用户登录、注销及系统启动和停机事件 |
| /var/log/utmp | 记录当前登录的每个用户的详细信息 |

> **注意**
>
> lastlog,wtmp,utmp 是二进制文件不可以直接查看，使用命令 last 或 lastlog，w，users，who等命令查看 

6. 使用 crontab -l 查看当前账户定时任务，-u 可指定账户