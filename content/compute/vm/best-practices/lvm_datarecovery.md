---
title: "LVM VG丢失如何找回"
description: test
draft: false找回
---

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

挂载之后查看数据已恢复