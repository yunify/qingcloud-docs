---
title: "文件系统只读的处理方法"
description: Test description
weight: 50
draft: false
enableToc: false
---

## 问题背景

在 Linux 的使用过程中，有时会遇到文件系统只读的情况，写入时出现 “Read-only file system” 的报错，无法进行写操作。

![](../../../_images/the_solution_of_read_only_file_system_1.png)

## 处理方法

### 1.备份数据

右键云服务器---创建备份。

![](../../../_images/the_solution_of_read_only_file_system_2.png)

![](../../../_images/the_solution_of_read_only_file_system_3.png)

### 2.重新挂载

数据盘只读，可以重新挂载数据盘，执行下述命令。

```shell
mount -o remount,rw /dev/vdc
```

### 3.使用 fsck 命令修复

#### 1)查看只读文件位置

使用 mount 命令查看只读文件位置.

```shell
mount
```

![](../../../_images/the_solution_of_read_only_file_system_4.png)

#### 2)取消挂载硬盘

```shell
umount /dev/vdc
```

#### 3)使用 fsck 命令修改硬盘

```shell
fsck.ext4 -y /dev/vdc
```

#### 4)重启云服务器并重新挂载

```shell
#reboot
mount /dev/vdc /mnt
```

