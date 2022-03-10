---
title: "（可选）添加备设备/更换设备"
linkTitle: "添加备设备/更换设备"
description:
draft: false
weight: 50
---

申请光盒 CPE 设备并创建光盒 CPE 接入点后，将光盒设备**上电**并**接 WAN 口**，即可激活光盒 CPE。

若您需要启用**高可用**添加备设备，或者**更换设备**，则需要通过绑定序列号的方式激活设备。

本章节介绍如何通过绑定序列号的方式激活光盒 CPE 备用设备。

## 前提条件

- 已获取管理控制台的账号和密码。
- 已获取设备管理控制台的账号和密码。
- 已创建连接云网。
- 已创建光盒 CPE 接入点。
- 已从光盒 CPE 设备上获取序列号。

## 添加备设备

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **SD-WAN（新版）** > **SD-WAN（新版）**，进入**连接云网**页面。

   <img src="../../../_images/qs_cloud_network.png" style="zoom:50%;" />

3. 在左侧导航栏中，点击**接入点**，进入**接入点**页面。

   <img src="../../../_images/qs_light_access.png" style="zoom:50%;" />

4. 点击已创建的 CPE 接入点的名称，进入接入点详细信息页面。

   ![](../../../_images/um_vcpe_license.png)

6. 选择**设备管理** > **设备信息**，进入**设备信息**页面。

   ![](../../../_images/um_equip_info.png)

7. 点击**添加备设备**，弹出**添加备设备**窗口。

   <img src="../../../_images/um_equip_bak.png" style="zoom:50%;" />
   
7. 在文本框中输入备设备的序列号。

8. 点击添加，完成备设备的添加操作。

## 更换设备

1. 进入设备信息页面。

   ![](../../../_images/um_equip_info.png)

2. 选择**更多操作** > **更换设备**，弹出**更换设备**窗口。

   ![](../../../_images/um_equip_change.png)

3. 输入更换序列号。

   <img src="../../../_images/um_equip_change_win.png" style="zoom:50%;" />

4. 点击**更换**，完成更换设备操作。

