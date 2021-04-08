---
title: "删除swap分区"
date: 2020-04-02T17:08:56+09:00
description: test
draft: false
---

## 1 找到swap的盘符

```bash
#fdisk -l
	...
	Disk /dev/vdb: 1 GiB, 1073741824 bytes, 2097152 sectors
	...
```

## 2 找到swap block的pci

```bash
# ls -lht /sys/block/vdb*
	lrwxrwxrwx 1 root root 0 Mar  3 22:49 /sys/block/vdb -> ../devices/pci0000:00/0000:00:08.0/virtio3/block/vdb
```

## 3 关闭swap
```bash
# swapoff -a
# free -m
				  total        used        free      shared  buff/cache   available
	Mem:            991          49         727           5         214         788
	Swap:             0           0           0
```

## 4 移除pci
```bash
# echo 1 > /sys/bus/pci/devices/0000\:00\:08.0/remove
# free -m
				  total        used        free      shared  buff/cache   available
	Mem:            991          50         711           5         230         787
	Swap:             0
```

## 5 确认swap block已移除
```bash
# fdisk -l
	Disk /dev/vda: 20 GiB, 21474836480 bytes, 41943040 sectors
	Units: sectors of 1 * 512 = 512 bytes
	Sector size (logical/physical): 512 bytes / 512 bytes
	I/O size (minimum/optimal): 512 bytes / 512 bytes
	Disklabel type: dos
	Disk identifier: 0x543017d3

	Device     Boot Start      End  Sectors Size Id Type
	/dev/vda1  *     2048 41940991 41938944  20G 83 Linux
```

>注释：这种方法，重启后会重新加回来