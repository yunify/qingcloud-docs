---
title: "加入 VPC 网络"
linkTitle: "加入 VPC 网络"
date: 2021-05-20T10:08:56+09:00
description:
draft: false
weight: 8
---

## 操作场景

创建私有网络后，需要将私有网络加入到VPC网络，并设置其网络参数，才可进行网络通信。

## 前提条件

已创建私有网络且未连接到任何一个VPC网络。

## 操作步骤

1. 登录[管理控制台](https://console.qingcloud.com/pek3)。

2. 在控制台导航栏中，选择**产品与服务** > **网络服务** > **私有网络**，进入**私有网络**页面。

3. 点击待加入的私有网络，选择**加入VPC网络**。

4. 在弹出的页面中，选择需要加入的 VPC 网络，并配置私有网络的 IPv4 地址、网络 ACL 及其他高级参数。

   <img src="/network/vpc_2.0/_images/502008_addto_vpc.png" alt="502008_addto_vpc" style="zoom:70%;" />

5. 点击**提交**。

