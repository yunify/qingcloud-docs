---
title: "LVM逻辑卷VG卷组丢失的处理流程"
description: test
draft: false找回
---

LVM是通过将物理的磁盘或磁盘分区创建成物理卷（PV），多个物理卷添加创建为一个卷组（VG），然后在卷组的基础上创建逻辑卷（LVM），进而在逻辑卷上去创建文件系统，这种在硬盘或分区和文件系统之下的磁盘管理机制大大提高了对磁盘管理的灵活性，也是当前企业Linux环境下实现对磁盘分区管理的方式。
但在实际应用管理中，常常因为误操作，系统重启等原因造成卷组丢失，逻辑卷无法挂载等异常的故障，本文将逻辑卷故障处理过程给大家分享因为系统重启原因造成卷组丢失的恢复方法。

### 原因分析

查看/etc/lvm/archive/VG名文件中PV的ID号，与pvdisplay /dev/vdc命令中显示的UUID号不一致，初步判断是因为系统重启后，/dev/vdc的UUID号发生变化了。导致VG无法找到对应的物理卷。

## VG找回步骤

### 1.进行备份

为了防止数据丢失或破坏，首先对/dev/vdc设备的数据进行备份。

```
dd if=/dev/vdc of=/data/vdc.img
```

### 2.查看PV的UUID

Linux的LVM会默认存储用户对PV/VG/LV的每一步操作，并自动把当前的VG的信息备份到一个文件里面，位置是/etc/lvm/backup/VG名或者/etc/lvm/archive/VG名。这个文件里面记录的东西大概跟vgdisplay/pvdisplay/lvdisplay输出的信息一致，里面也包括了对于恢复VG信息至关重要的PV UUID

```
cat /etc/dev/vdc/vgtest_00002-645033136.vg
```

![vg_info](../../_images/vg_info.png)

### 3.创建PV

使用原来的PV UUID来创建PV，并使用自动备份的文件来恢复信息

```
pvcreate /dev/vdc -u qaTzJn-Hdgc-aeC5-EUT0-H1l1-tPiA-rYXnDx --restorefile /etc/lvm/archive/vgtest_00002-645033136.vg
```

### 4.恢复VG

```
vgcfgrestore -f archive/vgtest_00002-645033136.vg vgtest
```

### 5.激活VG

```
vgchange -ay vgtest
```

### 6.挂载

```
mount /dev/vgtest/lvtest
```

挂载之后可以让业务方确认数据是否已恢复。