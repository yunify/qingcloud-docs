---
title: "连接 TiDB 实例"
description: 本小节主要介绍如何连接TiDB数据库。 
keyword:   TiDB实例, 连接TiDB数据库
weight: 5
draft: false
---

创建 TiDB 实例后，您可以通过 SQL 客户端来连接 TiDB 实例。

## 前提条件

- 已成功创建 TiDB 实例，且状态为**运行中**。

- 已创建云服务器，云服务器必须与 TiDB 实例在同一个 VPC 网络。

  > **说明**
  >
  > 若您需要使用本地电脑访问数据库，可以通过 **VPN 隧道服务**功能打通本地与 VPC 的网络通道，具体操作请参考[VPN 操作指导](/network/vpc/manual/vpn/)。

- 已获取 TiDB 实例的连接地址。

## 操作步骤

### 获取连接地址

1. 在 TiDB 实例列表，点击需要连接的实例 ID，进入详情页。

2. 在页面上方的实例基本信息区域，可查看 **IP与端口**，该地址即为实例连接地址。

   <img src="../../_images/tidb_ip_port.png" style="zoom:100%;" />

### 连接实例

1. 在已创建的云服务器中安装 SQL 客户端。

   SQL 客户端，如 Windows 系统的 Navicat， Linux 系统的 MySQL client。

2. 使用 SQL 客户端连接 TiDB。

   >**说明**
   >
   >默认用户 **root**，默认密码为空。

   - Linux 系统

     执行以下命令

     ```
     mysql -u root -h <tidb_host> -P <port> -u <username> -p <password>
     ```

     ▪︎ `<tidb_host>`：表示 TiDB 实例的 IP 地址，请根据实际地址替换。

     ▪︎ `<port>`：表示 TiDB 实例的端口号，默认为 4000，请根据实际端口替换。

     ▪︎ `<username>`：表示登录用户名。
   
     ▪︎ `<password>`：表示用户名密码。若无密码，则无需输入。
   
   - Windows 系统
   
     以 Navicat 为例，打开安装好的 Navicat 客户端。输入主机 IP 、端口、用户名记密码，即可连接。
   
     <img src="../../_images/navicat_connect.png" style="zoom:50%;" />





