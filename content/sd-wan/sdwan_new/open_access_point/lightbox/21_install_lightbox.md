---
title: "安装光盒 CPE"
linkTitle: "安装光盒 CPE"
Description: 本章节介绍如何安装光盒 CPE。
draft: false
weight: 21
---

本章节介绍如何安装光盒 CPE。

## 前提条件

已申请光盒 CPE。

## 约束限制

若使用 4G/5G SIM 卡，则需要将光盒 CPE 断电重启，系统才能识别。

## 操作步骤

1. 将光盒 CPE 上电。

2. 安装天线（以安装 WIFI 天线为例说明）。

   > **注意**
   >
   > - 若使用 4G/5G SIM 卡，则需要安装 4G/5G 天线。4G/5G 天线及 SIM 卡安装位置，请参见[设备说明](/sd-wan/sdwan_new/open_access_point/lightbox/10_lightbox_overview/#设备说明)。
   > - 安装 4G/5G SIM 卡后，需要将光盒 CPE 断电重启，系统才能识别。
   
   <img src="/sd-wan/sdwan_new/_images/cpe_wifi.png" style="zoom:50%;" />
   
2. 将可以上网的网线或者运营商的线路插入到光盒 CPE 的 WAN 口。

   > **说明**
   >
   > 若是运营商的线路接入，需要登录设备控制台，完成静态地址或 PPPOE 拨号配置。
   >
   > 登录设备控制台的方式，请参见[登录设备控制台](../../equipment/10_login_equipment)。

   <img src="/sd-wan/sdwan_new/_images/cpe01.png" style="zoom:40%;" />

3. 按照网络规划将光盒 CPE 通过 LAN 口接入到 PC 机或者网络设备上。

   <img src="/sd-wan/sdwan_new/_images/cpe02.png" style="zoom:40%;" />

4. 验证网络连通性。

   通过光盒 CPE 访问目标网络的 PC 或者网络设备。



