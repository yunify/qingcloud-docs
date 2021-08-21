---
title: "使用 IIS 搭建网站服务"
description:
draft: false
weight: 39
---

## 背景

一般情况下，大多数用户习惯基于 Linux 平台来搭建 Web 服务，一方面 Linux 平台较为简洁稳定，用于搭建 Web 服务的应用程序较多，能够满足绝大多数的应用平台，如使用较多的 Nginx、Tomcat、Apache 等 ，但仍有部分用户会使用 Windows 平台来搭建 Web 服务，本文将详细介绍如何在 Windows 平台使用 IIS 来搭建 Web 服务。

## 步骤

### 准备工作
1、首先参照文档：[Windows云服务器安装IIS Web服务](/compute/vm/best-practices/windows/iis/) 来安装 IIS 服务。

### 部署站点
1、将 Web 站点文件放在磁盘目录下。本实例为 D:\web\down ;  
2、添加 IIS 站点，如下图：  
![](../../_images/IIS_WEB1.png)  
3、按照以上步骤完成启动后，即可通过绑定的域名来进行访问。

### 配置 https 访问
1、导入证书  
![](../../_images/IIS_WEB2.png)  
![](../../_images/IIS_WEB3.png)  
2、添加 https 类型网站绑定
![](../../_images/IIS_WEB4.png)

### FAQ
 1、IIS 如何配置跨域？

>添加 HTTP 响应标头，名称和值分别为：  
Access-Control-Allow-Origin 值:*   
Access-Control-Allow-Methods 值:GET, POST, PUT, DELETE, OPTIONS   
Access-Control-Allow-Headers 值:Content-Type

2、IIS 如何配置文件下载？
>添加对应文件的MIME类型，例如：  
.apk      值： application/vnd.android.package-archive  
.ipa       值： application/iphone-package-archive  
.mp4     值：application/mp4   
... ...

3、设置 IIS 目录权限  
如访问时出现“权限不足”、“无权限”等提示，需要配置网站目录权限，添加IUSR的用户访问权限。
![](../../_images/IIS_WEB5.png)
