---
title: "Linux云服务器安装图形化桌面的方法"
date: 2021-02-15T21:37:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false
---

# Centos安装图形化桌面

## 问题背景

青云的Linux操作系统默认是最小化安装，部分客户需要图形化界面，比如搭建oracle环境；以下文档主要介绍Linux云服务器如何安装图形化桌面

### CentOS7云服务器部署图形化桌面

####  1.准备环境

  OS：CentOS 7.5 64 bit

  青云centos7镜像默认为最小化部署，需要自行安装图形化桌面

  本次示例为安装 GNOME 图形化

####  2.安装 xinit

 安装图形化界面前，需先安装X WINDOWS控制功能插件

```shell
 yum groupinstall "X Window System" 
```

####  3.安装GNOME登录器 

 登录管理器 gnome display manager,简称 gdm

```shell
yum groupinstall -y "GNOME Desktop"
```
 ![centos_GUI_1](../_images/centos_GUI_1.png)

####  4.启动图形化桌面

 从控制台vnc登入到云服务器内，命令输入inti 5 可进入图形化桌面

 ![centos_GUI_2.](../_images/centos_GUI_2.png)

 ![centos_GUI_3](../_images/centos_GUI_3.png)

 vnc窗口按键操作中选择ctrl-alt-f2 可切换会命令行模式，选择ctrl-alt-f1 可再次切换回图形化桌面

 ![centos_GUI_4](../_images/centos_GUI_4.png)



### Ubuntu 安装图形化桌面


 #### 1.准备环境

OS：版本为Ubuntu Server 16.04.5 LTS 64bit

Ubuntu 16.04 在安装时默认是不安装图形界面的.

Gnome是Linux最流行的桌面环境.

####  2.安装 xinit

```shell
 apt update
 apt install -y xinit  
```
####  3.安装登录器

 登录管理器 gnome display manager,简称 gdm

 ```shell
 apt install -y gdm 
 ```
####  4.安装桌面环境

 ```shell
 apt install -y --no-install-recommends ubuntu-gnome-desktop
 ```
####  5.Startx 启动桌面

 取消开机 GUI 自动启动桌面：

 ```shell
 startx
 ```
 恢复开机GUI 自动启动：
 ```shell
 update-rc.d gdm defaults
 ```
