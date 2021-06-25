---
title: "扩容磁盘后，实际使用空间并未增加"
description: Test description
weight: 5

---

## 问题背景

客户创建系统盘超过50G大小的Windows云服务器，登录云服务器后发现系统盘空间大小是50G，并非实际创建时指定的值。

## 处理方案

### 1.打开磁盘管理，请参考以下步骤。

开始-运行-diskmgmt.msc打开磁盘管理器，如截图所示。

<img src="../../../_images/homer/disk_01.png" width="80%" height="60%">

### 2.发现有未分配的磁盘容量，右键C盘-扩展卷，请参考以下的流程处理即可。

<img src="../../../_images/homer/disk_02.png" width="80%" height="60%">

<img src="../../../_images/homer/disk_03.png" width="80%" height="60%">

<img src="../../../_images/homer/disk_04.png" width="80%" height="60%">

<img src="../../../_images/homer/disk_05.png" width="80%" height="60%">

<img src="../../../_images/homer/disk_06.png" width="80%" height="60%">