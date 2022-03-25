---
title: "LAN 配置（光盒CPE）"
description: 本章节介绍如何进行 LAN 配置
collapsible: false
weight: 40
draft: false
---

使用硬件光盒 CPE 时，才能进行 LAN 配置。

本章节介绍如何进行 LAN 配置。

## 前提条件

- 已获取管理控制台的账号和密码。
- 已创建连接云网。
- 已创建硬件光盒 CPE 接入点。

## 修改 LAN 配置

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **SD-WAN（新版）** > **SD-WAN（新版）**，进入**连接云网**页面。

   <img src="../../../../_images/qs_cloud_network.png" style="zoom:50%;" />

3. 在左侧导航栏中，点击**接入点**，进入**接入点**页面。

   <img src="../../../../_images/qs_light_access.png" style="zoom:50%;" />

4. 点击已创建的接入点的名称，进入接入点详细信息页面。

5. 选择**设备管理** > **LAN 配置**，进入**LAN 配置**页面。

   <img src="../../../../_images/um_lan_config.png" style="zoom:50%;" />

6. 点击目标端口号所在行的**修改**，弹出**修改 LAN 配置**窗口。

   <img src="../../../../_images/um_lan_config_details.png" style="zoom:50%;" />

7. 修改 LAN 配置信息，如下表所示。

   | 参数   | 参数说明                                                     |
   | ------ | ------------------------------------------------------------ |
   | 端口号 | 设备的端口号。                                               |
   | 网段   | LAN 所在的网段。                                             |
   | 网关   | 设备的网关。                                                 |
   | DHCP   | DHCP 服务，若开启后，自动分配 IP 地址。<br />DHCP 起始地址：DHCP 自动分配 IP 地址的起始地址。<br />DHCP 结束地址：DHCP 自动分配 IP 地址的结束地址。 |

8. 配置完成后，点击**确定修改**。

   页面弹出**编辑成功**提示信息，则说明修改网关配置信息成功。
   
9. 点击**应用修改**，使修改生效。

## 添加 vlan 配置

1. 选择**设备管理** > **LAN 配置**，进入 **LAN 配置**页面。

   <img src="../../../../_images/um_lan_config.png" style="zoom:50%;" />

2. 点击**添加 vlan 配置**，弹出**添加 vlan 配置**窗口。

   <img src="../../../../_images/um_lan_config_add.png" style="zoom:40%;" />

3. 参数配置，如下表所示。

   | 参数      | 参数说明                                                     |
   | --------- | ------------------------------------------------------------ |
   | VLAN 名称 | VLAN 名称。                                                  |
   | VLAN ID   | VLAN ID。取值范围为 “1- 4094”。                              |
   | 网段      | VLAN 网段。                                                  |
   | 网关      | VLAN 网关。                                                  |
   | DHCP 服务 | DHCP 服务，若开启后，自动分配 IP 地址。<br />DHCP 起始地址：DHCP 自动分配 IP 地址的起始地址。<br />DHCP 结束地址：DHCP 自动分配 IP 地址的结束地址。 |

4. 点击添加 vlan 配置，完成 vlan 配置操作。

   在 VLAN 配置列表中，可查看已添加的 VLAN。

5. 点击**应用修改**，使修改生效。

   

