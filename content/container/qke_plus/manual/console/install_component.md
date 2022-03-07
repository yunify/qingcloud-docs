---
title: "安装 KubeSphere 内置组件"
description: 介绍如何安装 KubeSphere 组件。
draft: false
weight: 20
keyword: 青云, QingCloud, 云计算, 容器, QKE, KubeSphere 组件
---

本文介绍如何在集群创建后安装 KubeSphere 内置组件。

## 背景信息

KubeSphere 将一些核心功能组件进行解耦。这些组件设计成了可插拔式，您可以在安装 KubeSpahere 时选择需要安装的 KubeSphere 组件，也可以在 KubeSphere 安装后根据需要随时进行组件安装。

各组件的功能详细说明可参考 [KubeSphere 官方文档](https://kubesphere.com.cn/docs/pluggable-components/)。

## 注意事项

- 安装 KubeSphere 内置组件将产生额外资源使用费用。安装 KubeSphere 组件需要一定的存储资源，故安装时会自动挂载一定数量的云硬盘，并对这些云硬盘进行收费。
- 请确保有足够的磁盘配额，否则可能因为缺乏资源导致安装失败。
- 目前在 QKE 控制台仅支持安装组件，不支持卸载。若需要卸载，请前往 KubeSphere 控制台进行操作。

## 操作步骤

1. 登录 QingCloud 管理控制台。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **容器服务** > **容器引擎 QKE**，进入 QKE 集群列表页面。

3. 在集群列表，点击目标集群名称，进入**集群概览**页面。

4. 在左侧导航栏，点击**可视化控制台**，进入**可视化控制台**页面。

   在**内置组件**区域，列出了支持安装的组件。

   ![](../../../_images/ks_components_install.png)

5. 点击**安装组件**，系统便会自动安装组件。

   安装过程中，组件显示`安装中`，待组件安装成功后，组件显示`已安装`。
   ![](../../../_images/ks_components_install_done.png)

   
