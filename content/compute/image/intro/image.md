---
title: "映像"
date: 2020-01-30T00:39:25+09:00
description: Test description
draft: false
enableToc: false
keyword: 映像, QingCloud
---

## 映像（Image）

映像（Image）是一个包含了软件及必要配置的机器模版。 作为基础软件，操作系统是必须的，您也可以根据自己的需求将任何应用软件 （比如，数据库、中间件等）放入映像中。

映像分为两类。其一是青云官方提供的，称之为“系统映像”， 包括了各种 Linux、Windows 等操作系统， 各系统映像的初始本地终端用户名和密码均可在各映像的详情描述中找到。 其二是用户通过捕获一个主机来自行创建的，名为“自有映像”， （需要注意，主机在关机状态下才能被捕获为映像）。其三是用户自己在数据盘中安装好操作系统之后， 备份数据盘， 将数据盘的备份捕获为自定义镜像。系统映像全局可见可用，自有映像只有用户本人可见可用。

主机（Instance）是以虚拟机器的形式运行在青云中的映像副本。 基于一个映像，您可以创建任意数量的主机。在创建主机时， 您需要指明 CPU 和内存的配置。青云允许您任意指定 CPU、内存的数量， 也允许您在主机创建之后随时再行调整。



## 在创建主机时使用

在创建主机时，第一步就是选择您青睐的操作系统，如下图所示：

![](/compute/vm/intro/_images/create_instance_choose_image.png)

## 青云提供的内网镜像源代理

为了方便更新Linux操作系统，我们提供了内网镜像代理，可供无法访问公网的主机更新系统。代理地址如下：

Ubuntu: http://mirrors.ks.qingcloud.com
支持区域:
  * 北京3区

使用方法

```
sudo sed -i s/us.archive.ubuntu.com/mirrors.ks.qingcloud.com/g /etc/apt/sources.list
sudo sed -i s/cn.archive.ubuntu.com/mirrors.ks.qingcloud.com/g /etc/apt/sources.list
sudo sed -i s/security.ubuntu.com/mirrors.ks.qingcloud.com/g /etc/apt/sources.list
sudo apt-get update
```

## 青云提供的开源操作系统镜像模板

系统映像为官方提供的模板。 QingCloud 会提供主流的 Linux、Windows 模板，并根据上游厂商更新版本时及时制作新模板。

* Linux 系列
 * arch201609x64a
 * centos58x86/centos65x64d/centos63x64/centos64x64/centos64x64a/centos65x64/centos68x64/centos7x64d等
 * debian8x64/debian87x64/debian91x64等
 * fedora18x86a/fedora18x64b/fedora20x64/fedora20x64b/fedora22x64/fedora24x64
 * opensuse12x64/opensuse12x64a/opensuse12x64b/opensuse12x64c
 * trustysrvx64e/trustysrvx64h/xenial3x64/xenial4x64a等
* BSD 系列
 * freebsd10u1x64/freebsd11u0x64
* 容器相关
 * coreose

