---
title: "GPU 云服务器"
description: test
draft: false
---

为了满足用户对高性能计算、视频处理或图形渲染的需求，青云特推出GPU云服务器给有需求的用户使用，用户可以在青云控制台上进行GPU云服务器的创建和使用。

## GPU云服务器特性：

1、GPU资源灵活配置

用户可以自定义GPU云服务器的配置，可灵活指定CPU、内存、GPU类型和数量、系统盘大小等，既可以新创建云服务器，也可以对已有云服务器进行 GPU 资源的绑定。

2、高配置GPU

为满足高性能计算的需求，系统提供NVIDIA Tesla P100型号的GPU，单台云服务器可配置2张GPU卡，单机单浮点峰值计算能力最多可达20Tflops，且无虚拟化性能损耗。

## Deep Learning App

如果您的需求是深度学习，请优先选择 [AppCenter](https://appcenter.qingcloud.com/) 中的 [Deep Learning On QingCloud](https://appcenter.qingcloud.com/apps/app-ptor186d/Deep%20Learning%20On%20QingCloud) 应用。

[Deep Learning On QingCloud](https://appcenter.qingcloud.com/apps/app-ptor186d/Deep%20Learning%20On%20QingCloud) 是一款预配置的深度学习开发环境，其上搭载了多款主流的深度学习框架，可以配合GPU资源加速计算，用于AI开发和模型训练，功能丰富，使用灵活。部署后即可使用，可以省去安装驱动、框架等步骤，提高工作效率。

创建Deep Learning App时可选择云服务器规格以及GPU数量，具体使用文档请参考：
[https://docs.qingcloud.com/product/ai/deeplearning/](https://docs.qingcloud.com/product/ai/deeplearning/)

## GPU云服务器使用步骤

如果您需要针对自己的应用创建GPU云服务器，请按照下述步骤进行。

一、创建GPU云服务器

创建GPU云服务器和创建普通云服务器的步骤是相同的，选择 GPU 云服务器，根据需要选择 GPU 的类型和数量，按照页面向导完善其他信息后即可创建 GPU 云服务器。

GPU云服务器用户可以根据需要选择使用的操作系统，推荐使用Ubuntu Server 16.04.4 LTS 64bit。

二、配置GPU云服务器

以深度学习这一场景为例，创建搭载NVIDIA Tesla P100 GPU的云服务器后，需要自行配置云服务器的驱动和CUDA。下面以Ubuntu Server 16.04.4 LTS 64bit为例，讲解配置过程。

> <span style="color:red">经过测试，CUDA 8.0 和 CUDA 9.1 配合其内置驱动，分别为 375.26 (CUDA 8.0) 和 387.26 (CUDA 9.1) ，均可正常工作，其他版本驱动暂无法正常工作，请依据您的需求选择一个 CUDA 版本。</span>
> <span style="color:red">只需下载并安装 CUDA 即可，无需单独安装驱动之后再安装 CUDA 。</span>

(1) 安装前准备工作：
CUDA 安装需要 gcc 和 make 的支持，先安装 gcc 和 make
```shell
sudo apt-get update
sudo apt-get install gcc make
```
可选: 安装32位库支持
```shell
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install libc6:i386 libstdc++6:i386
```
(2) 下载 CUDA：
CUDA 8.0 下载地址： [https://developer.nvidia.com/cuda-80-ga2-download-archive](https://developer.nvidia.com/cuda-80-ga2-download-archive)
CUDA 9.1 下载地址： [https://developer.nvidia.com/cuda-91-download-archive](https://developer.nvidia.com/cuda-91-download-archive)

请选择 runfile(local) 方式安装，CUDA 8.0 需要下载 Base Installer 和 Patch 2 (Released Jun 26, 2017) ， CUDA 9.1 需要下载 Base Installer ， Patch 1 (Released Jan 25, 2018)， Patch 2 (Released Feb 27, 2018) 和 Patch 3 (Released Mar 5, 2018)。下载后按照 Base ， Patch 1 ， Patch 2 ， Patch 3 的顺序安装。

CUDA 8.0 下载界面：

![](/compute/vm/manual/_images/cuda_8_0.png)

CUDA 9.1 下载界面：

![](/compute/vm/manual/_images/cuda_9_1.png)

按照下载页面的说明，依次 sudo sh 对应的 run 文件进行安装。
(3) 验证安装
安装完成后，先运行 nvidia-smi 查看显卡信息及驱动版本，确认驱动安装成功。
> <span style="color:red">在本文的安装过程中，必须确认驱动版本为 375.26 (CUDA 8.0) 和 387.26 (CUDA 9.1)。</span>

运行一个 CUDA 计算测试例程，确认 CUDA 正常工作(安装 CUDA 时，会安装对应的例程，在安装过程中提示的文件夹可找到，默认为/home/ubuntu/NVIDIA_CUDA-9.1_Samples，如果make遇到问题，请先安装 gcc， g++ 和 make 工具包)。
```shell
cd NVIDIA_CUDA-9.1_Samples/0_Simple/matrixMul
make
./matrixMul
```
如果CUDA正常工作，将会输出结果 PASS 并测量性能指标。

以上步骤完成后，CUDA 已正常工作，可以继续安装 cuDNN 和深度学习框架，或者其他使用 CUDA 的应用程序。
