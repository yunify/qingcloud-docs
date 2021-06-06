---
title: "Windows 云服务器配置 NFS 服务"
description: Test description
draft: false
---


本文以 Windows Server 2016系统配置 NFS 服务为例。

## Windows Server 端配置

### 1.开启 Server 服务

点击【开始】---【服务器管理器】。

![](../../_images/win_nfs_1.png)

在【工具】---【服务】中，找到 Server 服务，右键点击【属性】，设置启动类型为自动，然后再启动服务。

![](../../_images/win_nfs_2.png)

![](../../_images/win_nfs_3.png)

![](../../_images/win_nfs_4.png)

![](../../_images/win_nfs_5.png)

### 2.安装 NFS 服务

打开【服务器管理器】，点击上方的【添加角色和功能】，然后在【服务器角色】中，点击【文件和存储服务】---【NFS 服务器】，在弹出的【添加角色和功能向导】中，点击添加功能。在【功能】处，勾选【NFS 客户端】，点击下一步后，确认下需要安装的服务，然后点击安装。

![](../../_images/win_nfs_6.png)

![](../../_images/win_nfs_7.png)

![](../../_images/win_nfs_8.png)

![](../../_images/win_nfs_9.png)

![](../../_images/win_nfs_10.png)

![](../../_images/win_nfs_11.png)

![](../../_images/win_nfs_12.png)

![](../../_images/win_nfs_13.png)

![](../../_images/win_nfs_14.png)

![](../../_images/win_nfs_15.png)

### 3.设置文件通过 NFS 共享

安装完毕之后，右键需要分享的文件，点击【属性】，选择【NFS 共享】，点击【管理NFS 共享】，选择【共享此文件夹】，然后点击下方的【允许匿名访问】，点击【权限】可以设置用户访问权限，点击【添加】可以添加成员。

![](../../_images/win_nfs_16.png)

![](../../_images/win_nfs_17.png)

在【服务器管理器】---【文件和存储服务】中，点击共享，可以确认下文件是否已共享。

![](../../_images/win_nfs_18.png)

## Windows 客户端访问

在另一台 Windows 云服务器中，添加【NFS 客户端】后，使用【win】+R，在调出的运行窗口中，输入cmd，然后执行挂载命令，可以在文件管理中看到已成功挂载。

```shell
mount \\192.168.0.5\shared F:
```

![](../../_images/win_nfs_19.png)

![](../../_images/win_nfs_20.png)

## Linux 客户端访问

本文以 CentOS 7.9 64bit 为例。

### 1.安装 NFS 客户端

```shell
yum -y install nfs-utils
```

### 2.创建相应目录并挂载

```shell
mkdir /mnt/shared
mount -t nfs 192.168.0.5:/shared /mnt/shared
```

![](../../_images/win_nfs_21.png)
