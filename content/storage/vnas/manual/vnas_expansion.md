---
title: "Virtual NAS 云硬盘扩容"
date: 2020-08-20T17:08:56+09:00
description: test
weight: 20
draft: false
---


>>扩容存在风险，务必在控制台对云硬盘做一下备份之后再进行扩容操作

### 一、解绑

将需要扩容的硬盘从NAS服务器上解绑，并点击【应用修改】

![VirtualNAS](/storage/vnas/manual/_images/vnas_expansion1.png)

### 二、备份

将云硬盘做一个备份，以免扩容失败对数据造成损坏（重要）

![VirtualNAS](/storage/vnas/manual/_images/vnas_expansion2.png)

### 三、挂载

将该云硬盘加载到一个Linux云服务器

![VirtualNAS](/storage/vnas/manual/_images/vnas_expansion3.png)

### 四、扩容

控制台右键云硬盘-扩容

![VirtualNAS](/storage/vnas/manual/_images/vnas_expansion4.png)

登陆第三步挂载的云服务器，并执行如下命令

```bash
# fdisk -l
····
Disk /dev/vdc: 21.5 GB, 21474836480 bytes, 41943040 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```
我们看到云硬盘物理容量已经变为21.5GB，接下来要进行resize操作

```bash
# e2fsck -f  /dev/vdc
e2fsck 1.42.9 (28-Dec-2013)
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/vdc: 11/655360 files (0.0% non-contiguous), 79663/2621440 blocks
# resize2fs /dev/vdc
resize2fs 1.42.9 (28-Dec-2013)
Resizing the filesystem on /dev/vdc to 5242880 (4k) blocks.
The filesystem on /dev/vdc is now 5242880 blocks long.
```

### 五、重新绑定到NAS服务器

从Linux云服务器上卸载硬盘后重新加到NAS服务器上，点击【应用修改】后完成整个扩容过程。

![VirtualNAS](/storage/vnas/manual/_images/vnas_expansion5.png)

![VirtualNAS](/storage/vnas/manual/_images/vnas_expansion6.png)
