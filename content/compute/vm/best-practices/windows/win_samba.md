---
title: "Windows 云服务器配置 samba 服务"
description: Test description
draft: false
---

本文以 Windows Server 2016系统配置 samba 服务为例，Windows Server 2016 默认已安装 samba 客户端，

## Windows Server 端配置

### 1.开启 Server 服务

点击【开始】---【服务器管理器】。

![](../../_images/win_samba_1.png)

在【工具】---【服务】中，找到 Server 服务，右键点击【属性】，设置启动类型为自动，然后再启动服务。

![](../../_images/win_samba_2.png)

![](../../_images/win_samba_3.png)

![](../../_images/win_samba_4.png)

![](../../_images/win_samba_5.png)

### 2.安装 samba 服务
在【服务器管理器】中，点击上方的【添加角色和功能】，然后在【功能】处，勾选【SMB 1.0/CIFS 文件共享支持】和【SMB Bandwidth Limit】，点击下一步后，确认下需要安装的服务，然后点击安装。

![](../../_images/win_samba_6.png)

![](../../_images/win_samba_7.png)

![](../../_images/win_samba_8.png)

![](../../_images/win_samba_9.png)

![](../../_images/win_samba_10.png)

![](../../_images/win_samba_11.png)

![](../../_images/win_samba_12.png)



### 3.设置文件通过 samba 共享

在【服务器管理器】中点击【文件和存储服务】。点击【共享】，在【任务】处新建共享。

![](../../_images/win_samba_13.png)

![](../../_images/win_samba_14.png)

选择【SMB共享-快速】，点击下一步。

![](../../_images/win_samba_15.png)

选择【键入自定义路径】，选择相应文件夹，点击下一步。

![](../../_images/win_samba_16.png)

![](../../_images/win_samba_17.png)

设置共享名称。

![](../../_images/win_samba_18.png)

其他设置，可以选择是否启用基于存取的枚举、允许共享缓存、加密数据访问。

![](../../_images/win_samba_19.png)

权限处可以选择自定义权限，添加相应用户。

![](../../_images/win_samba_20.png)

确认信息后，选择创建即可。

![](../../_images/win_samba_21.png)

![](../../_images/win_samba_22.png)

## Windows 客户端访问

Windows 默认带有 samba 客户端，可以直接访问。

在地址栏输入 \\\192.168.0.5\shared 访问。

```shell
\\192.168.0.5\shared
```

![](../../_images/win_samba_23.png)

## Linux 客户端访问

本文以 CentOS 7.9 64bit 为例。

### 1.安装 samba 客户端

```shell
yum -y install samba-client
yum -y install cifs-utils
```

### 2.创建相应目录并挂载

```shell
mkdir /mnt/shared
mount -t cifs -o username=Administrator //192.168.0.5/shared /mnt/shared #指定username为Administrator，然后输入密码
```

![](../../_images/win_samba_24.png)
