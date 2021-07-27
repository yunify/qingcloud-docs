---
title: "Ubuntu安装图形化桌面"
date: 2021-02-15T21:37:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false

---

## 1、准备环境

OS：版本为Ubuntu Server 16.04.5 LTS 64bit

Ubuntu 16.04 在安装时默认是不安装图形界面的.

Gnome是Linux最流行的桌面环境.

##  2、安装 xinit

```shell
 apt update
 apt install -y xinit  
```
##  3、安装登录器

 登录管理器 gnome display manager,简称 gdm

 ```shell
 apt install -y gdm 
 ```
##  4、安装桌面环境

 ```shell
 apt install -y --no-install-recommends ubuntu-gnome-desktop
 ```
##  5、Startx 启动桌面

 取消开机 GUI 自动启动桌面：

 ```shell
 startx
 ```
 恢复开机GUI 自动启动：
 ```shell
 update-rc.d gdm defaults
 ```
