---
title: "在私有网络中创建资源"
linkTitle: "在私有网络中创建资源"
date: 2021-05-20T10:08:56+09:00
description:
draft: false
weight: 20
---

## 操作场景

云资源不可以直接部署在 VPC 网络下，必须属于 VPC 网络内的一个私有网络（子网）。您可以在私有网络中创建云资源。

## 前提条件

已创建私有网络并连接到 VPC 网络。

## 操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台导航栏中，选择**产品与服务** > **网络服务** > **VPC 网络**，进入**VPC 网络**页面。

3. 点击私有网络所属的VPC网络，进入到该 VPC 的私有网络管理页面。

4. 在**资源列表**区域，点击**创建资源**，然后选择要创建的资源。

   支持在私有网络中创建的云资源包括云服务器、共享存储 vSAN 及 NAS。

   <img src="/network/vpc/_images/502020_add_resource.png" alt="add_resource" style="zoom:50%;" />

5. 在资源创建页面，按照页面提示配置资源参数，点击**提交**完成创建。

