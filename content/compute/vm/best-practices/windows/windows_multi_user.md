---
title: "Windows 云服务器多用户配置管理"
description: Test description
weight: 60
draft: false
enableToc: false
---

## 项目概览

在本项目中，您将了解如何配置 Windows 云服务器多用户、多终端同时办公。

## 环境准备

本实验以 Windows Server 2012版本为例，其他版本可以此为参考，开始本实验前，请您先配置好[Windows云服务器配置多用户同时登录](/compute/vm/best-practices/windows/win_loggin/)，在此基础上进行后文操作。

## 配置步骤

###  多系统用户多终端配置

  1、添加用户

  登录 Administrator 用户在 Windows PowerShell 执行

  ```powershell
  net user demo /add								#创建用户
  net user demo pa$$w0rd							#设置密码
  net localgroup Administrators demo /add			#给用户添加管理员权限(按需操作)
  ```

  2、允许用户远程登录

  文件资源管理器=>这台电脑=>属性=>远程设置=>选择用户

  ![添加远程登录用户](../../_images/windows_multi_user.assets/添加远程登录用户-1622711225217.gif)

### 单系统用户多终端配置

> 这里的系统用户指的是默认的Administrator管理员账户，配置好多用户同时登录后，可以直接多终端登录，但同时使用某些软件时会产生错误

* 故障原因：

  用户数据存储在多终端同时使用时出现问题

* 解决方案：

  方法一：

  1、为谷歌浏览器创建一个新的快捷方式

  ![image-20210603172151538](../../_images/windows_multi_user.assets/image-20210603172151538.png)
  
  2、鼠标右键选择新建的快捷方式选择属性
  
  ![image-20210603172240410](../../_images/windows_multi_user.assets/image-20210603172240410.png)
  
  3、在目标栏的 firefox.exe 后面添加参数
  
  > 参数：`--user-data-dir="C:\UserData"`
  
  ![image-20210603180039412](../../_images/windows_multi_user.assets/image-20210603180039412.png)
  
  