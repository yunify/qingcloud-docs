---
title: "查看光盒 CPE 设备信息"
draft: false
collapsible: false
weight: 50
---

创建光盒 CPE 接入点，并将光盒 CPE 上电、接 WAN 口后，即可激活光盒 CPE 设备。您可以在管理控制台查看光盒 CPE 信息。

本章节介绍如何查看光盒 CPE 设备。

## 前提条件

- 已获取管理控制台的账号和密码。
- 已获取设备管理控制台的账号和密码。
- 已创建连接云网。
- 已创建光盒 CPE 接入点。
- 光盒 CPE 已上电且接 WAN 口。

## 查看光盒 CPE 设备在线

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **SD-WAN（新版）** > **SD-WAN（新版）**，进入**连接云网**页面。

   <img src="/sd-wan/sdwan_new/_images/qs_cloud_network.png" style="zoom:50%;" />

3. 在左侧导航栏中，点击**接入点**，进入**接入点**页面。

   <img src="/sd-wan/sdwan_new/_images/qs_equip_active.png" style="zoom:50%;" />

4. 可查看接入点状态为**已激活**、设备状态为**在线**以及连接状态。

## 查看光盒 CPE 设备信息

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **SD-WAN（新版）** > **SD-WAN（新版）**，进入**连接云网**页面。

   <img src="../../../_images/qs_cloud_network.png" style="zoom:50%;" />

3. 在左侧导航栏中，点击**接入点**，进入**接入点**页面。

   <img src="../../../_images/qs_light_point.png" style="zoom:50%;" />

4. 点击已创建的光盒 CPE 接入点的名称，进入接入点详细信息页面。

5. 在**设备管理** > **设备信息**页面，您可以查看当前接入点下已接入的光盒 CPE。

   ![](../../../_images/um_equip_info.png)

## 查看光盒 CPE 设备控制台

1. 在浏览器中输入如下地址信息，按 **Enter**，进入设备控制台登录页面。

   ```
   http://电脑网关 IP :9099
   ```

   <img src="/sd-wan/sdwan_new/_images/um_equip_login.png" style="zoom:40%;" />

2. 查看设备 ID、类型、序列号、版本、管控状态、隧道状态、位置以及端口信息。

   <img src="/sd-wan/sdwan_new/_images/um_equip_mgmt_details.png" style="zoom:50%;" />

