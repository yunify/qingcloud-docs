---
title: "连接 TiDB 实例"
description: 本小节主要介绍如何连接TiDB数据库。 
keywords: TiDB 实例，
weight: 5
collapsible: false
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

### 连接实例

#### Linux 系统

1. 登录已创建好的云服务器。
2. 在云服务器上安装 SQL 客户端

#### Windows 系统

1. 在已创建的云服务器中安装 SQL 客户端。

   SQL 客户端，如 Windows 系统的 Navicat， Linux 系统的 MySQL client。

2. 使用 SQL 客户端连接 TiDB。

   >**说明**
   >
   >默认用户 **root**，默认密码为空。

   - Linux 系统

     执行以下命令

     ```
     mysql -u root -h <ip> -P <port> -u <username> -p 
     ```

   - Windows 系统

     以 Navicat 为例，打开安装好的 Navicat 客户端

     打开 





