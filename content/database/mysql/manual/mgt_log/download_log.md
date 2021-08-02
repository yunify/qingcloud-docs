---
title: "预览和下载日志"
description: 本小节主要介绍如何下载日志。 
keywords: mysql plus 下载日志
weight: 20
collapsible: false
draft: false
---


开启日志服务端后，可通过 HTTP 服务预览和下载 MySQL Plus 数据库节点日志，HTTP 服务端口为 `18801` 。

- 通过 HTTP 服务端可预览和下载单个日志文件。
- 通过 wget 文件下载工具，可下载日志目录和单个文件。

> **注意**
> 
> 下载或预览的服务器需与数据库在同一 VPC 下，或者通过 **VPN 服务**来访问。不建议通过端口转发的方式将服务暴露到外网，以免造成数据库关键信息暴露等风险。

本小节主要介绍如何预览和下载日志。

## 前提条件

- 已获取 HTTP 服务日志端节点地址，以及登录账号和密码。
- 已在本地安装 wget 文件下载工具。
- MySQL Plus 集群状态为**活跃**。

## 操作步骤

1. 获取日志服务地址。
   
   1. 登录 QingCloud 管理控制台。
   2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 MySQL Plus**，进入集群管理页面。
   3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
   4. 点击**服务地址**页签，进入日志服务地址页面，即可查看日志服务地址。
   
   <img src="../../../_images/log_server_addr.png" alt="日志服务地址" style="zoom:50%;" />

2. [预览日志](#预览日志)

3. 下载日志。

   打开终端，执行下载命令，参考 [wget 下载日志](#wget-下载日志)。

### 预览日志

以 `http://192.168.0.18:18801`日志服务地址作为示例。

1. 打开浏览器，输入日志节点服务地址。
2. 输入 HTTP 用户名和密码，登录 HTTP 服务端。

   ![登录日志服务端](../../../_images/preview_logs_log-in.png)  

3. 查看日志目录，并进入目录查看日志文件。
4. 点击日志文件，可下载目录下单个日志文件。

   ![下载日志文件](../../../_images/caddy_log_download.png)

### wget 下载日志

以 `http://192.168.0.18:18801`日志服务地址作为示例。

- 下载目录下所有日志。

   ```
   wget -r http://192.168.0.18:18801 --http-user=<HTTP 用户名> --http-password=<HTTP 用户密码> --reject="index.html*"
   ```

- 下载指定日志目录，示例为下载 `/mysql-bin` 目录下所有 binlog 文件。

   ```
    wget -r http://192.168.0.18:18801/mysql-bin/ --http-user=<HTTP 用户名> --http-password=<HTTP 用户密码> --reject="index.html*" -np
   ```

- 下载指定目录下文件，示例为下载 `/mysql-bin` 目录下 mysql-bin.000003文件。

   ```
   wget -r http://192.168.0.18:18801/mysql-bin/mysql-bin.000003 --http-user=<HTTP 用户名> --http-password=<HTTP 用户密码> --reject="index.html*"
   ```
