---
title: "安装 KubeSphere"
description: 本小节介绍在 QKE 集群上安装 KubeSphere的方法。
draft: false
weight: 5
keyword: 容器, QKE, KubeSphere
---

QKE 支持在创建集群时或创建集群后一键安装 KubeSphere。

## 创建集群时安装

创建集群时，在**对接服务**区域，选择安装可视化控制台 KubeSphere（默认安装）。具体操作请参见[创建集群](/container/qke_plus/quickstart/create_hosting_cluster/)。

![](../../../_images/install_ks_on_creation.png)

## 创建集群后安装

1. 登录管理控制台。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **容器服务** > **容器引擎 QKE**，进入 QKE 集群列表页面。

3. 在集群列表，点击目标集群名称，进入**集群概览**页面。

4. 在左侧导航栏，点击**可视化控制台**，进入**可视化控制台**页面。

5. 点击**安装 KubeSphere 可视化控制台**，弹出提示框。

   ![](../../../_images/install_ks_after_creation.png)

6. 点击**确定**，开始进行安装。耐心等待安装完成即可。

   安装过程中，集群状态为`更新中`，待状态变为`活跃`，则安装完成。

   > **说明**
   >
   > 默认最小化安装，若需要安装更多 KubeSphere 组件，请在 KubeSphere 控制台安装完成后，按需进行安装。具体操作请参见[安装 KubeSphere 内置组件](../install_component/)。

