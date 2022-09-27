---
title: "配置 GPU 云服务器（Windows）"
description: 
draft: false
weight: 40
keyword: 云计算, 青云, QingCloud, 云服务器，GPU云服务器
---
本章节介绍 Windows 系统如何安装 NVIDIA 驱动和 CUDA。

## 前提条件

- 已获取管理控制台的账号和密码。
- 已创建 GPU 云服务器。

## 操作步骤

### 安装 NVIDIA 驱动

1. 参考[连接 Windows 云服务器](/compute/vm/manual/vm/20_connect_instance/20_windows_conn/)，连接 GPU 云服务器。

2. 在远程桌面中，访问 [NVIDIA 驱动下载地址](https://www.nvidia.com/Download/Find.aspx?spm=a2c4g.11186623.0.0.2d45bf6azaWqum&lang=cn)，搜索适用的驱动版本。选择使用的版本，点击**下载**进入下载页面，点击**同意并开始下载**。

   ![](../../_images/config_gpu_win_1.png)

3. 下载完成后，打开下载驱动程序所在的文件夹。双击安装文件，按照界面提示完成安装。

4. 完成安装后，前往**设备管理器**，点击**显示适配器**，查看是否存在安装的GPU驱动信息。如果存在，表示安装成功。

### 安装 CUDA

1. 参考[连接 Windows 云服务器](/compute/vm/manual/vm/20_connect_instance/20_windows_conn/)，连接 GPU 云服务器。

2. 在远程桌面中，访问 [CUDA 下载地址](https://developer.nvidia.com/cuda-toolkit-archive)，点击对应的版本，选择对应信息，点击下载。

   ![](../../_images/config_gpu_win_2.png)

3. 下载完成后，打开下载驱动程序所在的文件夹，双击安装文件，按照界面提示完成安装。