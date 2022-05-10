---
title: "登录设备控制台"
draft: false
collapsible: false
weight: 10
---

设备控制台用于管理设备相关信息，包含设备信息、链路状态、设备状态、端口信息、网络诊断等。

本章节介绍如何登录设备控制台。

## 前提条件

- 已获取设备控制台的账号和密码。
  - 默认账号：admin
  - 默认密码：sdwan

- 内网固定端口：9099

## 光盒 CPE 设备

1. 电脑接入光盒 CPE LAN 口，获取电脑网关 IP 地址。

2. 在浏览器中输入如下地址信息，按 **Enter**，进入设备控制台登录页面。

   ```
   http://电脑网关 IP :9099
   ```

   <img src="../../../_images/um_equip_login.png" style="zoom:40%;" />

3. 输入设备控制台账号和密码，点击**登录**，进入**设备管理**页面。

   <img src="../../../_images/um_equip_mgmt_details.png" style="zoom:50%;" />

4. 您可以查看设备 ID、类型、序列号、版本、管控状态、隧道状态、位置以及端口信息。

## 软件 VCPE 设备

- 部署 VCPE 的宿主机可访问公网。
- 宿主机防火墙已放通 9099 端口。

1. 在浏览器中输入如下地址信息，按 **Enter**，进入设备控制台登录页面。

   ```
   http://公网 IP:9099
   ```

   <img src="../../../_images/um_equip_login.png" style="zoom:40%;" />

2. 输入设备控制台账号和密码，点击**登录**，进入**设备管理**页面。

   <img src="../../../_images/um_equip_mgmt_details.png" style="zoom:50%;" />

3. 您可以查看设备 ID、类型、序列号、版本、管控状态、隧道状态、位置以及端口信息。

   

   

