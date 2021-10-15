---
title: "场景二：非一体机安装系统"
description: 本小节主要介绍青立方® 超融合易捷版 非一体机安装系统。 
keywords: 青立方® 超融合易捷版，非一体机安装系统
weight: 20
collapsible: false
draft: false
---




CloudeCube Express 非一体机安装系统场景主要针对更换服务器或者更换硬盘后，需要重新安装 Web Installer 之情况。

## 前提条件

- 已准备操作系统镜像 ISO 文件。
- 已使用易捷版需要的系统镜像压缩包。
- 已获取 8 GB 以上容量的 U 盘。
- 已安装浏览器 (如 Chrome)、UltraISO、Xshell 等工具软件。

## 步骤 1：刻录 ISO 镜像

1. 在 PC 设备上插入 U 盘，打开 UltraISO 软碟通，并点击左上角的**文件** > **打开**，打开目标的安装 ISO 文件。

    ![打开 ISO 文件](../../../_images/open_isofiles.png)

2. 打开完后回到 UltraISO 窗口，点击菜单栏中的**启动** > **写入硬盘镜像**，写入的目标选择为 U 盘或光盘，务必勾选**刻录校验**，写入方式通常 USB-HDD+。

    ![启动写入硬盘镜像](../../../_images/enable_image.png)

    ![刻录成功](../../../_images/write_recode.png)

## 步骤 2：安装系统

将制作好的安装 U 盘插入超融合物理机，需要依次对 所有 物理机插入 U 盘并安装系统。

> **注意**
> 
> BIOS 设置 USB 启动 为第一优先级，重启设备会自动开始安装系统，请耐心等待几分钟。

## 步骤 3：配置服务器基本信息

配置方式与[场景一：一体机初始化](../all_in_one)一致，可参考一体机配置的步骤。

## 步骤 4：访问 Web Installer

1. 在浏览器中输入启动节点的 IP http://IP:9998/ ，访问登录界面。

2. 输入用户名和密码。

   默认登录用户名密码为 admin/zhu88jie。

以 http://192.168.0.2:9998/ 为示例说明。

![登录界面](../../../_images/login.png)
