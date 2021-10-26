---
title: "下载日志"
description: 本小节主要介绍如何下载日志。 
keywords: RadonDB 下载日志
weight: 20
collapsible: false
draft: false
---


日志同步后，可通过 wget 文件下载工具，下载日志目录和单个文件。

> **注意**
> 
> 若下载日志的服务器需与数据库不在同一 VPC 私有网络，建议使用[边界路由器](../../../../../network/border_router/)或 [VPN](../../../../../network/vpc/manual/vpn/) 等方式打通网络。不建议通过**端口转发**方式打通网络，避免因数据库服务信息暴露，造成数据泄漏风险。

本小节主要介绍如何预览和下载日志。

## 约束限制

- 审计日志仅支持记录最近一个小时的 SQL 记录。

## 前提条件

- 已在安装 wget 文件下载工具。
- RadonDB 集群状态为**活跃**。

## 操作步骤

1. 获取 FTP 账号和密码。
   
   1. 登录 QingCloud 管理控制台。
   2. 选择**产品与服务** > **数据库与缓存** > **分布式数据库 RadonDB**，进入集群管理页面。
   3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
   4. 选择**配置参数**页签，获取 `Ftp_user` 和 `Ftp_password` 参数信息。
   
   <img src="../../../_images/ftp_user_password.png" alt="FTP 账号和密码" style="zoom:50%;" />

2. 获取 SQL 节点 IP 地址。
   
   选择**节点**页签，获取 SQL 节点 IP 信息。
   
   <img src="../../../_images/sql_ip.png" alt="SQL 节点 IP" style="zoom:50%;" />


3. 下载日志。

   打开终端，执行命令下载日志。
    
   ```bash
    wget ftp:// < SQL_node_IP >/audit --ftp-user=< Ftp_user > --ftp-password=< Ftp_password >
    ```

**示例**

```bash
wget ftp:// 192.168.0.53/audit --ftp-user=ftpuser --ftp-password=ftppassword
```
