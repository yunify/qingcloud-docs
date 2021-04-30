---
title: "屏蔽Swap分区"
description: test
draft: false
---

在部署业务时，会遇到使用脚本来部署的场景，如果此时业务部署脚本将程序部署在/dev/vdb或者/dev/sdb，会与云服务器的Swap分区发生冲突，此时我们需要临时屏蔽Swap分区来避免冲突。

## 1 找到Swap的盘符

```bash
#fdisk -l
	...
	Disk /dev/vdb: 1 GiB, 1073741824 bytes, 2097152 sectors
	...
```

## 2 找到Swap block的pci

```bash
# ls -lht /sys/block/vdb*
	lrwxrwxrwx 1 root root 0 Mar  3 22:49 /sys/block/vdb -> ../devices/pci0000:00/0000:00:08.0/virtio3/block/vdb
```

## 3 关闭Swap
```bash
# swapoff -a
# free -m
				  total        used        free      shared  buff/cache   available
	Mem:            991          49         727           5         214         788
	Swap:             0           0           0
```

## 4 移除PCI
```bash
# echo 1 > /sys/bus/pci/devices/0000\:00\:08.0/remove
# free -m
				  total        used        free      shared  buff/cache   available
	Mem:            991          50         711           5         230         787
	Swap:             0
```

## 5 确认Swap block已移除
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