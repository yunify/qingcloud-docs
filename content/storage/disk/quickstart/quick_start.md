---
title: "云硬盘的使用"
date: 2020-01-30T00:38:25+09:00
description: Test description
draft: false
enableToc: false
keyword: 青云
---

# 云硬盘的使用指南

硬盘挂载至云服务器以后，需要登录到云服务器初始化硬盘(即格式化云硬盘)，之后才可以正常使用。

**系统盘**

系统盘不需要初始化，创建云服务器时会自带系统盘并且自动初始化，默认磁盘分区形式为主启动记录分区（MBR）。

**数据盘**

通过青云控制台单独创建硬盘以后，加载到云服务器，需要初始化硬盘以后才能使用。

请您根据业务的实际规划选择合适的分区方式。

| 分区形式 | 支持最大磁盘容量 | 支持分区数量 | 分区工具    |
| :------- | :---------------------------------- | :-------------------------------- | :---------------------------------------------------------- |
| MBR      |   2TB  | 4 个主分区  <br>或3 个主分区和 1 个扩展分区 | Windows 操作系统：磁盘管理 <br>Linux 操作系统：  fdisk 工具或 parted 工具 |
| GPT      | 18EB  目前云硬盘支持的<br>最大容量为50TB | 不限制分区数量    | Windows 操作系统：磁盘管理  <br>Linux 操作系统：parted 工具或 gdisk工具 |

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

**请根据您实际使用场景选择初始化方式**

1、若整块硬盘只呈现为一个独立的分区，推荐直接对磁盘进行初始化 

2、若整块硬盘需要呈现为多个逻辑分区（即存在多个逻辑盘），则您需要先进行分区操作，然后对相应的分区创建文件系统

### 磁盘裸设备直接初始化指南

**1、登录到云服务器**

**2、使用 lsblk 命令查看磁盘设备名**

[root@i-oemhrgx8 ~]# `lsblk -l`

NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT

sdb