---
title: "更改云服务器配置"
date: 2020-02-12T21:08:00+09:00
description: Test description
weight: 20
draft: false
enableToc: false
---

## 操作说明

客户购买了云服务器，在体验的过程中，觉得云服务器配置无法满足业务需求，需要做扩容或者变更，会涉及如下操作；做配置调整之前需要将云服务器关机。

## 操作步骤

### 针对按需计费模式的云服务器操作方法

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **计算** > **云服务器**，进入域名列表页。

2. 右键云服务器的ID，选择 **更多操作** > **更改配置**，在左侧的**计算基础服务**导航栏

   <img src="../../../_images/homer/vm_pic_01.png" width="80%" height="60%">

   <img src="../../../_images/homer/vm_pic_02.png" width="80%" height="60%">

   <img src="../../../_images/homer/vm_pic_03.png" width="80%" height="60%">

3. 操作完成之后开机即可。

   <img src="../../../_images/homer/vm_pic_04.png" width="80%" height="60%">

   备注：系统盘扩容之后不支持缩容，请谨慎操作。

### 针对合约计费的云服务器操作方法

1. 合约云服务器更改配置需要先在合约界面解绑资源后再进行更改

   <img src="../../../_images/homer/vm_pic_05.png" width="80%" height="60%">

   <img src="../../../_images/homer/vm_pic_06.png" width="80%" height="60%">

2. 解绑后再对云服务器的配置进行更改，可以参考以上按需计费的云服务器操作模式

3. 云服务器配置更改完成后需要对合约配置进行更改，如下图

   <img src="../../../_images/homer/vm_pic_07.png" width="80%" height="60%">

   <img src="../../../_images/homer/vm_pic_08.png" width="80%" height="60%">

   <img src="../../../_images/homer/vm_pic_09.png" width="80%" height="60%">

   <img src="../../../_images/homer/vm_pic_10.png" width="80%" height="60%">

   <img src="../../../_images/homer/vm_pic_11.png" width="80%" height="60%">

   <img src="../../../_images/homer/vm_pic_12.png" width="80%" height="60%">

4. 当云服务器配置与合约配置一致后，再进行绑定

   <img src="../../../_images/homer/vm_pic_13.png" width="80%" height="60%">