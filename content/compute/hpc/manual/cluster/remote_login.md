---
title: "远程连接配置"
linkTitle: "远程连接配置"
description: hpc 远程连接配置
keyword: HPC，ssh登录
draft: false
weight: 20
---

本章节介绍如何配置 HPC 或 EHPC 集群的远程登录。

## 前提条件

已创建共享集群（HPC 集群）或者专属集群（EHPC 集群）。

## 操作步骤

### webSSH 远程连接

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **计算** > **高性能计算 HPC**，进入**高性能计算 HPC** 的**集群管理**页面，点击**远程登录**。

   ![remote_login_1](../../../_images/remote_login_1.png)

3. 在弹出的**远程连接**窗口中，选择 **WebSSH 远程连接**，并输入用户名和密码，点击**确定**即可。
   > **说明**：
   >
   > 用户名和密码为集群内已存在的户名和密码，可通过进入集群详情页面内的[用户列表](/content/compute/hpc/manual/cluster/view_cluster.md#用户)进行查看。

   ![remote_login_2](../../../_images/remote_login_2.png)

### VNC连接

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **计算** > **高性能计算 HPC**，进入**高性能计算 HPC** 的**集群管理**页面，点击**远程登录**。

   ![remote_login_1](../../../_images/remote_login_1.png)

3. 在弹出的**远程连接**窗口中，选择 **VNC 连接**，并输入用户名和密码，点击**确定**即可。
   ![remote_login_3](../../../_images/remote_login_3.png)

4. 在弹出的 Web 终端页面中输入相应的账户和密码即可登录集群。
   > **说明**：
   >
   > 用户名和密码为集群内已存在的户名和密码，可通过进入集群详情页面内的用户列表进行查看。




