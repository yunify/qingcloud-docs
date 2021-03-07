---
title: "如何上传文件至windows服务器中"
description: Test description
draft: false
---

部分客户购买服务器是为了将本地文件存储至服务器中。本文旨在帮助此类用户，介绍如何将文件上传至windows服务器中。

## 1. 通过剪贴板进行复制粘贴

需要将显示选项--本地资源-剪贴板勾选上，可以使用远程桌面直接拖拽，这种方式适合小文件，如果文件比较大，推荐第二种方式或者[搭建ftp服务器](https://docsv3.qingcloud.com/compute/vm/faq/faq/#%E5%A6%82%E4%BD%95%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AAftp%E6%9C%8D%E5%8A%A1)。

### 1）打开运行窗口

在本地计算机中，使用快捷键 Win + R，打开【运行】窗口

### 2）打开远程桌面连接

在【运行】窗口中，输入 ***mstsc***，单击【确定】，打开【远程桌面连接】

### 3）点击显示选项

在【远程桌面连接】中，单击【显示选项】

![显示选项](../upload_files_to_windows.assets/upload_files_to_windows_1.png)

### 4）勾选剪贴板

在【本地资源】中，勾选【剪贴板】

![剪贴板](../upload_files_to_windows.assets/upload_files_to_windows_2.png)

### 5）连接远程主机

在【常规】中，输入主机的公网ip以及用户名(默认为Administrator)，点击连接，即可进行复制粘贴操作

![连接](../upload_files_to_windows.assets/upload_files_to_windows_3.png)

## 2. 通过mstsc挂载本地盘

挂载本地磁盘至服务器上，实现文件传输。

### 1）打开运行窗口

在本地计算机中，使用快捷键 Win + R，打开【运行】窗口

### 2）打开远程桌面连接

在【运行】窗口中，输入 ***mstsc***，单击【确定】，打开【远程桌面连接】

### 3）点击显示选项

在【远程桌面连接】中，单击【显示选项】

![显示选项](../upload_files_to_windows.assets/upload_files_to_windows_1.png)

### 4）点击详细信息

在【本地资源】中，点击【详细信息】

![详细信息](../upload_files_to_windows.assets/upload_files_to_windows_4.png)

### 5）添加驱动器

点击驱动器扩展选项，勾选需要挂载的驱动器盘符，点击确定。

![添加驱动器](../upload_files_to_windows.assets/upload_files_to_windows_5.png)

### 6）连接远程主机

在【常规】中，输入主机的公网ip以及用户名(默认为Administrator)，点击连接

![连接](../upload_files_to_windows.assets/upload_files_to_windows_3.png)

### 7）拷贝文件

连接主机后，可以在【此电脑】中看到相应的盘符，复制文件与本地操作方式一致。

![拷贝文件](../upload_files_to_windows.assets/upload_files_to_windows_6.png)