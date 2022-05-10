---
title: "在 QKE 中使用 KubeSphere"
description: 介绍如何在 QKE 中安装及使用 KubeSphere。
draft: false
weight: 10
keyword: QKE, KubeSphere
---

本文介绍如何在 QKE 中安装及使用 KubeSphere。

## 背景信息

[KubeSphere](https://kubesphere.io/) 是在 [Kubernetes](https://kubernetes.io/) 之上构建的面向云原生应用的**分布式操作系统**，完全开源，支持多云与多集群管理，提供全栈的 IT 自动化运维能力，简化企业的 DevOps 工作流。

QKE 可以帮助您在创建 QKE 集群时，轻松快速的安装好 KubeSphere，无须自己手动安装。QKE 搭配 KubeSphere，可以更方便地管理集群及容器应用，以及实现多集群管理、CI/CD、微服务治理等更多功能。

## 操作步骤

### 步骤一：安装 KubeSphere

在创建集群时，在**对接服务**配置项，选择安装可视化管理工具 `KubeSphere`，并可同时设置 KubeSpere 控制台 EIP。集群创建的详细操作说明，请参见[创建 QKE 集群](/container/qke_plus/quickstart/create_hosting_cluster/)。

![](../../_images/bp_install_ks.png)

### 步骤二：配置 KubeSphere 控制台 EIP

> **说明**
>
> 若您在创建集群时已设置 KubeSphere 控制台 EIP，可跳过本步骤。

1. 点击集群名称，进入进入**集群概览**页面。

2. 可通过如下两种方式设置 KubeSphere 控制台 EIP。

   - **方式一**：在**集群概览**页面的**可视化管理工具**区域，点击**选择 EIP**。

     ![](../../_images/select_ks_eip_1.png)	

   - **方式二**：在左侧导航栏，选择**可视化控制台**，在**可视化控制台**页面，点击**选择 EIP**。

     ![](../../_images/select_ks_eip_2.png)

3. 在弹出的 **选择 EIP** 窗口中，选择需要绑定的 EIP，点击**确定**。

### 步骤三：登录 KubeSphere

1. 在**可视化控制台**页面，点击 **KubeSphere** 字样下方的公网 IP 地址或点击 **前往控制台**，进入到 KubeSphere 登录页面。

   ![](../../_images/access_ks.png)·	

2. 输入用户名及密码，点击**登录**。

   > **说明**
   >
   > 默认管理员账户及密码：admin/P@88w0rd，登录后需要立即修改密码。

   ![](../../_images/kubesphere_login.png)·	