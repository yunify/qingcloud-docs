---
title: "Soft lockup说明"
date: 2021-02-19T00:38:25+09:00
description: Test description
weight: 10
draft: false
enableToc: false
---

## 背景说明

所谓，soft lockup就是说，这个bug没有让系统彻底死机，但是若干个进程（或者kernel thread）被锁死在了某个状态（一般在内核区域），很多情况下这个是由于内核锁的使用的问题。Linux内核对于每一个cpu都有一个监控进程，在技术界这个叫做watchdog（看门狗）。通过ps –ef | grep watchdog能够看见，进程名称大概是watchdog/X（数字：cpu逻辑编号1/2/3/4之类的）。这个进程或者线程每一秒钟运行一次，否则会睡眠和待机。这个进程运行会收集每一个cpu运行时使用数据的时间并且存放到属于每个cpu自己的内核数据结构。在内核中有很多特定的中断函数。这些中断函数会调用soft lockup计数，他会使用当前的时间戳与特定（对应的）cpu的内核数据结构中保存的时间对比，如果发现当前的时间戳比对应cpu保存的时间大于设定的阀值，他就假设监测进程或看门狗线程在一个相当可观的时间还没有执。Cpu软锁为什么会产生，是怎么产生的？如果Linux内核是经过精心设计安排的CPU调度访问，那么怎么会产生cpu软死锁？那么只能说由于用户开发的或者第三方软件引入，看我们服务器内核panic的原因就是qmgr进程引起。因为每一个无限的循环都会一直有一个cpu的执行流程（qmgr进程示一个后台邮件的消息队列服务进程），并且拥有一定的优先级。Cpu调度器调度一个驱动程序来运行，如果这个驱动程序有问题并且没有被检测到，那么这个驱动程序将会暂用cpu的很长时间。根据前面的描述，看门狗进程会抓住（catch）这一点并且抛出一个软死锁（soft lockup）错误。软死锁会挂起cpu使你的系统不可用。

## 解决办法

```
追加到配置文件中
echo 30 > /proc/sys/kernel/watchdog_thresh 

查看

[root@git-node1 data]# tail -1 /proc/sys/kernel/watchdog_thresh

30

临时生效

sysctl -w kernel.watchdog_thresh=30

```


