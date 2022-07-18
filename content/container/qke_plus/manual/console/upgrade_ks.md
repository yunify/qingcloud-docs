---
title: "升级 KubeSphere"
description: 本小节介绍如何升级KubeSphere版本。
draft: false
weight: 25
keyword: 容器, QKE, KubeSphere
---

当系统支持更高版本的 KubeSphere 时，您可以将低版本 KubeSphere 升级至最新版本，以体验更丰富的功能。

## 前提条件

当 QKE 支持更高版本的 KubeSphere 时，才可进行升级操作。

## 升级说明

- 仅支持从低版本升级到高版本，升级后不可回退。
- 升级期间不支持组件的安装操作，待升级完成后可按需进行安装。
- 升级时长约 15 分钟。

## 操作步骤

1. 登录管理控制台。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **容器服务** > **容器引擎 QKE**，进入 QKE 集群列表页面。

3. 在集群列表，点击目标集群名称，进入**集群概览**页面。

4. 在左侧导航栏，点击**可视化控制台**，进入**可视化控制台**页面。

5. 点击<img src="/container/qke_plus/_images/ks_version_info.png" style="zoom:50%;" />图标，可查看 KubeSphere 当前版本。

   ![](/container/qke_plus/_images/upgrade_ks.png)

6. 点击**升级** > **升级 KubeSphere 新版本**，弹出升级对话框。

   <img src="/container/qke_plus/_images/upgrade_ks_2.png" style="zoom:50%;" />

7. 选择升级版本，点击**升级**。等待升级成功即可。

   升级过程中，集群状态变为`更新中`，当集群状态显示`活跃`，服务状态显示`健康`，表示已升级成功。
