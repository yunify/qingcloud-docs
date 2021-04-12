---
title: "云服务器遇到ext4文件系统损坏时该如何修复?"
date: 2021-03-28T00:38:25+09:00
description: Test description
weight: 20
draft: false
enableToc: false
---



## 问题背景及现象

ext4文件系统没有umount下来，之后做了fsck操作检查一致性，结果导致ext4文件mount不上(有时也会表现为导致目录变成了文件)，报错提示信息：mount: wrong fs type, bad option, bad superblock。

## 处理方法

### 1、检查文件系统

### 备注：做此步之前确保分区处于umount状态 ，另外确保磁盘已经做好数据备份。

```
e2fsck -f /dev/vdx
```

### 2、执行以下命令，修复文件系统

```
fsck -t ext4 /dev/vdx
```

### 3、修复完成以后重新挂载测试




