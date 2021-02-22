---
title: "windows扩展卷"
date: 2021-02-19T00:38:25+09:00
description: Test description
weight: 60
draft: false
enableToc: false
---

问题：创建系统盘超过50G大小的windows主机，登录主机后发现系统盘大小是50G，并非实际创建的值。

处理方案：开始-运行-diskmgmt.msc打开磁盘管理器，发现有未分配的磁盘容量，右键C盘-扩展卷即可。
