---
title: "查看 VCPE 设备信息"
draft: false
collapsible: false
weight: 50
---

创建 VCPE 接入点并部署完成软件 VCPE 后，即可激活软件 VCPE 设备。软件 VCPE 激活后，接入点下的设备信息页面会识别并展示已部署的 VCPE 设备信息。

本章节介绍如何查看已部署的软件 VCPE 设备。

## 前提条件

- 已获取管理控制台的账号和密码。
- 已获取设备管理控制台的账号和密码。
- 已创建连接云网。
- 已创建 VCPE 接入点。
- 已部署软件 VCPE。

## 查看 VCPE 设备在线

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **SD-WAN（新版）** > **SD-WAN（新版）**，进入**连接云网**页面。

   <img src="../../../_images/qs_cloud_network.png" style="zoom:50%;" />

3. 在左侧导航栏中，点击**接入点**，进入**接入点**页面。

   <img src="/sd-wan/sdwan_new/_images/qs_equip_active.png" style="zoom:50%;" />

4. 可查看接入点状态为**已激活**、设备状态为**在线**以及连接状态。


## 查看 VCPE 设备信息

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **SD-WAN（新版）** > **SD-WAN（新版）**，进入**连接云网**页面。

   <img src="../../../_images/qs_cloud_network.png" style="zoom:50%;" />

3. 在左侧导航栏中，点击**接入点**，进入**接入点**页面。

   <img src="../../../_images/qs_light_access.png" style="zoom:50%;" />

4. 点击已创建的 VCPE 接入点的名称，进入接入点详细信息页面。

5. 查看**设备管理** > **设备信息**页面，当前接入点下已部署的软件 VCPE。

   ![](../../../_images/um_vcpe_license.png)

## 查看 VCPE 设备控制台

- 部署 VCPE 的宿主机可访问公网。
- 宿主机防火墙安全组规则放通 9099 端口。

1. 放通防火墙 9099 端口。

   <img src="/sd-wan/sdwan_new/_images/um_rule_9099.png" style="zoom:50%;" />

2. 在浏览器中输入如下地址信息，按 **Enter**，进入设备控制台登录页面。

   ```
   http://公网 IP:9099
   ```

3. 您可以查看设备 ID、类型、序列号、版本、管控状态、隧道状态、位置以及端口信息。

   <img src="/sd-wan/sdwan_new/_images/um_equip_mgmt_details.png" style="zoom:50%;" />

