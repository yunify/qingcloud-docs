---
title: " Windows 开启音频功能"
description:
draft: false
weight: 40
---

## 适用场景

适用于云服务器需播放音频，如淘宝后台，消息提醒等。



## 配置方法



### 1、云服务器开启 Windows Audio 服务。



安装系统后看到喇叭图标有×标识，为不可调整状态，并非未安装驱动，而是系统默认将 Windows Audio 服务为关闭并手动启动。

开始--运行-- “services.msc" –找到Windows Audio服务，改为自动，并将服务启动。

![](../../_images/audio.png)



### 2、本地需配置允许远程桌面音频在本地播放。



开始--运行-- "mstsc" --显示选项--本地资源--配置远程音频设置--设置--勾选”在此计算机上播放“。

![](../../_images/play.png)