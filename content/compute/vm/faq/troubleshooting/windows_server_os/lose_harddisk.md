---

title: "Windows云服务器磁盘脱盘"
description: Test description
weight: 17
draft: false
enableToc: false
---

## 问题背景
Windows云服务器挂载硬盘后如果没有设置开机[自动挂载](/storage/disk/manual/auto_mount/win_auto_mount/)，云服务器重启之后，硬盘状态可能会变成脱机状态

## 解决步骤

一、右键开始菜单 —  运行   —  `diskmgmt.msc`

![lose_hd01](../../../_images/lose_hd01.jpg)

二、进入“磁盘管理”界面后看见脱机状态的硬盘

![lose_hd02](../../../_images/lose_hd02.jpg)

三、右键脱机状态的硬盘，选择联机

![lose_hd03](../../../_images/lose_hd03.png)

四、查看状态

![lose_hd04](../../../_images/lose_hd04.jpg)
