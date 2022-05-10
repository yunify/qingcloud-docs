---
title: "设置 KubeSphere EIP"
description: 介绍 QKE 支持的可视化控制台。
draft: false
weight: 1
keyword: 青云, QingCloud, 云计算, 容器, QKE, 控制台
---

## 操作场景

当您需要通过公网访问 KubeSphere 控制台时，则需要为控制台设置一个公网 IP。

## 前提条件

- 已安装 KubeSphere 控制台。
- 已创建或已有可用的公网 IP。公网 IP 须为`外部绑定`的公网 IP。

## 操作步骤

1. 登录 QingCloud 管理控制台。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **容器服务** > **容器引擎 QKE**，进入 QKE 集群列表页面。

3. 在集群列表，点击目标集群名称，进入**集群概览**页面。

4. 可通过如下两种方式设置 KubeSphere 控制台 EIP。

   - **方式一**：在**集群概览**页面的**可视化管理工具**区域，点击**选择 EIP**。

     ![](../../../_images/select_ks_eip_1.png)	

   - **方式二**：在左侧导航栏，选择**可视化控制台**，在**可视化控制台**页面，点击**选择 EIP**。

     ![](../../../_images/select_ks_eip_2.png)

5. 在弹出的 **选择 EIP** 窗口中，选择需要绑定的 EIP，点击**确定**。

## 后续操作

- 更换 EIP

  为 KubeSphere 控制台绑定 EIP 后，如果您需要更换 EIP，可在**可视化控制台**页面点击<img src="../../../_images/edit_icon.png" />图标，修改 EIP。

  ![](../../../_images/bind_eip_done.png)

- [登录 KubeSphere 控制台](../access_ks/)

