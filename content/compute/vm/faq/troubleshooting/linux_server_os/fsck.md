---
title: "文件系统扫描工具 fsck"
description: Test description
weight: 40
draft: false
enableToc: false
---

文件系统扫描工具有 fsck、fsck.ext2、fsck.ext3、fsck.ext4、fsck.msdos、fsck.cramfs、fsck.ext4dev、fsck.vfat。需要根据不同的文件系统来调用不同的扫描工具，比如 ext3 的文件系统使用 fsck.ext3，ext4 文件系统使用 fsck.ext4 等。

注意：fsck 扫描文件系统时一定要在单用户模式、修复模式或把设备 umount 后进行。建议在单用户模式下运行。如果扫描正常运行中的系统，会造成系统文件损坏。

下面简单介绍下：fsck.ext4

## 基本信息

### 语法

```
fsck.ext4[必要参数][选择参数][设备代号]
```

### 执行权限

```
root
```

### 功能

```
针对ext4型文件系统进行检测修复
```

### 必要参数

```
-a 非互交模式，自动修复
-c 检查是否存在有损坏的区块。
-C<反叙述器> fsck.ext3命令会把全部的执行过程，都交由其逆向叙述，便于监控程序
-d 详细显示命令执行过程
-f 强制进行检查
-F 检查文件系统之前，先清理该保存设备块区内的数据
-l<损坏区块文件> 把文件中所列出的损坏区块，加入标记
-L<损坏区块文件> 清除所有损坏标志，重新标记
-n 非交互模式,把欲检查的文件系统设成只读
-P<数字>  设置fsck.ext2命令所能处理的inode大小为多少
-r 交互模式
-R 忽略目录
-s 顺序检查
-S 效果和指定“-s”参数类似
-t  显示fsck.ext2命令的时序信息。
-v 显示详细的处理过程
-y 关闭互动模式
```

### 选择参数

```
-b<分区第一个磁区地址>  指定分区的第一个磁区的起始地址/Super Block
-B<区块大小>  设置该分区每个区块的大小
-I  设置欲检查的文件系统，其inode缓冲区的区块数目
-V 显示版本信息
```

## 操作步骤

### 通过 lsblk 指令确认文件系统

```
[root@i-0026uq32 ~]# lsblk -f
NAME   FSTYPE LABEL      UUID                                 MOUNTPOINT
vda                                                           
└─vda1 xfs               9cff3d69-3769-4ad9-8460-9c54050583f9 /
vdb    swap   YUNIFYSWAP b800ddd7-2e70-4b4a-b2e9-5c71ed6bff1f [SWAP]
vdc                                                           
└─vdc1 ext4              0c111bfb-e99f-45fd-a400-5b948b5efd25 /mnt/vdc
```

### 检查 ext4 类型的分区 /dev/vdc1

```
[root@i-0026uq32 ~]# umount /dev/vdc1
[root@i-0026uq32 ~]# fsck.ext4 -ft /dev/vdc1
e2fsck 1.42.9 (28-Dec-2013)
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/vdc1: 11/655360 files (0.0% non-contiguous), 83137/2621184 blocks
Memory used: 376k/0k (65k/312k), time:  0.23/ 0.02/ 0.00
I/O read: 6MB, write: 1MB, rate: 26.20MB/s
```

### 修复一般文件系统问题

1. 备份数据

2. umount 卸载硬盘

3. fsck 修复硬盘

```
fsck.ext4  -y  /dev/vdc1
```

4. mount 挂载硬盘，检查是否修复

