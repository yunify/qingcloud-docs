---
title: "Linux 恢复误删除分区"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false
---

> 磁盘分区误删除后，再没有重启云服务器的情况下，使用 TestDisk 工具恢复分区

## 故障复现

1. 磁盘分区

   ![image-20210525161506985](../_images/linux_restore_partition.assets/image-20210525161506985.png)

2. 删除分区

   ![image-20210525161759485](../_images/linux_restore_partition.assets/image-20210525161759485.png)

   如图，当前`/dev/vdc`磁盘只剩下`vdc3`分区，现在按照下面的步骤进行恢复。

## 使用 TestDisk 工具修复

> 更多用法详见TestDisk官网：https://www.cgsecurity.org/wiki/TestDisk

### 安装

Ubuntu：

```bash
apt-get install testdisk
```

CentOS 6,7

```bash
yum install -y epel-release
yum install -y testdisk
```

### 恢复

1. 输入需要恢复分区的磁盘，开始修复

```bash
testdisk /dev/vdc
```

2. 选择修复磁盘，如下图为 /dev/vdc，选择下面的[ Proceed  ]，回车；

   ![image-20210525175529167](../_images/linux_restore_partition.assets/image-20210525175529167.png)

3. 选择分区表类型，这里是[ Intel  ]，回车；

   ![image-20210525175717075](../_images/linux_restore_partition.assets/image-20210525175717075.png)

4. 选择[ Analyse  ]，回车；

   ![image-20210525175812033](../_images/linux_restore_partition.assets/image-20210525175812033.png)

5. 此时只有第三个分区，选择[ Quick Search ] ，回车(这里保险起见可以先选择 Backup 备份，避免操作失误)；

   ![image-20210525175955035](../_images/linux_restore_partition.assets/image-20210525175955035.png)

   可能会弹出一个确认信息，[ Continue  ]回车确认

6. TestDisk 分析出磁盘的分区开始块、结束块等信息，选择第一个分区，回车；

   ![image-20210525180410198](../_images/linux_restore_partition.assets/image-20210525180410198.png)

7. 选择[  Write  ]回车，将原有的分区信息再写回到磁盘中；

   ![image-20210525180518920](../_images/linux_restore_partition.assets/image-20210525180518920.png)

   之后输入`Y`确认，然后会弹出提示信息，重启生效，回车确认

8. 按`Q`或者选择[ Quit  ]退出，`lsblk`命令查看当前磁盘分区信息。

   ![image-20210525180931850](../_images/linux_restore_partition.assets/image-20210525180931850.png)

   可以看到被删除的分区都恢复了。