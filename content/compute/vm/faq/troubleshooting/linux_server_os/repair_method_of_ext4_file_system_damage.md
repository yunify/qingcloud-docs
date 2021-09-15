---
title: "Linux云服务器ext4文件系统损坏"
description: Test description
weight: 20
draft: false
enableToc: false
---

## 问题背景

ext4文件系统没有umount下来，之后做了fsck操作检查一致性，结果导致ext4文件mount不上(有时也会表现为导致目录变成了文件)，报错提示信息：mount: wrong fs type, bad option, bad superblock。

## 解决方法

1. 执行`e2fsck -f /dev/vdx`命令，检查文件系统。

> **说明**
>
> 做此步之前确保分区处于umount状态 ，另外确保磁盘已经做好数据备份。

2. 执行`fsck -t ext4 /dev/vdx`命令，修复文件系统。

3. 修复完成以后重新挂载测试。



