---
title: "初始化云硬盘"
date: 2020-01-30T00:38:25+09:00
description: Test description
draft: false
enableToc: false
keyword: 青云
---

## Windows 操作系统

### 初始化云硬盘
#### 硬盘容量小于 2TB 的操作办法

**1、打开磁盘管理器**
开始---运行--`diskmgmt.msc`

![图片](/storage/disk/quickstart/_images/image.png)

![图片](/storage/disk/quickstart/_images/image-1568774733057.png)

**2、选择磁盘分区类型，默认为 MBR**

![图片](/storage/disk/quickstart/_images/image-1568774741667.png)

**3、如果磁盘是脱机状态，通过以下办法联机，联机以后才能对磁盘进行操作**

![图片](/storage/disk/quickstart/_images/image-1568774749595.png)

**4、右键单击磁盘上未分配的区域，选择【新建简单卷】，然后按照提示操作即可**

![图片](/storage/disk/quickstart/_images/image-1568774761495.png)

![图片](/storage/disk/quickstart/_images/image-1568774795226.png)

![图片](/storage/disk/quickstart/_images/image-1568774821627.png)

**5、分配驱动器编号**

![图片](/storage/disk/quickstart/_images/image-1568774827510.png)

**6、勾选快速格式化硬盘**

![图片](/storage/disk/quickstart/_images/image-1568774847721.png)

![图片](/storage/disk/quickstart/_images/image-1568774852147.png)

![图片](/storage/disk/quickstart/_images/image-1568774858166.png)

#### 硬盘容量大于 2TB 的操作办法

**1、打开磁盘管理器**

开始---运行--`diskmgmt.msc`

![图片](/storage/disk/quickstart/_images/image-1568774865290.png)

**2、选择 GPT 分区**

![图片](/storage/disk/quickstart/_images/image-1568774869266.png)

**3、右键单击磁盘上未分配的区域，选择【新建简单卷】，然后按照提示操作即可**

![图片](/storage/disk/quickstart/_images/image-1568774875330.png)

![图片](/storage/disk/quickstart/_images/image-1568774880424.png)

![图片](/storage/disk/quickstart/_images/image-1568774886315.png)

![图片](/storage/disk/quickstart/_images/image-1568774891106.png)

**4、选择磁盘分区编号**

![图片](/storage/disk/quickstart/_images/image-1568774896383.png)

**5、勾选快速格式化硬盘（请注意，此操作会清空磁盘所有数据）**

![图片](/storage/disk/quickstart/_images/image-1568774901733.png)

![图片](/storage/disk/quickstart/_images/image-1568774905575.png)

![图片](/storage/disk/quickstart/_images/image-1568774912493.png)

![图片](/storage/disk/quickstart/_images/image-1568774917148.png)

### 扩容云硬盘

**1、打开磁盘管理器**

开始---运行--`diskmgmt.msc`

**2、将磁盘的状态设置为脱机**

![图片](/storage/disk/quickstart/_images/image-1568774923025.png)

**3、登录控制台，从云服务器上卸载硬盘，直至硬盘状态为可用**

![图片](/storage/disk/quickstart/_images/image-1568774930715.png)

**4、右键磁盘资源 id ，扩容磁盘容量并提交修改**

![图片](/storage/disk/quickstart/_images/image-1568774933959.png)

![图片](/storage/disk/quickstart/_images/image-1568774937515.png)

**5、将扩容后的磁盘加载到云服务器**

**6、打开磁盘管理器，可以看到有未分配的磁盘容量**

![图片](/storage/disk/quickstart/_images/image-1568774941054.png)

### 扩展卷

右键单击磁盘分区，选择【扩展卷】；根据扩展卷向导的指引完成扩展卷操作。完成后新增的数据盘空间将会合入原有卷中。

![图片](/storage/disk/quickstart/_images/image-1568774945196.png)

![图片](/storage/disk/quickstart/_images/image-1568774955296.png)

![图片](/storage/disk/quickstart/_images/image-1568774960724.png)

![图片](/storage/disk/quickstart/_images/image-1568774966465.png)

![图片](/storage/disk/quickstart/_images/image-1568774974045.png)

## linux操作系统
### 初始化云硬盘
请根据您实际使用场景选择初始化方式

1、若整块硬盘只呈现为一个独立的分区，推荐直接对磁盘进行初始化 

2、若整块硬盘需要呈现为多个逻辑分区（即存在多个逻辑盘），则您需要先进行分区操作，然后对相应的分区创建文件系统


#### 直接初始化指南

**1、登录到云服务器**

**2、使用 lsblk 命令查看磁盘设备名**

[root@i-oemhrgx8 ~]# `lsblk -l`

NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT

sdb    8:16   0  10G  0 disk 

sda    8:0    0  20G  0 disk 

sda1   8:1    0  20G  0 part /

sdd    8:48   0   1G  0 disk [SWAP]


**3、使用 mkfs 命令对磁盘进行格式化**

[root@i-oemhrgx8 ~]# `mkfs.ext4 /dev/sdb`

![图片](/storage/disk/quickstart/_images/image-1568774979615.png)

**4、使用 lsblk 命令查看格式化后的分区的信息**

![图片](/storage/disk/quickstart/_images/image-1568774983933.png)

**5、使用 mount 命令将磁盘挂载到主机**

[root@i-oemhrgx8 ~]# `mount /dev/sdb /mnt`

**6、使用 df 命令查看磁盘是否挂载成功**

[root@i-oemhrgx8 ~]# `df -h`

Filesystem      Size  Used Avail Use% Mounted on

/dev/sda1        20G  859M   18G   5% /

tmpfs           499M     0  499M   0% /dev/shm

/dev/sdb        9.8G   23M  9.2G   1% /mnt


#### 硬盘容量小于2tb的初始化办法


**1、使用 `fdisk -l` 命令列出所有磁盘分区**

![图片](/storage/disk/quickstart/_images/image-1568775005129.png)

**2、使用 `fdisk /dev/sdd` 命令对磁盘进行分区，回显信息类似如下图**

![图片](/storage/disk/quickstart/_images/image-1568775009154.png)

**3、输入 `n`， 按 Enter，开始新建分区。回车显示如图**

![图片](/storage/disk/quickstart/_images/image-1568775012633.png)

表示磁盘有两种分区类型：

【p】表示主分区

【e】表示扩展分区

**4、以创建一个主分区为例，输入 `p`，按 Enter，开始创建一个主分区，回车显示**

![图片](/storage/disk/quickstart/_images/image-1568775017438.png)

【Partition number】表示主分区编号，可以选择1-4，选择1号分区，回车显示

![图片](/storage/disk/quickstart/_images/image-1568775021385.png)

【First cylinder】表示初始柱面区域，可以选择1 - 13054，默认为1。

**5、以选择默认初始磁面值 1 为例，表示从第一个柱面开始划分，按 Enter。**

![图片](/storage/disk/quickstart/_images/image-1568775025430.png)

【Last cylinder】表示截止柱面区域， +cylinders or +size{K，M，G} （1 - 13054， default 13054）： +后面单位可以接M，G，K（记得要大写）表示划分您所加的空间，也可以是柱面数，不管怎样都不能超过该磁盘剩余的空间否则无效。

**6、以选择默认截止磁面为例，按 Enter**

![图片](/storage/disk/quickstart/_images/image-1568775030738.png)

**7、输入 p，按 Enter，查看新建分区的详细信息**

![图片](/storage/disk/quickstart/_images/image-1568775036420.png)

**8、确认分区的信息无误，输入 wq 保存并退出**

![图片](/storage/disk/quickstart/_images/image-1568775040323.png)

**9、使用 partprobe 同步分区表至操作系统**

[root@i-oemhrgx8 ~]# `partprobe /dev/sdd`

**10、使用 mkfs 命令格式化分区并创建所需的文件系统**

[root@i-oemhrgx8 ~]# `mkfs.ext4 /dev/sdd1`

![图片](/storage/disk/quickstart/_images/image-1568775044404.png)

**11、使用 mount 命令挂载到目录**

![图片](/storage/disk/quickstart/_images/image-1568775049276.png)

#### 硬盘容量大于2tb的初始化办法


**1、使用 lsblk 命令列出所有磁盘分区，如 sdc 为新增磁盘**

[root@i-oemhrgx8 ~]# `lsblk`

![图片](/storage/disk/quickstart/_images/image-1568775054733.png)


**2、使用 parted 命令对磁盘进行分区，回显信息类似如下图，以/dev/sdc为例：命令格式如下**

`parted /dev/vdc`

![图片](/storage/disk/quickstart/_images/image-1568775061556.png)

**3、输入 `p`，按 Enter，查看当前磁盘分区形式**

![图片](/storage/disk/quickstart/_images/Irm6z9nYCsEbWSda.png)

“Partition Table”为“unknown”表示磁盘分区形式未知，新的数据盘还未设置分区形式。

**4、磁盘分区形式有 MBR 和 GPT 两种，大于 2 TB的磁盘容量，这里采用 GPT 分区方式。输入如下命令，设置磁盘分区形式。**

**`mklabel gpt`**
输入p回车显示

![图片](/storage/disk/quickstart/_images/image-1568775068945.png)

**注意：**

- MBR 支持的磁盘最大容量为 2 TB，如果您需要使用大于 2 TB的磁盘容量，分区形式请采用 GPT 。
- 当磁盘已经投入使用后，此时切换磁盘分区形式时，磁盘上的原有数据将会清除，因此请在磁盘初始化时谨慎选择磁盘分区形式。

**5、输入 “unit s”, 按 “Enter”, 设置磁盘的计量单位为磁柱**

**6、以整个磁盘创建一个分区为例，执行以下命令，按 “Enter” 。**

**mkpart data 2048s 100%**

“data”表示磁盘分区名称，“2048s”表示磁盘起始磁柱值，“100%” 表示磁盘截止磁柱值，此处仅供参考，您可以根据业务需要自行规划磁盘分区数量及容量。

**7、输入 p，按 Enter，查看新建分区的详细信息**

![图片](/storage/disk/quickstart/_images/image-1568775076476.png)

**8、确认分区的信息无误，输入 q 退出 parted 工具**

![图片](/storage/disk/quickstart/_images/image-1568775080498.png)

**9、使用 lsblk 查看分区信息**

![图片](/storage/disk/quickstart/_images/image-1568775084337.png)

**10、使用 partprobe 同步分区表至操作系统**

[root@i-oemhrgx8 ~]# `partprobe /dev/sdc1`

**11、使用 mkfs 命令格式化分区并创建所需的文件系统**

[root@i-oemhrgx8 ~]# `mkfs.ext4 /dev/sdc1`

![图片](/storage/disk/quickstart/_images/image-1568775088216.png)

**12、 使用 parted 工具分区的时候，提示不是最好的模式**

Warning: The resulting partition is not properly aligned for best performance.

这个是因为没有对齐的原因，在默认情况下都是

`mkpart primary 1 100%`

或者

`mkpart primary 1049k 100%`

或者

`mkpart primary 2048s 100%`

这个一般都是对齐的，如图

![图片](/storage/disk/quickstart/_images/image-1568775092672.png)

![图片](/storage/disk/quickstart/_images/image-1568778444918.png)

![图片](/storage/disk/quickstart/_images/image-1568778455111.png)

比如我 start 设置为 1024k, 结束值为 100%, 就会出现这个报警提示

![图片](/storage/disk/quickstart/_images/image-1568775097514.png)

这个时候可以输入 `Ignore`

![图片](/storage/disk/quickstart/_images/image-1568775100805.png)



### 自动挂载配置指南
#### 使用磁盘UUID的方式

**1、使用 blkid 命令获取磁盘的 uuid**

[root@i-oemhrgx8 ~]# `blkid /dev/sdb`

/dev/sdb: UUID="70fc59fe-d388-49ba-be56-b06cfbcc01ed" TYPE="ext4" 

**2、使用以下命令，备份 fstab 配置文件**

[root@i-oemhrgx8 ~]# `cp /etc/fstab /etc/fstab.bak`

**3、执行以下命令，将配置内容写入 fstab 文件**

[root@i-oemhrgx8 ~]# `echo "UUID=70fc59fe-d388-49ba-be56-b06cfbcc01ed /mnt  ext4 defaults     0   0" >>/etc/fstab`

![图片](/storage/disk/quickstart/_images/image-1568774988226.png)

**4、使用 umount 命令将挂载的磁盘卸载；再使用 mount -a 命令测试一下是否能自动挂载成功**

[root@i-oemhrgx8 ~]# `mount -a`

**5、执行如下命令，确认是否挂载成功**
[root@i-oemhrgx8 ~]# `df -h`

Filesystem      Size  Used Avail Use% Mounted on

/dev/sda1        20G  859M   18G   5% /

tmpfs           499M     0  499M   0% /dev/shm

/dev/sdb        9.8G   23M  9.2G   1% /mnt


#### 使用磁盘ID的方式

**1、执行如下命令，获取磁盘设备 id**

[root@i-oemhrgx8 ~]# `ls -l /dev/disk/by-id`

![图片](/storage/disk/quickstart/_images/image-1568774991827.png)

**2、执行如下命令，备份 fstab 配置文件**

`cp /etc/fstab /etc/fstab.bak`

**3、执行以下命令，将配置内容写入 fstab 文件**

[root@i-oemhrgx8 ~]# `echo "/dev/disk/by-id/scsi-0QEMU_QEMU_HARDDISK_vol-186vl7uk  /mnt  xfs   defaults 0  0" >>/etc/fstab`

![图片](/storage/disk/quickstart/_images/image-1568774996736.png)

**4、使用 `mount -a` 命令测试一下是否能自动挂载成功**

![图片](/storage/disk/quickstart/_images/image-1568779069613.png)





### 扩容云硬盘

#### 扩容场景介绍

**扩容类型为系统盘**

扩容时，需要先关闭云主机，右键主机的资源 id---更多操作---更改配置

![图片](/storage/disk/quickstart/_images/image-1568775104738.png)

**注意：系统盘最大支持扩容至 300GB ，另外扩容以后不支持缩容操作**

#### 扩容类型为数据盘

1、需要先登录到服务器，执行 `umount` 命令将挂载的目录卸载，然后登录到控制台，将主机与硬盘解除绑定，直至硬盘状态为可用

2、右键硬盘的资源 id--- 扩容，调整业务所需要的容量并提交

3、重新加载到主机

根据扩容的文件系统类型，扩容的办法如下

#### EXT 文件系统扩容介绍

#### **磁盘裸设备直接初始化的扩容方法 (ext)**

**1、扩容前的磁盘容量**

![图片](/storage/disk/quickstart/_images/image-1568775109191.png)

**2、查看磁盘文件系统类型**

![图片](/storage/disk/quickstart/_images/image-1568775112136.png)

**3、使用 `umount` 命令将扩容的磁盘从系统的目录卸载**

**4、执行以下命令，检查扩容后的分区**

![图片](/storage/disk/quickstart/_images/image-1568775116295.png)

**5、执行 `resize2fs` 命令扩容文件系统**

![图片](/storage/disk/quickstart/_images/image-1568775120838.png)

**6、使用 `mount` 命令将扩容后的磁盘挂载到系统目录，并检查容量变化**

![图片](/storage/disk/quickstart/_images/image-1568775127021.png)

#### **磁盘设备存在分区，需要扩容到原有分区的方法 (ext)**

**1、查看扩容前的磁盘容量**

![图片](/storage/disk/quickstart/_images/image-1568775131616.png)

**2、使用 `umount` 命令将扩容的磁盘从系统的目录卸载**

**3、使用 parted 工具查看磁盘分区的信息**

![图片](/storage/disk/quickstart/_images/image-1568775135401.png)

**4、输入 `unit s` ，按 `Enter` ，设置磁盘的计量单位为磁柱**

**5、输入 `p`，并回车，查看并记录分区的 Start 值**

请务必注意：删除分区并新建后，Start 值必须保持不变，否则将会引起数据丢失。
![图片](/storage/disk/quickstart/_images/image-1568775141798.png)

**6、执行以下命令，删除原有分区**

![图片](/storage/disk/quickstart/_images/image-1568775146683.png)

**7、执行以下命令，新建一个主分区，Start 值与原来一致，结束值 100%**

`mkpart primary 63s 100%`

**如果出现如下图所示的状态，请输入 Ignore**

![图片](/storage/disk/quickstart/_images/image-1568775150955.png)

**8、输入 `p` 查看现有分区信息**

![图片](/storage/disk/quickstart/_images/image-1568775153978.png)

**9、输入 `q` 退出 parted 分区工具**

**10、执行 `partprobe` 命令将分区表同步至文件系统**

**11、执行以下命令，检查扩容后的分区**

![图片](/storage/disk/quickstart/_images/image-1568775166562.png)

**12、执行 `resize2fs` 命令扩容文件系统**

![图片](/storage/disk/quickstart/_images/image-1568775181049.png)

**13、使用 `mount` 命令将扩容后的磁盘挂载到系统目录，并检查容量变化**

![图片](/storage/disk/quickstart/_images/image-1568775184210.png)

### XFS 文件系统扩容介绍

#### **磁盘裸设备直接初始化的扩容方法 (xfs)**

**1、扩容前的容量**

![图片](/storage/disk/quickstart/_images/fnLwIaSkDeorbjtM.png)

**2、使用 `umount` 命令将扩容的磁盘从系统的目录卸载**

**3、执行以下命令，检查扩容后的分区**

![图片](/storage/disk/quickstart/_images/image-1568775189304.png)
输入结果为 0，说明正常

**4、使用 `mount` 命令将扩容后的磁盘挂载到系统目录**

**5、使用 `xfs_growfs` 命令扩容**

![图片](/storage/disk/quickstart/_images/image-1568775190952.png)

**6、检查扩容后的容量**

![图片](/storage/disk/quickstart/_images/image-1568775196249.png)

#### **磁盘设备存在分区，需要扩容到原有分区的方法 (xfs)**

**1、查看扩容前的磁盘容量**

![图片](/storage/disk/quickstart/_images/image-1568775199434.png)

**2、使用 `umount` 命令将扩容的磁盘从系统的目录卸载**

**3、使用 `parted` 工具查看磁盘分区的信息**

![图片](/storage/disk/quickstart/_images/image-1568775201575.png)

**4、输入 `unit s`，按 `Enter`，设置磁盘的计量单位为磁柱**

**5、输入 `p`，并回车，查看并记录分区的 Start 值**

请务必注意：删除分区并新建后，Start 值必须保持不变，否则将会引起数据丢失。
![图片](/storage/disk/quickstart/_images/image-1568775203109.png)

**6、执行以下命令，删除原有分区**

![图片](/storage/disk/quickstart/_images/image-1568775204602.png)

**7、执行以下命令，新建一个主分区，Start 值与原来一致，结束值 100%**

`mkpart primary 63s 100%`

**如果出现如下图所示的状态，请输入 `Ignore`**

![图片](/storage/disk/quickstart/_images/image-1568775206304.png)

**8、输入 `p` 查看现有分区信息**

![图片](/storage/disk/quickstart/_images/image-1568775207418.png)

**9、输入 `q` 退出 parted 分区工具**

**10、执行 `partprobe` 命令将分区表同步至文件系统**

**11、执行以下命令，检查扩容后的分区**

![图片](/storage/disk/quickstart/_images/image-1568775209585.png)

**12、执行 `mount` 命令将分区挂载到系统目录**

[root@i-oemhrgx8 ~]# `mount /dev/sdb1 /opt`

**13、执行 `xfs_growfs` 命令扩容文件系统**

![图片](/storage/disk/quickstart/_images/image-1568775211498.png)

**14、使用 `df` 命令检查容量变化**

![图片](/storage/disk/quickstart/_images/image-1568775213026.png)

